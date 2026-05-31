
import './App.css'
import TravelPlannerForm from './component/TravelPlannerForm '
import { LandingPage } from './pages/LangingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />,
          <Route path="/travel-form" element={<TravelPlannerForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
