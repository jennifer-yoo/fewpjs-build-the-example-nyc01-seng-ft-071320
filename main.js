const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.getElementById('modal')
modal.className = 'hidden'

document.addEventListener("click", function(e){
  if (e.target.className === 'like-glyph') {
    mimicServerCall()
    .then((respond) => {
      e.target.innerText = FULL_HEART
      e.target.className = "activated-heart"
    })
    .catch((error) => {
      modal.className = ''
      modal.lastElementChild.innerText = error
      setTimeout(function() {modal.className = 'hidden' }, 5000)
    })
  } else if (e.target.className === 'activated-heart') {
    e.target.innerText = EMPTY_HEART
    e.target.className = "like-glyph"
  }
})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
