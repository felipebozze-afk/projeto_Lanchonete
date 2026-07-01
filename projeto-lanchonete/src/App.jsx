import Header from "./componentes/Header";
import Login from "./componentes/Login";
import Calculadora from "./componentes/Calculadora";
import Funcionario from "./Funcionario";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header
        titulo="Lanchonete Dogão e Burgão"
        subtitulo="O melhor do planeta"
      />

      <Login />

      <Calculadora />

      <Funcionario nome="FeLiPe " cargo="O Chefe" />
    </div>
  );
}

export default App;
