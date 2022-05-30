import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { colors } from '../../utils/constants'
import { useAuth } from '../context/AuthProvider'
import MovieFilter from '../movies/MovieFilter'
import NavItem from './NavItem'

const Navigation = () => {

  const {user} = useAuth()

  return (
    <Box
      bgColor={colors.nav}
      w='100%'
      p='1rem'
      borderRadius='0.5rem'
      
    >
    
      <nav>
        <Flex> 
        <NavLink to={'/'} >
          <Image
            h='4rem'
            src='/moviecult_logo.png'
          />
        </NavLink>
          <Flex
            w='100%'
            alignItems='center'
            justifyContent='space-between'
            flexWrap='wrap'
          >
            <Flex
              ml='2rem'
              gridGap='2rem'
            >

              <NavItem 
                to='/'
                title='Home'
              />
              <NavItem 
                to={user ? '/' : 'login'}
                title='Favorites'
              /> 
            </Flex>
            <Flex
              gridGap='2rem'
              mr='2rem'
              alignItems='center'
            >
              <MovieFilter />
              <NavItem 
                to='/login'
                title='Log In'
              />
            </Flex>
          </Flex>
        </Flex>
      </nav>
    </Box>
  )
}

export default Navigation
