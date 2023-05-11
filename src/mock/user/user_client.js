class UserClient {
  login(id, password) {
    return fetch(`http://example.com/api/id+password`).then((response) =>
      response.json()
    );
  }
}

module.exports = UserClient;
