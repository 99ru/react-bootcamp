// Conditional & List Rendering

const FruitsComp = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

  return (
    <div>
      <h2>Fruits</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitsComp;
