import axios from 'axios'
import React, { useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

function Delete() {
    const [user, setUser] = useState({})
    const {userId} = useParams()
    const navi =  useNavigate()
    async function fetchdata(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`)
        setUser(result.data)
    }
    function deleteUser(){
        axios.delete(`http://localhost:5000/users/${userId}`)
        navi('/Show')
    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div className='container border bg-success border-3 mt-5 col-5 p-3'>
        <center >
            <h3><u>DELETE CONFIRMATION</u></h3>
            <h5>do yoy really want to delete <span style={{'color':'rgb(249, 101, 234)'}}> {user.aadhar}-{user.name}</span> ??</h5>
            <button className='btn btn-primary' onClick={()=>{deleteUser()}}>YES</button>&nbsp;
            <NavLink to='/Show'><button className='btn btn-primary' >NO</button></NavLink>
        </center>
    </div>
  )
}

export default Delete