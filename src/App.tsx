import './App.css'
import { Route, Routes } from 'react-router-dom'
import Results from './pages/page01/Results'
import LayOut from './components/LayOut'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/Swim-pro/' element={<LayOut/>}>
        <Route index element={<Results/>}/>
      </Route>
    </Routes>
    </>
  )
}

