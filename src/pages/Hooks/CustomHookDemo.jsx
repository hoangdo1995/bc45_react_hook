import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useGetApi from '../../CustomHooks/useGetApi';
import useRoute from '../../CustomHooks/useRoute';

const CustomHookDemo = () => {
const result = useGetApi('https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner');
const {params,navigate,searchParam} = useRoute();
console.log(params,navigate,searchParam);
  return (
    <div className='container'>
        {result.content?.map((item,index)=>{ return <div className="card" key={index}>
            <img src={item.hinhAnh} alt="..." />
        </div>
        })}
        
    </div>
  )
}

export default CustomHookDemo