import { useState } from "react";
import styles from "./calculator.module.css";

export default function Calculator() {
    const [amount5, setAmount5] = useState("");
    const [amount10, setAmount10] = useState("");
    const [amount50, setAmount50] = useState("");
    const [amount100, setAmount100] = useState("");
    const [amount200, setAmount200] = useState("");
    const [amount500, setAmount500] = useState("");
    const [amount650, setAmount650] = useState("");
    const [amount1000, setAmount1000] = useState("");
    const [amount2000, setAmount2000] = useState("");
    const [amount5000, setAmount5000] = useState("");

    const toNum = (v) => Number(v || 0);

    const total =
        toNum(amount5) * 5 +
        toNum(amount10) * 10 +
        toNum(amount50) * 50 +
        toNum(amount100) * 100 +
        toNum(amount200) * 200 +
        toNum(amount500) * 500 +
        toNum(amount650) * 650 +
        toNum(amount1000) * 1000 +
        toNum(amount2000) * 2000 +
        toNum(amount5000) * 5000;

    const formattedTotal = total
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return (
        <div className={styles.calculator}>
            <div className={styles.grid}>
                <div className={styles.row}>
                    <label>5</label>
                    <input
                        type="number"
                        placeholder="0"
                        value={amount5}
                        onChange={(e) => setAmount5(e.target.value)}
                    />
                </div>

                <div className={styles.row}>
                    <label>10</label>
                    <input
                        type="number"
                        placeholder="0"
                        value={amount10}
                        onChange={(e) => setAmount10(e.target.value)}
                    />
                </div>

                <div className={styles.row}>
                    <label>50</label>
                    <input
                        type="number"
                        placeholder="0"
                        value={amount50}
                        onChange={(e) => setAmount50(e.target.value)}
                    />
                </div>

                <div className={styles.row}>
                    <label>100</label>
                    <input
                        type="number"
                        placeholder="0"
                        value={amount100}
                        onChange={(e) => setAmount100(e.target.value)}
                    />
                </div>

                <div className={styles.row}>
                    <label>200</label>
                    <input
                        type="number"
                        placeholder="0"
                        value={amount200}
                        onChange={(e) => setAmount200(e.target.value)}
                    />
                </div>

                <div className={styles.row}>
                    <label>500</label>
                    <input
                        type="number"
                        placeholder="0"
                        value={amount500}
                        onChange={(e) => setAmount500(e.target.value)}
                    />
                </div>

                <div className={styles.row}>
                    <label>650</label>
                    <input
                        type="number"
                        placeholder="0"
                        value={amount650}
                        onChange={(e) => setAmount650(e.target.value)}
                    />
                </div>

                <div className={styles.row}>
                    <label>1,000</label>
                    <input
                        type="number"
                        placeholder="0"
                        value={amount1000}
                        onChange={(e) => setAmount1000(e.target.value)}
                    />
                </div>

                <div className={styles.row}>
                    <label>2,000</label>
                    <input
                        type="number"
                        placeholder="0"
                        value={amount2000}
                        onChange={(e) => setAmount2000(e.target.value)}
                    />
                </div>

                <div className={styles.row}>
                    <label>5,000</label>
                    <input
                        type="number"
                        placeholder="0"
                        value={amount5000}
                        onChange={(e) => setAmount5000(e.target.value)}
                    />
                </div>
            </div>

            <div className={styles.total}>
                Total : <span>{formattedTotal}</span>
            </div>
        </div>
    );
}