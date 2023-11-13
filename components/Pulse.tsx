import React from 'react';
interface PulsatingTextProps {
	children: React.ReactNode | null | undefined;
}

const PulsatingText: React.FC<PulsatingTextProps> = ({
	children,
}: PulsatingTextProps) => {
	return (
		<div>
			{children &&
				(children as React.ReactElement).props.children
					.split('')
					.map((letter: string, index: number) => (
						<span
							key={index}
							className="mb-5 inline-block animate-lift"
							style={{ animationDelay: `${index * 0.5}s` }}
						>
							{letter}
						</span>
					))}
		</div>
	);
};

export default PulsatingText;
