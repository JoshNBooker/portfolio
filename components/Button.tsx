import { ReactNode, useState } from 'react';

interface buttonProps {
	children: ReactNode;
	onClick: React.MouseEventHandler;
	onMouseEnter: React.MouseEventHandler;
}

const Button = ({ children, onClick, onMouseEnter }: buttonProps) => {
	const [randomColour, setRandomColour] = useState('rgb(101, 194, 220)');

	function getRandomColour() {
		const colours = ['red', 'darkOrange', 'pink', 'purple', 'coral'];
		let randomColourFromArray =
			colours[Math.floor(Math.random() * colours.length)];
		console.log('random colour from array: ', randomColourFromArray);
		return randomColourFromArray;
	}

	function handleMouseEnter(event: React.MouseEvent<HTMLButtonElement>) {
		setRandomColour(getRandomColour());
		onMouseEnter(event);
		console.log('random colour:', randomColour);
	}
	return (
		<div
			className={`transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-${randomColour} duration-300 text-black inline-block`}
		>
			<button onClick={onClick} onMouseEnter={handleMouseEnter}>
				{children}
			</button>
		</div>
	);
};

export default Button;
