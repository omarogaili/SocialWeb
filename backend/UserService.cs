using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using MySql.Data.MySqlClient;
namespace backend
{
    public class UserService : IUserService
    {
        private readonly AppDbContext _context;
        private readonly PasswordHasher<User> _hashAlgorithm;
        public UserService(AppDbContext context)
        {
            _context = context;
            _hashAlgorithm = new PasswordHasher<User>();
        }
        public User GetUserById(string userEmail)
        {
            using (var connection= new MySqlConnection("Server=localhost;Database=vibeNest;User=root;Password=King@lion10!;"))
            {
                connection.Open();
                string query = "SELECT * FROM Users WHERE Email = @email";
                using (var command = new MySqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@email", userEmail);
                    using (var reader = command.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            return new User
                            {
                                Id = reader.GetInt32(0),
                                Name = reader.GetString(1),
                                Email = reader.GetString(2),
                            };
                        }
                    }
                }
            }
            return null!;
        }
        public async Task<User> AddUser(User user)
        {
            user.Password = _hashAlgorithm.HashPassword(user, user.Password);
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }
        public void UpdateUser(User user)
        {
            user.Password = _hashAlgorithm.HashPassword(user, user.Password);
            _context.Users.Update(user);
            _context.SaveChanges();
        }
        public void DeleteUser(int id)
        {
            var user = _context.Users.Find(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges();
            }
        }
        public Task<List<User>> GetAllUsers()
        {
            return _context.Users.ToListAsync();
        }
        public bool VerifyPassword(User user, string password)
        {
            return _hashAlgorithm.VerifyHashedPassword(user, user.Password, password) != PasswordVerificationResult.Failed;
        }
        public int? SignInQuery(string userEmail, string password)
        {
            using (var connection = new MySqlConnection("Server=localhost;Database=vibeNest;User=root;Password=King@lion10!;"))
            {
                string query = "SELECT Id, Password FROM Users WHERE Email = @name";
                using (var command = new MySqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@name", userEmail);
                    try
                    {
                        connection.Open();
                        using (var reader = command.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                var storedPasswordHash = reader["Password"].ToString(); 
                                var userId = (int)reader["Id"];
                                if (VerifyPassword(new User { Password = storedPasswordHash! }, password))
                                {
                                    return userId;
                                }
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.Message);
                    }
                }
            }
            Console.WriteLine("Login Failed");
            return null; 
        }
    }
}