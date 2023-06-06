import React from 'react'
import { useState, useEffect } from 'react'

const UseEffectDemo = () => {
    const [number,setNumber] = useState(1);
    const [like,setLike] = useState(1);
    console.log('render');
    //Trường hợp 1: useEffect 1 tham số
    useEffect(()=>{
        //useEffect chạy lần đầu tiên và mỗi khi state thay đổi
        console.log('useEffect run');
        //Không setState tại đây muốn set phảu có điều kiện if để chặn
        //Giong lifeCycle componentDidMount + ComponentDidUpdate
    })

    useEffect(()=>{
        //useEffect dùng cho các api dạng getDetail (ComponentDidUpdate)
        console.log('useEffect dep')
    },[like])
    useEffect(()=>{
        //useEffect tương tự ComponentDidMount => thường dũng cho api Call
        console.log('useEffect dep[]');
        
        return () => {
            //Kích hoạt khi component mất khỏi giao diện
            //clear các biến chạy ngầm
            console.log('will unmount')
        }
    },[])

  return (
    <div className="container">
        <h3>Number: {number}</h3>
        <button className="btn btn-dark" onClick={()=>{
            setNumber(number+1);
        }}>+</button>
        <hr />
        <h3>Like:{like}</h3>
        <button className="btn btn-danger" onClick={()=>{
            setLike(like+1);
        }}><i className='fa fa-heart fs-3'></i></button>
    </div>
    

  )
}

export default UseEffectDemo