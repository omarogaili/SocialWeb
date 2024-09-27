import { ImProfile } from "react-icons/im";
import { FaComments } from "react-icons/fa";
import { LiaUserFriendsSolid } from "react-icons/lia";
import style from './style/UserNav.module.css'
export default function Navbar(){
    return(
        <nav className={style.Nav_Container}>
            <ul className={style.nav_list}>
                <li><a href="/Profile"><ImProfile className={style.Icons} /> Profile</a></li>
                <li><a href="/Comments" ><FaComments className={style.Icons} /> Comments</a></li>
                <li><a href="/Comments" ><LiaUserFriendsSolid className={style.Icons} />Friends</a></li>
            </ul>
        </nav>
    );
}