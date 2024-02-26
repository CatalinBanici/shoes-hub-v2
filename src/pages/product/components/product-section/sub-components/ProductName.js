export default function ProductName({ product }) {
  return (
    <div className="mb-5 bg-white p-5">
      <h2 className=" my-5 text-2xl text-gray-800">{product[0].name}</h2>
      <h4 className=" my-5 text-lg text-gray-700">{product[0].description}</h4>
    </div>
  );
}
