"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import Sidebar from "./_components/Sidebar/Sidebar";
import AuthCard from "./_components/AuthCard/AuthCard";
import { LuMenu } from "react-icons/lu";

export default function PageClient() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const toggleSidebar = () => {
    if (isMobileDrawerOpen) {
      setIsMobileDrawerOpen(!isMobileDrawerOpen);
      return;
    }
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileDrawer = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  return (
    <div className={styles.container}>
      {/* Mobile Backdrop */}
      {isMobileDrawerOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsMobileDrawerOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        isMobileDrawerOpen={isMobileDrawerOpen}
        onToggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <main className={styles.mainContent}>
        <button className={styles.mobileMenuBtn} onClick={toggleMobileDrawer}>
          <LuMenu />
        </button>

        <AuthCard />
      </main>
    </div>
  );
}
