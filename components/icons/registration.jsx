import React from 'react';

function Registration(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
	<g fill="none">
		<path d="M16 31.333C7.545 31.333.667 24.454.667 15.999.667 7.545 7.545.666 16 .666s15.333 6.879 15.333 15.333c0 8.455-6.878 15.334-15.333 15.334zm0-28c-6.984 0-12.667 5.682-12.667 12.666 0 6.985 5.683 12.667 12.667 12.667 6.985 0 12.667-5.682 12.667-12.667 0-6.984-5.683-12.666-12.667-12.666z" fill="#fff"/>
		<path d="M16 16.666a.667.667 0 0 1-.666-.667V7.333a.667.667 0 1 1 1.333 0v8.666a.666.666 0 0 1-.667.667z" fill="#009EDF"/>
		<path d="M24 16.665h-8a.667.667 0 1 1 0-1.333h8a.666.666 0 1 1 0 1.333z" fill="#009EDF"/>
		<path d="M10 24a.667.667 0 0 1-.516-1.089l6-7.333a.667.667 0 0 1 1.032.845l-6 7.333A.666.666 0 0 1 10 24z" fill="#fff"/>
		<path d="M16 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#fff"/>
	</g>
</svg>
	);
};

export default Registration;