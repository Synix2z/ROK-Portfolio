import styles from "./tools.module.css";

import Title from "../../components/title-section/Title";
import Calculator from "../../components/calculator/Calculator";

export default function Tools() {
    return (
        <>
            <Title text="Tools" id="tools-title" />

            <Calculator />
        </>
    );
}