import { ReactNode } from 'react';

interface titleProps {
	children: ReactNode;
}

const Title = ({ children }: titleProps) => {
	return (
		<h1 className="text-3xl font-semibold text-gray-800 mb-2">
			{children}
		</h1>
	);
};

export default Title;
