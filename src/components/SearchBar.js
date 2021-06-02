

function SearchBar({ sortBy, onChangeSort, filterBy, onChangeFilter }) {
  function handleSortChange(event) {
    onChangeSort(event.target.value);
  }

  function handleFilterChange(event) {
    onChangeFilter(event.target.value);
  }

  return (
    <div>
      <strong style={{marginLeft: "2em"}}>Sort by:</strong>
      <label style={{marginLeft: "6px"}}>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy === "Alphabetically"}
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy === "Price"}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong style={{marginLeft: "2em"}}>Filter:</strong>
        <select onChange={handleFilterChange} style={{marginLeft: "10px"}}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;