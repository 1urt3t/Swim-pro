import './App.css'
import { Route, Routes } from 'react-router-dom'
import Results from './pages/page01/Results'
import Calculator from './pages/page02/Calculator'
import LayOut from './components/LayOut'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/Swim-pro/' element={<LayOut/>}>
        <Route index element={<Results/>}/>
        <Route path='fina' element={<Calculator/>}/>
      </Route>
    </Routes>
    </>
  )
}

