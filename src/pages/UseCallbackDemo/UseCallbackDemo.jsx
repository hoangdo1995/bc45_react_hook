import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallbackDemo = () => {
    const [number,setNumber] = useState(1);
    const [like,setLike] =  useState(1);
    const renderNumber = ()=>{
        return <div>
            {number}<i className='fa fa-user'></i>
        </div>
    }

    const renderNumberCallback = useCallback(renderNumber,[number]);
  return (
    <div className='container'>
        <h3>Number:{number}</h3>
        <button className="btn btn-dark" onClick={()=>{
            setNumber(number+1);
        }}>+</button>
        <Child renderNumber ={renderNumberCallback}/>
    </div>
    
  )
}

export default UseCallbackDemo