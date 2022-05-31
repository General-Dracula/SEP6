import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthProvider'
import passwordStrength from 'pwd-strength'
import { NavLink, useNavigate } from 'react-router-dom'
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import { colors } from '../../utils/constants'

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
    <Flex
      bgColor={colors.nav}
      p="3rem"
      flexDir="column"
      alignItems="center"
      borderRadius="1rem"
      my='auto'
    >
      <Heading m="0" mb="2rem" color={colors.text}>
        SIGN UP
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex flexDir="column" gridGap="0.5rem">
          <Box>
            <Text color={colors.text} pl="0.5rem" fontWeight="bold">
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
              px="1rem"
              overflow="hidden"
            />
          </Box>
          <Box>
            <Text pl="0.5rem" color={colors.text} fontWeight="bold">
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
              px="1rem"
              overflow="hidden"
            />
          </Box>
            <Text margin='auto'>
               {pwdReq.success ? 'Password meets the requirements' : pwdReq.message}
            </Text>
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
            Sign up
          </Button>
        </Flex>
      </form>
      <Box mt="0.5rem">
        <NavLink to="/login" style={{color: colors.text}}>Log in with account?</NavLink>
      </Box>
      <Box>
        <p style={{ color: 'black' }}>{error}</p>
      </Box>
    </Flex>
  )
}

export default Signup
