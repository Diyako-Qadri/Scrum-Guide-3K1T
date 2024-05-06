import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
<<<<<<< HEAD
import Scrum from './pages/Scrum-page1'
import TheScrumTeam from './pages/TheScrumTeam'
=======
import Scrum from './pages/Scrum-page'
import About from './pages/About'
>>>>>>> 819bd21f09308a9b8a049137d7e7e462d44fdf3f
function App() {


    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home/>} />
                    <Route path='/scrum' element={<Scrum/>} />
                    <Route path='/team' element={<TheScrumTeam/>} />
                    <Route path='/events' element='' />
                    <Route path='/artifacts' element='' />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Route>
            </Routes>
        </>
    )
}

export default App
