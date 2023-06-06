//rafce
import React,{ useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';

const Home = () => {
  const [arrProduct, setArrProduct] = useState([]);
  const getProductApi = async ()=>{
    const res = await axios({
      url:'https://shop.cyberlearn.vn/api/Product',
      method:'GET'
    })
    setArrProduct(res.data.content);
    console.log(res.data.content);
  }
  useEffect(()=>{
    getProductApi();
  },[])
  return (
    <div className='container'>
      <h3>ShoeShop</h3>
      <div className="row">
        {arrProduct.map((item,index)=>{
           return <div className="col-4 mt-3" key={index}>
          <div className="card">
            <img src={item.image} alt="" />
            <div className="card-body">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <NavLink className='btn btn-dark' to={`/detail/${item.id}`}>View Detail</NavLink>
            </div>
          </div>
        </div>
        })}
      </div>
    </div>
  )
}

export default Home