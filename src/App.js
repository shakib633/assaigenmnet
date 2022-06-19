import { useEffect, useState } from 'react';
import './App.css';
import { DotLoader  } from 'react-spinners';
import { css } from "@emotion/react";

function App() {

  const [user, setUser]=useState([])
  const [order, setOrder]=useState('')


  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  useEffect(()=>{
     fetch(`http://localhost:5000/user`)
     .then(res=>res.json())
     .then(data=>setUser(data))
  },[])
  useEffect(()=>{
     fetch(`http://localhost:5000/order`)
     .then(res=>res.json())
     .then(data=>setOrder(data))
  },[])
console.log(order);

if (order.length ===0){
return  <div className='h-screen flex items-center	'>
           <DotLoader
               css={override} loading size={250} color="red" />
       </div>
}
if (user.length ===0){
return  <div className='h-screen flex items-center	'>
           <DotLoader
               css={override} loading size={250} color="red" />
       </div>
}
  return (
    <div >
<div class="overflow-x-auto w-full">
  <table class="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <th> id</th>
        <th> Date</th>
        <th>Status</th>
        <th>Customer</th>
        <th>Purchased</th>
        <th>Revenue</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
              <div class="font-bold">{order[0]._id}</div>
             
            </div>
        </td>
        <td>
         {order[0].Created_date}
        </td>
        <td>{order[0].Status}</td>
        <td>{user[0].First_name}{user[0].Last_name}</td>
        <td>{order[0].Product_name}</td>
        
      </tr>
      
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
              <div class="font-bold">{order[1]._id}</div>
             
            </div>
        </td>
        <td>
         {order[1].Created_date}
        </td>
        <td>{order[1].Status}</td>
        <td>{user[0].First_name}{user[0].Last_name}</td>
        <td>{order[1].Product_name}</td>
        
      </tr>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
              <div class="font-bold">{order[2]._id}</div>
             
            </div>
        </td>
        <td>
         {order[2].Created_date}
        </td>
        <td>{order[2].Status}</td>
        <td>{user[0].First_name}{user[0].Last_name}</td>
        <td>{order[2].Product_name}</td>
        
      </tr>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
              <div class="font-bold">{order[3]._id}</div>
             
            </div>
        </td>
        <td>
         {order[3].Created_date}
        </td>
        <td>{order[3].Status}</td>
        <td>{user[1].First_name}{user[1].Last_name}</td>
        <td>{order[3].Product_name}</td>
        
      </tr>
      
      
    </tbody>
   
    
  </table>
</div>

    </div>
  );
}

export default App;
