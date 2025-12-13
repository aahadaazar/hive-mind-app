"use client";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useState } from "react";
import styles from "./AuthCard.module.scss";
import SocialButtons from "./SocialButtons";
import { createAccount } from "../../page.actions";

const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .label("Email"),
    phone: Joi.string()
        .pattern(/^[0-9]+$/)
        .min(10)
        .max(15)
        .required()
        .label("Phone Number")
        .messages({
            "string.pattern.base": "Phone number must contain only digits",
        }),
    password: Joi.string().min(8).required().label("Password"),
});

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    password: string;
};

export default function AuthCard() {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: joiResolver(schema),
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

    return (
        <div className={styles.authCard}>
            <h1 className={styles.title}>Create Aurorah Account</h1>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            placeholder="First name"
                            {...register("firstName")}
                            className={errors.firstName ? styles.error : ""}
                        />
                        {errors.firstName && (
                            <span className={styles.errorMessage}>
                                {errors.firstName.message}
                            </span>
                        )}
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            placeholder="Last name"
                            {...register("lastName")}
                            className={errors.lastName ? styles.error : ""}
                        />
                        {errors.lastName && (
                            <span className={styles.errorMessage}>
                                {errors.lastName.message}
                            </span>
                        )}
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <input
                        type="email"
                        placeholder="Email address"
                        {...register("email")}
                        className={errors.email ? styles.error : ""}
                    />
                    {errors.email && (
                        <span className={styles.errorMessage}>{errors.email.message}</span>
                    )}
                </div>

                <div className={styles.inputGroup}>
                    <input
                        type="number"
                        placeholder="Phone number"
                        {...register("phone")}
                        className={errors.phone ? styles.error : ""}
                    />
                    {errors.phone && (
                        <span className={styles.errorMessage}>{errors.phone.message}</span>
                    )}
                </div>

                <div className={styles.inputGroup}>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password")}
                        className={errors.password ? styles.error : ""}
                    />
                    {errors.password && (
                        <span className={styles.errorMessage}>
                            {errors.password.message}
                        </span>
                    )}
                </div>

                <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={loading}
                >
                    {loading ? "Creating..." : "Create an Account"}
                </button>
            </form>

            <SocialButtons />

            <div className={styles.footer}>
                Already have an account? <strong>Sign In</strong>
                <br />
                <br />
                By creating an account, you agree to our user agreement and acknowledge
                our privacy notice.
            </div>
        </div>
    );
}
