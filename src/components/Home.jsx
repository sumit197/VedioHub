import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
import { Carousel } from "react-responsive-carousel";
const headingOption = {
  pos: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
};
function Home() {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={"container.xl"} minH={"100vh"} p={"16"}>
        <Heading
          textTransform={"uppercase"}
          borderBottom={"2px solid"}
          w={"max-content"}
          m={"auto"}
        >
          Services
        </Heading>
        <Stack
          h={"full"}
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />
          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab error
            aliquam, suscipit ipsam aliquid saepe a eligendi molestiae debitis
            voluptates sunt reprehenderit temporibus ad excepturi ut qui minus
            cupiditate illum?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iure accusamus quaerat quas autem quam obcaecati
            reprehenderit, ab ducimus! Fuga iste laboriosam omnis, accusamus cum
            similique maiores officia? Ex, sequi harum. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Harum, eum aliquid praesentium
            deserunt molestiae vel? Deleniti tempora eaque porro quidem, quos
            impedit quis magnam necessitatibus id sequi laborum est perferendis!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
  >
    <Box w="full" h={"100vh"}>
      <Image src={img1} h={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOption}>
        Watch The Future
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={"whiteAlpha.700"} color={"black"} {...headingOption}>
        future is gaming
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Image src={img3} h={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOption}>
        future is gaming
      </Heading>
    </Box>

    <Box w={"full"} h={"100vh"}>
      <Image src={img4} h={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOption}>
        night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
