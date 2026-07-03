import { Link } from 'react-router-dom'
import { useEffect } from "react";

/* Components */
import Separator from '../components/separator-section/Separator'
import About from './sections/about/About'
import Commanders from './sections/commanders/Commanders'
import Statistics from './sections/statistics/Statistics'
import FadeIn from '../components/fade-in/FadeIn'
import Timeline from './sections/timeline/Timeline'
import CurrentObjectives from './sections/current-objectives/CurrentObjectives'
import { SpeedInsights } from "@vercel/speed-insights/react"

import styles from './mainPage.module.css'

function MainPage() {
  return (
    <div className={styles.content}>
      <SpeedInsights />
      <FadeIn delay={0}>
        <About />
      </FadeIn>

      <Separator />

      <FadeIn delay={100}>
        <Commanders />
      </FadeIn>

      <Separator />

      <FadeIn delay={100}>
        <CurrentObjectives />
      </FadeIn> 

      <Separator />

      <FadeIn delay={100}>
        <Statistics />
      </FadeIn>

      <Separator />

      <FadeIn delay={100}>
        <Timeline />
      </FadeIn>
    </div>
  );
}

export default MainPage;