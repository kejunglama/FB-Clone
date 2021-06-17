export default function Online({user}) {
    return (
        <li className="rightbar__friend">
            <div className="rightbar__friend__image__container">
                <img
                    src={user.profilePicture}
                    className="rightbar__friend__image"
                />
                <span className="rightbar__friend__online"></span>
            </div>
            <span className="rightbar__friend__name">{capitalize(user.username)}</span>
        </li>
    );
}
function capitalize(str) {
    return str.toLowerCase().replace(/(?<= )[^\s]|^./g, a => a.toUpperCase());
}