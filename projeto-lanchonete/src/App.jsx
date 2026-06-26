import { useState } from "react";
import Header from "./componentes/Header";
import Login from "./componentes/Login";
import CardProd from "./CardProd";
import Funcionario from "./Funcionario";
import "./App.css";

function App() {
  const [xSalada, setXSalada] = useState(0);
  const [franguinho, setFranguinho] = useState(0);
  const [refrigerante, setRefrigerante] = useState(0);
  const [cervejinha, setCervejinha] = useState(0);

  const itens = [
    {
      nome: "x-salada",
      preco: 12.9,
      quantidade: xSalada,
      setQuantidade: setXSalada,
    },
    {
      nome: "Porção de franguinho",
      preco: 22.9,
      quantidade: franguinho,
      setQuantidade: setFranguinho,
    },
    {
      nome: "Refrigerante",
      preco: 5.5,
      quantidade: refrigerante,
      setQuantidade: setRefrigerante,
    },
    {
      nome: "Cervejinha",
      preco: 9,
      quantidade: cervejinha,
      setQuantidade: setCervejinha,
    },
  ];

  const total = itens.reduce((soma, item) => {
    return soma + item.preco * item.quantidade;
  }, 0);

  function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <div className="app">
      <Header
        titulo="Lanchonete Dogão e Burgão"
        subtitulo="O melhor do planeta"
      />

      <Login />

      <h2>Cardapio</h2>

      <div className="produtos">
        {itens.map((item) => (
          <CardProd
            key={item.nome}
            nome={item.nome}
            preco={item.preco}
            quantidade={item.quantidade}
            setQuantidade={item.setQuantidade}
          />
        ))}
      </div>

      <div className="resumo-pedido">
        <h2>Resumo do pedido</h2>

        {itens.map((item) => (
          <p key={item.nome}>
            {item.nome}: {item.quantidade} item(ns) -{" "}
            {formatarPreco(item.preco * item.quantidade)}
          </p>
        ))}

        <h3>Total: {formatarPreco(total)}</h3>
      </div>

      <Funcionario nome="FeLiPe " cargo="O Chefe" />
    </div>
  );
}

export default App;
