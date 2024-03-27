export default function Login() {
   return(
      <div class="wrapper">
    <form action="">
        <h1>Login</h1>
        <div class="input-box">
            <input type="text" placeholder="Username" required/>
            <i class='bx bxs-user'></i>
        </div>
        <div class="input-box">
            <input type="password" placeholder="Password" required/>
            <i class='bx bxs-lock-alt' ></i>
        </div>
        <div class="input-remember-forgot">
            <label><input type="checkbox"/>Remember Me</label>
            <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" class="btn"> Login</button>
        <div class="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
      </div>
      </form>
      </div>
   );
}