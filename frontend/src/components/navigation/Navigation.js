import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { colors } from '../../utils/constants'
import { getNrUserLast24 } from '../../utils/statsApi'
import { useAuth } from '../context/AuthProvider'
import { useStats } from '../context/StatsProvider'
import MovieFilter from '../movies/MovieFilter'
import NavItem from './NavItem'

const Navigation = () => {
  const { user, onLogout } = useAuth()
  const location = useLocation()

  const { nrVisitors } = useStats() 

  return (
    <Flex 
      bgColor={colors.nav} 
      w="100%" 
      px="1rem"
      pt='1rem' 
      borderRadius="0.5rem" 
      flexDir='column'
    >
      <nav>
        <Flex>
          <NavLink to={'/'}>
            <Image h="4rem" src="/moviecult_logo.png"/>
          </NavLink>
          <Flex
            w="100%"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Flex ml="2rem" gridGap="2rem">
              <NavItem to="/" title="Home" />
              <NavItem to={user ? '/favorites' : 'login'} title="Favorites" />
            </Flex>
            <Flex gridGap="2rem" mr="2rem" alignItems="center">
              {location.pathname === '/' && <MovieFilter />}
              {user ? (
                <NavItem to="/" title="Log out" onClick={() => onLogout()}>
                  Log out
                </NavItem>
              ) : (
                <NavItem to="/login" title="Log In" />
              )}
            </Flex>
          </Flex>
        </Flex>
      </nav>
      <Flex justifyContent='end' pb='0.5rem'>
        <Text m='0' fontSize='smaller' fontStyle='italic'>
          Visits in the last 24 hours: {nrVisitors} 
        </Text>
      </Flex>
    </Flex>
  )
}

export default Navigation
