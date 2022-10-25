import { Component } from 'react';

import './modal.scss';



class Modal extends Component  {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render() {
		
		const {active, onCloseModal} = this.props;
		
		return (
			<>
				<div className={active ? 'modal modal__active' : 'modal'} >
					<div className="modal__content" >
						<div className="modal__cross" onClick={onCloseModal}>&times;</div>
						Отлично, мы приняли Вашу заявку!!!
						{/* <div>Оцените сайт???</div>
						<div className='modal__wrapper_dots'>
							<input type="radio" className='modal__dot'/>
							<input type="radio" className='modal__dot'/>
							<input type="radio" className='modal__dot'/>
							<input type="radio" className='modal__dot'/>
							<input type="radio" className='modal__dot'/>
						</div>
							<button className='modal__btn' type='submit'>Отправить оценку</button> */}
					</div>
				</div>
			</>
		)
	}
}

export default Modal