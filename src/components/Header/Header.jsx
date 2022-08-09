import { Heading, Stack, Flex, Link, IconButton, Box } from '@chakra-ui/react';
import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export default function Header() {
  return (
    <Box marginY="17%" marginLeft="6%">
      <Stack spacing={2}>
        <Heading as="h1" size="xl" noOfLines={1}>
          Yeison Villegas
        </Heading>
        <Heading as="h2" size="lg" noOfLines={1}>
          Fullstack Web Developer
        </Heading>
        <Flex>
          <Link href="https://github.com/soyeison" isExternal>
            <IconButton
              aria-label="Github icon"
              icon={<GoMarkGithub />}
              fontSize="25px"
              variant="ghost"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/yeisonvillegas/" isExternal>
            <IconButton
              aria-label="Linkedin icon"
              icon={<TiSocialLinkedinCircular />}
              fontSize="38px"
              variant="ghost"
            />
          </Link>
          <Link href="https://wa.link/pfzds1" isExternal>
            <IconButton
              aria-label="Linkedin icon"
              icon={<AiOutlineWhatsApp />}
              fontSize="32px"
              variant="ghost"
            />
          </Link>
        </Flex>
      </Stack>
    </Box>
  );
}
