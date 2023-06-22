export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em> Start Adding Somthing To Ur List ❗❗</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percetage =
    numPacked !== 0 ? Math.round((numPacked / numItems) * 100) : 0;
  return (
    <footer className="stats">
      {percetage === 100 ? (
        <em>Greate! You Packed everything ✈</em>
      ) : (
        <em>
          🎒 you have {numItems} item in your list, and you already packed{" "}
          {numPacked} ({percetage}%)
        </em>
      )}
    </footer>
  );
}
