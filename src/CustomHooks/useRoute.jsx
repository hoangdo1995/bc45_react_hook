import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const useRoute = () => {
    const params = useParams();//lay tham so tren url
    const navigate = useNavigate();//dung chuyen huong trang trong function
    const [searchParam, setSearchParams] = useSearchParams(); // lay va gan tham so tren ulr
  return {
    params:params,
    navigate,
    searchParam
  }
}

export default useRoute