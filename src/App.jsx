import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/layouts/header/Header'
import Footer from './components/layouts/footer/Footer'

import MainPage from './page/MainPage'

// Lazy loading of pages to optimise loading times
const Tools = lazy(() => import('./page/tools/Tools'))
const LegalMentions = lazy(() => import('./page/legal-mentions/LegalMentions'))
const TechStack = lazy(() => import('./page/tech-stack/TechStack'))

function App() {
  return (
    <BrowserRouter>
        <Header />
        <main>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/tools" element={<Tools />} />
                    <Route path="/legal" element={<LegalMentions />} />
                    <Route path="/tech-stack" element={<TechStack />} />
                </Routes>
            </Suspense>
        </main>
        <Footer />
    </BrowserRouter>
  )
}

export default App