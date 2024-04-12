import '../styles/login.scss';

const Login = () => {
return(
  <>
  <div className="login-container">
    <label id="healthidlabel">Health ID</label>
  <input type="text" placeholder="Health Id" id="healthid" />
    <label id="healthidlabel">Password</label>
    <input type="password" placeholder="********" id="healthid" /><br></br>
    <button id="submitlabel">Submit</button>
  </div>
  </>
)
};

export default Login;