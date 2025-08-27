import "./product.css";
export default function Card({title,descript,src,oldprice,newprice}){
    return (
        <div className="card">
            <div className="imgcont">
                <h3>{title}</h3>
                <img src={src} alt="an image"/>
                <div className="des">
                    <ul>
                        <li>{descript}</li>
                    </ul>
                </div>
                <div className="priceTag">
                <h3 style={{textDecoration:"line-through"}}>${oldprice}</h3><h3 style={{color:"yellow"}}>${newprice}</h3>
                </div>
            </div>
        </div>
    )
}