export default function ProductPrice({ product, discount }) {
  return (
    <div className="my-5">
      <span
        className="mx-5 text-3xl text-gray-900"
        style={product[0].price.discount ? { color: "RGB(77, 181, 67)" } : null}
      >
        ${product[0].price.current}
      </span>
      {product[0].price.discount && (
        <>
          <span className="mx-5 text-xl text-gray-600 line-through">
            ${product[0].price.old}
          </span>
          <span className="text-md text-gray-600">
            {Math.abs(Math.trunc(discount))}% off
          </span>
        </>
      )}
    </div>
  );
}
