"use client";

import styles from "./SocialButtons.module.scss";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

export default function SocialButtons() {
    return (
        <>
            <div className={styles.divider}>
                <span>or sign in with</span>
            </div>

            <div className={styles.socialButtons}>
                <button className={styles.socialBtn} type="button">
                    <FaGoogle />
                </button>
                <button className={styles.socialBtn} type="button">
                    <FaFacebook />
                </button>
                <button className={styles.socialBtn} type="button">
                    <FaApple />
                </button>
            </div>
        </>
    );
}
