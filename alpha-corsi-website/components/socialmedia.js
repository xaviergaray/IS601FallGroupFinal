import Image from "next/legacy/image";
import Link from 'next/link';
import styles from './socialMedia.module.css';

export default function SocialMedia({ image, link, ariaLabel, glow  }) {
    return (
        <a href={link} aria-label={ariaLabel}>
            <div className={glow ? styles.orbGlow : styles.orb}>
                <div className={styles.imageContainer}>
                    <Image src={image} alt={ariaLabel} layout="fill" />
                </div>
            </div>
        </a>
    )
}
