import "./Product.css"

function Product (props:any){
    return (
        <div className="Product">
            <div className="infoP">
                <div className="men">
                <div className="prof">
                    <img src={props.pL} alt="Profile" />
                    <p>@{props.username}</p>
                    <a href="#">Follow</a>
                </div>
                <i className="ri-menu-line"></i>
                </div>
            </div>
            <div className="imgcon">
                <img src={props.postL} alt="Post" />
            </div>
            <div className="func">
            <div className="dis">
            <i className="ri-heart-line" ></i>
            <i className="ri-chat-3-line" ></i>
            </div>
            <i className="ri-send-plane-line" ></i>
            </div>
            <h6>View Comments</h6>
        </div>
    );
}
export default Product;