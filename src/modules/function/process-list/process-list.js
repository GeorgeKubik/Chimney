import './process-list.scss';

const ProcessList = ({listNum, text}) => {
	
	return (
		<>
			<li className="process__item">
				<span className='process__id'>
					{listNum}
				</span>
				{text}
			</li>
		</>
	)
}

export default ProcessList