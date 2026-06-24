import Contador from "./Contador";

function CardProd({ nome, preco }) {
  return (
    <div className="product-item">
      <h3 className="product-name">{nome}</h3>
      <p className="product-price">{preco}</p>
      <Contador />
    </div>
  );
}

export default CardProd;
