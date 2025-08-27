export default function Hello({username,textColor}){
    return (
    <div>
        <h1 style={{color:textColor}}>Hello,{username} !</h1>
    </div>
    );
}