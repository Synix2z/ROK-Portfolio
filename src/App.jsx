import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'

import Header from './components/layouts/header/Header'
import Footer from './components/layouts/footer/Footer'
import MainPage from './page/MainPage'
import NotFound from './page/not-found/NotFound'

// Lazy loading of pages to optimise loading times
const Tools = lazy(() => import('./page/tools/Tools'))
const LegalMentions = lazy(() => import('./page/legal-mentions/LegalMentions'))
const TechStack = lazy(() => import('./page/tech-stack/TechStack'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SpeedInsights />
      <Header />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/legal" element={<LegalMentions />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App