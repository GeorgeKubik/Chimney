import './appprocess.scss';


const AppProcess = () => {
	return (	
		<div className="process">
			<div className="container">
				<div className="divider"></div>
				<h2 className='title process__title'>Процесс выполнения монтажа</h2>
				<div className="process__items">
					<div className="process__item"><span>1</span>Рассчёт предварительной заявки</div>
					<div className="process__item"><span>2</span>Изготовление Дымохода, покраска (если требуется)</div>
					<div className="process__item"><span>3</span>Замер объекта нашим инженером</div>
					<div className="process__item"><span>4</span>Монтаж продукции, проверка и наладкапробный запуск системы и последующая эксплуатация</div>
					<div className="process__item"><span>5</span>Составление Коммерческого предложения по изделиям дымохода и окончательной сметы на работы</div>
					<div className="process__item"><span>6</span>Гарантийное обслуживание по соответствующем сроку</div>
				</div>

			</div>
		</div>
	)
}

export default AppProcess