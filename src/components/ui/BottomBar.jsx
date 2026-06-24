import { Group } from '@/components/layout/Group';
import { Menu } from '@/components/menu/Menu';

export function BottomBar({ children, className = "" }) {
    return (
        <Menu.Nav className={`bottom-bar ${className}`} variant="bottom-bar">
            <Group 
                layout={{ default: 'col' }} 
                className="bottom-bar__container px--md py--sm"
            >
                {children}
            </Group>
        </Menu.Nav>
    );
}