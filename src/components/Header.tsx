import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine, RiUserLine } from 'react-icons/ri';

export default function Header() {
    return (
        <Flex
            w="100%"
            as="header"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            align="center"
            px="6"
        >
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
                dashgo
                <Text as="span" color="pink.500" ml="1">
                    .
                </Text>
            </Text>

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

            <Flex align="center" ml="auto">
                <HStack
                    spacing="8"
                    mx="8"
                    pr="8"
                    py="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"
                >
                    <Icon as={RiNotificationLine} fontSize="20" />
                    <Icon as={RiUserLine} fontSize="20" />
                </HStack>

                <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text>Daniel Pisati</Text>
                        <Text color="gray.300" fontSize="small">
                            myemail@gmail.com
                        </Text>
                    </Box>

                    <Avatar
                        size="md"
                        name="Daniel Pisati"
                        src="https://github.com/dpisati.png"
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}
