import React, { useState, createContext, useContext, useEffect } from 'react'
import { getStats } from '../../utils/statsApi'

export const StatsContext = createContext(null)

const StatsProvider = ({ children }) => {
  
  
  const [stats, setStats] = useState(0)

  useEffect(() => {
    const getStatsFromApi = async () => {
      setStats(await getStats())
    }

    getStatsFromApi()
  }, [])

  const statsData = {
    'nrVisitors': stats['nr_visitors'] 
  }

  return (
    <StatsContext.Provider value={statsData}>{children}</StatsContext.Provider>
  )
}

export default StatsProvider

// Helper hook to access search info easier
export const useStats = () => {
  return useContext(StatsContext)
} 