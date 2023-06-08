

function LogingetValue(){


    var loginemail = document.getElementById("loginEmail").value
    var loginPassword = document.getElementById("loginPass").value
    var Email = localStorage.getItem("SignupEmail")
    var Password = localStorage.getItem("ConfirmPassword")
 
      if(loginemail.trim() == "" && loginPassword.trim() == ""){
        
        Swal.fire({
            icon: 'error',
            title: 'error',
            text: 'Input Field Must be filled',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        }else{
    
            if( loginPassword !== Password && loginemail !== Email ){
                Swal.fire({
                    icon: 'error',
                    title: 'error',
                    text: 'Invalid email or password',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
            }else{
                Swal.fire({
                    icon: 'success',
                    title: 'You Login Succefully!',
                    
              
                })
            }
        }
        
}
function SignUpgetValue(){

    var signUpEmail = document.getElementById("signUpEmail").value
    var signUppassword = document.getElementById("signUpPass").value
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var signUpconPass = document.getElementById("signUpconPass").value
    

    localStorage.setItem("FirstName",fname)
    localStorage.setItem("LastName",lname)
    localStorage.setItem("SignupEmail",signUpEmail)
    localStorage.setItem("ConfirmPassword",signUpconPass)

    
    if( signUpEmail.trim() == "" && signUppassword.trim()=="" && fname.trim()=="" && lname.trim() =="" && signUpconPass.trim()==""){

        Swal.fire({
            icon: 'error',
            title: 'error',
            text: 'Input Field Must be filled',
            footer: '<a href="">Why do I have this issue?</a>'
          })

    }else{
    
        if(signUppassword !== signUpconPass){
            Swal.fire({
                icon: 'error',
                title: 'error',
                text: 'Password is not matching',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }else{
            Swal.fire({
                icon: 'success',
                title: 'You SignUp Succefully!',
                
          
            })
        }
    }

}


                
                



