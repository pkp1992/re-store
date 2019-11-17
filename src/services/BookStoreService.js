class BookStoreService {
  static data = [
    {
      id: 1,
      title: "The Stationery Shop",
      author: " Marjan Kamali ",
      price: 32,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._AC_US436_FMwebp_QL65_.jpg"
    },
    {
      id: 2,
      title: "The Bookshop",
      author: "Penelope Fitzgerald and David Nicholls",
      price: 34,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51lu4ArIFYL._AC_US436_FMwebp_QL65_.jpg"
    }
  ];
  getBook() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (Math.random().toFixed(1) <= 0.25) {
          rej(new Error("Some thing wrong"));
        }
        res(BookStoreService.data);
      }, 700);
    });
  }
}

export default BookStoreService;
