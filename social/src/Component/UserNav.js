import { ImProfile } from "react-icons/im";
import { FaComments } from "react-icons/fa";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { useNavigate,Link } from "react-router-dom";
import style from './style/UserNav.module.css'
import HamburgerMenu from "./HamburgerMenu";
export default function Navbar(){
    return(
        <nav className={style.Nav_Container}>
            <ul className={style.nav_list}>
                <li><Link to="/Profile"><ImProfile className={style.Icons} /> Profile</Link></li>
                <li><a href="/Comments" ><FaComments className={style.Icons} /> Comments</a></li>
            </ul>
            <HamburgerMenu/>
        </nav>
    );
}