'use client';
import LineBreak from '@/components/LineBreak';
import MenuTitle from '@/components/MenuTitle';
import ModalContainer from '@/components/ModalContainer';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import { Container } from 'postcss';
import React, { useEffect, useState } from 'react';

interface BlogPost {
	id: number;
	title: {
		rendered: string;
	};
	date: string;
	content: {
		rendered: string;
	};
}

const WritingPage = () => {
	const [blogPosts, setBlogPosts] = useState<null | BlogPost[]>([]);

	const getBlogPosts = () => {
		fetch('http://localhost:8888/wordpress/wp-json/wp/v2/posts')
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

	useEffect(() => {
		getBlogPosts();
	}, []);
	if (blogPosts) {
		console.log(blogPosts[0].date);
	}
	return (
		<div className="flex flex-col items-center my-10 mx-20 max-w-screen">
			<MenuTitle>My Little Dev Blog</MenuTitle>
			<Paragraph>
				These are all posts pulled in from a wordpress site that I made
				using PHP and jQuery, pulled in through a REST API. There's not
				really much utility in doing this, but look possible employers,
				I can use RESTful APIs!
			</Paragraph>
			<LineBreak />
			{blogPosts &&
				blogPosts.map((blogpost) => (
					<div key={blogpost.id}>
						<Title>{blogpost.title.rendered}</Title>
						<Paragraph>{blogpost.date}</Paragraph>
						<Paragraph>
							<div
								dangerouslySetInnerHTML={{
									__html: blogpost.content.rendered,
								}}
							/>
						</Paragraph>
						<LineBreak />
					</div>
				))}
		</div>
	);
};

export default WritingPage;
