namespace backend
{
    public class CommentSevice :ICommentsServices
    {
        private readonly AppDbContext _context;
        private readonly string _conectionString;
        public CommentSevice(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _conectionString = configuration.GetConnectionString("DefaultConnection");
        }
        public async Task<UserComment> AddCommentAsync(UserComment comment)
        {
            var user = await _context.Users.FindAsync(comment.UserId);
            if (user == null)
            {
                throw new Exception("User not found");
            }
            _context.UserComments.Add(comment);
            await _context.SaveChangesAsync();
            return comment;
        }
    }
}
