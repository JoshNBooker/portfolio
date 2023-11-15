import { ReactNode } from 'react';

interface paragraphProps {
	children: ReactNode;
}
const Paragraph = ({ children }: paragraphProps) => {
	return (
		<p className="scrollable-paragraph">
			{children}
			<style jsx>{`
				.scrollable-paragraph {
					max-height: 300px;
					overflow-y: auto;
					margin: 0;
				}
			`}</style>
		</p>
	);
};

export default Paragraph;
