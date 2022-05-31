import React, { useState, createContext, useContext } from 'react'
import userApi from '../../utils/userApi'

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false)
  const [savedEmail, setSavedEmail] = useState('')

  const handleLogin = async (email, password) => {
    const success = await userApi.loginUser(email, password)

    if (success) {
      setUser(true)
      setSavedEmail(email)
    }

    return success
  }

  const handleLogout = () => {
    setUser(false)
  }

  const handleSignup = async (email, password) => {
    const success = await userApi.signupUser(email, password)

    return success
  }

  const loginData = {
    user,
    savedEmail,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onSignup: handleSignup,
  }

  return (
    <AuthContext.Provider value={loginData}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

// Helper hook to access auth info easier
export const useAuth = () => {
  return useContext(AuthContext)
}
