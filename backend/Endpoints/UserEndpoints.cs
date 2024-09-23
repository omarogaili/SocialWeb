using backend;
using Microsoft.AspNetCore.Http.HttpResults;
namespace Endpoints;

public static class UserEndpoints
{
    private const string _tag = "user";
    private const string _route_SignIn = "SignIn";
    private const string _route_Info = "INFO";
    private const string _contentType = "application/json";
    public static void MapUserEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapPost(_route_SignIn, CreateNewUserAsync)
            .WithOpenApi()
            .WithSummary("New user has been created successfully")
            .WithTags(_tag);
        app.MapGet(_route_Info, GetUserByTheId)
            .WithOpenApi()
            .WithSummary("Get user by id")
            .WithTags(_tag);
    }
    public record UserResponse(int userId, string userName, string userEmail);
    public record CreateUserRequest(string userName, string userEmail, string userPassword);
    static async Task<IResult> CreateNewUserAsync(CreateUserRequest request, IUserService userService)
    {
        var user = new User { Name = request.userName, Email = request.userEmail, Password = request.userPassword };
        await userService.AddUser(user);
        return Results.Created($"/User/{user.Name}", new UserResponse(user.Id, user.Name, user.Email));
    }
    static IResult GetUserByTheId(int id, IUserService userService)
    {
        var user = userService.GetUserById(id);
        return user != null ? Results.Ok(new UserResponse(user.Id, user.Name, user.Email)) : Results.NotFound();
    }

}
