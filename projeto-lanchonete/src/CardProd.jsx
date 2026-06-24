function CardProd({ nome, preco }) {
  return (
    <div className="product-item">
      <h3 className="product-name">{nome}</h3>
      <p className="product-price">{preco}</p>
    </div>
  );
}

export default CardProd;
