import './topbar.scss';
import {Search, Person, Chat, Notifications} from '@material-ui/icons';

export default function Topbar() {
    return ( 
        <div className="topbar">
            <div className="topbar__left">
                <span className="topbar__logo">
                    Facebook
                </span>
            </div>
            <div className="topbar__center">
                <div className="topbar__searchbar">
                    <Search className='topbar__searchIcon' />
                    <input type="text" className="topbar__searchInput" placeholder='Search People, Posts or Videos' />
                </div>
            </div>
            <div className="topbar__right">
                <div className="topbar__links">
                    <span className="topbar__link">Home</span>
                    <span className="topbar__link">Timeline</span>
                </div>
                <div className="topbar__icons">
                    <div className="topbar__iconItem">
                        <Person />
                        <span className="topbar__iconBadge">1</span>    
                    </div>
                    <div className="topbar__iconItem">
                        <Chat />
                        <span className="topbar__iconBadge">10</span>    
                    </div>
                    <div className="topbar__iconItem">
                        <Notifications />
                        <span className="topbar__iconBadge">10</span>    
                    </div>
                </div>
                <img src="/assets/person/alina-riu.jpg" alt="User" title='Logged in as: Alina Riu' className="topbar__userImg" />
            </div>
        </div>
    )
}