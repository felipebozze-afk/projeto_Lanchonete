import Header from "./componentes/Header";
import Login from "./componentes/Login";
import CardProd from "./CardProd";
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

      <h2>Cardapio</h2>

      <div className="produtos">
        <CardProd nome="x-salada" preco="R$ 12,90" />
        <CardProd nome="Porção de franguinho" preco="R$ 22,90" />
        <CardProd nome="Refrigerante" preco="R$ 5,50" />
        <CardProd nome="Cervejinha" preco="R$ 9,00" />
      </div>

      <Funcionario nome="FeLiPe " cargo="O Chefe" />
    </div>
  );
}

export default App;
