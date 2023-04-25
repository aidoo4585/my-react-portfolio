import './index.scss'
import Logo from '../../assets/images/KennethsLogo.png' 
import {Link, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'> 
        <Link className= 'logo' to='/' /*Linking symbol to home page*/>
            <img src={Logo} alt='my profile img'/>
        </Link>
        <nav> 
            <NavLink exact='true' activeclassName='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' /> 
            </NavLink>
            <NavLink exact='true' activeclassName='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' /> 
            </NavLink>
            <NavLink exact='true' activeclassName='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' /> 
            </NavLink>
        </nav>
        <ul> 
            <li> 
                <a taget='_blank' rel='noreferrer' href='https://www.linkedin.com/in/kennethaidoo/'/*opens link in new page*/ > 
                    <FontAwesomeIcon icon ={faLinkedin} color=" #4d4d4e"/> 
                </a>
            </li>
            <li> 
                <a taget='_blank' rel='noreferrer' href='https://github.com/aidoo4585'/*opens link in new page*/ > 
                    <FontAwesomeIcon icon ={faGithub} color=" #4d4d4e"/> 
                </a>
            </li>
            <li> 
                <a taget='_blank' rel='noreferrer' href='https://www.instagram.com/goodyuteeats/'/*opens link in new page*/ > 
                    <FontAwesomeIcon icon ={faInstagram} color=" #4d4d4e"/> 
                </a>
            </li>
        </ul>
    </div>
 
)

export default Sidebar;