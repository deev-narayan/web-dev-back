import Product from "./Product.jsx";
function ProductTab(){
    let options = ["High-tech","durable","fast"];
    // let opt = {a:"High-Tech",
    //     b:"durable",
    //     c:"fast"}
    return <>
    <Product title="Laptop" value={2700} features={options}/>
    <Product title="Mobile" value={18000}/>
    <Product title="Pen" value={10}/>
    </>;
}
export default ProductTab;