using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Ex_Empleats.Models
{
    public class PersistenciaContext : DbContext
    {
        public PersistenciaContext(DbContextOptions<PersistenciaContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<Empleado> Empleado { get; set; }
    }
}
