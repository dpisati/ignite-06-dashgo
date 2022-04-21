import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import PaginationItem from './PaginationItem';

interface PaginationProps {
    totalNumberOfRegisters: number;
    resgistersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

const siblinsCount = 1;

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)]
        .map((_, index) => {
            return from + index + 1;
        })
        .filter((page) => page > 0);
}

export default function Pagination({
    totalNumberOfRegisters,
    resgistersPerPage = 10,
    currentPage = 1,
    onPageChange,
}: PaginationProps) {
    const lastPage = Math.floor(totalNumberOfRegisters / resgistersPerPage);

    const previousPages =
        currentPage > 1
            ? generatePagesArray(
                  currentPage - 1 - siblinsCount,
                  currentPage - 1
              )
            : [];

    const nextPages =
        currentPage < lastPage
            ? generatePagesArray(
                  currentPage,
                  Math.min(currentPage + siblinsCount, lastPage)
              )
            : [];

    return (
        <Stack
            direction={['column', 'row']}
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> of <strong>{}</strong>
            </Box>
            <HStack spacing="2">
                {currentPage > 1 + siblinsCount && (
                    <>
                        <PaginationItem
                            onPageChange={onPageChange}
                            pageNumber={1}
                        />
                        {currentPage > 2 + siblinsCount && (
                            <Text color="gray.300" width="8" textAlign="center">
                                ...
                            </Text>
                        )}
                    </>
                )}

                {previousPages.length > 0 &&
                    previousPages.map((page) => {
                        return (
                            <PaginationItem
                                onPageChange={onPageChange}
                                key={page}
                                pageNumber={page}
                            />
                        );
                    })}

                <PaginationItem
                    onPageChange={onPageChange}
                    pageNumber={currentPage}
                    isCurrent
                />

                {nextPages.length > 0 &&
                    nextPages.map((page) => {
                        return (
                            <PaginationItem
                                onPageChange={onPageChange}
                                key={page}
                                pageNumber={page}
                            />
                        );
                    })}

                {currentPage + siblinsCount < lastPage && (
                    <>
                        {currentPage + 1 + siblinsCount < lastPage && (
                            <Text color="gray.300" width="8" textAlign="center">
                                ...
                            </Text>
                        )}
                        <PaginationItem
                            onPageChange={onPageChange}
                            pageNumber={lastPage}
                        />
                    </>
                )}
            </HStack>
        </Stack>
    );
}
