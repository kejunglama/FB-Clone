import './post.scss';
import { MoreVert } from '@material-ui/icons';
import { Users } from '../../../data';
import { useState } from 'react';

export default function Post({ post }) {
    const [like, setLike] = useState(post.likes);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(!isLiked ? like + 1 : like - 1);
        setIsLiked(!isLiked);
    }

    const user = Users.filter((u) => u.id === post.userID)[0];
    const capitalize = (str) => {
        return str.toLowerCase().replace(/(?<= )[^\s]|^./g, a => a.toUpperCase());
    }

    return (
        <div className="post">
            <div className="post__wrapper">
                <div className="post__top">
                    <div className="post__top__left">
                        <img alt="User PP" className="post__user-img" src={user.profilePicture} />
                        <span className="post__user-name">{capitalize(user.username)}</span>
                        <span className="post__date">{post.date}</span>
                    </div>
                    <div className="post__top__right">
                        <MoreVert />
                    </div>
                </div>
                <div className="post__center">
                    <span className="post__text">
                        {post.desc}
                    </span>
                    <img className='post__image' src={post.image} />
                </div>
                <div className="post__bottom">
                    <div className="post__bottom__left">
                        <img className='element__icon' src="assets/elements/like.svg" onClick={likeHandler} />
                        <img className='element__icon' src="assets/elements/love.svg" onClick={likeHandler} />
                        <span className="post__like-counter">{like.toLocaleString()} people like it</span>
                    </div>
                    <div className="post__bottom__right">
                        <span className="post__comment-counter">{post.comments.toLocaleString()} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}