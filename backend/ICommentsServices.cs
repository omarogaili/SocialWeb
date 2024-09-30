namespace backend
{
    public interface ICommentsServices
    {
        public Task<UserComment> AddCommentAsync(UserComment comment);
    }
}
