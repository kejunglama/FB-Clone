import { Users } from "../../data";
import Online from "./online/online";
import "./rightbar.scss";
export default function Rightbar({profile}) {
    const RightBar_Home = () => {
        return (
            <>
                <div className="rightbar__wrapper">
                    <div className="rightbar__bday">
                        <img
                            src="/assets/elements/gift.png"
                            className="element__icon__bday"
                        />
                        <span className="rightbar__bday__text">
                            <b> Pola Foster </b>and <b>4 other friends </b>have Birthday Today.
                        </span>
                    </div>
                    <div>
                        <img className="rightbar__ad" src="/assets/ads.png" alt="" />
                    </div>
                </div>
                <div className="rightbar__active_friends rightbar__sticky">
                    <h4 className="rightbar__title">Active Friends</h4>
                    <ul className="rightbar__list">
                        {Users.map(u => (
                            <Online key={u.id} user={u} />
                        ))}
                    </ul>
                </div>
            </>
        );
    }
    const RightBar_Profile = () => {
        return (
            <>
                <div className='rightbar__wrapper'>
                    <h4 className='rightbar__title'> User Information </h4>
                    <div className="rightbar__info">
                        <Rightbar__info__item field='City' val='New York' />
                        <Rightbar__info__item field='From' val='Madrid' />
                        <Rightbar__info__item field='Status' val='Single' />
                    </div>

                </div>
                <div className="rightbar__sticky">
                <h4 className='rightbar__title'> Friends List </h4>
                <div className="rightbar__profile__friends">
                    {Users.slice(0,6).map(
                        u => (
                            <Rightbar__friend name={u.username} profilePicture={u.profilePicture} />
                        )
                    )}
                </div>
                </div>
            </>
        );
    }
    const Rightbar__info__item = (props) => {
        return (
            <tr className="rightbar__info__item">
                <td className="rightbar__info__item__field">{props.field}</td>
                <td className="rightbar__info__item__value">{props.val}</td>
            </tr>
        );
    }
    const Rightbar__friend = (props) => {
        return (
            <div className='rightbar__profile__friend'>
                <img src={props.profilePicture} alt="" className='rightbar__profile__friend__image' />
                <span className='rightbar__profile__friend__name'>{capitalize(props.name)}</span>
            </div>
        );
    }

    const capitalize = (str) => {
        return str.toLowerCase().replace(/(?<= )[^\s]|^./g, a => a.toUpperCase());
    }

    return (
        <div className="rightbar">
            {profile? <RightBar_Profile /> : <RightBar_Home />}
        </div>
    );
}
