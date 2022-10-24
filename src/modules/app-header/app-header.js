import './app-header.scss';
import './header-media.scss';
import '../function/social-card/social.scss';


import SocialNetwork from '../function/social-card/social';
import HeaderElements from '../function/header-elements/header-elements';

import logo from '../../assets/img/header/Logo.svg';


	const AppHeader = ({socialIcon}) => {

		const socElement = socialIcon.map(item => {
			const {id, ...itemIcon} = item
			return (
				<SocialNetwork key={id} {...itemIcon}/>
			)
		});

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
					<div className="header__menu_item">Каталог товаров</div>
					<div className="header__menu_item">Доставка и оплата</div>
					<div className="header__menu_item">Цены</div>
					<div className="header__menu_item">Контакты</div>
				</menu>

				<a href="tel:+78125092198" className="header__phone">+7 (812) <span>509 21 98</span></a>
				<button className="header__btn"><a className='header__link' href="google.com">перезвоните мне</a></button>

				<div className="header__social">
					{socElement}
				</div>

				<div className="header__nav-elements">
					<HeaderElements />
				</div>

			</header>
		)
	}

	export default AppHeader