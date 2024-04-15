import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import './User.css'

function Add() {
  const{register, handleSubmit} = useForm()

  function saveData(data){
    axios.post('http://localhost:5000/users',data)
    alert('record added')

  }
  return (
    <div className='container col-4 border border-3 mt-5  '>
      <form className='add-form p-3 mt-3 m-auto' onSubmit={handleSubmit(saveData)}>
      <center ><h3>Aadhar Card Form</h3></center>
        <br/>
        <label htmlFor='an'>Aadhar no:</label>
        <input type='number' id='an' className='form-control' {...register('aadhar')}/>
        <br/>
        <label htmlFor='nm'>Name:</label>
        <input type='text' id='nm' className='form-control' {...register('name')}/>
        <br/>
        <label htmlFor='ad'>Address:</label>
        <input type='text' id='ad' className='form-control' {...register('address')}/>
        <br/>
        <label htmlFor='ag'>Age:</label>
        <input type='number' id='ag' className='form-control' {...register('age')}/>
        <br/>
        <label htmlFor='g'>Gender:</label>
        <input type='text' id='g' className='form-control' {...register('gender')}/>
        <br/>
        <input type='submit'className='btn btn-success col-3 '/>
        <input type='reset'className='btn btn-danger  col-3 float-end'/>
      </form>
    </div>
  )
}

export default Add

