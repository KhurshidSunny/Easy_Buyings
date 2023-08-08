function ProducutItem() {
  return (
    <div className="card">
      <div className="image-container">
        {/* Replace the placeholder URL with the actual image URL */}
        <img src="mob_cover.jpeg" alt="Mobile Cover" />
        <div className="card-icons">
          <div className="icon-container">
            <i className="heart-icon far fa-heart"></i>
            <span className="icon-text">Add to Wishlist</span>
          </div>
          <div className="icon-container">
            <i className="view-icon far fa-eye"></i>
            <span className="icon-text">Quick View</span>
          </div>
        </div>
        <div className="labels">
          <span className="sale-label">Sale</span>
          <span className="new-label">New</span>
        </div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProducutItem;
