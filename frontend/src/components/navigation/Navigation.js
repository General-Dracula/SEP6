import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { colors } from '../../utils/constants'
import NavItem from './NavItem'

const Navigation = () => {
  return (
    <Box
      bgColor={colors.nav}
      w='100%'
      p='1rem'
      borderRadius='0.5rem'
      
    >

    <nav>
      <Flex
  
      > 
        <NavItem 
          to='/login'
          title='Log In'
        />
      </Flex>
    </nav>
  </Box>
  )
}

export default Navigation
