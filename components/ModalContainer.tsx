import { ReactNode } from 'react';

interface modalContainerProps {
	children: ReactNode;
}

const ModalContainer = ({ children }: modalContainerProps) => {
	return (
		<div className="flex flex-col justify-center items-center mx-auto">
			{children}
		</div>
	);
};

export default ModalContainer;
