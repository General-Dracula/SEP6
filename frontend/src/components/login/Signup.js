import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthProvider'
import passwordStrength from 'pwd-strength'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [pwdReq, setPwdReq] = useState({})
  const [error, setError] = useState('')
  const login = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const result = passwordStrength(password, { minSpecialChars: 0 })
    setPwdReq(result)
  }, [password])

  const handleEmailInput = ({ target: { value } }) => {
    setEmail(value)
  }

  const handlePasswordInput = ({ target: { value } }) => {
    setPassword(value)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    if (pwdReq.success) {
      const success = await login.onSignup(email, password)
      if (success) {
        navigate('/login')
        setEmail('')
        setPassword('')
      } else {
        setError('User already present or invalid email')
      }
    } else {
      setError('Password must fulfill the requirements')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Email:
          <input
            id="username"
            type="text"
            name="Username"
            value={email}
            onChange={handleEmailInput}
          />
        </div>
        <div>
          Password:
          <input
            id="password"
            type="password"
            name="Password"
            value={password}
            onChange={handlePasswordInput}
          />
        </div>
        <button id="loginButton" type="submit">
          Sign up
        </button>
      </form>
      <p>
        {pwdReq.success ? 'Password meets the requirements' : pwdReq.message}
      </p>
      <p>{error}</p>
    </div>
  )
}

export default Signup
