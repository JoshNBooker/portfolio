import { ReactNode } from 'react';

interface modalProps {
	children: ReactNode;
}

const Modal = ({ children }: modalProps) => {
	return (
		<div className="bg-lavender bg-opacity-25 p-5 flex justify-centre items-center h-max w-9/12 rounded-xl shadow-2xl">
			{children}
		</div>
	);
};

export default Modal;
