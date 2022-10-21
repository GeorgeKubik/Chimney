import React, {useEffect, useRef} from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
/* npm install --save-dev video.js */
/* npm install --save video.js @videojs/themes */

//forest

	import '@videojs/themes/dist/forest/index.css';

// Sea
/* import '@videojs/themes/dist/sea/index.css'; */



const VideoJS = ({options, themeName='sea'}) => {
	const videoRef = useRef(null);
	const playerRef = useRef(null);

	useEffect(() => {
		const player = playerRef.current;

		if (!player) {
			const videoElement = videoRef.current;
			if (!videoElement) return;

			playerRef.current = videojs(videoElement, options);
		};

		return () => {
			if (player) {
				player.disposed();
				playerRef.current = null;
			}
		};
	}, [options, videoRef, playerRef]);

	return (
		<div data-vjs-player>
			<video ref={videoRef} className={`video-js vjs-big-play-centered vjs-theme-${themeName}`} />
		</div>
	)
}

export default VideoJS