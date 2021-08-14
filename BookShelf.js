var books = [
   {title: "The Giver",
    stars: 2,
    rating: "2 / 5"},
    
   {title: "Mario Party",
    stars: 4,
    rating: "4 / 5"},
    
   {title: "Hello",
    stars: 3,
    rating: "3 / 5"}
];

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);

// loop to draw books
for (var x = 0; x < books.length; x++) {
    var book = books[x];
    fill(214, 255, 219);
    rect(10 + x * 102, 20, 90, 100);
    fill(0, 0, 0);
    text(book.title, 15 + x * 102, 29, 70, 100);
    text(book.rating, 15 + x * 102, 84, 70, 100);
    
    // loop to display stars for books
    for (var i = 0; i < book.stars; i++) {
        image(getImage("cute/Star"), 13 + (x * 102) + (i * 20), 90, 20, 30);
    }   
}
