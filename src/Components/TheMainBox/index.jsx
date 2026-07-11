import React from 'react'
import styles from "./mainBox.module.scss"
import DefaultEmails from '../DefaultEmails'
import Input from '../Input'
function MainBox() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      
    <div className={styles.main}>
     
     <Input/>
     
    </div>
    </div>
  )
}

export default MainBox
