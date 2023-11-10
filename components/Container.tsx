import { ReactNode } from 'react';

interface containerProps {
	children: ReactNode;
}

const Container = ({ children }: containerProps) => {
	return (
		<div className="flex flex-col items-center my-auto mx-auto max-w-screen">
			{children}
		</div>
	);
};

export default Container;
