/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';

function App() {
	const theme = useTheme();
	return (
		<div
			css={{
				minHeight: '100vh',
				background: theme.bg,
				color: theme.text,
			}}
		>
			<header>I am a header</header>
			<main>
				<h1>Hello World</h1>
				<label htmlFor="name">Name</label>
				<input type="text" name="name" id="name" />
			</main>
			<footer>I am a footer</footer>
		</div>
	);
}

export { App };
