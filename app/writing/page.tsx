'use client';
import LineBreak from '@/components/LineBreak';
import MenuTitle from '@/components/MenuTitle';
import ModalContainer from '@/components/ModalContainer';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import Container from '@/components/Container';
import React, { useEffect, useState } from 'react';
import Pulse from '@/components/Pulse';
import Button from '@/components/Button';
import Modal from '@/components/Modal';

interface BlogPost {
	id: number;
	title: string;
	created_at: string;
	description: string;
	url: string;
}

const WritingPage = () => {
	const [blogPosts, setBlogPosts] = useState<null | BlogPost[]>([]);
	const reverseString = (string: string) => {
		let reversedString = '';
		for (let i = string.length - 1; i >= 0; i--) {
			reversedString += string[i];
		}
		return reversedString;
	};

	const formatDate = (created_at: string) => {
		let date = created_at.substring(0, 10);
		let dateArray = date.split('-');
		let formattedDate = '';
		for (let i = 2; i >= 0; i--) {
			formattedDate += `${dateArray[i]} `;
		}
		return formattedDate;
	};

	const getBlogPosts = () => {
		fetch(`https://dev.to/api/articles?username=boojnooker`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const contentType = response.headers.get('content-type');
				if (
					contentType &&
					contentType.indexOf('application/json') !== -1
				) {
					return response.json();
				} else {
					throw new Error('Not a JSON response');
				}
			})
			.then((data) => {
				setBlogPosts(data);
			})
			.catch((error) => {
				console.error('Error fetching blog posts:', error);
			});
	};
	console.log(blogPosts);

	useEffect(() => {
		getBlogPosts();
	}, []);

	return (
		<div>
			<Container>
				<Title>Welcome to my Dev Blog!</Title>
				<Paragraph>
					These posts are pulled in from my profile on dev.to through
					their API. Look potential employers, I know how to use
					RESTful APIs!
				</Paragraph>
			</Container>
			{blogPosts ? (
				blogPosts.map((post) => (
					<div
						className="ml-10 flex flex-col space-y-5 mt-5"
						key={post.id}
					>
						<Paragraph>
							<span className="text-xl">{post.title}</span>
						</Paragraph>
						<Paragraph>{formatDate(post.created_at)}</Paragraph>
						<Paragraph>{post.description}</Paragraph>
						<a href={post.url}>
							<div className="bg-lavender bg-opacity-25 p-5 flex justify-centre items-center h-max w-max rounded-xl shadow-2xl max-w-2xl hover:shadow-none">
								Read More on dev.to
							</div>
						</a>
					</div>
				))
			) : (
				<Title>
					<Pulse>Won't be a sec!</Pulse>
				</Title>
			)}
		</div>
	);
};

export default WritingPage;
