// Initialize Firebase
var config = {
  apiKey: "AIzaSyCLQDUIWXtuwfckjdnicnKRpjOlmHdkmxg",
  authDomain: "cal-esports-website.firebaseapp.com",
  databaseURL: "https://cal-esports-website.firebaseio.com",
  projectId: "cal-esports-website",
  storageBucket: "cal-esports-website.appspot.com",
  messagingSenderId: "879191740796"
};
firebase.initializeApp(config);

//Reference messages collection
var messagesRef = firebase.database().ref('newsletter-emails');

// Form Submit listener
document.getElementById("email-input-form").addEventListener('submit', submitForm);

//Get value of email
function submitForm(e){
  e.preventDefault();
  var email = getInputVal('email')
  saveMessage(email);
  window.alert("Thanks for subscribing!")
  document.getElementById('email-input-form').reset();
  document.getElementById('email-button').disabled="disabled";
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(email){
  var key = email.split('.').join(',');
  var newMessageRef = messagesRef.child(key);

  newMessageRef.set({
    email: email
  });

}
