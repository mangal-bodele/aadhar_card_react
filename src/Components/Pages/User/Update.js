import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

function Update() {
    const {register,setValue,handleSubmit} = useForm()
    const {userId} = useParams()
    const navi = useNavigate()

    async function fetchdata(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`)
        setValue('aadhar',result.data.aadhar)
        setValue('name',result.data.name)
        setValue('address',result.data.address)
        setValue('age',result.data.age)
        setValue('gender',result.data.gender)
    }
    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`,data)
        navi('/Show')
    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div className='container col-4 border border-3 mt-5  '>
      <form className='add-form p-3 mt-3 m-auto' onSubmit={handleSubmit(saveData)}>
        <h3>Aadhar Card Update Form</h3>
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
        <input type='submit' value='Update'className='btn btn-success col-3 '/>
        <input type='reset'className='btn btn-danger  col-3 float-end'/>
      </form>
    </div>
  )
}

export default Update