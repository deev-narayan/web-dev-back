import { useState } from "react";
export default function Counter(){
        // let arr = useState(0);
        // console.log(arr);
        // count+=1;
        // console.log(count);
        // let [stateVariable,useStateVariable]=useState(0);
        let [count, setCount] = useState(0);
        function increment(){
          setCount(count+1);
        }
      return (
        <div>
          <h3>Count = {count}</h3>
          <button onClick={increment}>increase</button>
        </div>
      )
}