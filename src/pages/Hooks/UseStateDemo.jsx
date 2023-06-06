import React,{useState} from 'react'

const UseStateDemo = () => {
    const [number,setNumber] = useState(1);
    const [img,setImg] = useState('https://i.pravatar.cc?u=1');
    const [fontSize,setFontSize] = useState(16);
    
    const changeFontSize = (value)=>{
        setFontSize(fontSize+value)
    }
  return (
    <div className='container'>
        <h4>Ví dụ 1</h4>
        <h3>Number:{number}</h3>
        <button className="btn btn-dark" onClick={()=>{
            setNumber(number+1);
        }}>+</button>
        <hr />
        <div className="mt-2">
            <h3>Ví dụ 2:</h3>
            <div className="card w-25">
                <img src={img} alt="..." />
                <div className="card-body">
                    <button className="btn btn-dark" onClick={()=>{
                        let newUrl = `https://i.pravatar.cc?u=${Math.floor(Math.random()*100)}`;
                        setImg(newUrl);
                    }}>Random</button>
                </div>
            </div>
        </div>
        <hr />
        <div className="mt-2">
            <h3>Vi du 3:</h3>
            <p style={{fontSize}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, accusantium!</p>
            <button className="btn btn-dark mx-2" onClick={()=>{
                changeFontSize(-1)
            }}>-</button>
            <button className="btn btn-dark" onClick={()=>{
                changeFontSize(1);
            }}>+</button>
        </div>
    </div>
  )
}

export default UseStateDemo