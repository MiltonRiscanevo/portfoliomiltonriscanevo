import React from 'react'
import "./first_page.css"


const First_page = () => {
  
    const titleArr=()=>{
      let title ="You see this pages? Is great!!"
      const arr = title.split(" ")
      const firstWord=arr.map(e=>{<div>{e}</div>})
      return firstWord
    }  
  
      
    console.log(titleArr());

    
  return (
    <div className='hero'>      
      <div className='rows'>
        <h1 className='title_page1'>You see this pages? Is great!!</h1>
        <p className='phrase_page1'>Praesent molestie sapien est, eget scelerisque felis sagittis sit amet. 
          Vivamus dui dui, imperdiet non facilisis eget, commodo a enim.
          Nulla viverra sem dui, in efficitur urna suscipit sit amet.
        </p>
      </div>
      <div className='image_page1'></div> 
    </div>
  )
}

export default First_page