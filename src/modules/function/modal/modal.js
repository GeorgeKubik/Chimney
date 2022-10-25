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
					</div>
				</div>
			</>
		)
	}
}

export default Modal