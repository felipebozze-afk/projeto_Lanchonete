import "./Login.css";

function Login() {
  return (
    <div className="login">
      <h2>Login</h2>
      <div className="container">
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Senha" />
        <button>Entrar</button>
      </div>
    </div>
  );
}
  
export default Login;
