import { ReactNode } from 'react';

interface projectCardParagraphProps {
	children: ReactNode;
}

const ProjectCardParagraph = ({ children }: projectCardParagraphProps) => {
	return (
		<p className="bg-gradient-to-r from-gray-600 to-gray-700 mb-3 text-transparent bg-clip-text max-w-md text-left scrollable-paragraph">
			{children}
			<style jsx>{`
				.scrollable-paragraph {
					max-height: 400px;
					overflow-y: auto;
					margin: 0;
				}
			`}</style>
		</p>
	);
};

export default ProjectCardParagraph;
