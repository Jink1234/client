import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Add = () => {

  const navigate =useNavigate();

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
  await axios.post('/books',book)
  navigate("/")

  }catch(err){
    console.log(err)
  }
}
  console.log(book)

  return (
    <div className='form'>
      <h1>Add New Book</h1>
      <input type='text' placeholder='title' name="title" onChange={handleChange}></input>
      <input type='text' placeholder='desc' name='desc' onChange={handleChange}></input>
      <input type='number' placeholder='price' name='price' onChange={handleChange}></input>
      <input type='text' placeholder='cover' name='image' onChange={handleChange}></input>
      <button className='formButton' onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default Add