import React from 'react';

function ArrowRight(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<line fill="none" strokeLinecap="butt" x1="2" x2="22" y1="12" y2="12"/>
		<polyline fill="none" points="15,5 22,12 15,19 " stroke={fill}/>
	</g>
</svg>
	);
};

export default ArrowRight;