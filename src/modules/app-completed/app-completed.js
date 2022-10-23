import './app-completed.scss';
import './completed-media.scss';

import worksImage1 from '../../assets/img/completed/img-1.png'
import worksImage2 from '../../assets/img/completed/img-2.png'
import worksImage3 from '../../assets/img/completed/img-3.png'
import worksImage4 from '../../assets/img/completed/img-4.png'
import worksImage5 from '../../assets/img/completed/img-5.png'
import worksImage6 from '../../assets/img/completed/img-6.png'
import worksImage7 from '../../assets/img/completed/img-7.png'
import worksImage8 from '../../assets/img/completed/img-8.png'

const AppConmpleted = () => {
	return (
		<div className="completed">
			<div className="container">
				<div className="divider"></div>
				<h2 className='title completed__title' id='completed' >Фото выполненных работ</h2>
				<p className='completed__text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>

				<div className="completed__items">
					<div className="completed__item">
						<div className="completed__line"></div>
						<img className='completed__img' src={worksImage1} alt="pic" />
					</div>
					<div className="completed__item">
						<div className="completed__line"></div>
						<img className='completed__img' src={worksImage2} alt="pic" />
					</div>
					<div className='completed__item'>
						<div className="completed__line"></div>
						<img className='completed__img' src={worksImage3} alt="pic" />
					</div>
					<div className='completed__item'>
						<div className="completed__line"></div>
						<img className='completed__img' src={worksImage4} alt="pic" />
					</div>
					<div className='completed__item'>
						<div className="completed__line"></div>
						<img className='completed__img' src={worksImage5} alt="pic" />
					</div>
					<div className='completed__item'>
						<div className="completed__line"></div>
						<img className='completed__img' src={worksImage6} alt="pic" />
					</div>
					<div className='completed__item'>
						<div className="completed__line"></div>
						<img className='completed__img' src={worksImage7} alt="pic" />
					</div>
					<div className='completed__item'>
						<div className="completed__line"></div>
						<img className='completed__img' src={worksImage8} alt="pic" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AppConmpleted