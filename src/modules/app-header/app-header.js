import './app-header.scss';
import logo from '../../assets/img/header/Logo.png';
import instagram from '../../assets/icons/social/instagram.svg';
import telegram from '../../assets/icons/social/telegram.svg';
import vk from '../../assets/icons/social/vk.svg';
import whatsapp from '../../assets/icons/social/whatsapp.svg';

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

				<div className="header__social">
					<a href="google.com" className="header__social-link">
						<img src={vk} alt="icon" />
					</a>
					<a href="google.com" className="header__social-link">
						<img src={telegram} alt="icon" />
					</a>
					<a href="google.com" className="header__social-link">
						<img src={instagram} alt="icon" />
					</a>
					<a href="google.com" className="header__social-link">
						<img src={whatsapp} alt="icon" />
					</a>
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

			</div>
		)
	}

	export default AppHeader