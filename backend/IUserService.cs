using System.Runtime.CompilerServices;
using backend;
using Microsoft.EntityFrameworkCore;
/// <summary>
/// in this interface class so we are creating the methods that we need to involve in user to do 
/// like getting the user by the id that will help us to do search after the user, we going to use this method to verify the sign in function  ///
/// the if the user want to update the information so we are going to use UpdateUser and so on  
/// </summary>
namespace backend
{
    public interface IUserService
    {
        public User GetUserById(int id);
        public Task<User> AddUser(User user);
        public void UpdateUser(User user);
        public void DeleteUser(int id);
    }
} 