// import React from 'react'
import hero from '../../imgs/hero.png'
import socialMedia from '../../imgs/social.png'
import './banner.scss'

export default function Banner() {
	return (
		<div className='row'>
			<div className='col-6'>
				<img className='hero' src={hero} alt='' />
			</div>
			<div className='col-6'>
				<h1>
					Take your podcast to the next <strong>level</strong>
				</h1>
				<div className='listen-on'>
					<h6>Listen on</h6>
					<img src={socialMedia} alt='social' />
				</div>
			</div>
		</div>
	)
}
