// import React from 'react'
import socials_1 from '../../imgs/footer/social-media.png'
import socials_2 from '../../imgs/footer/social-media2.png'
import './footer.scss'

export default function Foot() {
	return (
		<footer className='footer'>
			<div className='footer-container'>
				<div className='logo-con'>
					<h2 className='logo'>Castaway</h2>
					<a href='#'>
						<img src={socials_1} alt='socials' />
					</a>
				</div>
				<nav className='footer-container-nav linklist'>
					<li className='links'>
						<a href='#'>Home</a>
					</li>
					<li className='links'>
						<a href='#episodes'>Episodes</a>
					</li>
					<li className='links'>
						<a href='#about'>About</a>
					</li>
					<li className='links'>
						<a href='#contact'>Contact</a>
					</li>
				</nav>
				<div className='links-con linklist'>
					<li className='links'>
						<a href='#'>Style Guide</a>
					</li>
					<li className='links'>
						<a href='#'>Instructions</a>
					</li>
					<li className='links'>
						<a href='#'>Changelog</a>
					</li>
					<li className='links'>
						<a href='#'>Credit</a>
					</li>
					<li className='links'>
						<a href='#'>Powered by Webflow</a>
					</li>
					<li className='links'>
						<a href='#'>Licenses</a>
					</li>
				</div>
				<div className='socials-con'>
					<a href='#'>
						<img src={socials_2} alt='socials' />
					</a>
				</div>
			</div>
		</footer>
	)
}
