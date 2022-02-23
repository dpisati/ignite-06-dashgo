import {
    Input as ChakraInput,
    FormLabel,
    FormControl,
    InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                id={name}
                name={name}
                bg="gray.900"
                size="lg"
                variant="filled"
                _hover={{ bg: 'gray.900' }}
                focusBorderColor="pink.500"
                {...rest}
            />
        </FormControl>
    );
}
