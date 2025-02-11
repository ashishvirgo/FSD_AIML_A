import React from 'react'
import { useState,useEffect } from 'react';
const Dashboard = () => {
    const [recipes,setRecipes]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState();
    useEffect(()=>{
         const url='https://dummyjson.com/recipes';
         const res=fetch(url);
         res.then((res)=>res.json())
         .then((data)=>{
            console.log(data);
               setRecipes(data.recipes);
               setLoading(false);
         })
         .catch((err)=>{
            setError(err.message);
            setLoading(false);
            console.log("Unexpected Error",err)
         })
    },[])
  return (
    <div>
      <h1>Menu</h1>
      
       {loading && <p>loading ...</p>}
       {error && <p>{error}</p>}
       {!error && !loading && (
        <div>
            <table>
                <tr>
                    <th>&nbsp;</th>
                    <th>Recipe Name</th>
                    <th>Cuisine</th>
                    <th>rating</th>
                    <th>price</th>
                    <th>Action</th>
                </tr>
            {
                recipes.map((r)=>(
                <tr>
                    <td><img src={r.image} width="100" height="50"></img></td>
                    <td>{r.name}</td>
                    <td>{r.cuisine}</td>
                    <td>{r.rating}</td>
                    <td>120/-</td>
                    <td><button>Add to Cart</button></td>
                </tr>
                ))
            }
            </table>
        </div>    
       )}
    
      
    </div>
  )
}

export default Dashboard
