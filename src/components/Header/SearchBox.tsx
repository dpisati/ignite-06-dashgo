import { Flex, Icon, Input } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { RiSearchLine } from 'react-icons/ri';

export default function SearchBox() {
    return (
        <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxWidth={400}
            alignSelf="center"
            color="gray.200"
            position="relative"
            bg="gray.800"
            borderRadius="full"
        >
            <Input
                color="gray.50"
                px="4"
                mr="4"
                variant="unstyled"
                placeholder="Search..."
                _placeholder={{ color: 'gray.400' }}
            />
            <Icon as={RiSearchLine} fontSize="20" />
        </Flex>
    );
}
