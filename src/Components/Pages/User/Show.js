import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PencilSquare, Trash } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

function Show() {
  const [users, setUser] = useState([])

  async function fetchdata(){
    const result = await axios.get('http://localhost:5000/users')
    setUser(result.data)
  }
  useEffect(()=>{
    fetchdata();},[])
  return (
    <div className='container'>
      <table className='table col-10'>
        <thead>
          <tr className='table-dark'>
            <th>aadhar</th>
            <th>name</th>
            <th>address</th>
            <th>age</th>
            <th>gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='table-warning'>
          {
            users.map((obj)=>{
              return(
              <tr>
                <td>{obj.aadhar}</td>
                <td>{obj.name}</td>
                <td>{obj.address}</td>
                <td>{obj.age}</td>
                <td>{obj.gender}</td>
                <td>
                  <NavLink to={`/Update/${obj.id}`}><button className='btn btn-secondary' >Update<PencilSquare/></button>&nbsp;</NavLink>
                  <NavLink to={`/Delete/${obj.id}`}><button className='btn btn-secondary' >Delete<Trash/></button></NavLink>
                </td>
              </tr>
              )
            })
          }
        </tbody>

      </table>
    </div>
  )
}

export default Show