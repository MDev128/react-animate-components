import { keyframes } from 'styled-components';

const expanseUp = keyframes`
	0% {
		opacity: 0;
		transform-origin: 50% 0%;
		transform: scale(.2) translate(0%, -200%);
	}

	100% {
		opacity: 1;
		transform-origin: 50% 0%;
		transform: scale(1) translate(0%, 0%);
	}
`;

const expanseDown = keyframes`
	0% {
		opacity: 0;
		transform-origin: 50% 100%;
		transform: scale(.2) translate(0%, 200%);
	}

	100% {
		opacity: 1;
		transform-origin: 50% 100%;
		transform: scale(1) translate(0%, 0%);
	}
`

const expanseLeft = keyframes`
	0% {
		opacity: 0;
		transform-origin: 0% 50%;
		transform: scale(.2) translate(-200%, 0%);
	}

	100% {
		opacity: 1;
		transform-origin: 0% 50%;
		transform: scale(1) translate(0%, 0%);
	}
`;

const expanseRight = keyframes`
	0% {
		opacity: 0;
		transform-origin: 100% 50%;
		transform: scale(.2) translate(200%, 0%);
	}

	100% {
		opacity: 1;
		transform-origin: 100% 50%;
		transform: scale(1) translate(0%, 0%);
	}
`;

export {
	expanseUp,
	expanseDown,
	expanseLeft,
	expanseRight
}
