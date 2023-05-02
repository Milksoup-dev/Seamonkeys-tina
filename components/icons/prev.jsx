import React from 'react';

function Prev(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<g fill="none">
				<path d="M11.786 14.75a.773.773 0 0 0-.212-.53L7.251 9.75l4.323-4.47a.763.763 0 0 0 .213-.53.763.763 0 0 0-.213-.53.714.714 0 0 0-.513-.22.714.714 0 0 0-.513.22l-4.835 5a.752.752 0 0 0-.213.53.773.773 0 0 0 .213.53l4.835 5a.703.703 0 0 0 .79.163.731.731 0 0 0 .326-.276.769.769 0 0 0 .122-.417z" fill={fill}/>
				<circle cx="10" cy="10" r="9.5" stroke={fill} transform="rotate(-180 10 10)"/>
			</g>
		</svg>
	);
};

export default Prev;