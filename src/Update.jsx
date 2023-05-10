import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios";

const Update = () => {

  const navigate =useNavigate();
  const location=useLocation();
  const bookId=location.pathname.split('/')[2];
  

const[book,setBook]=useState({
  title:"",
  desc:"",
  price:null,
  image:""
})

const handleChange=(e)=>{
  setBook((prev) => ({...prev, [e.target.name]:e.target.value}));
  // setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
}

const handleSubmit=async(e)=>{
  e.preventDefault();
  try{
  await axios.put('/books/'+bookId,book)
  navigate("/")

  }catch(err){
    console.log(err)
  }
}
  // console.log(book)

  return (
    <div className='form'>
      <h1>Update the Book</h1>
      <input type='text' placeholder='title' name="title" onChange={handleChange}></input>
      <input type='text' placeholder='desc' name='desc' onChange={handleChange}></input>
      <input type='number' placeholder='price' name='price' onChange={handleChange}></input>
      <input type='text' placeholder='cover' name='image' onChange={handleChange}></input>
      <button className='formButton' onClick={handleSubmit}>Update</button>
    </div>
  )
}

export default Update