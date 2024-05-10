import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { Form } from 'react-router-dom'

export const Upload = () => {
  return (
<Container maxW={'container.xl'} h={'100vh'}>
    <VStack color={'purple.500'} h={'full'} justifyContent={'center'} >
        <AiOutlineCloudUpload size={'15vmax'}/>
        <form>
        <HStack>
            <Input required type='file' css={{
                '&::file-selector-button':{
                    border:'none',
                  width:'calc(100% + 36px)',
                  height:"100%",
                  marginLeft:'-18px',
                  color:'purple',
                  backgroundColor:'white',
                  cursor:'pointer'
                }
            }}/>
            <Button  type='submit' colorScheme='purple' >upload</Button>
            </HStack>
        </form>
    </VStack>
</Container>
  )
}
