import Stock from "./Stock";

function StockContainer({ stocks, onAddStock }) {
  
  const listOfStocks = stocks.map((stock) => {
    return (
      <Stock 
        key={stock.id}
        stock={stock}
        onStockClick={onAddStock}
      />
    );
  });

  return (
    <div>
      <h2>Stocks</h2>
      {listOfStocks}
    </div>
  );
}

export default StockContainer;