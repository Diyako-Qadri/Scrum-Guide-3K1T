import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Scrum from './pages/Scrum-page1'
function App() {


    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home/>} />
                    <Route path='/scrum' element={<Scrum/>} />
                    <Route path='/team' element='' />
                    <Route path='/events' element='' />
                    <Route path='/artifacts' element='' />
                    <Route path='/about' element='' />
                    <Route path='/contact' element='' />
                </Route>
            </Routes>
        </>
    )
}

export default App
