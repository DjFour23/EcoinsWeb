function signUpWithEmailPassword(email, password) {


  // [START auth_signup_password]
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      alert("Registrado correctamente");
      window.location.href="/index.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error: "+errorMessage);
    });
  // [END auth_signup_password]
}

/* function sendEmailVerification() {
  // [START auth_send_email_verification]
  firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
      // Email verification sent!
      // ...
    });
  // [END auth_send_email_verification]
} */


const signUp = document.querySelector("#SignUp");


signUp.addEventListener("submit",(e)=>{

    e.preventDefault();

    const signUpEmail = document.querySelector("#signup-email").value;
    const signUpPassword = document.querySelector("#signup-password").value;

   
    signUpWithEmailPassword(signUpEmail, signUpPassword)


})





