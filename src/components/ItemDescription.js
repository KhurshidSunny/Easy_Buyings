function ItemDescription() {
  return (
    <div className="item-description-page">
      <div className="Description-container">
        <div className="image-container">
          <img src="iphone.avif" alt="Item" />
          <div className="labels">
            <span className="label sale">Sale</span>
            <span className="label new">New</span>
          </div>
        </div>
        <div className="description-container">
          <h2 className="title">
            OnePlus 11R Cover - Floral Series - Matte Finish - Snap On Hard Case
            With LifeTime Colors Guarantee
          </h2>
          <div className="details">
            <p className="availability">Availability: In Stock</p>
            <p className="product-type">Product Type: Electronics</p>
            <p className="cost">$99.99</p>
            <div className="description">
              <h4>Description</h4>
              <p>
                This mobile cover is made in china. It is made of Leather. It
                works for more than 2 years. and some random text to follow
              </p>
            </div>
            <div className="quantity-counter">
              <div className="counter">
                <button className="counter-btn">-</button>
                <span className="quantity">1</span>
                <button className="counter-btn">+</button>
              </div>
            </div>

            <div className="button-container">
              <button className="heart-button">
                <i className="fas fa-heart"></i>
              </button>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDescription;
