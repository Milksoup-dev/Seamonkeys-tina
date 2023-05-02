import React from 'react';

function Client(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
	<g fill="none">
		<path d="M31.161 19.665l-4.989-2a1.334 1.334 0 0 1-.839-1.235v-1.17A5.309 5.309 0 0 0 28 10.665V8.229a5.45 5.45 0 0 0-5.333-5.563 5.45 5.45 0 0 0-5.334 5.563v2.437A5.31 5.31 0 0 0 20 15.259v1.171a1.335 1.335 0 0 1-.839 1.237l-2.904 1.163 2.562 1.024a3.985 3.985 0 0 1 2.514 3.715v3.097a3.954 3.954 0 0 1-.245 1.333h9.579A1.333 1.333 0 0 0 32 26.666v-5.764a1.334 1.334 0 0 0-.839-1.237z" fill="#009EDF"/>
		<path d="M17.828 22.33l-4.99-2A1.333 1.333 0 0 1 12 19.097v-1.17a5.31 5.31 0 0 0 2.667-4.594v-2.437a5.45 5.45 0 0 0-5.334-5.563A5.45 5.45 0 0 0 4 10.895v2.437a5.31 5.31 0 0 0 2.667 4.593v1.171a1.334 1.334 0 0 1-.839 1.237l-4.99 2A1.332 1.332 0 0 0 0 23.568v3.097A1.333 1.333 0 0 0 1.333 28h16a1.333 1.333 0 0 0 1.334-1.334v-3.097a1.333 1.333 0 0 0-.839-1.237z" fill="#fff"/>
	</g>
</svg>
	);
};

export default Client;