import { Stack } from '@chakra-ui/react';
import React from 'react';
import {
    RiContactsLine,
    RiDashboardLine,
    RiGitMergeLine,
    RiInputMethodLine,
} from 'react-icons/ri';
import NavLink from './NavLink';
import NavSection from './NavSection';

export default function SideBarNav() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="General">
                <NavLink href="/dashboard" icon={RiDashboardLine}>
                    Dashboard
                </NavLink>
                <NavLink href="/users" icon={RiContactsLine}>
                    Users
                </NavLink>
            </NavSection>
            <NavSection title="Automation">
                <NavLink href="/forms" icon={RiInputMethodLine}>
                    Fomrs
                </NavLink>
                <NavLink href="/automation" icon={RiGitMergeLine}>
                    Automation
                </NavLink>
            </NavSection>
        </Stack>
    );
}
