import './app-consultation.scss';
import spinner from '../../assets/icons/consultation/spinner.svg';
import instagram from '../../assets/icons/social/instagram.svg';
import telegram from '../../assets/icons/social/telegram.svg';
import vk from '../../assets/icons/social/vk.svg';
import whatsapp from '../../assets/icons/social/whatsapp.svg';

const AppConsultation = () => {
	return (
		<div className="consultation">
			<div className="consultation__title">необходима консультация?</div>
			<div className="consultation__text">оставьте заявку или свяжитесь с нами в социальных сетях</div>
			<div className="consultation__social">
				<a className='consultation__social-link vk' href="google.com">
					<img src={vk} alt="icon" />
				</a>
				<a className='consultation__social-link telegramm' href="google.com">
					<img src={telegram} alt="icon" />
				</a>
				<a className='consultation__social-link instagramm' href="google.com">
					<img src={instagram} alt="icon" />
				</a>
				<a className='consultation__social-link whatsApp' href="google.com">
					<img src={whatsapp} alt="icon" />
				</a>
			</div>

			<div className="order">
				<form action="#">
					<div className="order__wrapper">
						<div className="order__title">Для консультации заполните форму!</div>
						<div className="order__subtitle">Для консультации заполните форму!</div>
						<div className="order__items">
							<input className='order__input' required placeholder='Ваше имя' name='name' type="text" />
							<input className='order__input' required placeholder='Ваш телефон' name='phone' type="phone" />
							<button className='order__btn'>отправить</button>
						</div>
						<img src={spinner} alt="spinner" className="order__spinner" />
					</div>
				</form>
			</div>
		</div>
	)
}

export default AppConsultation