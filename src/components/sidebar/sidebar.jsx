import './sidebar.scss';
import {Bookmark, Event, Group, HelpOutline, Message, PlayCircleFilledOutlined, RssFeed, School, WorkOutline} from '@material-ui/icons';
import Friend from './friend';
import {Users} from '../../data';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__wrapper">
                <ul className="sidebar__list">
                    <li className="sidebar__list__item">
                        <RssFeed className='sidebar__list__item__icon'/>
                        <span className="sidebar__list__item__text">Feed</span>
                    </li>
                    <li className="sidebar__list__item">
                        <Message className='sidebar__list__item__icon'/>
                        <span className="sidebar__list__item__text">Chats</span>
                    </li>
                    <li className="sidebar__list__item">
                        <PlayCircleFilledOutlined className='sidebar__list__item__icon'/>
                        <span className="sidebar__list__item__text">Videos</span>
                    </li>
                    <li className="sidebar__list__item">
                        <Group className='sidebar__list__item__icon'/>
                        <span className="sidebar__list__item__text">Groups</span>
                    </li>
                    <li className="sidebar__list__item">
                        <Bookmark className='sidebar__list__item__icon'/>
                        <span className="sidebar__list__item__text">Bookmarks</span>
                    </li>
                    <li className="sidebar__list__item">
                        <HelpOutline className='sidebar__list__item__icon'/>
                        <span className="sidebar__list__item__text">Questions</span>
                    </li>
                    <li className="sidebar__list__item">
                        <WorkOutline className='sidebar__list__item__icon'/>
                        <span className="sidebar__list__item__text">Jobs</span>
                    </li>
                    <li className="sidebar__list__item">
                        <Event className='sidebar__list__item__icon'/>
                        <span className="sidebar__list__item__text">Events</span>
                    </li>
                    <li className="sidebar__list__item">
                        <School className='sidebar__list__item__icon'/>
                        <span className="sidebar__list__item__text">Courses</span>
                    </li>
                    <button className='sidebar__list__btn'>Show More</button>
                    <hr className='sidebar__list__hr' />
                    <ul className="sidebar__list__friends">
                        {Users.map(u => (
                            <Friend key={u.id} user={u} />
                        ))}
                    </ul>
                </ul>
            </div>
        </div>
    )
}
