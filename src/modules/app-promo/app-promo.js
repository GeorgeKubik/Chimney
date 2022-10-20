import './app-promo.scss';
import chimney from '../../assets/img/promo/chimney.png';
import mainPhoto from '../../assets/img/promo/Blob.png';
import triangle from '../../assets/icons/promo/triangle.svg';
import dots from '../../assets/icons/promo/dots.svg';

const AppPromo = () => {
	<div className="promo">
		<div className="container">
			<h1 className='promo__header'>Монтаж дымоходов</h1>
			<div className="promo__select">
				<div className="promo__select_menu-text">главная</div>
				<div className="promo__select_vector">&#10095;</div>
				<div className="promo__select_wrapper">
					<option>Монтаж дымоходов</option>
					<option>Процесс выполнения монтажа</option>
					<option>Почему Дымоход.ру?</option>
					<option>Видео об установке</option>
					<option>Фото выполненных работ</option>
				</div>
			</div>
			<div className="promo__text">
				В <a className='promo__link' href="google.com">Дымоход.ру</a> вам помогут как приобрести, так и установить дымоход любой конфигурации. В нашем монтажном отделе, состоящим из трёх бригад работают квалифицированные специалисты, которые ежегодно проходят курсы повышения квалификации. Все работы проводим качественно и аккуратно, в короткий срок и на совесть.
			</div>

			<div className="promo__main">
				<div className="promo__main_item">
					<h2 className="promo__main_title">
						Lorem ipsum dolor sit amet <span>Lorem ipsum</span>
					</h2>
					<ul>
						<li className="promo__main_list-item">Доступные цены</li>
						<li className="promo__main_list-item">Собственное производсвто  Дымоходов</li>
						<li className="promo__main_list-item">
							Выполнение необходимых работ, связанных с установкой камина, печи, котла
						</li>
						<li className="promo__main_list-item">Гарантия (от трёх до десяти лет)</li>
						<li className="promo__main_list-item">
							Работаем чисто, аккуратно, убираем за собой, не сквернословим
						</li>
						<li className="promo__main_list-item">Только русские квалифицированные специалисты</li>
						<li className="promo__main_list-item">Устанавливаем любые дымоходы всех производителей</li>
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
}

export default AppPromo