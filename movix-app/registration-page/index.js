class User {
  constructor(fullName, email, password) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
  }
}

let users = [];

function register() {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const displayMessage = document.getElementById('displayMessage');

  const newUser = new User(fullName, email, password);
  users.push(newUser);

  localStorage.setItem('users', users.join(';'));

  document.getElementById('regForm').reset();

  displayMessage.innerHTML = 'Registration Successful!';
  displayMessage.style.color = 'green';

  // console.log(JSON.stringify(users));

  setTimeout(() => {
    window.location.href = 'http://127.0.0.1:5500/homepage/home.html';
  }, 1000);
}


//user login
function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const displayMessage = document.getElementById('displayMessage');

  const storedUsers = localStorage.getItem('users');

  const foundUser = storedUsers.find(user => user.email === email && user.password === password);

  if (foundUser) {
    displayMessage.innerHTML = 'Login Successful!';
      window.location.href = 'http://127.0.0.1:5500/homepage/home.html';
  } else {
    displayMessage.innerHTML = 'Invalid email and/or password';
  }

  document.getElementById('loginForm').reset();
}





// class UserData {
//   constructor() {
//     this.users = localStorage.getItem('users') ? localStorage.getItem('users').split(';') : [];
//   }

//   saveUsers(){
//     localStorage.setItem('users', this.users.join(';'));
//   }

//   registerUsers(fullName, email, password) {
//     const registerString = fullName + '|' + email + '|' + password;
//     this.users.push(registerString);
//     this.saveUsers();
//   }

//   loginUsers(email, password) {
//     const loginString = email + '|' + password;
//     return this.users.includes(loginString);
//   }
// }

// const newUserData = new UserData();


// function register() {
//   const fullName = document.getElementById('fullName').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const displayMessage = document.getElementById('displayMessage');

//   // if (users.find(user => user.email === email)) {
//   //   displayMessage.innerHTML = 'Email already exists!';
//   //   displayMessage.style.color = 'red';
//   //   return;
//   // }

//   newUserData.registerUsers(fullName, email, password);


//   document.getElementById('regForm').reset();

//   console.log(newUserData);

//   displayMessage.innerHTML = 'Registration Successful!';
//   displayMessage.style.color = 'green';
//   setTimeout(() => {
//     window.location.href = 'http://127.0.0.1:5500/login-page/index2.html';
//   }, 1000);
// }

// //user login
// function login() {
//   const email = document.getElementById('loginEmail').value;
//   const password = document.getElementById('loginPassword').value;
//   const displayMessage = document.getElementById('displayMessage');

//   // const user = this.users.find(user => user.email === email && user.password === password);

//   if (newUserData.loginUsers(email, password)) {
//     displayMessage.innerHTML = 'Login Successful!';
//     displayMessage.style.color = 'green';

//     setTimeout(() => {
//       displayMessage.innerHTML = '';
//     }, 2000);
//   } else {
//     displayMessage.innerHTML = 'Invalid email and/or password';
//     displayMessage.style.color = 'red';
//   }

//   // if (user) {
//   //   displayMessage.innerHTML = 'Login Successful!';
//   //   window.location.href = 'https://www.google.com';
//   // } else {
//   //   displayMessage.innerHTML = 'Invalid email and/or password';
//   // }

//   document.getElementById('loginForm').reset();
// }