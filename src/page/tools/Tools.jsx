import styles from "./tools.module.css";
import Title from "../../components/title-section/Title";
import Calculator from "../../components/calculator/Calculator";

export default function Tools() {
    return (
        <>
            <div className={styles.titlePage}>
                <Title text="Tools" id="tools-title" />
            </div>

            <div className={styles.calculatorContent}>
                <div className={styles.calculatorText}>
                    <h2 className={styles.calculatorTitle}>Calculator</h2>
                    <p className={styles.calculatorText}>
                        Enter the number of speedups you own for each duration. 
                        The calculator will automatically compute the total time in minutes, 
                        so you can easily plan your constructions, training, or healing queues.
                    </p>
                </div>
                <Calculator />
            </div>
        </>
    );
}