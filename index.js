document.querySelector("form").addEventListener("submit", addMovie)
const message = document.querySelector('#message')

// const addBtn = document.querySelector("#btn")

function addMovie(event){
  event.preventDefault()
let = inputField = document.querySelector("input")

let movie = document.createElement("li")
const movieTitle = document.createElement('span')
movieTitle.textContent = inputField.value;
movieTitle.addEventListener('click', crossOffMovie)

movie.appendChild(movieTitle)

const list = document.querySelector('ul').appendChild(movie)

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'x';
deleteBtn.addEventListener('click', deleteMovie)
movie.appendChild(deleteBtn)

inputField.value = ''

}



document.querySelector('form').addEventListener('submit', addMovie)

function deleteMovie(event){
event.target.parentNode.remove()
message = message.textContent = 'Movie Deleted!'

}

function crossOffMovie(event){
event.target.classList.toggle('checked')

if(event.target.classList.contains('checked')){
  message.textContent = "Movie Watched!"
} else{
  message.textContent = 'Movie added back!'
}



}