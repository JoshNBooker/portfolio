export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-gradient-to-r from-orange to-blue h-screen">
			{children}
		</div>
	);
}
