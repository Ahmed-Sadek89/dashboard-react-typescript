// required
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';


const SliderPart2 = () => {
    const navigate = useNavigate()
    return (
        <div className="slider-content-part2 container">
            <ul>
                <li>
                    <p>main</p>
                    <ul>
                        <li>
                            <DashboardIcon className='slider-icon' />
                            <span>Dashboard</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>latest</p>
                    <ul>
                        <li onClick={() => navigate('users')}>
                            <PersonOutlineOutlinedIcon className='slider-icon' />
                            <span>users</span>
                        </li>
                        <li>
                            <StoreIcon className='slider-icon' />
                            <span>products</span>
                        </li>
                        <li>
                            <PaymentOutlinedIcon className='slider-icon' />
                            <span>orders</span>
                        </li>
                        <li>
                            <LocalShippingIcon className='slider-icon' />
                            <span>delivery</span>
                        </li>
                    </ul>
                </li>

                <li>
                    <p>usefull</p>
                    <ul>
                        <li>
                            <AssessmentIcon className='slider-icon' />
                            <span>stats</span>
                        </li>
                        <li>
                            <CircleNotificationsIcon className='slider-icon' />
                            <span>notifications</span>
                        </li>
                    </ul>
                </li>

                <li>
                    <p>service</p>
                    <ul>
                        <li>
                            <SettingsIcon className='slider-icon' />
                            <span>system health</span>
                        </li>
                        <li>
                            <SettingsIcon className='slider-icon' />
                            <span>logs</span>
                        </li>
                        <li>
                            <SettingsIcon className='slider-icon' />
                            <span>settings</span>
                        </li>
                    </ul>
                </li>
            
                <li>
                    <p>user</p>
                    <ul>
                        <li>
                            <ExitToAppIcon className='slider-icon' />
                            <span>profile</span>
                        </li>
                        <li>
                            <ExitToAppIcon className='slider-icon' />
                            <span>logout</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default SliderPart2