import ProductDetails from "@/components/UI/ProductDetails";

const ProductDetailPage = async ({ params }) => {
  // server side rendering
  const res = await fetch(`http://localhost:5000/watches/${params.id}`, {
    cache: 'no-store',
  });
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1>prpduct Details</h1>
      <ProductDetails product={data}></ProductDetails>
    </div>
  );
};

export default ProductDetailPage;
