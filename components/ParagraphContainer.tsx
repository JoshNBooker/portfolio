import { ReactNode } from 'react';

interface paragraphContainerProps {
	children: ReactNode;
}

const ParagraphContainer = ({ children }: paragraphContainerProps) => {
	return <div className="max-w-2xl mb-5">{children}</div>;
};

export default ParagraphContainer;
