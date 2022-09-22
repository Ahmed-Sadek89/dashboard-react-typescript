// required
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
// types
import { wedgetData } from './wedget';


const Wedgets = () => {
  return (
    <div className='wedgets'>
        {
            wedgetData.map((data, index) => (
                <div className="widget-single" key={index}>
                    <div className="wedget-single-line1">
                        <p>{data.line1.p1}</p>
                        <p>
                            {
                                data.line1.p2.icon === 'up'
                                ? <KeyboardArrowUpIcon /> 
                                : <KeyboardArrowDownIcon />
                            }  
                            <span>{data.line1.p2.span} </span>
                        </p>
                    </div>
                    <div className="wedget-single-line2">
                        <h3>{data.line2}</h3>
                    </div>
                    <div className="wedget-single-line3">
                        <p>{data.line3.p1}</p>
                        <p className={data.line3.p2.class}>
                            {data.line3.p2.icon === 'person' && <PersonOutlineOutlinedIcon />}
                            {data.line3.p2.icon === 'cart' && <ShoppingCartOutlinedIcon />}
                            {data.line3.p2.icon === 'dollar' && <MonetizationOnOutlinedIcon />}
                            {data.line3.p2.icon === 'details' && <AccountBalanceWalletOutlinedIcon />}
                        </p>
                    </div>
                </div>
            ))
        }
       
    </div>
  )
}

export default Wedgets
