function SearchBarAndLogo() {
  return (
    <div className="search_logo_container">
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
    </div>
  );
}

export default SearchBarAndLogo;
