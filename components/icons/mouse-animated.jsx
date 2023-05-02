import React from 'react';

function MouseAnimated(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
			<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
				<g className="nc-loop_mouse-48">
					<path d="M28,46h-8 c-5.5,0-10-4.5-10-10V12c0-5.5,4.5-10,10-10h8c5.5,0,10,4.5,10,10v24C38,41.5,33.5,46,28,46z" fill="none" stroke={fill}/>
					<line fill="none" transform="translate(0 0.7296960000004624)" x1="24" x2="24" y1="13" y2="21"/>
				</g>
			</g>
		</svg>
	);
};

export default MouseAnimated;