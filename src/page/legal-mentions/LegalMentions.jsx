import styles from "./legalMentions.module.css";

export default function LegalMentions() {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Legal Mentions</h1>

            {/* Website */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Website</h2>

                <p className={styles.text}>
                    This website is a personal project created and maintained
                    by <span className={styles.highlight}>Synix2z</span>. 
                    It is not affiliated with any company or organization.
                </p>
            </div>

            {/* Hosting */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Hosting</h2>

                <p className={styles.text}>
                    This website is hosted by{" "}
                    <span className={styles.highlight}>Vercel Inc.</span>{" "}
                    , located at 440 N. Barranca Ave, Number 4133,
                    Covina, California 91723, USA. For more information,
                    visit the{" "}
                    <a
                        href="https://vercel.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.highlight}
                    >
                        official Vercel website
                    </a>.
                </p>
            </div>

            {/* Intellectual Property */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Intellectual Property</h2>

                <p className={styles.text}>
                    Some images and assets used on this website originate
                    from{" "}
                    <a
                        href="https://rok.lilith.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.highlight}
                    >
                        Rise of Kingdoms
                    </a>
                    , developed and published by{" "}
                    <a
                        href="https://www.lilith.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.highlight}
                    >
                        Lilith Games
                    </a>
                    . All rights to these assets belong to their respective
                    owners. They are used for illustrative and
                    non-commercial purposes only.
                </p>

                <p className={styles.text}>
                    All other original content, including the code, design,
                    text, and website structure, was created by{" "}
                    <span className={styles.highlight}>Synix2z</span>,
                    unless otherwise stated.
                </p>
            </div>

            {/* Disclaimer */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Disclaimer</h2>

                <p className={styles.text}>
                    This website is an independent fan-made project
                    provided for informational purposes only. The
                    statistics and information displayed relate to a
                    personal{" "}
                    <a
                        href="https://rok.lilith.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.highlight}
                    >
                        Rise of Kingdoms
                    </a>{" "}
                    account and are provided for informational and
                    illustrative purposes.
                </p>

                <p className={styles.text}>
                    This website is not endorsed by, affiliated with,
                    maintained, authorized, or sponsored by Lilith Games.
                    Rise of Kingdoms and its associated assets remain
                    the property of their respective owners.
                </p>
            </div>

            {/* Credits */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Credits</h2>

                <p className={styles.text}>
                    The profile picture features{" "}
                    <span className={styles.highlight}>
                        Kiyotaka Ayanokoji
                    </span>
                    , a character from{" "}
                    <a
                        href="https://you-zitsu.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.highlight}
                    >
                        Classroom of the Elite
                    </a>
                    . The character and related artwork belong to their
                    respective copyright holders. The image is used for
                    personal and illustrative purposes.
                </p>

                <p className={styles.text}>
                    Interface icons are provided by{" "}
                    <a
                        href="https://lucide.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.highlight}
                    >
                        Lucide
                    </a>
                    , an open-source icon library distributed under the
                    ISC license. Copyright © 2026 Lucide Icons and
                    contributors.
                </p>

                <p className={styles.text}>
                    Certain Lucide icons originate from the{" "}
                    <a
                        href="https://feathericons.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.highlight}
                    >
                        Feather Icons
                    </a>{" "}
                    project and are distributed under the MIT license.
                    Copyright © 2013–present Cole Bemis.
                </p>
            </div>
        </div>
    );
}