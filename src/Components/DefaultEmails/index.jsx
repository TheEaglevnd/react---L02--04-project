import React from 'react'
import styles from "./defaultEmails.module.scss"
import { useEffect, useState } from 'react'
function DefaultEmails({users , setUsers}) {
 
   const useeffect =  useEffect( () =>{ fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then(data => { 
    setUsers(data) ;
     setLoading(false) ;


   }).catch((err)=> { return (setError(err) , setLoading(false)) }
   )},[])
  

   const [user , setUser ]  = useState({id : null , name : "" , email : ""})
   
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

  return (
    <div>
        
       <div className={styles.error}>{error ? `the page cannot be loaded beacause of ${error}`:null}</div>
       <div className={styles.loading}>{loading=== true ? "loading...": null}</div> 
         <div>
             <div className='overflow-hidden rounded-2xl'>
           <table>

             <thead className={styles.thead}>
            <tr className=''>
              <th className='p-3 '>Id</th>
              <th> full Name</th>
              <th>Email</th>
              <th>Delete Btn</th>
            </tr>
            </thead>
            <tbody>
                {users.map( (item , index) => (
                    <tr key={item.id}>
                        <td >{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td><button  className={styles.btn}
                        onClick={ () => { const filter = users.filter((itm) => { 
                         return itm.id !== item.id
                          
                        })  ; setUsers(filter)}}
                        >Delete</button></td>
                    </tr>
                    
                )
     
                )}
            </tbody>
             
           </table>
           </div>
         </div>
    </div>
  )
}

export default DefaultEmails
