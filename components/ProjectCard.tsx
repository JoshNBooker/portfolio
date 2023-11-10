import { ReactNode } from 'react';

interface projectCardProps {
	children: ReactNode;
}

const ProjectCard = ({ children }: projectCardProps) => {
	return (
		<div className="bg-lavender bg-opacity-25 p-5 flex flex-col justify-centre items-center h-max w-max rounded-xl shadow-2xl hover:bg-opacity-10">
			{children}
		</div>
	);
};

export default ProjectCard;
