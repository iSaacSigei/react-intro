import React from 'react'

const HomePage = ({data}) => {
const filteredData=data.filter((todo)=>todo.title==="Reading")
  return (
    <div>
        {
         filteredData.map((item)=>(
            <div>
                <h1>{item.title}</h1>
                <h3>{item.category}</h3>
                <p>{item.date}</p>
            </div>
         ))   
        }
    </div>
  )
}

export default HomePage