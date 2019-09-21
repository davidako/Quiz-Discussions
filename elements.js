document.getElementById('submit')
    .addEventListener('click', function (e) {
        e.preventDefault();

        let title = document.getElementById('title');
        let author = document.getElementById('author');
        let genre = document.getElementById('genre');
        let container = document.getElementById('container');

        container.innerHTML = '';

        appendBookElement(title.value);
        appendBookElement(author.value);
        appendBookElement(genre.value);


        title.value = '';
        author.value = '';
        genre.value = '';
    });

function appendBookElement(value) {
    let newSpan = document.createElement('span')
    newSpan.innerHTML = value;
    let newParagraph = document.createElement('p')
    newParagraph.appendChild(newSpan);
    container.appendChild(newParagraph);
}