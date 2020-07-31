using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ex_Empleats.Models
{
    public class Empleado
    {
       public long Id { get; set; }
       public string Nombre { get; set; }
       public string Apellido { get; set; }
       public string Cargo { get; set; }
       public double Sueldo { get; set; }
    }
}
