import {
    Icon,
    Link as ChakraLink,
    Text,
    LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { ElementType } from 'react';
import ActiveLink from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
    children: string;
    icon: ElementType;
    href: string;
}

export default function NavLink({
    children,
    icon,
    href,
    ...rest
}: NavLinkProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                    {children}
                </Text>
            </ChakraLink>
        </ActiveLink>
    );
}
