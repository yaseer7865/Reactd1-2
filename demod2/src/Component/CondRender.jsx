 import React from 'react'
 
 const CondRender = (islogged) => {
      if (islogged) {
         return <h1>Welcome</h1>
    } else {
        return <h1>Login Again</h1>
    }

   return (
     <div>
        {
        islogged? <h1>welcome jerry</h1>:<h1>Login failed</h1>

      }
       {
       islogged && <h1>welcome Tom </h1> || <h1>Login again </h1> 
       }


     </div>
   )
 }
 
 export default CondRender
 