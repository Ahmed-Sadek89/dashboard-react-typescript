import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { wedgetData } from './wedget';


const Wedgets = () => {
    // let x = {
    //     icon: <PersonOutlineOutlinedIcon />
    // }
  return (
    <div className='wedgets'>
        {
            wedgetData.map((data, index) => (
                <div className="widget-single" key={index}>
                    <div className="wedget-single-line1">
                        <p>{data.line1.p1}</p>
                        <p>
                            {
                                data.line1.p2.icon === 'up' ? 
                                <KeyboardArrowUpIcon /> 
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
                        </p>
                    </div>
                </div>
            ))
        }
       

        <div className="widget-single">
            <div className="wedget-single-line1">
                <p>users</p>
                <p><KeyboardArrowUpIcon />  <span>+5 %</span></p>
            </div>
            <div className="wedget-single-line2">
                <h3>720</h3>
            </div>
            <div className="wedget-single-line3">
                <p>see all users</p>
                <p>custom icon</p>
            </div>
        </div>

        <div className="widget-single">
            <div className="wedget-single-line1">
                <p>users</p>
                <p><KeyboardArrowUpIcon />  <span>+5 %</span></p>
            </div>
            <div className="wedget-single-line2">
                <h3>720</h3>
            </div>
            <div className="wedget-single-line3">
                <p>see all users</p>
                <p>custom icon</p>
            </div>
        </div>

        <div className="widget-single">
            <div className="wedget-single-line1">
                <p>users</p>
                <p><KeyboardArrowUpIcon />  <span>+5 %</span></p>
            </div>
            <div className="wedget-single-line2">
                <h3>720</h3>
            </div>
            <div className="wedget-single-line3">
                <p>see all users</p>
                <p>custom icon</p>
            </div>
        </div>

    </div>
  )
}

export default Wedgets