import "./Product.css"
function Product ({title ,value ,features}){
    let style = {backgroundColor : value>=3000 ? "teal" :""};
    // let list = features.map((feature)=> <li>{feature}</li>);
    // if(value>=3000){
    //     return(
    //         <div className="Product">
    //         <h3>{title}</h3>
    //         <h5>{value}</h5>
    //         {/* <p>{list}</p> */}
    //         <h3>5% Discount</h3>
    //         </div>
    //     );
    // }else{
    //     return(
    //         <div className="Product">
    //         <h3>{title}</h3>
    //         <h5>{value}</h5>
    //         {/* <p>{list}</p> */}
    //         </div>
    //     );
    // }
    let isDiscount = value >3000 ? <p>5% OFF</p> :null;
    return(
        <div className="Product" style={style}>
        <h3>{title}</h3>
        <h5>{value}</h5>
        {/* <p>{list}</p> */}
        <p>{isDiscount}</p>
        </div>
    );
}
export default Product;