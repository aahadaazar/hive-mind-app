"use client";

import styles from "./Sidebar.module.scss";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import UserProfile from "./UserProfile";

interface SidebarProps {
    isCollapsed: boolean;
    isMobileDrawerOpen: boolean;
    onToggleSidebar: () => void;
}

export default function Sidebar({
    isCollapsed,
    isMobileDrawerOpen,
    onToggleSidebar,
}: SidebarProps) {
    return (
        <aside
            className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""} ${isMobileDrawerOpen ? styles.mobileOpen : ""
                }`}
        >
            <SidebarHeader
                isCollapsed={isCollapsed}
                isMobileDrawerOpen={isMobileDrawerOpen}
                onToggle={onToggleSidebar}
            />
            <SidebarNav isCollapsed={isCollapsed} />
            <UserProfile isCollapsed={isCollapsed} />
        </aside>
    );
}
