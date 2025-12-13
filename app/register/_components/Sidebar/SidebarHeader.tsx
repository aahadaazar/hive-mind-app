"use client";

import styles from "./SidebarHeader.module.scss";
import { LuPanelLeftClose } from "react-icons/lu";

interface SidebarHeaderProps {
    isCollapsed: boolean;
    isMobileDrawerOpen: boolean;
    onToggle: () => void;
}

export default function SidebarHeader({
    isCollapsed,
    isMobileDrawerOpen,
    onToggle,
}: SidebarHeaderProps) {
    return (
        <div className={styles.header}>
            <div
                className={styles.logo}
                onClick={() => {
                    if (!isMobileDrawerOpen) onToggle();
                }}
            ></div>
            <button className={`${styles.collapseBtn} ${isCollapsed ? 'noOpacity' : ""}`} onClick={onToggle}>
                <LuPanelLeftClose />
            </button>
        </div>
    );
}
