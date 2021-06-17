export default function Friend({user}) {
    return (
        <li className='sidebar__list__friend'>
            <img src={user.profilePicture} alt="" className="sidebar__list__friend__img" />
            <span className="sidebar__list__friend__name">
                {capitalize(user.username)}
            </span>
        </li>
    )
}
function capitalize(str) {
    return str.toLowerCase().replace(/(?<= )[^\s]|^./g, a => a.toUpperCase());
}
