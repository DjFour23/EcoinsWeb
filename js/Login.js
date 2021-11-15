function signIn(email, password) {
 
    // [START auth_signin_password]
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        alert("Logeado");
        window.location.href="/index.html";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error: "+errorMessage);
      });
    // [END auth_signin_password]
  }
  

/* 
function sendPasswordReset(email) {
  // [START auth_send_password_reset]
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  // [END auth_send_password_reset]
}

 */
  
  const signUp = document.querySelector("#login");
  
  
  signUp.addEventListener("submit",(e)=>{
  
      e.preventDefault();
  
      const loginEmail = document.querySelector("#login-email").value;
      const loginPassword = document.querySelector("#login-password").value;
  
     
      signIn(loginEmail, loginPassword)
  
  
  })