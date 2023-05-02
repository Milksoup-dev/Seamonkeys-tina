import React from 'react';

function Logo(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 199 60" xmlns="http://www.w3.org/2000/svg">
	<g fill="none">
		<g clipPath="url(#clip0_102:21)">
			<path d="M58.71 35.1c0 1.46-.53 2.6-1.6 3.43-1.07.83-2.43 1.24-4.09 1.24-1.31 0-2.58-.36-3.81-1.08-.61-.37-1.1-.9-1.49-1.59-.39-.69-.58-1.47-.58-2.35l2.73-.13c0 .78.33 1.38.99 1.82.66.43 1.4.65 2.21.65 1.8 0 2.7-.63 2.7-1.9 0-1.04-.61-1.65-1.84-1.84l-2.51-.26c-1.25-.19-2.25-.63-2.98-1.34-.74-.71-1.1-1.72-1.1-3.05 0-1.33.53-2.42 1.58-3.29 1.05-.87 2.38-1.3 3.99-1.3 1.61 0 2.9.41 3.88 1.22.98.82 1.47 1.86 1.47 3.15l-2.68.13c-.25-1.25-1.09-1.88-2.53-1.88-.88 0-1.57.19-2.07.56-.5.38-.75.82-.75 1.33 0 .51.18.92.54 1.21.36.3.81.48 1.34.55l2.46.26c2.76.38 4.14 1.86 4.14 4.46z" fill={fill}/>
			<path d="M72.79 39.64h-5.45c-1.73 0-2.95-.3-3.65-.9-.7-.6-1.05-1.66-1.05-3.17V24.24h10.14v2.68h-7.14v3.61h5l-.22 2.68h-4.78v2.14c0 .61.14 1.02.41 1.26.27.23.77.35 1.49.35h5.23v2.68h.02z" fill={fill}/>
			<path d="M88.95 39.64h-3.14l-.87-2.66h-5.17l-.84 2.66H75.8l4.93-14.1c.22-.49.46-.83.72-1.02.27-.19.6-.28.98-.28.39 0 .7.09.94.26s.45.52.64 1.04l4.94 14.1zm-4.7-5.19l-1.82-6.1-1.9 6.1h3.72z" fill={fill}/>
			<path d="M103.98 30.45l-2.77 5.84c-.4.78-.9 1.17-1.5 1.17s-1.1-.41-1.5-1.23l-2.81-5.77v9.19h-3.01v-15.4h2.96l4.35 8.89 4.33-8.89h2.96v15.4h-3.01v-9.2z" fill={fill}/>
			<path d="M122.97 31.23v1.17c0 2.58-.49 4.46-1.46 5.62-.97 1.17-2.53 1.75-4.68 1.75s-3.7-.59-4.66-1.75c-.96-1.17-1.44-3.06-1.44-5.69V31.2c0-2.39.49-4.17 1.46-5.34s2.52-1.75 4.63-1.75 3.67.59 4.66 1.77c.99 1.19 1.49 2.97 1.49 5.35zm-3.01 1.1v-.8c0-1.38-.17-2.49-.52-3.31-.4-.95-1.27-1.43-2.6-1.43-1.34 0-2.21.48-2.62 1.43-.33.78-.5 1.88-.5 3.31v.8c0 1.86.26 3.12.78 3.76.2.27.5.51.9.7.4.2.87.29 1.43.29.56 0 1.03-.09 1.42-.28.39-.19.69-.42.91-.69.22-.27.38-.63.5-1.08.2-.7.3-1.6.3-2.7z" fill={fill}/>
			<path d="M139.15 24.24v13.84c0 .47-.14.88-.43 1.22-.29.34-.63.51-1.02.51-1 0-1.81-.58-2.44-1.73l-5.32-8.33v9.88h-3.01v-15.4h2.9l6.32 10.08V24.24h3z" fill={fill}/>
			<path d="M150.74 31.49l5.3 8.15h-3.5l-3.63-5.82-2.1 2.81v3.01h-3.01v-15.4h3.01v8.61l5.82-8.61h3.03l-4.92 7.25z" fill={fill}/>
			<path d="M169.86 39.64h-5.45c-1.73 0-2.95-.3-3.65-.9-.7-.6-1.05-1.66-1.05-3.17V24.24h10.14v2.68h-7.14v3.61h5l-.22 2.68h-4.78v2.14c0 .61.14 1.02.41 1.26.27.23.77.35 1.49.35h5.23v2.68h.02z" fill={fill}/>
			<path d="M184.85 24.24l-4.63 9.08v6.32h-2.98v-6.32l-4.63-9.08h3.27l2.88 6.21 2.83-6.21h3.26z" fill={fill}/>
			<path d="M198.63 35.1c0 1.46-.53 2.6-1.6 3.43-1.07.83-2.43 1.24-4.09 1.24-1.31 0-2.58-.36-3.81-1.08-.61-.37-1.1-.9-1.49-1.59-.39-.69-.58-1.47-.58-2.35l2.73-.13c0 .78.33 1.38.99 1.82.66.43 1.4.65 2.21.65 1.8 0 2.7-.63 2.7-1.9 0-1.04-.61-1.65-1.84-1.84l-2.51-.26c-1.25-.19-2.25-.63-2.98-1.34-.74-.71-1.1-1.72-1.1-3.05 0-1.33.53-2.42 1.58-3.29 1.05-.87 2.38-1.3 3.99-1.3 1.61 0 2.9.41 3.88 1.22.98.82 1.47 1.86 1.47 3.15l-2.68.13c-.25-1.25-1.09-1.88-2.53-1.88-.88 0-1.57.19-2.07.56-.5.38-.75.82-.75 1.33 0 .51.18.92.54 1.21.36.3.81.48 1.34.55l2.46.26c2.76.38 4.14 1.86 4.14 4.46z" fill={fill}/>
			<path d="M8.09 22.92c.58 1.13 1.31 2.17 2.19 3.08-5.17 3.15-8.63 8.54-8.63 15.04 0 1.61.21 3.36.61 4.36h.52l.07.27c.19.02.36.16.53.16.55 0 1.09-.01 1.62-.17.25-.07.49-.13.71-.23.01 0 .06-.01.06-.01.13-.06.26-.12.38-.19h.02l.06-.03.11-.06.05-.03c.11-.06.22-.13.34-.21.04-.02.08-.05.11-.07.08-.08.16-.13.24-.19l.12-.08c.11-.08.22-.16.32-.24.02-.02.04-.04.06-.05l.05-.04.21-.18c.05-.04.09-.08.14-.12.06-.06.12-.11.18-.17.07-.06.13-.12.2-.18.07-.07.14-.13.21-.2.06-.06.11-.12.17-.18l.12-.12c.06-.06.12-.13.18-.2l.05-.06c.43-.47.87-1.02 1.35-1.66l.07-.09c.41-.55.81-1.12 1.19-1.68 1.69-2.42 3.43-4.92 6.18-6.06 1.37-.57 2.86-.86 4.44-.86.22 0 .44.01.66.02 1.71.09 3.44.73 4.44 1.44 1.03.74 2.19 2.15 2.19 2.15l-2.63.39-.02.01-.28.05h-.04a5.698 5.698 0 0 0-5.02 5.66c0 3.14 2.56 5.7 5.7 5.7 1.12 0 2.2-.32 3.13-.94l.04-.03.04-.03c1.95-1.11 3.47-3 4.08-5.07.48-1.64.55-3.22.45-4.53-.09-1.14-.3-2.07-.48-2.65-.07-.23-.68-2.83-2.04-5.72a18.176 18.176 0 0 0-3.65-2.94c.87-.91 1.61-1.95 2.19-3.08 3.11.49 6.44-2.24 7.65-6.38 1.28-4.4-.33-8.74-3.59-9.69-1.96-.57-4.08.22-5.73 1.9-1.79-2.1-4.24-3.62-7.03-4.24a2.986 2.986 0 0 1 2.4-2.01c-1.22-.22-2.42.13-3.3.88a4.665 4.665 0 0 1 2.86-3.39 6.24 6.24 0 0 0-5.62 4.24c-3.58.24-6.76 1.94-8.95 4.51C8.12 7.04 6 6.25 4.04 6.82.78 7.77-.83 12.11.45 16.51c1.19 4.17 4.53 6.9 7.64 6.41z" fill={fill}/>
			<path d="M37.49 40.49c0-.04 0-.08-.01-.12-.01-.26-.03-.53-.06-.79 0-.05-.01-.1-.02-.15-.03-.26-.06-.51-.1-.77a.772.772 0 0 1-.02-.15c-.04-.26-.09-.51-.14-.77-.01-.03-.01-.06-.02-.09-.05-.23-.1-.47-.16-.7a.833.833 0 0 0-.04-.15c-.06-.24-.13-.47-.2-.7-.02-.06-.04-.13-.06-.19-.07-.22-.15-.44-.22-.66-.02-.07-.05-.13-.07-.2-.08-.22-.17-.44-.26-.65-.02-.06-.05-.11-.07-.17-.08-.19-.17-.37-.25-.56-.03-.05-.05-.11-.08-.16.5 1.08 1.46 4.78.31 8.74-.76 2.61-2.64 4.73-4.76 5.94a7.085 7.085 0 0 1-3.94 1.18 7.17 7.17 0 0 1-4.19-12.99c-3.39 1.55-5.73 4.99-5.73 8.91 0 5.4 4.58 9.8 9.98 9.8 1.48 0 2.41-.32 4.41-.96v-.01l.16-.15c.25-.12.54-.3.95-.53.09-.1.14-.2.23-.31.01-.01 0-.02.01-.04.18-.21.35-.42.52-.64.02-.02.02-.04.04-.06.17-.21.32-.43.48-.65.02-.03.04-.06.06-.08.15-.21.29-.43.43-.64.02-.04.05-.07.07-.11.13-.21.26-.42.39-.64.03-.04.05-.09.08-.14.12-.21.23-.42.34-.63.03-.06.06-.11.09-.17.1-.2.2-.41.3-.62.03-.07.06-.13.09-.2.09-.2.17-.41.25-.62.03-.07.06-.15.09-.23.08-.2.15-.4.21-.6.03-.08.06-.17.09-.25l.18-.6a10.183 10.183 0 0 0 .22-.87c.02-.1.05-.2.07-.3.04-.19.07-.39.11-.59l.06-.32c.03-.2.05-.4.08-.6.01-.11.03-.21.04-.32.02-.21.04-.43.05-.65.01-.09.02-.19.02-.29.02-.31.02-.63.02-.94 0-.28-.01-.56-.03-.84z" fill={fill}/>
			<path d="M11.13 52.11c-1.25-2.88-1.4-5.98-.45-8.87-1.01 1.21-2.16 2.32-3.59 3.14-.02.01-.04.03-.07.04-.06.03-.11.07-.17.1-.16.09-.32.17-.48.24-.01.01-.03.01-.04.02-.01.01-.02.01-.04.01-.89.4-1.89.63-2.93.63-.22 0-.44-.03-.66-.03 2.34 7 8.34 11.28 15.52 11.82a13.66 13.66 0 0 1-7.09-7.1z" fill={fill}/>
			<path d="M27.2 55.96c-5.89 0-10.68-4.79-10.68-10.68 0-5.39 4.06-9.93 9.35-10.59-.73-.36-1.83-.68-2.98-.74-1.32-.07-2.91.08-4.46.73-2.15.9-3.63 2.83-5.12 4.95-.76 1.3-1.29 2.55-1.3 2.57l-.01.01c-1.4 3.04-1.43 6.42-.09 9.54 1.45 3.35 4.29 5.93 7.79 7.09l.03.01c.01 0 .48.19 1.32.35 3.64-.3 6.97-1.7 9.66-3.85-1.11.41-2.29.61-3.51.61z" fill={fill}/>
		</g>
		<defs>
			<clipPath id="clip0_102:21">
				<path d="M0 0h198.63v59.22H0z" fill={fill}/>
			</clipPath>
		</defs>
	</g>
</svg>
	);
};

export default Logo;