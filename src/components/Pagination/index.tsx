import { Box, HStack, Stack } from '@chakra-ui/react';
import React from 'react';
import PaginationItem from './PaginationItem';

export default function Pagination() {
    return (
        <Stack
            direction={['column', 'row']}
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> of <strong>100</strong>
            </Box>
            <HStack spacing="2">
                <PaginationItem pageNumber={1} isCurrent />
                <PaginationItem pageNumber={2} />
                <PaginationItem pageNumber={3} />
                <PaginationItem pageNumber={4} />
            </HStack>
        </Stack>
    );
}
