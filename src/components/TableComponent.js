import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import ToggleView from './ToggleView'

const TableComponent = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isFiltered, setIsFiltered] = useState(false)
  const [isToggle, setToggle] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://coralmango.com/api/react-test')
      console.log(response.data)
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase()
    setSearchQuery(query)
    if (query === '') {
      setFilteredData([])
      setIsFiltered(false)
    } else {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(query)
      )
      setFilteredData(filtered)
      setIsFiltered(true)
    }
  }

  const handleSort = (val) => {
    const sortedData = [...data].sort((a, b) => {
      if (a[val] < b[val]) return -1
      if (a[val] > b[val]) return 1
      return 0
    })
    setData(sortedData)
  }
  const handleToggle = () => {
    setToggle(!isToggle)
  }

  return (
    <>
      {isToggle ? (
        <ToggleView data={isFiltered ? filteredData : data} />
      ) : (
        <div>
          <h2 style={{ marginLeft: '42vw', marginBlockEnd: '5px' }}>
            Search and Sort the data
          </h2>
          <div className="container">
            <input
              style={{
                width: '40vh',
                padding: '5px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontSize: '15px',
              }}
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={handleSearch}
            />
            {isFiltered && <div>You are viewing filtered results!</div>}
            <table>
              <thead>
                <tr>
                  <th className="name" onClick={() => handleSort('name')}>
                    Name
                  </th>
                  <th className="age" onClick={() => handleSort('age')}>
                    Age
                  </th>
                  <th className="occupation"> Occupation </th>
                </tr>
              </thead>
              <tbody>
                {(searchQuery ? filteredData : data).map((item, index) => (
                  <tr key={index}>
                    <td style={{ paddingLeft: '15px', fontSize: '16px' }}>
                      {item.name}
                    </td>
                    <td style={{ paddingLeft: '15px', fontSize: '16px' }}>
                      {item.age}
                    </td>
                    <td style={{ paddingLeft: '15px', fontSize: '16px' }}>
                      {item.occupation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div>
        <button
          onClick={handleToggle}
          className='toggleBtn'
        >
          toggle
        </button>
      </div>
    </>
  )
}
export default TableComponent
