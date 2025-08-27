import { useState } from "react";
export default function(){
    let [isLiked,setIsLiked]=useState(false);
    let [clicks,setClicks]=useState(0);
    let clicked = ()=>{
        setIsLiked(!isLiked);
        setClicks(clicks+1);
    }
    let likeStyle = {color : "red"};
    return(
        <div>
            <p onClick={clicked}>
                clicks={clicks}
                {isLiked?<i className="ri-heart-fill" style={likeStyle}></i>:<i className="ri-heart-3-line"></i>}
            </p>
        </div>
    );
}