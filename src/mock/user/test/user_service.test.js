const UserService = require("../user_service");
const UserClient = require("../user_client");
jest.mock("../user_client");

describe("UserService", () => {
  const login = jest.fn(async () => "success");
  UserClient.mockImplementation(() => {
    return {
      login
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
    login.mockClear();
    UserClient.mockClear();
  });

  it("calls login() on UserClient when tries to login", async () => {
    await userService.login("id", "password");
    expect(login).toHaveBeenCalledTimes(1);
  });

  it("should not call login() on UserClient again if already login", async () => {
    await userService.login("id", "password");
    await userService.login("id", "password");
    expect(login).toHaveBeenCalledTimes(1);
  });

  it("should isLogIn is true", async () => {
    return userService.login("id", "password").then(() => {
      expect(userService.isLogIn).toBe(true);
    });
  });
});
