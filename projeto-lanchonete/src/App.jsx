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
        <CardProd nome="x-salada" preco="R$ 10,00" />
        <CardProd nome="Pastel" preco="R$ 8,00" />
        <CardProd nome="Refrigerante" preco="R$ 5,00" />
        <CardProd nome="Suco" preco="R$ 7,00" />
      </div>

      <Funcionario nome="Felipe The King" cargo="O Chefe" />
    </div>
  );
}

export default App;

