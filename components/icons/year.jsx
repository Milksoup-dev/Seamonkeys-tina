import React from 'react';

function Year(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 32 31" xmlns="http://www.w3.org/2000/svg">
	<g fill="none">
		<path d="M25.333 4V1.333a1.334 1.334 0 0 0-2.666 0V4h2.666z" fill="#009EDF"/>
		<path d="M9.333 4V1.333a1.333 1.333 0 1 0-2.666 0V4h2.666z" fill="#009EDF"/>
		<path d="M28 30.667H4a4 4 0 0 1-4-4V9.334a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v17.333a4 4 0 0 1-4 4zm1.333-18.666H2.667v14.666A1.333 1.333 0 0 0 4 28.001h24a1.333 1.333 0 0 0 1.333-1.334V12.001z" fill="#fff"/>
		<path d="M10.667 14.666H5.333v4h5.334v-4z" fill="#fff"/>
		<path d="M18.667 14.666h-5.334v4h5.334v-4z" fill="#fff"/>
		<path d="M10.667 21.334H5.333v4h5.334v-4z" fill="#fff"/>
		<path d="M18.667 21.334h-5.334v4h5.334v-4z" fill="#fff"/>
		<path d="M26.667 14.666h-5.334v4h5.334v-4z" fill="#009EDF"/>
	</g>
</svg>
	);
};

export default Year;