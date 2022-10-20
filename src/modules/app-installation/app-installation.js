import './app-installation.scss';
import dots from '../../assets/icons/promo/dots.svg';
import blob1 from '../../assets/img/installation/Blob1.png';
import blob2 from '../../assets/img/installation/Blob2.png';


const AppInstallation = () => {
	return (
		<div className="installation">
			<div className="container">
				<div className="divider"></div>
				<h2 className="title installation__title">Видео об установке</h2>
				<div className="installation__descr">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>
				<div className="installation__wrapper">
					<img className='installation__dots1' src={dots} alt="pic" />
					<img className='installation__dots2' src={dots} alt="pic" />
					<img className='installation__blob1' src={blob1} alt="pic" />
					<img className='installation__blob2' src={blob2} alt="pic" />
				</div>
			</div>
		</div>
	)
}

export default AppInstallation