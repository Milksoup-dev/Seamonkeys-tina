import React from 'react';

function WorldLang(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			<g fill={secondaryfill} stroke={secondaryfill} strokeWidth="1">
				<ellipse cx="8" cy="8" fill="none" rx="4.286" ry="7.5" strokeLinecap="round" strokeLinejoin="round"/>
				<line fill="none" strokeLinecap="round" strokeLinejoin="round" x1="0.5" x2="15.5" y1="8" y2="8"/>
				<line fill="none" strokeLinecap="round" strokeLinejoin="round" x1="8" x2="8" y1="0.5" y2="15.5"/>
				<circle cx="8" cy="8" fill="none" r="7.5" stroke={fill} strokeLinecap="round" strokeLinejoin="round"/>
			</g>
		</svg>
	);
};

export default WorldLang;