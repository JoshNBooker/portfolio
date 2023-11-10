import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-gradient-to-r from-orange to-blue mt-auto mb-auto">
				{children}
			</body>
		</html>
	);
}
