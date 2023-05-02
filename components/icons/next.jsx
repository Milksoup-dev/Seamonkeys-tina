import React from 'react';

function Next(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg">
			<g fill="none">
				<path d="M7.333 4.75a.772.772 0 0 0 .213.53l4.322 4.47-4.322 4.47a.763.763 0 0 0-.213.53c0 .199.076.39.213.53.136.141.32.22.513.22a.714.714 0 0 0 .513-.22l4.835-5a.752.752 0 0 0 .213-.53.772.772 0 0 0-.213-.53l-4.835-5a.703.703 0 0 0-.79-.163.731.731 0 0 0-.327.276.768.768 0 0 0-.122.417z" fill={fill}/>
				<circle cx="10.333" cy="10" r="9.5" stroke={fill}/>
			</g>
		</svg>
	);
};

export default Next;