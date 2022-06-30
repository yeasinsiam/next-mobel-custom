import Image from "next/image";

const CartProduct = ({ imageUrl, title, type }) => {
  return (
    <div className="cart-wrapper">
      <div className="clearfix">
        <div className="cart-block cart-block-item clearfix">
          <div className="image">
            <a href="product.html">
              <Image
                src={imageUrl}
                alt={title}
                width={640}
                height={480}
                layout="responsive"
              />
            </a>
          </div>
          <div className="title">
            <div className="h4">
              <a href="product.html">{title}</a>
            </div>
            <div>{type}</div>
          </div>
          <div className="quantity">
            <span>&nbsp;</span>
          </div>
          <div className="price">
            <span>&nbsp;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
