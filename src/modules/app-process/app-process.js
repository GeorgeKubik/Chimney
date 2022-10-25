import './app-process.scss';
import './process-media.scss';

import ListItem from '../function/process-list/process-list';

const AppProcess = ({processList}) => {

	const listItem = processList.map(item => {
		const {id, ...listInfo} = item;
		
		return ( 
			<ListItem key={id} {...listInfo}/>
		)
	})

	return (	
		<div className="process">
			<div className="container">
				<div className="divider"></div>
				<h2 className='title process__title' id='process'>Процесс выполнения монтажа</h2>
				<ul className="process__items">
					{listItem}
				</ul>
			</div>
		</div>
	)
}

export default AppProcess