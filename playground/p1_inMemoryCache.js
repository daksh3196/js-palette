class InMemorySearch {
  constructor() {
    this.cache = new Map();
  }

  addDocuments(key, ...val) {
    const existing = this.cache.get(key);
    if (!existing) {
      this.cache.set(key, [...val]);
    } else {
      this.cache.set(key, [...existing, ...val]);
    }
  }

  search(key, callback, orderBy) {
    let searchedResults = this.cache.get(key);
    if (searchedResults) {
      let filtered = searchedResults.filter(callback);
      const { key, asc } = orderBy;
      return filtered.sort((a, b) => {
        if (asc) {
          return a[key] - b[key];
        } else return b[key] - a[key];
      });
    } else return `Cache not found for ${key}`;
  }
}

let myCache = new InMemorySearch();
myCache.addDocuments(
  "Movies",
  { name: "Avenger", rating: 8.5, year: 2017 },
  { name: "Black Adam", rating: 8.7, year: 2022 },
  { name: "Jhon Wick 4", rating: 8.2, year: 2023 },
  { name: "Black Panther", rating: 9.0, year: 2022 }
);

console.log(
  myCache.search("Moies", (e) => e.rating > 8.5, { key: "rating", asc: false })
);

console.log(
  myCache.search("Movies", (e) => e.rating > 8.5, { key: "rating", asc: false })
);
