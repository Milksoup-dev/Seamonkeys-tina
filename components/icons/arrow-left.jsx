import React from 'react';

function ArrowLeft(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<line fill="none" strokeLinecap="butt" x1="22" x2="2" y1="12" y2="12"/>
		<polyline fill="none" points="9,19 2,12 9,5 " stroke={fill}/>
	</g>
</svg>
	);
};

export default ArrowLeft;