import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import Logo from './Logo';
import NotificationNav from './NotificationNav';
import Profile from './Profile';
import SearchBox from './SearchBox';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export default function Header() {
    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });
    return (
        <Flex
            as="header"
            w="100%"
            h="20"
            mt="4"
            px="6"
            mx="auto"
            align="center"
            maxWidth={1480}
        >
            {!isWideVersion && (
                <IconButton
                    fontSize="25"
                    variant="unstyled"
                    onClick={onOpen}
                    aria-label="Open sidebar"
                    mr="2"
                    pt="1"
                    icon={<Icon as={RiMenuLine} />}
                />
            )}
            <Logo />

            {isWideVersion && <SearchBox />}

            <Flex align="center" ml="auto">
                <NotificationNav />
                <Profile showProfileData={!!isWideVersion} />
            </Flex>
        </Flex>
    );
}
