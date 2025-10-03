
import { Suspense } from 'react'
import './App.css'
import DasgiNav from './Components/DasgiNav/DasgiNav'
import NavBar from './Components/NavBar/NavBar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultsCharts from './Components/ResultsCharts/ResultsCharts'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'

const pricingPromise = fetch('pricingData.json').then(res => res.json())
const marksPromise = axios.get('marksData.json')

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DasgiNav></DasgiNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
              <PricingOptions pricingPromise ={pricingPromise}></PricingOptions>
        </Suspense>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
        <ResultsCharts></ResultsCharts>
      </main>
    </>
  )
}

export default App
