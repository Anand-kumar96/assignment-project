import React from 'react'
import ToggleItems from './CardList'
const ToggleView = ({data}) => {
  return (
    <>
      <h2 style={{ marginLeft: '42vw', marginBlockEnd: '5px' }}>
        Sorted data as CardList
      </h2>
      <div className="ToggleItems">
        <ToggleItems data={data} />
      </div>
    </>
  )
}

export default ToggleView