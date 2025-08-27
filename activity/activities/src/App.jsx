import './App.css';
import Hello from './input.jsx';
import Card from './product.jsx';
function App() {
  let sr = {a:"https://plus.unsplash.com/premium_photo-1674641194949-e154719cdc02?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",b:"https://plus.unsplash.com/premium_photo-1681426669771-d2113672a49b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",c:"https://plus.unsplash.com/premium_photo-1673709635882-3bd099a72359?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  return (
    <>
    {/* <Hello username="Divyansh" textColor="yellow"></Hello> */}
    <div className="fel">
    <Card title="Kit" src={sr.c} descript={"good and durable"} oldprice={20000} newprice={18000}/>
    <Card title="genuin processor" src={sr.a} descript={"good and durable"} oldprice={50000} newprice={39009}/>
    <Card title="processor" src={sr.b} descript={"good and durable"} oldprice={45000} newprice={30090}/>
    </div>
    </>
  );
}

export default App;
