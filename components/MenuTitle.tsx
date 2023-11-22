import { ReactNode } from 'react';

interface menuTitleProps {
	children: ReactNode;
}

const MenuTitle = ({ children }: menuTitleProps) => {
	return (
		<h1 className="text-5xl font-semibold text-gray-800 mb-10">
			{children}
		</h1>
	);
};

export default MenuTitle;
