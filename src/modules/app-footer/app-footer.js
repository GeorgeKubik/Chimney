import './app-footer.scss';
import instagram from '../../assets/icons/social/instagram.svg';
import telegram from '../../assets/icons/social/telegram.svg';
import vk from '../../assets/icons/social/vk.svg';
import whatsapp from '../../assets/icons/social/whatsapp.svg';

const AppFooter = () => {
	return (
		<footer className="footer">
			<div className="container">
				<footer className="footer__items">
					<div className="footer__item">
						<div className="footer__item_title">
							каталог
						</div>
						<div className="footer__wrapper">
							<ul className='footer__catalog'>
								<a href="google.com"><li>Дымоходы</li></a>
								<a href="google.com"><li>Дымососы</li></a>
								<a href="google.com"><li>Печи для дома</li></a>
								<a href="google.com"><li>Печи для бани</li></a>
							</ul>
							<ul className='footer__catalog'>
								<a href="google.com"><li>Камины</li></a>
								<a href="google.com"><li>Силикат кальция</li></a>
								<a href="google.com"><li>Котлы</li></a>
								<a href="google.com"><li>Ещё</li></a>
							</ul>
						</div>
					</div>
					<div className="footer__item">
						<div className="footer__item_title">
							информация
						</div>
							<div className="footer__wrapper">
								<ul className='footer__information'>
									<a href="google.com"><li>Каталог</li></a>
									<a href="google.com"><li>Установка и монтаж</li></a>
									<a href="google.com"><li>Отзывы </li></a>
									<a href="google.com"><li>Ликвидация товара</li></a>
								</ul>
								<ul className='footer__information'>
									<a href="google.com"><li>Полезное</li></a>
									<a href="google.com"><li>Контакты</li></a>
									<a href="google.com"><li>Оплата и доставка</li></a>
								</ul>
							</div>
					</div>
					<div className="footer__item">
						<div className="footer__item_title">
							время работы
						</div>
						<div className="footer__hourse">
							<span>пн-пт</span> 9:00 – 20:00 <span>сб-вс</span> 10:00 – 18:00
						</div>
						<div className="footer__street">
						г. Санкт - Петербург ,ул. Тамбасова д.7
						</div>
						<div className="footer__social">
								<a className='footer__social-link vk' href="google.com">
									<img src={vk} alt="icon" />
								</a>
								<a className='footer__social-link telegramm' href="google.com">
									<img src={telegram} alt="icon" />
								</a>
								<a className='footer__social-link instagramm' href="google.com">
									<img src={instagram} alt="icon" />
								</a>
								<a className='footer__social-link whatsApp' href="google.com">
									<img src={whatsapp} alt="icon" />
								</a>
						</div>

					</div>
				</footer>
			</div>
		</footer>
	)
}

export default AppFooter