import { ReactNode } from 'react';

interface projectCardParagraphProps {
	children: ReactNode;
}

const ProjectCardParagraph = ({ children }: projectCardParagraphProps) => {
	return (
		<p className="bg-gradient-to-r from-gray-600 to-gray-700 mb-3 text-transparent bg-clip-text break-normal max-w-sm text-left leading-6">
			{children}
		</p>
	);
};

export default ProjectCardParagraph;
