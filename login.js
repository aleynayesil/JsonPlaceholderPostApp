const login=async(event)=>{
event.preventDefault();
    const param={
        email:loginForm?.email?.value,
        password:loginForm?.password.value
    };
    console.log(param);
try{
    let response = await fetch("https://reqres.in/api/login", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(param), 
      });

      console.log("response", response);
      let data = await response.json();
      
      if(loginForm?.rememberMe?.checked == true){ 
        localStorage.setItem('token',data?.token);
        localStorage.setItem('email', loginForm?.email?.value);
     
      } else {
        

          sessionStorage.setItem('token', data?.token);
          sessionStorage.setItem('email', loginForm?.email?.value);
        
      }


      window.location.href = 'index.html';


    } catch (error) { 
      console.log("login-error", error);
      alert(error);
    }
}