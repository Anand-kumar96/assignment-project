import React from 'react'
import '../App.css'
import { BiUserCircle } from 'react-icons/bi'
const ToggleItems = ({data}) => {
  return data.map((item,index) => {
    return (
      <div className="toggleContainer" key={index}>
        <div>
          <BiUserCircle
            style={{ height: '50px', width: '50px'}}
          />
        </div>
       <div> <h3>{item.name}</h3></div>
       <div> <h3>{item.age}</h3></div>
       <div> <h4>{item.occupation}</h4></div>
      </div>
    )
  })
}

export default ToggleItems