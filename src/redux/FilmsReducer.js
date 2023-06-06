import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    arrFimls:[]
}

const FilmsReducer = createSlice({
  name: 'FilmsReducer',
  initialState,
  reducers: {
    getFilms:(state,action)=>{
        state.arrFimls =  action.payload;
    }
  }
});

export const {getFilms} = FilmsReducer.actions

export default FilmsReducer.reducer

export const getFilmsActionApi = (tenphim='')=>{
    let res;
    return async()=>{
    if(tenphim!=''){
        res = await axios({
            url:'http://movieapi.cyberlearn.vn/hinhanh/loki_gp01.png',
            method:'GET'
        });
    }
    else{
        res = await axios({
            url:'http://movieapi.cyberlearn.vn/hinhanh/loki_gp01.png',
            method:'GET'
        });
    }
}
    

    const action2 = getFilms(res.data.content);
    dispatchEvent(action2);
}

//Closure function

