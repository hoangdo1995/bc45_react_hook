import React, { useEffect } from 'react'
import useGetApi from '../../CustomHooks/useGetApi'
import axios from 'axios';
import { getFilms, getFilmsActionApi } from '../../redux/FilmsReducer';
import {useDispatch,useSelector} from 'react-redux'
const Films = () => {
    // const res = useGetApi('https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00');

    const {arrFilms} = useSelector(state=>state.FilmsReducer);
    const dispatchComponent =  useDispatch();
    const getProductApi = async()=>{
        
    const action = async(dispatch)=>{
        // let res = await axios({
        //     url:'http://movieapi.cyberlearn.vn/hinhanh/loki_gp01.png',
        //     method:'GET'
        // });
        // // sau khi lấy dử liệu thành công thì dispatch lên reducer

        // const action2 = getFilms(res.data.content);
        // // dispatch(action);

        const actionAcync = getFilmsActionApi;
        dispatchComponent(actionAcync);
    }
    }
    useEffect(()=>{
        getProductApi();
    },[]);
  return (
    <div className='container'>
        <h3>Films</h3>
        <div className="row">
            {arrFilms.content?.map((item,index)=>{
                return <div className="col-4" key={index}>
                    <div className='card'>
                        <img src={item.hinhAnh} alt="..." />
                        <div className="card-body">
                            <h3>{item.tenPhim}</h3>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Films