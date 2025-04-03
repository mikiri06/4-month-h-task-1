// import React from 'react'
import './header.scss'
export default function Header() {
	return (
		<header className='Header'>
			<h2>Castaway</h2>
			<nav className='Links'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#'>Episodes</a>
				</li>
				<li>
					<a href='#'>About</a>
				</li>
				<li>
					<a href='#'>Contact</a>
				</li>
			</nav>
		</header>
	)
}
