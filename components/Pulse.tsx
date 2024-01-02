import React from 'react';
import Space from './Space';
interface PulsatingTextProps {
	children: React.ReactNode | null | undefined;
}

const PulsatingText: React.FC<PulsatingTextProps> = ({
	children,
}: PulsatingTextProps) => {
	return (
		<div className="flex align-center">
			{children &&
				String((children as React.ReactElement).props.children)
					.split('')
					.map((letter: string, index: number) => {
						console.log(letter);
						return letter === ' ' ? (
							<span
								key={index}
								style={{ whiteSpace: 'pre-wrap' }}
								className="opacity-0"
							>
								space
							</span>
						) : (
							<span
								key={index}
								className="mb-5 inline-block animate-lift text-5xl font-semibold text-gray-800"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								{letter}
							</span>
						);
					})}
		</div>
	);
};

export default PulsatingText;
