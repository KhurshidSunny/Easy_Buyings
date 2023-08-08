function HomePage() {
  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by device or type"
        />
        <i className="search-icon fas fa-search"></i>
      </div>

      <div className="logo-container">
        <h2 className="logo">Easy-Buyings</h2>
      </div>

      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Mobile covers</li>
          <li className="nav-item">Apple accessories</li>
          <li className="nav-item">Tablet covers</li>
          <li className="nav-item">Audio</li>
          <li className="nav-item">Charging</li>
          <li className="nav-item">Cables</li>
          <li className="nav-item">More accessories</li>
        </ul>
      </nav>

      {/* cover page  */}

      <div className="cover-image">
        {/* Replace the placeholder URL with the actual image URL */}
        <img src="./background.jpg" alt="E-commerce Cover" />
        <div className="buy-now-button">
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
