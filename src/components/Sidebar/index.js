import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '..//..//assets//images//logo-s.png'
import LogoSubtitle from '..//..//assets//images//logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'/>
            <img className='sub-logo' src={LogoSubtitle} alt='logoSubtitle'/>
        </Link>

        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d43"/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className="about-Link"to='/about'>
                <FontAwesomeIcon icon={faUser} color="#4d4d43"/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className="contact-Link"to='/conact'>
                <FontAwesomeIcon icon={faEnvelopeSquare} color="#4d4d43"/>
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel="nonreferrer" href="https://www.linkedin.com/in/yuto-wada-7bb980235/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="nonreferrer" href="https://github.com/wada-yuto">
                    <FontAwesomeIcon icon={faGithubAlt} color="#4d4d4e"/>
                </a>
            </li>

        </ul>
    </div>
)

export default Sidebar;