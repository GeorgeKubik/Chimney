import './app-header.scss';
import SocialNetwork from '../function/social/social';


import logo from '../../assets/img/header/Logo.png';
import cart from '../../assets/icons/header/cart.svg';
import hart from '../../assets/icons/header/hart.svg';
import search from '../../assets/icons/header/search.svg';

	const AppHeader = () => {
		return (
			<div className="header">
				<div className="header__logo">
					<a href="google.com">
						<img className='header__logo_img' src={logo} alt="logo" />
					</a>
				</div>

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

				<SocialNetwork />

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

			</div>
		)
	}

	export default AppHeader