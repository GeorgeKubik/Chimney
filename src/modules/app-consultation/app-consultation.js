import './app-consultation.scss';
import SocialNetwork from '../function/social-card/social';

import spinner from '../../assets/icons/consultation/spinner.svg';


const AppConsultation = () => {
	return (
		<div className="consultation">
			<div className="consultation__title" id='consultation'>необходима консультация?</div>
			<div className="consultation__text">оставьте заявку или свяжитесь с нами в социальных сетях</div>
			
			<div className="consultation__social">
				<SocialNetwork />
			</div>
			
			<div className="order">
				<form action="#">
					<div className="order__wrapper">
						<div className="order__title">Для <span>консультации</span> заполните форму!</div>
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