import React, { useState } from 'react'
import TableComponent from './TableComponent'
import NavigationBar from './NavigationBar'
const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleLogin = (event) => {
    event.preventDefault()

    if (username === 'demo@coralmango.com' && password === 'demo123') {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
      setErrorMessage('Invalid Credentials!')
    }
  }

  return (
    <div>
      {isLoggedIn ? (
        <>
          <NavigationBar />
          <TableComponent />
        </>
      ) : (
        <div>
          <h2 style={{ marginLeft: '60px', marginBlockEnd: '5px' }}>
            Login to the page
          </h2>
          <form className="login" onSubmit={handleLogin}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button
              className="btn"
              style={{
                margin: '10px 30px 0px 100px',
                padding: '3px 10px',
                borderRadius: '3px',
              }}
              type="submit"
            >
              Login
            </button>
            {errorMessage && <div>{errorMessage}</div>}
          </form>
        </div>
      )}
    </div>
  )
}

export default LoginPage
