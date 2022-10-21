import './app-header.scss';
import SocialNetwork from '../function/social/social';


import logo from '../../assets/img/header/Logo.png';
import cart from '../../assets/icons/header/cart.svg';
import hart from '../../assets/icons/header/hart.svg';
import search from '../../assets/icons/header/search.svg';

	const AppHeader = () => {
		return (
			<header className="header">
					<a className='header__logo' href="google.com">
						<img src={logo} alt="logo" />
					</a>

				<div className="header__hamburger">
					<div className="header__hamburger-divider"></div>
					<div className="header__hamburger-divider"></div>
					<div className="header__hamburger-divider"></div>
				</div>

				<menu className='header__menu'>
					<div className="header__menu-item">Каталог товаров</div>
					<div className="header__menu-item">Доставка и оплата</div>
					<div className="header__menu-item">Цены</div>
					<div className="header__menu-item">Контакты</div>
				</menu>

				<a href="google.com" className="header__phone">+7 (812) <span>509 21 98</span></a>

				<div className="header__btn">перезвоните мне</div>

				<div className="header__social">
					<SocialNetwork />
				</div>

				<div className="header__wrap">
					<div className="header__wrap-item">
						<img src={search} alt="icon" />
					</div>
					<div className="header__wrap-item">
						<img src={hart} alt="icon" />
					</div>
					<div className="header__wrap-item">
						<img src={cart} alt="icon" />
					</div>
				</div>

			</header>
		)
	}

	export default AppHeader