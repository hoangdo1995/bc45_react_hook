import React, { useRef, useState } from 'react'

/*
    +useref:
        Tương tự như useState dùng để lưu lại giá trị sau mỗi lần component render, tuy nhiên khi ref thây đổi giao diện không phải render lại.
*/
const UseRefDemo = () => {
    // let [useLogin,setUseLogin] = useState({
    //     usename:'',
    //     password:''
    // })
    const userLoginRef = useRef({
        usename:'',
        password:''
    })
    console.log('userLogin',userLoginRef.current);
    const handleChange=(e)=>{
        let {id,value} =  e.target;
        // setUseLogin({...useLogin,[id]:value});
        userLoginRef.current[id] = value
        
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
    }

  return (
    <form className='container' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
            <p>User Name</p>
            <input type="text" className="form-control" id='usename' onChange={handleChange} />
        </div>
        <div className="form-group">
            <p>Password</p>
            <input type="password" className="form-control" id='password' onChange={handleChange}/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-success">Login</button>
        </div>

    </form>
  )
}

export default UseRefDemo