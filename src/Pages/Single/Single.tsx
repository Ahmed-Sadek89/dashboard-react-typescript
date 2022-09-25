// components
import Charts from "../../Components/Charts/Charts"
import HomeTable from "../../Components/HomeTable/HomeTable"
import SingleCard from "../../Components/SingleCard/SingleCard"

const Single = () => {
  return (
    <>
      <div className='single'>
        <SingleCard />
        <Charts height={440}/>
      </div>
      <div className='single-user-table'>
        <h1>last transaction</h1>
        <HomeTable />
      </div>
    </>
  )
}

export default Single