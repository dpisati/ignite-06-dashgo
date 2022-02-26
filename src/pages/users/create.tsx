import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    HStack,
    SimpleGrid,
    VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Input } from '../../components/Form/Input';
import Header from '../../components/Header';
import Sidebar from '../../components/SideBar';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    password_confirmation: yup
        .string()
        .oneOf([null, yup.ref('password')], 'Passwords must match'),
});

export default function CreateUser() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema),
    });

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
        values
    ) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('🚀 ~ SignIn ~ values', values);
    };

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box
                    as="form"
                    onSubmit={handleSubmit(handleCreateUser)}
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p={['6', '8']}
                >
                    <Heading size="lg" fontWeight="normal">
                        Create User
                    </Heading>
                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid
                            minChildWidth="240px"
                            spacing={['6', '8']}
                            w="100%"
                        >
                            <Input
                                label="Name"
                                {...register('name')}
                                error={formState.errors.name}
                            />
                            <Input
                                label="Email"
                                type="email"
                                {...register('email')}
                                error={formState.errors.email}
                            />
                        </SimpleGrid>
                        <SimpleGrid
                            minChildWidth="240px"
                            spacing={['6', '8']}
                            w="100%"
                        >
                            <Input
                                {...register('password')}
                                error={formState.errors.password}
                                label="Password"
                                type="password"
                            />
                            <Input
                                {...register('password_confirmation')}
                                error={formState.errors.password_confirmation}
                                label="Confirm Password"
                                type="password"
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">
                                    Cancel
                                </Button>
                            </Link>
                            <Button
                                type="submit"
                                colorScheme="pink"
                                isLoading={formState.isSubmitting}
                            >
                                Save
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}
