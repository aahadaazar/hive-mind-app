"use client";

import styles from "./SidebarNav.module.scss";
import {
    LuMessageSquarePlus,
    LuLanguages,
    LuVideo,
    LuFiles,
    LuHistory,
} from "react-icons/lu";

const navItems = [
    { icon: LuMessageSquarePlus, label: "New Chat", title: "New Chat" },
    { icon: LuLanguages, label: "Translate Text", title: "Translate Text" },
    { icon: LuVideo, label: "Translate Video", title: "Translate Video" },
    { icon: LuFiles, label: "Files", title: "Files" },
    { icon: LuHistory, label: "History", title: "History" },
];

interface SidebarNavProps {
    isCollapsed: boolean;
}

export default function SidebarNav({ isCollapsed }: SidebarNavProps) {
    return (
        <nav className={styles.nav}>
            {navItems.map((item) => {
                const Icon = item.icon;
                return (
                    <a
                        key={item.label}
                        href="#"
                        className={styles.navItem}
                        title={item.title}
                    >
                        <Icon />
                        <span className={`${styles.navText} ${isCollapsed ? 'noOpacity' : ""}`}>{item.label}</span>
                    </a>
                );
            })}
        </nav>
    );
}
