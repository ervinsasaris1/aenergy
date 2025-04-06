import './App.css'
import { Routes, Route } from 'react-router-dom'
import EntryPage from './page/EntryPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<EntryPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
