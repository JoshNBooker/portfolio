import React from 'react';
import Button from './Button';
import Paragraph from './Paragraph';
import Title from './Title';
import MenuTitle from './MenuTitle';

interface menuProps {
	setSelectedComponent: Function;
	setModalVisible: Function;
}

const Menu = ({ setSelectedComponent, setModalVisible }: menuProps) => {
	return (
		<div className="pt-5">
			<ul>
				<li>
					<Button
						onClick={() => {
							console.log('click');
						}}
						onMouseEnter={() => {
							setSelectedComponent('aboutMe');
							setModalVisible(true);
						}}
					>
						<MenuTitle>
							<span className="ml-8">About Me</span>
						</MenuTitle>
					</Button>
				</li>
				<li>
					<a href="/ProjectsPage">
						<Button
							onClick={() => setSelectedComponent('projects')}
							onMouseEnter={() =>
								setSelectedComponent('projects')
							}
						>
							<MenuTitle>Projects</MenuTitle>
						</Button>
					</a>
				</li>
				<li>
					<Button
						onClick={() => setSelectedComponent('writing')}
						onMouseEnter={() => setSelectedComponent('writing')}
					>
						<MenuTitle>
							<span className="ml-12">Writing</span>
						</MenuTitle>
					</Button>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
