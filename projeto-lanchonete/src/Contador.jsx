function Contador({ preco, quantidade, setQuantidade }) {
  function adicionar() {
    setQuantidade(quantidade + 1);
  }

  function remover() {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  }

  const precoAtualizado = preco * quantidade;
  const precoAtualizadoFormatado = precoAtualizado.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="contador">
      <p>Quantidade: {quantidade}</p>
      <p>Preço atualizado: {precoAtualizadoFormatado}</p>

      <div className="contador-botoes">
        <button onClick={adicionar}>Adicionar</button>
        <button onClick={remover}>Remover</button>
      </div>
    </div>
  );
}

export default Contador;
