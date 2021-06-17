import './login.scss';

export default function Login() {
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
                            <input placeholder='Password' className='login__form__input' />
                            <button className='login__form__btn'>Login</button>
                        {/* </form> */}

                        <span className="login__form__forgot">Forgot Password?</span>
                        <button className="login__form__btn__register">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
