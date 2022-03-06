import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import SideBarNav from './SideBarNav';

export default function Sidebar() {
    const { isOpen, onClose } = useSidebarDrawer();

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    });

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg="gray.800" p="4">
                    <DrawerCloseButton mt="6" />
                    <DrawerHeader>Navigation</DrawerHeader>
                    <DrawerBody>
                        <SideBarNav />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        );
    }
    return (
        <Box as="div" w="64" mr="8">
            <SideBarNav />
        </Box>
    );
}
