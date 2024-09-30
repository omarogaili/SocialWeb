using backend;
namespace backend.Endpoints
{
    public static class CommentsEndpoints
    {
        private const string _tagComments = "comments";
        private const string _route_createComment = "/api/comments";
        private const string _route_getComment = "/api/getcomments";
        public static void MapCommentsEndpoints(this IEndpointRouteBuilder app)
        {
            app.MapPost(_route_createComment, CreateComment)
                .WithOpenApi()
                .WithSummary("Successfully created a new user")
                .WithTags(_tagComments);
            app.MapGet(_route_getComment, GetComments)
                .WithOpenApi()
                .WithSummary("Get all comments")
                .WithTags(_tagComments);
        }
        public record CreateCommentRequest(string userComment, int likes, int userId);
        public record CommentResponse(int id, int userId, string userComment);
        static async Task<IResult> CreateComment(CreateCommentRequest request, ICommentsServices commentService)
        {
            var comment = new UserComment { Comment = request.userComment, Likes = request.likes, UserId = request.userId };
            await commentService.AddCommentAsync(comment);
            return Results.Created($"/User/{comment.UserId}", new CommentResponse(comment.Id, comment.UserId, comment.Comment));
        }
        static async Task<IResult> GetComments(ICommentsServices commentService)
        {
            var comments = await commentService.GetComment();
            return Results.Ok(comments.Select(c => new CreateCommentRequest(c.Comment, c.Likes, c.Id)));
        }
    }
}
