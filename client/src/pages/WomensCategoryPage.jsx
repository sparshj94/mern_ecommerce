import React from "react";
import ProductCards from "../components/ProductCards";
import axios from "axios";
import { useParams } from "react-router-dom";
const WomensCategoryPage = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState();
  const getProducts = async () => {
    const data = await axios.get(`/api/v1/products/get-product/${pid}`);
    console.log(data.data.data.products);
    setProduct(data.data.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <ProductCards product={product} />
    </>
  );
};

export default WomensCategoryPage;
