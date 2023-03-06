import React, { useState, useEffect } from "react";
import NavBar from "../Headers/NavBar";

const Table = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
       .then(setData) 
      console.log(setData)
     
  });
 
  return (
    <div>
        <NavBar/>
      <table className="table">
       <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
          </thead>
    
          {data.map((item, i) => {
           return ( 
            <tr key={i}>
                <td>{item.id} </td>
                <td>{item.name} </td>
                <td>{item.email}</td>
            </tr>
           )
          })}
     
      </table>
   
    </div>

    
  );
};

export default Table;
