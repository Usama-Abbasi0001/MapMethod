import React from 'react'

function MapMethod() {
    const data=[
        {
            id:1,name:"Usama Abbasi"
        },
        {
            id:2,name:"Umar Abbasi"
        },
        {
            id:3,name:"Abdul Ahad Abbasi"
        },
    ]
  return (
    <div>
        {
            data.map((MapMethod)=>(
                <div>{MapMethod.name}</div>
            ))
        }
    </div>
  )
}

export default MapMethod;