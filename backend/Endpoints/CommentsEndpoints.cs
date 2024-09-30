using backend;
namespace backend.Endpoints
{
    public static class CommentsEndpoints
    {
        private const string _tagComments = "comments";
        private const string _route_createComment = "/api/comments";
        public static void MapCommentsEndpoints(this IEndpointRouteBuilder app)
        {
            app.MapPost(_route_createComment, CreateComment)
                .WithOpenApi()
                .WithSummary("Successfully created a new user")
                .WithTags(_tagComments);
        }
        public record CreateCommentRequest(string userComment, int likes, int userId);
        public record CommentResponse(int id, int userId);
        static async Task<IResult> CreateComment(CreateCommentRequest request, ICommentsServices commentService)
        {
            var comment = new UserComment { Comment = request.userComment, Likes = request.likes, UserId = request.userId };
            await commentService.AddCommentAsync(comment);
            return Results.Created($"/User/{comment.UserId}", new CommentResponse(comment.Id, comment.UserId));
        }
    }
}
