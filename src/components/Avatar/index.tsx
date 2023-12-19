import styles from './avatar.module.css';

interface AvatarProps {
    src: string;
    alt?: string | undefined;
    hasBorder?: boolean;
}

export function Avatar({src, alt, hasBorder = true}: AvatarProps) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
            alt={alt}
        />
    )
}