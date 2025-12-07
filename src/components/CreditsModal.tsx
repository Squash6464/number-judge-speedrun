import React from 'react';
import { useGameStore } from '../game/store';
import { TEXT_RESOURCES } from '../game/constants';
import { CREDITS_DATA } from '../game/credits';
import styles from '../styles/CreditsModal.module.css';

interface CreditsModalProps {
    onClose: () => void;
}

export const CreditsModal: React.FC<CreditsModalProps> = ({ onClose }) => {
    const { options } = useGameStore();
    const t = TEXT_RESOURCES[options.language];

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2 className={styles.title}>{t.creditsTitle}</h2>

                <div className={styles.scrollArea}>
                    {CREDITS_DATA.map((section) => (
                        <div key={section.key} className={styles.section}>
                            <h3 className={styles.sectionTitle}>
                                {t.sections[section.key]}
                            </h3>
                            <ul className={styles.list}>
                                {section.items.map((item, index) => (
                                    <li key={index} className={styles.item}>
                                        {item.url ? (
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                            >
                                                {item.name}
                                            </a>
                                        ) : (
                                            <span className={styles.name}>{item.name}</span>
                                        )}
                                        {item.description && (
                                            <span className={styles.description}>
                                                {item.description}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <button className={styles.closeBtn} onClick={onClose}>
                    {t.close}
                </button>
            </div>
        </div>
    );
};
