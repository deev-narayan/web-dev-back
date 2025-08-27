import { useState } from "react";
export default function ludo(){
    let [moves,setmoves] = useState({blue:0,red:0,green:0,yellow:0});
    let updateBlue = ()=>{
        setmoves((prevMove)=>{
            return {...prevMove,blue:prevMove.blue+1}
        })
    }
    let updateRed = ()=>{
        setmoves((prevMove)=>{
            return {...prevMove,red:prevMove.red+1}
        })
    }
    let updateGreen = ()=>{
        setmoves((prevMove)=>{
            return {...prevMove,green:prevMove.green+1}
        })
    }
    let updateYellow = ()=>{
        setmoves((prevMove)=>{
            return {...prevMove,yellow:prevMove.yellow+1}
        })
    }
    return (
        <>
        <p>Game Begins</p>
        <div className="board">
            <p>Blue Moves = {moves.blue}</p>
            <button style={{background:"blue"}} onClick={updateBlue}>+1</button>
            <p>Red Moves = {moves.red}</p>
            <button style={{background:"red"}} onClick={updateRed}>+1</button>
            <p>Yellow Moves = {moves.yellow}</p>
            <button style={{background:"yellow",color:"black"}} onClick={updateYellow}>+1</button>
            <p>Green Moves = {moves.green}</p>
            <button style={{background:"green"}} onClick={updateGreen}>+1</button>
        </div>
        </>
    )
}