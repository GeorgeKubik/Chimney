import './app-process.scss';
import './process-media.scss';

const AppProcess = () => {
	return (	
		<div className="process">
			<div className="container">
				<div className="divider"></div>
				<h2 className='title process__title' id='process'>Процесс выполнения монтажа</h2>
				<ul className="process__items">
					<li className="process__item"><span>1</span>Рассчёт предварительной заявки</li>
					<li className="process__item"><span>4</span>Изготовление Дымохода, покраска (если требуется)</li>
					<li className="process__item"><span>2</span>Замер объекта нашим инженером</li>
					<li className="process__item"><span>5</span>Монтаж продукции, проверка и наладкапробный запуск системы и последующая эксплуатация</li>
					<li className="process__item"><span>3</span>Составление Коммерческого предложения по изделиям дымохода и окончательной сметы на работы</li>
					<li className="process__item"><span>6</span>Гарантийное обслуживание по соответствующем сроку</li>
				</ul>
			</div>
		</div>
	)
}

export default AppProcess