// REACT
import { useEffect, useState } from "react";

// COMPONENTS
import ProductName from "./sub-components/ProductName";
import ProductPrice from "./sub-components/ProductPrice";
import ProductSize from "./sub-components/ProductSize";
import ProductColor from "./sub-components/ProductColor";
import ProductStock from "./sub-components/ProductStock";
import ProductQuantity from "./sub-components/ProductQuantity";
import BuyButtons from "./sub-components/BuyButtons";

export default function ProductSection({ product }) {
  // get the discount % if there is any
  const substract = product[0].price.current - product[0].price.old;
  const discount = (substract / product[0].price.old) * 100;

  const stock = product[0].stock.map((stockItem) => stockItem);
  const [selectedProductStock, setSelectedProductStock] = useState(stock[0]);
  const [colorName, setColorName] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [colorImage, setColorImage] = useState("");
  const [sizeNumber, setSizeNumber] = useState(selectedProductStock.size);
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [productCount, setProductCount] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setSelectedProductStock(stock[0]);
    setColorName("");
    setColorValue("");
    setColorImage("");
    setProductCount(1);
    setNumberOfProducts(0);
    setErrorMessage("");
  }, [product]);

  return (
    <section className="w-full justify-self-center lg:m-5">
      <ProductName product={product} />

      <ProductPrice product={product} discount={discount} />

      <hr />
      <div>
        <ProductSize
          stock={stock}
          selectedProductStock={selectedProductStock}
          setSelectedProductStock={setSelectedProductStock}
          setSizeNumber={setSizeNumber}
          setNumberOfProducts={setNumberOfProducts}
          setColorName={setColorName}
          setColorValue={setColorValue}
          setProductCount={setProductCount}
          setErrorMessage={setErrorMessage}
        />

        <ProductColor
          selectedProductStock={selectedProductStock}
          colorName={colorName}
          setColorName={setColorName}
          setColorValue={setColorValue}
          setColorImage={setColorImage}
          setNumberOfProducts={setNumberOfProducts}
          setProductCount={setProductCount}
        />

        <ProductStock
          colorName={colorName}
          numberOfProducts={numberOfProducts}
        />
      </div>
      <div className="my-5 flex w-full flex-col bg-white pb-5">
        <ProductQuantity
          productCount={productCount}
          setProductCount={setProductCount}
          colorName={colorName}
          numberOfProducts={numberOfProducts}
        />

        <BuyButtons
          product={product}
          numberOfProducts={numberOfProducts}
          sizeNumber={sizeNumber}
          colorName={colorName}
          colorValue={colorValue}
          colorImage={colorImage}
          productCount={productCount}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      </div>
    </section>
  );
}
