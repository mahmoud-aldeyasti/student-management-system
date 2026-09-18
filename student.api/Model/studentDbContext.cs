using Microsoft.EntityFrameworkCore;

namespace student.api.Model
{
    public class studentDbContext : DbContext
    {
        public studentDbContext( DbContextOptions<studentDbContext> options) : base(  options )
        {

        }

        public DbSet<Student> students { get; set; }
    }
}
