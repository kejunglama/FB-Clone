import './register.scss';

export default function Register() {
    return (
        <div className='login'>
            <div className="login__wrapper">
                <div className="login__left">
                    <h3 className="login__left__logo__text">Lamasocial</h3>
                    <span className="login__left__desc">
                        Connect with Firends and the World around you on Facebook.
                    </span>
                </div>
                <div className="login__right">
                    <div className="login__right__container">
                        {/* <form className="login__form"> */}
                            <input placeholder='Username' className='login__form__input' />
                            <input placeholder='Email' className='login__form__input' />
                            <input placeholder='Password' className='login__form__input' />
                            <input placeholder='Password Again' className='login__form__input' />
                            <button className='login__form__btn'>Sign Up</button>
                        {/* </form> */}

                        <button className="login__form__btn__login">Log into your Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
