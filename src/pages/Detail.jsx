import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Detail = () => {
    const [productDetail,setProductDetail] = useState({
        alias
: 
"adidas-prophere",
categories
: 
"[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
deleted
: 
false,
description
: 
"The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
feature
: 
true,
id
: 
1,
image
: 
"https://shop.cyberlearn.vn/images/adidas-prophere.png",
name
: 
"Adidas Prophere",
price
: 
350,
quantity
: 
995,
relatedProducts
: 
[
    {
      "id": 2,
      "name": "Adidas Prophere Black White",
      "alias": "adidas-prophere-black-white",
      "feature": false,
      "price": 450,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "image": "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
    },
    {
      "id": 3,
      "name": "Adidas Prophere Customize",
      "alias": "adidas-prophere-customize",
      "feature": false,
      "price": 375,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "image": "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png"
    },
    {
      "id": 5,
      "name": "Adidas Swift Run",
      "alias": "adidas-swift-run",
      "feature": false,
      "price": 550,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "image": "https://shop.cyberlearn.vn/images/adidas-swift-run.png"
    }
  ],
shortDescription
: 
"The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
size: "[36,37,38,39,40,41,42]"
    })
    const param = useParams();
    const getProductDetail=async()=>{
        const res = await axios({
            url:`//shop.cyberlearn.vn/api/Product/getbyid?id=${param.id}`,
            method:'GET'
        });
        console.log(res.data.content);
        setProductDetail(res.data.content)
    }
    useEffect(()=>{
        getProductDetail();
    },[param.id])
  return (
    <div className='container'>
        <div className="row mt-2">
            <div className="col-4">
                <div className="card">
                    <img src={productDetail.image} alt="..." />
                </div>
            </div>
            <div className="col-8">
                <h3>{productDetail.name}</h3>
                <p>{productDetail.description}</p>
                <button className="btn btn-dark">Add to carts</button>
            </div>
        </div>
        <div className="mt-2">
            <h3>Relate product</h3>
            <div className="row">
                {productDetail.relatedProducts.map((item,index)=>{
                    return <div className="col-4" key={index}>
                    <div className="card">
                        <img src={item.image} alt="..." />
                        <div className="card-body">
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                            <NavLink className='btn btn-dark' to={`/detail/${1}`}>View Detail</NavLink>
                        </div>
                    </div>
                </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Detail