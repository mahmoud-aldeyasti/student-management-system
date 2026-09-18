using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace student.api.Model
{
    [Table("studentMaster")]
    public class Student
    {
        public int studentId { get; set; }
        [Required]
        public string studName { get; set; } = string.Empty;
        [Required , MaxLength(15 )]
        public string mobileNo { get; set; } = string.Empty;
        [Required]

        public string email { get; set; } = string.Empty;
        public string city { get; set; } = string.Empty;
        public string state { get; set; } = string.Empty;
        public string pincode { get; set; } = string.Empty;
        public string adressline1 { get; set; } = string.Empty;
        public string addressline2 { get; set; } = string.Empty; 

    }
}
