import React from 'react';

function Voices(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
	<g fill="none">
		<path d="M4.067 21.818l-.943-.943a10.667 10.667 0 0 1 0-15.083l.943-.942 1.885 1.885-.943.943a8 8 0 0 0 0 11.312l.943.942-1.885 1.886z" fill="#009EDF"/>
		<path d="M27.933 21.818l-1.885-1.886.943-.942a8 8 0 0 0 0-11.312l-.943-.943 1.885-1.885.943.942a10.667 10.667 0 0 1 0 15.083l-.943.943z" fill="#009EDF"/>
		<path d="M18.667 18.667V16h4v-5.333h-4V8h4V4a4 4 0 0 0-4-4h-5.334a4 4 0 0 0-4 4v4h4v2.667h-4V16h4v2.667h-4v4a4 4 0 0 0 4 4h5.334a4 4 0 0 0 4-4v-4h-4z" fill="#fff"/>
		<path d="M17.333 28h-2.666v4h2.666v-4z" fill="#fff"/>
	</g>
</svg>
	);
};

export default Voices;