import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import { NavLink, useNavigate } from 'react-router-dom'
import { colors } from '../../utils/constants'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const login = useAuth()
  const navigate = useNavigate()

  const handleEmailInput = ({ target: { value } }) => {
    setEmail(value)
  }

  const handlePasswordInput = ({ target: { value } }) => {
    setPassword(value)
  }

  const handleLogin = async event => {
    event.preventDefault()

    const success = await login.onLogin(email, password)
    if (success) {
      navigate('/')
      setEmail('')
      setPassword('')
    } else {
      setError('Invalid password')
      setEmail('')
      setPassword('')
    }
  }

  return (
    <Flex
      bgColor={colors.text}
      p="3rem"
      flexDir="column"
      alignItems="center"
      borderRadius="1rem"
    >
      <Heading m="0" mb="2rem" color={colors.textInv}>
        LOGIN
      </Heading>
      <form onSubmit={handleLogin}>
        <Flex flexDir="column" gridGap="0.5rem">
          <Box>
            <Text color={colors.textInv} pl="0.5rem" fontWeight="bold">
              Email
            </Text>
            <Input
              value={email}
              onChange={handleEmailInput}
              id="username"
              type="text"
              name="Username"
              bgColor={colors.card}
              color={colors.text}
              border="none"
              borderRadius="0.5rem"
              h="2rem"
              maxW="15rem"
              w="15rem"
              overflow="hidden"
            />
          </Box>
          <Box>
            <Text pl="0.5rem" color={colors.textInv} fontWeight="bold">
              Password
            </Text>
            <Input
              value={password}
              onChange={handlePasswordInput}
              id="password"
              type="password"
              name="Password"
              bgColor={colors.card}
              color={colors.text}
              border="none"
              borderRadius="0.5rem"
              h="2rem"
              maxW="15rem"
              w="15rem"
              overflow="hidden"
            />
          </Box>
          <Button
            id="loginButton"
            type="submit"
            border="none"
            borderRadius="3rem"
            h="2rem"
            mt="2rem"
            bgColor={colors.card}
            color={colors.text}
            _hover={{
              bgColor: colors.bg,
              cursor: 'pointer',
            }}
          >
            Login
          </Button>
        </Flex>
      </form>
      <Box mt="0.5rem">
        <NavLink to="/signup">Don't have an account yet?</NavLink>
      </Box>
      <Box>
        <p style={{ color: 'black' }}>{error}</p>
      </Box>
    </Flex>
  )
}

export default Login
