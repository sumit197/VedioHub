import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
          <Heading textAlign={'center'}>Welcome back</Heading>
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
          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to={"/forgetpassword"}>Forget Password</Link>
          </Button>
          <Button colorScheme="purple" type="submit">
            Log in
          </Button>
          <Text textAlign={"right"}>
            New User?{" "}
            <Button variant={"link"} colorScheme="purple">
              <Link to={"/signup"}>SignUp</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
