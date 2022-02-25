
const firebaseConfig = {
  apiKey: "AIzaSyBxvXlcWrqbZNbngE-VXUgViosUZPZBp3Y",
  authDomain: "service-before-self-3ebe1.firebaseapp.com",
  databaseURL: "https://service-before-self-3ebe1-default-rtdb.firebaseio.com",
  projectId: "service-before-self-3ebe1",
  storageBucket: "service-before-self-3ebe1.appspot.com",
  messagingSenderId: "102601002918",
  appId: "1:102601002918:web:e4b20371ea9e3438e74967"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var messagesRef = firebase.database().ref('Request-Food');

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
var email = getInputVal('email');
var phone = getInputVal('phone');
var address = getInputVal('address');
var pincode = getInputVal('pincode');
var message = getInputVal('message');

  // Save message
  saveMessage(name,email,phone,address,pincode,message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contact-form').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,email,phone,address,pincode,message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name : name,
    email:email,
    phone:phone,
    address:address,
    pincode:pincode,
    message:message
  });
}



const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);




/*

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const pincode = document.getElementById('pincode');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');


  
const validate = (e) => {
  e.preventDefault();
 
  if (name.value.length < 3) {
    errorElement.innerHTML = 'Your name should be at least 3 characters long.';
    return false;
  } 
  
  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  } 

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = 'Please write a longer message.';
    return false;
  }

  errorElement.innerHTML = '';
  successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.'; 

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
  }, 6000);

  return true;

}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);
*/

/*
function submitForm(e){
  e.preventDefault();

var name = getInputVal('name');
var email = getInputVal('email');
var phone = getInputVal('phone');
var address = getInputVal('address');
var pincode = getInputVal('pincode');
var message = getInputVal('message');

saveMessage(name,email,phone,address,pincode,message);

document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contact-form').reset();



}


function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(name,email,phone,address,pincode,message){
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name : name,
    email:email,
    phone:phone,
    address:address,
    pincode:pincode,
    message:message

  });
}
*/

