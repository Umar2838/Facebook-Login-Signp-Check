
function SignUpgetValue(){

    var signUpEmail = document.getElementById("signUpEmail").value
    var signUppassword = document.getElementById("signUpPass").value
   
    localStorage.setItem("SignupEmail",signUpEmail)
    localStorage.setItem("Signuppassword",signUppassword)

}
var localStorageSignUpEmail = localStorage.getItem("SignupEmail")
var localStorageSignUpPassword = localStorage.getItem("Signuppassword")


function LogingetValue(){

    var loginEmail = document.getElementById("loginEmail").value
    var loginPassword = document.getElementById("loginPass").value
   
    localStorage.setItem("LoginEmail",loginEmail)
    localStorage.setItem("LoginPassword",loginPassword)
}

var localStorageLoginEmail = localStorage.getItem("LoginEmail")
var localStorageLoginPassword = localStorage.getItem("LoginPassword")



    
if(localStorageSignUpEmail === localStorageLoginEmail){

    if(localStorageLoginPassword === localStorageSignUpPassword){
        swal("Login SuccessFul", "You clicked the button!", "success")
    }
}else if(localStorageSignUpEmail !== localStorageLoginEmail){
    sweetAlert("Login Failed", "Please Enter Correct Email", "error");  
      }
    

