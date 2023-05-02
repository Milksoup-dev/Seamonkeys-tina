import React from 'react';

function Translate(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
	<g fill="none">
		<path d="M17.16 20.093l-3.387-3.347.04-.04a23.36 23.36 0 0 0 4.947-8.707h3.907V5.333h-9.334V2.666h-2.666v2.667H1.333v2.653h14.894A20.951 20.951 0 0 1 12 15.133a20.861 20.861 0 0 1-3.08-4.467H6.253a23.415 23.415 0 0 0 3.974 6.08L3.44 23.439l1.893 1.894L12 18.666l4.147 4.147 1.013-2.72zm7.507-6.76H22l-6 16h2.667l1.493-4h6.333l1.507 4h2.667l-6-16zm-3.494 9.333l2.16-5.773 2.16 5.773h-4.32z" fill="#fff"/>
		<path d="M24.667 13.332H22l-6 16h2.667l1.493-4h6.333l1.507 4h2.667l-6-16zm-3.494 9.333l2.16-5.773 2.16 5.773h-4.32z" fill="#009EDF"/>
	</g>
</svg>
	);
};

export default Translate;