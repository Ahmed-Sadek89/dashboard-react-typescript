// components
import Charts from '../../Components/Charts/Charts'
import Features from '../../Components/Features/Features'
import HomeTable from '../../Components/HomeTable/HomeTable'
import Wedgets from '../../Components/Wedgets/Wedgets'

const Home = () => {
  return (
    <div className="home">
      <Wedgets />
      <div className="featuresAndCharts">
        <Features />
        <Charts height={540}/>
      </div>
      <div className='home-table'>
        <h1>last transaction</h1>
        <HomeTable />
      </div>
    </div>
  )
}

export default Home