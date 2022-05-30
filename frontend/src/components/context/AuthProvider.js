import React, { useState, createContext } from 'react'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false)

  const handleLogin = async () => {
    setUser(true)
  }

  const handleLogout = () => {
    setUser(false)
  }

  const loginData = {
    user,
    onLogin: handleLogin,
    onLogout: handleLogout,
  }

  return (
    <AuthContext.Provider value={loginData}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
