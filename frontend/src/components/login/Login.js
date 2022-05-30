import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { colors } from '../../utils/constants'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = event => {
    event.preventDefault()
    navigate('/')
  }

  return (
    <Flex
      bgColor={colors.text}
      p='3rem'
      flexDir='column'
      alignItems='center'
      borderRadius='1rem'
    >
      <Heading
        m='0'
        mb='2rem'
        color={colors.textInv}
      >
        LOGIN
      </Heading>
      <form onSubmit={handleLogin}>
        <Flex
          flexDir='column'
          gridGap='0.5rem'
        >

          <Box>
            <Text 
              color={colors.textInv}
              pl='0.5rem'
              fontWeight='bold'
            >
              Email
            </Text>
            <Input 
              id="username" 
              type="text" 
              name="Username" 
            
              bgColor={colors.card}
              color={colors.text}
              border='none'
              borderRadius='0.5rem'
              h='2rem'
              maxW='15rem'
              w='15rem'
              overflow='hidden'
            />
          </Box>
          <Box>
            <Text
              pl='0.5rem'
              color={colors.textInv}
              fontWeight='bold'
            >
              Password
            </Text>
            <Input 
              id="password" 
              type="password" 
              name="Password" 
            
              bgColor={colors.card}
              color={colors.text}
              border='none'
              borderRadius='0.5rem'
              h='2rem'
              maxW='15rem'
              w='15rem'
              overflow='hidden'
            />
          </Box>
          <Button 
            id="loginButton" 
            type="submit"
            border='none'
            borderRadius='3rem'
            h='2rem'
            mt='2rem'
            bgColor={colors.card}
            color={colors.text}
            _hover={{
              bgColor: colors.bg,
              cursor: 'pointer'
            }}
          >
            Login
          </Button>
        </Flex>
      </form>
      <Box
        mt='0.5rem'
      >
        <NavLink
          to='/'
        >
          Don't have an account yet?
        </NavLink>
      </Box>
    </Flex>
  )
}

export default Login
