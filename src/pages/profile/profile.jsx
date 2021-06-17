import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import './profile.scss';

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profile__right">
                    <div className="profile__right__top">
                        <div className="profile__cover">
                            <img className="profile__cover__image" src='assets/posts/1002.jpg' />
                            <img className="profile__user__image" src='assets/person/alina-riu.jpg' />
                        </div>
                        <div className="profile__info">
                            <h4 className="profile__user__name">Aline Riu</h4>
                            <span className="profile__user_bio">Life is short. What is Long?</span>
                        </div>
                    </div>
                    <div className="profile__right__bottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    );
}