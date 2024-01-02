import { ReactNode } from 'react';
import PulsatingText from '../Pulse';

const CVDownloadButton = () => {
	return (
		<a href="CV_JoshBooker_2024.pdf" download="JoshCV.pdf">
			<button className="bg-lavender bg-opacity-25 p-5 flex justify-centre items-center rounded-xl shadow-2xl max-w-2xl m-5 hover:shadow-sm">
				<PulsatingText>
					<span>Download my CV</span>
				</PulsatingText>
			</button>
		</a>
	);
};

export default CVDownloadButton;
