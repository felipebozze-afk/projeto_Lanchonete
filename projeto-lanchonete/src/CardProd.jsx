import Contador from "./Contador";

function CardProd({ nome, preco, quantidade, setQuantidade }) {
  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="product-item">
      <h3 className="product-name">{nome}</h3>
      <p className="product-price">Preço original: {precoFormatado}</p>
      <Contador
        preco={preco}
        quantidade={quantidade}
        setQuantidade={setQuantidade}
      />
    </div>
  );
}

export default CardProd;
