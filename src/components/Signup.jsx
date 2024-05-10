import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <Container maxH={"container.xl"} h={"100vh"} p={16}>
    <form>
      <VStack
        alignItems={"stretch"}
        spacing={"8"}
        w={['full','96']}
        m={"auto"}
        my={"16"}
      >
        <Heading textAlign={'center'}>VIDEO HUB</Heading>
        <Avatar alignSelf={'center'} boxSize={'20'}/>
        <Input
          type="name"
          placeholder="name"
          required
          focusBorderColor="purple.500"
        />
        <Input
          type="email"
          placeholder="email"
          required
          focusBorderColor="purple.500"
        />
        <Input
          type="password"
          placeholder="password"
          required
          focusBorderColor="purple.500"
        />
      
        <Button colorScheme="purple" type="submit">
          Sign Up
        </Button>
        <Text textAlign={"right"}>
          Already a User?{" "}
          <Button variant={"link"} colorScheme="purple">
            <Link to={"/login"}>log in</Link>
          </Button>
        </Text>
      </VStack>
    </form>
  </Container>
  )
}
