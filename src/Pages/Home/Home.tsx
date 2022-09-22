// components
import Charts from '../../Components/Charts/Charts'
import Features from '../../Components/Features/Features'
import HomeTable from '../../Components/HomeTable/HomeTable'
import Wedgets from '../../Components/Wedgets/Wedgets'

const Home = () => {
  return (
    <>
      <Wedgets />
      <div className="featuresAndCharts">
        <Features />
        <Charts/>
      </div>
      <div className='home-table'>
        <h1>last transaction</h1>
        <HomeTable />
      </div>
    </>
  )
}

export default Home