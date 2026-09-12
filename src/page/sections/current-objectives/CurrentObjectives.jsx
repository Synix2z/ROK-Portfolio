import styles from './currentObjectives.module.css'
import Title from '../../../components/title-section/Title'
import { Target } from 'lucide-react'

const objectives = [
    "Improve KP & death",
    "Refine and upgrade my first gear set",
    "Improve attirails",
    "Update all farm accounts to CH 24",
    "Get more accelerators to target Zenith skin"
];

export default function CurrentObjectives() {
    return (
        <>
            <Title text="Current Objectives" id="current-objectives" />

            <div className={styles.wrapper}>
                {objectives.map((objective, i) => (
                    <div key={i} className={styles.item}>
                        <span className={styles.icon}><Target size={20} /></span>
                        <span className={styles.text}>{objective}</span>
                    </div>
                ))}
            </div>
        </>
    );
}