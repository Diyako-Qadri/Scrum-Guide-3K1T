import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
function App() {


    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home/>} />
                    <Route path='/scrum' element='' />
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
