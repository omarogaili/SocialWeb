using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend
{
    public class UserComment
    {
        [Key]
        public int Id { get; set; }
        public string Comment { get; set; }
        public int Likes { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }
        public virtual User User { get; set; }
    }
}
