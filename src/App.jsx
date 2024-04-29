import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'

function App() {


    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element='' />
                    <Route path='/scrum' element='' />
                    <Route path='/team' element='' />
                    <Route path='/events' element='' />
                    <Route path='/artifacts' element='' />
                </Route>
            </Routes>
        </>
    )
}

export default App
