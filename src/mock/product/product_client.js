class ProductClient {
  fetchItems() {
    return fetch("http://example.com/api/test").then((response) =>
      response.json()
    );
  }
}

module.exports = ProductClient;
