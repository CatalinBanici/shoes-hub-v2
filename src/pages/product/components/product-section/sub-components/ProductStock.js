export default function ProductStock({ colorName, numberOfProducts }) {
  return (
    <>
      {colorName && (
        <div className="pl-5 text-gray-800">In stock: {numberOfProducts}</div>
      )}
    </>
  );
}
