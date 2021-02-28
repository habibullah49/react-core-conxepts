import React,{useEffect,useState} from 'react';
import './App.css';

function App() {
  const nayoks=['josim','habib','soron','shanto']
  const products=[
    {name:'Photoshop',prize:'$99.99'},
    {name:'Ilustator',prize:'$68.99'},
    {name:'PDF',prize:'$6.99'},
    {name:'PDF',prize:'$6.99'},
    {name:'PDF',prize:'$6.99'},
    {name:'PDF',prize:'$6.99'},
    {name:'PDF',prize:'$6.99'}

  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok =><li>{nayok}</li>)
          }
          {
            products.map(product=><li>{product.name} {product.prize}</li>)
          }
        </ul>
        {
          products.map(pd=><Product product={pd}></Product>)
        }
                                                  
      </header>
    </div>
  );
}
function Users(){
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Data:{users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Counter(){
  const [count,setCount]=useState(0);
  const handleIncrease=()=>setCount(count+1);

  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increse</button>
    </div>
  )

}

function Product(props){
  const ProductStyle={
    border:'1px solid gray',
    borderRadius:'10px',
    height:'250px',
    width:'300px',
    float:'left',
    color:'black',
    backgroundColor:'lightgray',
    margin:'10px'
  }
  const{name,prize}=props.product;
  return (
    <div style={ProductStyle}>
      <h3>Name: {name}</h3>
      <h5>Prize:{prize}</h5>
      <button>Buy Now</button>
    </div>
  )
}






export default App;
