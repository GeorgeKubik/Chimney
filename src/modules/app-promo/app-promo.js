import './app-promo.scss';
import './promo-media.scss';

import chimney from '../../assets/img/promo/chimney.png';
import mainPhoto from '../../assets/img/promo/Blob.png';
import triangle from '../../assets/icons/promo/triangle.svg';
import dots from '../../assets/icons/promo/dots.svg';
import { Component } from 'react';

class AppPromo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			onOpenSelect: false
		}
	}

	onOpenSelect = (e) => {
		e.preventDefault();
      this.setState({
			onOpenSelect: true
		})
	}

	onCloseSelect = () => {
      this.setState({
			onOpenSelect: false
		})
	}

	render() {
		/* console.log(onOpenSelect); */
		const {onOpenSelect} = this.state;
		const className = onOpenSelect ? 'promo__select_wrapper select__active' : 'promo__select_wrapper';

		return (
			<div className="promo" onClick={this.onCloseSelect}>
				<div className="container">
					<h1 className='promo__title' id='promo'>Монтаж дымоходов</h1>
					<div className="promo__select">
						<div className="promo__select_menu-text">Главная</div>
						<div className="promo__select_vector">&#10095;</div>
						<div className='promo__select_block' onClick={e => e.stopPropagation()}>
							<ul name='text' id='select' className={className}>
								<li className='promo__select_item' onClick={this.onOpenSelect}>Монтаж дымоходов</li>
								<li className='promo__select_item' onClick={this.onCloseSelect}><a href="#process">Процесс выполнения монтажа</a></li>
								<li className='promo__select_item' onClick={this.onCloseSelect}><a href="#advantage">Почему Дымоход.ру?</a></li>
								<li className='promo__select_item' onClick={this.onCloseSelect}><a href="#consultation">Видео об установке</a></li>
								<li className='promo__select_item' onClick={this.onCloseSelect}><a href="#installation">Фото выполненных работ</a></li>
							</ul>
						</div>
					</div>
					<div className="promo__text">
						В <a className='promo__text-link' href="google.com">Дымоход.ру</a> вам помогут как приобрести, так и установить дымоход любой конфигурации. В нашем монтажном отделе, состоящим из трёх бригад работают квалифицированные специалисты, которые ежегодно проходят курсы повышения квалификации. Все работы проводим качественно и аккуратно, в короткий срок и на совесть.
					</div>
	
					<div className="promo__main">
						<div className="promo__main_item">
							<h2 className="promo__main_title">
								Lorem ipsum dolor sit amet <span>Lorem ipsum</span>
							</h2>
							<ul>
								<li className="promo__main_list">Доступные цены</li>
								<li className="promo__main_list">Собственное производсвто  Дымоходов</li>
								<li className="promo__main_list">
									Выполнение необходимых работ, связанных с установкой камина, печи, котла
								</li>
								<li className="promo__main_list">Гарантия (от трёх до десяти лет)</li>
								<li className="promo__main_list">
									Работаем чисто, аккуратно, убираем за собой, не сквернословим
								</li>
								<li className="promo__main_list">Только русские квалифицированные специалисты</li>
								<li className="promo__main_list">Устанавливаем любые дымоходы всех производителей</li>
							</ul>
						</div>
						<div className="promo__main_item">
							<img className='promo__main_photo' src={mainPhoto} alt="pic" />
							<img className='promo__main_chimney' src={chimney} alt="pic" />
							<img className='promo__main_triangle1' src={triangle} alt="pic" />
							<img className='promo__main_triangle2' src={triangle} alt="pic" />
							<img className='promo__main_dots1' src={dots} alt="pic" />
							<img className='promo__main_dots2' src={dots} alt="pic" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default AppPromo