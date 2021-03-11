const form = document.querySelector('.js-form'),
  input = form.querySelector('input'), greeting = document.querySelector('.js-greeting');

console.log('asdsad', form, input);

const USER_LS = 'currentUser', SHOWING_ON = 'showing';

function handleSubmit(e) {
  e.preventDefault();
  //form에서 이벤트가 발새앟면 계속 올라가 document까지 올라간다. 
  localStorage.setItem(USER_LS, input.value);

  paintGreeting(input.value);
}

form.addEventListener('submit', handleSubmit);

input.addEventListener('change', (e) => {
  // e.preventDefault();
  console.log(e.target.value);

})


//showing을 바꾸는 이유가 궁금하다. 

function paintGreeting(text) {
  console.log('text', text);
  form.classList.remove(SHOWING_ON)
  greeting.classList.add(SHOWING_ON)
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser) {
    paintGreeting(currentUser);
  } else {
    form.classList.add(SHOWING_ON);
  }
}

function init() {
  loadName();
}


init();
