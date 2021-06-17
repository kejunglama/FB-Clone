import './share.scss'
import {EmojiEmotions, Label, PermMedia, Room} from '@material-ui/icons';

export default function Share() {
    return (
        <div className='share'>
            <div className="share__wrapper">
                <div className="share__top">
                    <img src="/assets/person/alina-riu.jpg" alt="" className="share__user-img" />
                    <input placeholder="What's on your mind?" className="share__input" />
                </div>
                <hr />
                <div className="share__bottom">
                    <div className="share__options">
                        <div className="share__option">
                            <PermMedia htmlColor='tomato' className='share__option__icon' / >
                            <span className="share__option__text">Photo or Img</span>
                        </div>
                        <div className="share__option">
                            <Label htmlColor='blue' className='share__option__icon' / >
                            <span className="share__option__text">Tag</span>
                        </div>
                        <div className="share__option">
                            <Room htmlColor='green' className='share__option__icon' / >
                            <span className="share__option__text">Location</span>
                        </div>
                        <div className="share__option">
                            <EmojiEmotions htmlColor='orange' className='share__option__icon' / >
                            <span className="share__option__text">Feeling</span>
                        </div>
                    </div>
                        <button className="share__button">Share</button>
                </div>
            </div>
        </div>
    )
}
