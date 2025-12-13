"use client";

import styles from "./UserProfile.module.scss";
import { LuUser } from "react-icons/lu";

interface UserProfileProps {
    isCollapsed: boolean;
    userName?: string;
}

export default function UserProfile({
    isCollapsed,
    userName = "Aahad Aazar",
}: UserProfileProps) {
    return (
        <div className={styles.userProfile}>
            <div className={styles.avatar}>
                <LuUser />
            </div>
            <span className={`${styles.userName} ${isCollapsed ? 'noOpacity' : ""}`}>{userName}</span>
        </div>
    );
}
