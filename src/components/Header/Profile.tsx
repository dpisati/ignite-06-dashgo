import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface ProfileProps {
    showProfileData: boolean;
}

export default function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Daniel Pisati</Text>
                    <Text color="gray.300" fontSize="small">
                        myemail@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar
                size="md"
                name="Daniel Pisati"
                src="https://github.com/dpisati.png"
            />
        </Flex>
    );
}
