// components
import Charts from '../../Components/Charts/Charts'
import Features from '../../Components/Features/Features'
import Wedgets from '../../Components/Wedgets/Wedgets'

const Home = () => {
  return (
    <>
      <Wedgets />
      {/* complete the UI */}
      <div className="featuresAndCharts">
        <Features />
        <Charts title="Last 6 Months (Revenue)" aspect={2 / 1} />
      </div>
    </>
  )
}

export default Home