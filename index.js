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


const revealMessage = () => {
  message.classList.remove('hide')
  setTimeout(()=> {
    message.classList.add('hide')
  }, 3000)
}

document.querySelector('form').addEventListener('submit', addMovie)

function deleteMovie(event){
event.target.parentNode.remove()
message.textContent = `${event.target.parentNode.firstChild.textContent} was Yeet'ed!`

revealMessage()
}

function crossOffMovie(event){
event.target.classList.toggle('checked')

if(event.target.classList.contains('checked')){
  message.textContent = `You have watched ${event.target.textContent}!`
} else{
  message.textContent = `${event.target.textContent} was added back!`
}

revealMessage()
}