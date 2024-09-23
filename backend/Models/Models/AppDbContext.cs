using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using backend;
namespace backend;

public class AppDbContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
        
    }
}
