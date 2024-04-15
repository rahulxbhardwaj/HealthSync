import '../styles/login.scss';

const Login = () => {
return(
<>
<div id="login">
  <form id="login-form">
     <label id="login-label">Username </label>
    <input type='username' id="username-login" placeholder='Username'></input>
<br></br><br></br><br></br>
  
    <label id="password-label">Password </label>
     <input type='password' id="password-login" placeholder='********'></input>

     <input type="submit" id="submitt" className="submitt" />
   
  </form>
</div>
 





</>
)
};

export default Login;