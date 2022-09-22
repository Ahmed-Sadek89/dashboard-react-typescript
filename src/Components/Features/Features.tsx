//required
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import 'react-circular-progressbar/dist/styles.css'


const Features = () => {
  return (
    <div className="features">
      <div className="features-top">
        <h1>total revenue</h1>
        <MoreVertIcon className="features-top-icon"/>
      </div>
      <div className="features-middle">
        <div className="features-middle-progressbar">
          <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
        </div>
        <h2>total sales made today</h2>
        <h1>480$</h1>
        <p>Previous transactions processing. Last payments may not be included.</p>
      </div>
      <div className="features-bottom">
        <div className='features-bottom-down'>
          <p>target</p>
          <p>
            <KeyboardArrowDownIcon /> <span> $12.4K</span>
          </p>
        </div>
        <div className='features-bottom-up'>
          <p>last week</p>
          <p>
            <KeyboardArrowUpIcon /> <span> $12.4K</span>
          </p>
        </div>
        <div className='features-bottom-down'>
          <p>last month</p>
          <p>
            <KeyboardArrowUpIcon /> <span> $12.4K</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features