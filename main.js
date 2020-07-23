function register() {
  
  userEmail = document.getElementById('email_field').value;
  userPass = document.getElementById('pass_field').value;
  
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function() {
    window.location= "login.html";
 
  }).catch(function (error) {
    
    var errorMessage = error.message;
    alert(errorMessage);
  }); 
  
}

function login() {
  
  userEmail = document.getElementById('email_field').value;
  userPass = document.getElementById('pass_field').value;
  
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function() {
   window.location = 'main.html';
  }).catch(function (error) {
    var errorMessage = error.message;
    alert(errorMessage);
  });
  
}
