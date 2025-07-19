import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { ButtonVariant, ButtonSize } from "@/types/common";
import styles from "./Button.module.scss";

interface BaseButtonProps {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    className?: string;
}

interface ButtonAsButton
    extends BaseButtonProps,
        Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
    href?: never;
}

interface ButtonAsLink
    extends BaseButtonProps,
        Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
    href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    className,
    ...props
}: ButtonProps) {
    const baseClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${
        fullWidth ? styles.fullWidth : ""
    } ${className || ""}`;

    if ("href" in props && props.href) {
        const { href, ...anchorProps } = props;
        return (
            <a href={href} className={baseClasses} {...anchorProps}>
                {children}
            </a>
        );
    }

    const { ...buttonProps } = props as ButtonAsButton;
    return (
        <button className={baseClasses} {...buttonProps}>
            {children}
        </button>
    );
}
