import React,{memo} from 'react'

const Child = (props) => {
    console.log('child');

  return (
    <div className='bg-dark text-white fs-3 p-3 text-center'>Child
    <p>props number:{props.renderNumber()}</p></div>
  )
}

export default memo(Child)