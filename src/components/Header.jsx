import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
      zIndex={'overlay'}
        pos={"fixed"}
        top={4}
        left={4}
        colorScheme="purple"
        p={0}
        h={10}
        w={10}
        borderRadius={"full"}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={20} top />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={"/"}>Home</Link>{" "}
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={"/videos"}>Vedios</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={"/vedios?category=free"}>Free Vedios</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={"/upload"}>Upload Vedio</Link>
              </Button>
            </VStack>
            <HStack
              pos={"absolute"}
              bottom={10}
              w={"full"}
              left={0}
              justifyContent={"space-evenly"}
              alignItems={"flex-start"}
            >
              <Button onClick={onClose} colorScheme="purple">
                <Link to={"/login"}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={"outline"}
              >
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
