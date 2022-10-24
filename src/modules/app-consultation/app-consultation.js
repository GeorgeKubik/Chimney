import { Component } from 'react';

import './app-consultation.scss';
import './media-consultation.scss';

import spinner from '../../assets/icons/consultation/spinner.svg';

import SocialNetwork from '../function/social-card/social';



class AppConsultation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			phone: ''
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {

		const {name, phone} = this.state;
		return (
			<div className="consultation">
				<div className="consultation__title" id='consultation'>необходима консультация?</div>
				<div className="consultation__text">оставьте заявку или свяжитесь с нами в социальных сетях</div>
				
				<div className="consultation__social">
					<SocialNetwork />
				</div>
				
				<div className="form">
					<form action="#">
						<div className="form__wrapper">
							<div className="form__title">Для <span>консультации</span> заполните форму!</div>
							<div className="form__subtitle">Для консультации заполните форму!</div>
							<div className="form__items">
								<input 
									className='form__input' 
									required placeholder='Ваше имя' 
									name='name' 
									value={name}
									type="text"
									onChange={this.onValueChange} />
								<input 
									className='form__input' 
									required placeholder='Ваш телефон'
									name='phone' 
									value={phone}
									type="phone"
									onChange={this.onValueChange}/>
								<button className='form__btn'>отправить</button>
							</div>
							<img src={spinner} alt="spinner" className="form__spinner" />
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default AppConsultation