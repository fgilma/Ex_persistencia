using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ex_Empleats.Models;

namespace Ex_Empleats.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadoesController : ControllerBase
    {
        private readonly TodoContext _context;

        public EmpleadoesController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/Empleadoes
        [HttpGet]        
        public async Task<ActionResult<IEnumerable<Empleado>>> GetTodoItems()
        {
            return await _context.TodoItems.ToListAsync();
        }

        // GET: api/Empleadoes/5
       
        [HttpGet("{id}")]       
        public async Task<ActionResult<Empleado>> GetEmpleado(long id)
        {
            var empleado = await _context.TodoItems.FindAsync(id);

            if (empleado == null)
            {
                return NotFound();
            }

            return empleado;
        }

        // PUT: api/Empleadoes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmpleado(long id, Empleado empleado)
        {
            if (id != empleado.Id)
            {
                return BadRequest();
            }

            _context.Entry(empleado).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpleadoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Empleadoes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Empleado>> PostEmpleado(Empleado empleado)
        {
            _context.TodoItems.Add(empleado);
            await _context.SaveChangesAsync();

            // return CreatedAtAction("GetEmpleado", new { id = empleado.Id }, empleado);
            return CreatedAtAction(nameof(GetEmpleado), new { id = empleado.Id}, empleado);
        }

        // DELETE: api/Empleadoes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Empleado>> DeleteEmpleado(long id)
        {
            var empleado = await _context.TodoItems.FindAsync(id);
            if (empleado == null)
            {
                return NotFound();
            }

            _context.TodoItems.Remove(empleado);
            await _context.SaveChangesAsync();

            return empleado;
        }

        private bool EmpleadoExists(long id)
        {
            return _context.TodoItems.Any(e => e.Id == id);
        }
    }
}
