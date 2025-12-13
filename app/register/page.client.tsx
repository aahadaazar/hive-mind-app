"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import { createAccount } from "./page.actions";
import { LuMessageSquarePlus, LuLanguages, LuVideo, LuFiles, LuHistory, LuUser, LuPanelLeftClose, LuPanelLeftOpen, LuMenu } from "react-icons/lu";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

const Icons = {
  NewChat: LuMessageSquarePlus,
  Translate: LuLanguages,
  Video: LuVideo,
  Files: LuFiles,
  History: LuHistory,
  User: LuUser,
  Google: FaGoogle,
  Facebook: FaFacebook,
  Apple: FaApple,
  Collapse: LuPanelLeftClose,
  Expand: LuPanelLeftOpen,
  Menu: LuMenu
};

const schema = Joi.object({
  firstName: Joi.string().required().label("First Name"),
  lastName: Joi.string().required().label("Last Name"),
  email: Joi.string().email({ tlds: { allow: false } }).required().label("Email"),
  phone: Joi.string().pattern(/^[0-9]+$/).min(10).max(15).required().label("Phone Number").messages({
    'string.pattern.base': 'Phone number must contain only digits'
  }),
  password: Joi.string().min(8).required().label("Password")
});

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
};

export default function PageClient() {
  const [loading, setLoading] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: joiResolver(schema)
  });

  async function onSubmit(data: FormData) {
    setLoading(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    const result = await createAccount(formData);
    console.log(result);
    setLoading(false);
  }

  const toggleSidebar = () => {
    if (isMobileDrawerOpen) {
      setIsMobileDrawerOpen(!isMobileDrawerOpen)
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
        <div className={styles.backdrop} onClick={() => setIsMobileDrawerOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isSidebarCollapsed ? styles.collapsed : ''} ${isMobileDrawerOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.header}>
          <div className={styles.logo} onClick={() => { if (!isMobileDrawerOpen) toggleSidebar() }}></div>
          <button className={styles.collapseBtn} onClick={toggleSidebar}>
            {isSidebarCollapsed ? <Icons.Expand /> : <Icons.Collapse />}
          </button>
        </div>

        <nav className={styles.nav}>
          <a href="#" className={styles.navItem} title="New Chat">
            <Icons.NewChat />
            {<span className={styles.navText}>New Chat</span>}
          </a>
          <a href="#" className={styles.navItem} title="Translate Text">
            <Icons.Translate />
            {<span className={styles.navText}>Translate Text</span>}
          </a>
          <a href="#" className={styles.navItem} title="Translate Video">
            <Icons.Video />
            {<span className={styles.navText}>Translate Video</span>}
          </a>
          <a href="#" className={styles.navItem} title="Files">
            <Icons.Files />
            {<span className={styles.navText}>Files</span>}
          </a>
          <a href="#" className={styles.navItem} title="History">
            <Icons.History />
            {<span className={styles.navText}>History</span>}
          </a>
        </nav>
        <div className={styles.userProfile}>
          <div className={styles.avatar}>
            <Icons.User />
          </div>
          {<span className={styles.userName}>Aahad Aazar</span>}
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <button className={styles.mobileMenuBtn} onClick={toggleMobileDrawer}>
          <Icons.Menu />
        </button>

        <div className={styles.authCard}>
          <h1 className={styles.title}>Create Aurorah Account</h1>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="First name"
                  {...register("firstName")}
                  className={errors.firstName ? styles.error : ''}
                />
                {errors.firstName && <span className={styles.errorMessage}>{errors.firstName.message}</span>}
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Last name"
                  {...register("lastName")}
                  className={errors.lastName ? styles.error : ''}
                />
                {errors.lastName && <span className={styles.errorMessage}>{errors.lastName.message}</span>}
              </div>
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Email address"
                {...register("email")}
                className={errors.email ? styles.error : ''}
              />
              {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
            </div>

            <div className={styles.inputGroup}>
              <input
                type="number"
                placeholder="Phone number"
                {...register("phone")}
                className={errors.phone ? styles.error : ''}
              />
              {errors.phone && <span className={styles.errorMessage}>{errors.phone.message}</span>}
            </div>

            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className={errors.password ? styles.error : ''}
              />
              {errors.password && <span className={styles.errorMessage}>{errors.password.message}</span>}
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? "Creating..." : "Create an Account"}
            </button>
          </form>

          <div className={styles.divider}>
            <span>or sign in with</span>
          </div>

          <div className={styles.socialButtons}>
            <button className={styles.socialBtn} type="button">
              <Icons.Google />
            </button>
            <button className={styles.socialBtn} type="button">
              <Icons.Facebook />
            </button>
            <button className={styles.socialBtn} type="button">
              <Icons.Apple />
            </button>
          </div>

          <div className={styles.footer}>
            Already have an account? <strong>Sign In</strong>
            <br />
            <br />
            By creating an account, you agree to our user agreement and acknowledge our privacy notice.
          </div>
        </div>
      </main>
    </div>
  );
}
