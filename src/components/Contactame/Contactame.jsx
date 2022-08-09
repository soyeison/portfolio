import {
  HStack,
  VStack,
  Box,
  Heading,
  Button,
  Center,
  FormControl,
  Input,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Text,
  ModalFooter,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import React from 'react';

export default function Contactame() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  emailjs.init('gkomV3Rc_LR5n-EES');
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      descripcion: '',
    },
    onSubmit: values => {
      onOpen();
      emailjs
        .send('service_abutz5m', 'template_7cc28so', values)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
  });
  return (
    <>
      <HStack
        id="Contactame"
        justifyContent="center"
        spacing={10}
        marginY="100px"
      >
        <Center h="500px" w="25%">
          <VStack display={{ base: 'none', sm: 'block' }}>
            <Heading>Dejame un comentario.</Heading>
            <Heading>Me gustaría escuchar tu opinión.</Heading>
          </VStack>
        </Center>

        <Box p={{ md: 0, lg: 8 }} w="600px" position="relative" right="40px">
          <Heading color="brand.tercero" mb="1em" size="lg">
            Contactame
          </Heading>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl>
                <Input
                  id="name"
                  name="nombre"
                  type="text"
                  placeholder="Nombre"
                  onChange={formik.handleChange}
                  value={formik.values.nombre}
                />
              </FormControl>
              <FormControl>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </FormControl>
              <FormControl>
                <Textarea
                  placeholder="Agrega tu mensaje aquí"
                  id="descripcion"
                  name="descripcion"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.descripcion}
                />
              </FormControl>
              <Button
                type="submit"
                variant="solid"
                size="md"
                bg="brand.primero"
                color="brand.segundo"
                mt="24px"
                fontWeight="light"
              >
                Enviar mensaje
              </Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Estado del mensaje</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>Mensaje enviado con éxito</Text>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </VStack>
          </form>
        </Box>
      </HStack>
    </>
  );
}
