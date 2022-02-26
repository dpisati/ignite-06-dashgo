import { Button } from '@chakra-ui/react';
import React from 'react';

interface PaginationItemProps {
    pageNumber: number;
    isCurrent?: boolean;
}

export default function PaginationItem({
    pageNumber,
    isCurrent = false,
}: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bgColor: 'pink.500',
                    cursor: 'default',
                }}
            >
                {pageNumber}
            </Button>
        );
    }
    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.700"
            _hover={{
                bg: 'gray.500',
            }}
        >
            {pageNumber}
        </Button>
    );
}
