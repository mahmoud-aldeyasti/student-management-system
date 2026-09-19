using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using student.api.Model;

namespace student.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    [EnableCors("AllowVercelFrontend")]
    public class StudentMasterController : ControllerBase
    {
        private readonly studentDbContext _context; 
        public StudentMasterController(studentDbContext context)
        {
            _context = context; 
        }
    
        [HttpGet]

        public IActionResult GetStudent()
        {
            var students = _context.students.ToList();

            return Ok(students); 
        }

        [HttpPost]

        public IActionResult AddStudent(Student student)
        {
            _context.students.Add(student);
            _context.SaveChanges();
            return Ok(student);
        }


        [HttpPut]

        public IActionResult UpdateStudent(Student student) { 
            var record = _context.students.Find(student.studentId );

            if(record == null)
            {
                var notfoundresponse = new {status = "Error", message = "Student not found" };
                return NotFound();
            }
            else
            {
                record.studName = student.studName;
                record.mobileNo = student.mobileNo;
                record.email = student.email;
                record.city = student.city;
                record.state = student.state;
                record.pincode = student.pincode;
                record.adressline1 = student.adressline1;
                record.addressline2 = student.addressline2;
                _context.SaveChanges();
                return Ok(record);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteStudent(int id)
        {
            var record = _context.students.Find(id);

            if (record == null)
            {
                var notfoundresponse = new { status = "Error", message = "Student not found" };
                return NotFound(notfoundresponse);
            }
            else
            {
                _context.students.Remove(record);
                _context.SaveChanges();
                return Ok(record);
            }
        }

    }
}
