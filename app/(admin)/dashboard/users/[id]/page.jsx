import React from 'react'

const userDetail = async ({params,searchParams}) => {
  
    const user = await fetch(`http://127.0.0.1:8000/api/user/${params.id}`
    ).then((res)=>res.json());
    console.log(params,searchParams)
  return (
    <div className='p-4'>
      <input type="text" name="name" id=""  value={user.name}/>
       {user.name}
      <pre>{JSON.stringify(user,null,2)}</pre>
    </div>
  )
}

export default userDetail;