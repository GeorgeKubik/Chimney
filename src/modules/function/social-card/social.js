
import { Fragment } from 'react';
import './social.scss';


const SocialNetwork = ({icon}) => {

	return (
		<Fragment>
			<a href="google.com" className="link">
				{icon}
			</a>
		</Fragment>
	)
}

export default SocialNetwork