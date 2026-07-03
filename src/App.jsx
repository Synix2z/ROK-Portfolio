import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/layouts/header/Header'
import Footer from './components/layouts/footer/Footer'

import MainPage from './page/MainPage'
import Tools from './page/tools/Tools'
import LegalMentions from './page/legal-mentions/LegalMentions'
import TechStack from './page/tech-stack/TechStack'


function App() {
  return (
    <BrowserRouter>
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path= "/tools" element={<Tools />} />
                <Route path="/legal" element={<LegalMentions />} />
                <Route path="/tech-stack" element={<TechStack />} />
            </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  )
}

export default App