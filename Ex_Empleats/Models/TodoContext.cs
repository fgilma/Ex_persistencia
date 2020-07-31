using Microsoft.EntityFrameworkCore;

namespace Ex_Empleats.Models
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
            : base(options)
        {
        }

        public DbSet<Empleado> TodoItems { get; set; }
    }
}