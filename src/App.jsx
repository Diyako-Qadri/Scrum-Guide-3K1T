import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import TheScrumTeam from './component/ScrumTeam'
import Scrum from './pages/Scrum-page'
import About from './pages/About'
import Artifacts from './pages/Artifacts'
function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home/>} />
                    <Route path='/scrum' element={<Scrum/>} />
                    <Route path='/team' element={<TheScrumTeam/>} />
                    <Route path='/events' element='' />
                    <Route path='/artifacts' element={<Artifacts />} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Route>
            </Routes> 
        </>
    )
}

export default App
