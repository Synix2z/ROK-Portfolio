import styles from "./about.module.css";

import Title from "../../../components/title-section/Title";
import profileImage from "../../../images/profile.jpg";
import { CircleAlert } from "lucide-react";

export default function About() {
    return (
        <>
            <Title text="About" id="about-title" />

            <div className={styles.aboutContent}>
                <img src={profileImage} alt="Profile picture" className={styles.profileImage} />

                <div className={styles.aboutText}>
                    <p>
                        <span style={{ color: "var(--color-text-secondary)" }}>Hi</span> and <span style={{ color: "var(--color-text-secondary)" }}>welcome</span> to you !
                    </p>
                    <br />

                    <p>
                        First of all, thank you for taking the time to visit my website and view my profile.
                        This project was fully created by myself using
                        <span style={{ color: "var(--color-text-secondary)" }}> React</span>.
                        <br />
                        I wanted a cleaner and more pleasant way to present my profile instead of sending simple screenshots,
                        and at the same time <span style={{ color: "var(--color-text-secondary)" }}> create a personal</span> project I could maintain and improve over time.
                        I'll try to keep it updated as best as I can.
                    </p>

                    <br />

                    <p>
                        My name is Théo, but I'm mostly known as
                        <span style={{ color: "var(--color-text-secondary)" }}> Synix2z</span>.
                        I enjoy playing strategic video games, especially
                        <span style={{ color: "var(--color-text-secondary)" }}> Rise of Kingdoms</span>.
                        I've been playing this game for 4 years now (since June 6, 2022).
                        <br />
                        I'm a French player and I play <span style={{ color: "var(--color-text-secondary)" }}> F2P</span>,
                        trying to do my best to optimize everything so I don't fall behind other players.
                    </p>

                    <br />

                    <p>
                        At the moment, I only play
                        <span style={{ color: "var(--color-text-secondary)" }}> infantry commanders</span> with two marches.
                        I also use <span style={{ color: "var(--color-text-secondary)" }}> farm accounts</span> to avoid running out of resources during
                        <span style={{ color: "var(--color-text-secondary)" }}> KvK</span> battles.
                    </p>

                    <br />

                    <p>
                        Outside of strategy and combat, I enjoy meeting new people, having fun, sharing tips,
                        and helping others so we can all progress together !
                    </p>

                    <br />

                    <p>
                        I'll leave you to explore the rest of the site so you can find out more about my <span style={{ color: "var(--color-text-secondary)" }}> statistics</span> and my profile.
                    </p>
                    <p>
                        If you want to talk with me in game, feel free to send me a message and adding me with this ID : <span style={{ color: "var(--color-text-secondary)" }}> 131046134</span> !
                    </p>

                    <br />
                    
                    <div className={styles.disclaimer}>
                        <div className={styles.disclaimerIcon}>
                            <CircleAlert size={24} /> 
                        </div>
                        
                        <p>
                            Some information, such as gear, equipment, or the number of resources and speed-ups, may not be up to date. So if you need anything, please ask me directly.
                        </p>

                        <p>
                            Last update: 27/09/26 
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}