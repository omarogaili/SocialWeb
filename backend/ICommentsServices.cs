namespace backend
{
    public interface ICommentsServices
    {
        public Task<UserComment> AddCommentAsync(UserComment comment);
        public Task<List<UserComment>> GetComment();
    }
}
