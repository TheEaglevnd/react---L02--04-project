import React from 'react'
import DefaultEmails from '../DefaultEmails'
import { useState } from 'react'
import styles from "./input.module.scss"
function Input() {
     const [users, setUsers] = useState([]) 
     const [email , setEmail] = useState("")
     const [name , setName] = useState("")
     const handleClick = () => {
        if(!name || !email) return
                const newUser = {
                   id:Date.now() ,
                   name : name ,
                   email: email
                }
                setUsers([...users , newUser])
                setName("")
                setEmail("")
        
     }
  return (
    <div> 
        <h1 className='flex justify-center items-center text-center mt-5 font-bold text-3xl'>the Emails List</h1>
        
       <div className='flex flex-col  gap-3 justify-center items-center mt-10 bg-gray-400 py-8 rounded-xl'>
        <input placeholder='input the user Name'  className = {styles.name} 
        onChange = {(e) => {setName(e.target.value)} }  value={name} type="text"  /> 
        <input placeholder='input the user Email'  value={email} onChange = {(e) => {setEmail(e.target.value)} } 
               className = {styles.email} type="text" />
         <button className='flex justify-center items-center w-30 h-10 rounded-2xl bg-green-400/75
          hover:bg-green-400 hover:font-bold'
          onClick = {handleClick} >Add to list</button>
       </div>

       <DefaultEmails users = {users} setUsers = {setUsers}/>
    </div>
  )
}

export default Input

