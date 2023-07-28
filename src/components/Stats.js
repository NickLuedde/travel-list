export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        Lets make a packing list for your trip! 🚀
      </footer>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const PackedPercentage = Math.round((packedItems / numItems) * 100);

  // const packedItems = items.packed.count;
  // const packedPercentage = numItems / packedItems;
  return (
    <footer className="stats">
      {PackedPercentage !== Number(100) ? (
        <p>
          💼 You have {numItems} items on your list and you've already packed{" "}
          {packedItems} items {""}({PackedPercentage}%)
        </p>
      ) : (
        <p>All packed way to go!! ✈ </p>
      )}
    </footer>
  );
}
