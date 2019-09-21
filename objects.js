function Book(title, author, genre, releaseDate) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.releaseDate = releaseDate;

    this.getTitle = function () {
        return this.title;
    };

    this.isNew = function () {
        return this.releaseDate >= 2000;
    };

    this.getFullInfo = function () {

    };
}

/**
 * Print Book fields in a pretty format.
 */
Book.prototype.getInfo = function () {
    return 'Title: ' + this.title + '\n' +
        'Author: ' + this.author + '\n' +
        'Genre: ' + this.genre + '\n' +
        'Release Date: ' + this.releaseDate + '\n';
};


function Fantasy(title, author, genre, releaseDate,
                 // Additional two parameters for Fantasy.
                 magicalCreatures,
                 happyEnding,
) {

    // Call Parent (Book) constructor and pass parameters
    // to it.
    Book.call(this, title, author, genre, releaseDate);

    this.magicalCreatures = magicalCreatures;
    this.happyEnding = happyEnding;

    this.hasHappyEnding = function () {
      return this.happyEnding;
    };

    this.getFullInfo = function () {
        let parentInfo = this.getInfo();
        return parentInfo + '\n' +
            'Magical creatures ' + this.magicalCreatures.join(' ')
            + '\n' +
            'Happy ending: ' + this.happyEnding
    };
}


// Make Fantasy a child of Book.
Fantasy.prototype = Object.create(Book.prototype);


let fantasy = new Fantasy('Harry Potter', 'Rowling', 'Fantasy',
    '1999', ['Eleves', 'Wizzards', 'Demons'], true);
console.log(fantasy.getFullInfo());
