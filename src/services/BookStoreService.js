class BookStoreService {
  static data = [
    { id: 1, title: "The Stationery Shop", author: " Marjan Kamali " },
    {
      id: 2,
      title: "The Bookshop",
      author: "Penelope Fitzgerald and David Nicholls"
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