import { ReactNode } from 'react';

interface paragraphProps {
	children: ReactNode;
}

const Paragraph = ({ children }: paragraphProps) => {
	return (
		<p className="bg-gradient-to-r from-gray-600 to-gray-700 mb-3 text-transparent bg-clip-text break-normal text-xl">
			{children}
		</p>
	);
};

export default Paragraph;
