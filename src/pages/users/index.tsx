import {
    Box,
    Button,
    Checkbox,
    Flex,
    Heading,
    Icon,
    Spinner,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import Sidebar from '../../components/SideBar';

import { useUsers } from '../../services/hooks/useUsers';

export type User = {
    id: string;
    name: string;
    email: string;
    created_at: string;
};

export default function UserList() {
    const [page, setPage] = useState(1);

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    const { data, isLoading, error, isFetching } = useUsers();

    return (
        <Box>
            <Header />
            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px={['4', '4', '6']}
            >
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Users
                            {isFetching && !isLoading && (
                                <Spinner ml="4" size="sm" color="gray.500" />
                            )}
                        </Heading>
                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={
                                    <Icon as={RiAddLine} fontSize="20"></Icon>
                                }
                            >
                                Create new
                            </Button>
                        </Link>
                    </Flex>

                    {isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Fail to load users</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme="whiteAlpha">
                                <Thead>
                                    <Tr>
                                        <Th
                                            px={['4', '4', '6']}
                                            color="gray.300"
                                            width="8"
                                        >
                                            <Checkbox colorScheme="pink" />
                                        </Th>
                                        <Th>User</Th>
                                        {isWideVersion && <Th>Created At</Th>}
                                        <Th width="8"></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data?.map((user) => (
                                        <Tr>
                                            <Td px={['4', '4', '6']}>
                                                <Checkbox colorScheme="pink" />
                                            </Td>
                                            <Td>
                                                <Box>
                                                    <Text fontWeight="bold">
                                                        {user.name}
                                                    </Text>
                                                    <Text
                                                        fontSize="sm"
                                                        color="gray.300"
                                                    >
                                                        {user.email}
                                                    </Text>
                                                </Box>
                                            </Td>
                                            {isWideVersion && (
                                                <Td>{user.created_at}</Td>
                                            )}
                                            {isWideVersion && (
                                                <Td>
                                                    {' '}
                                                    <Button
                                                        as="a"
                                                        size="sm"
                                                        fontSize="sm"
                                                        colorScheme="purple"
                                                        leftIcon={
                                                            <Icon
                                                                as={
                                                                    RiPencilLine
                                                                }
                                                                fontSize="16"
                                                            ></Icon>
                                                        }
                                                    >
                                                        Edit
                                                    </Button>
                                                </Td>
                                            )}
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                            <Pagination
                                totalNumberOfRegisters={200}
                                currentPage={page}
                                onPageChange={setPage}
                            />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    );
}
