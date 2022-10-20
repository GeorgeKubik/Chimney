import './appadvantage.scss';
import guarantee from '../../assets/icons/advantage/guarantee.svg';
import architect from '../../assets/icons/advantage/architect.svg';
import review from '../../assets/icons/advantage/review.svg';

const AppAdvantage = () => {
	return (
		<div className="advantage">
			<div className="container">
				<div className="divider"></div>
				<h2 className='title advantage__title'>Почему Дымоход.ру?</h2>
				<p className="advantage__descr">
					В отличие от других производителей, мы ручаемся за качество продукции, т.к. все Дымоходы изготавливаются из качественной стали, проверенного теплоизолятора, по современной технологии плазменной сварки «встык»
				</p>
				<div className="advantage__items">
					<div className="advantage__item">
						<img className='advantage__icon' src={guarantee} alt="icon" />
						<div className="advantage__item_title">Большой гарантийный срок</div>
						<div className="advantage__item_text">
						Крепёж, стыковка элементов – <span>10 лет</span>
						<br />
						Сквозная коррозия труб – <span>5 лет</span>
						<br />
						Гидроизоляция – <span>3 года</span>
						</div>
					</div>
					<div className="advantage__item">
						<img className='advantage__icon' src={architect} alt="icon" />
						<div className="advantage__item_title">Помощь в покупке агрегата</div>
						<div className="advantage__item_text">
							(печи, камина, котла), а также качественной установке на объекте с последующим гарантийным сервисом
						</div>
					</div>
					<div className="advantage__item">
						<img className='advantage__icon' src={review} alt="icon" />
						<div className="advantage__item_title">Реальные отзывы клиентов</div>
						<div className="advantage__item_text">
							Убедитесь в добросовестности исполнения, прочитав Отзывы клиентов в специальном разделе
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AppAdvantage