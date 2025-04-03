// import { useState } from 'react'
import './app.scss'
import Header from './components/header/Header'
// import Footer from './components/footer/Foot'
import Banner from './components/banner/Banner'
import Episodes from './components/episodes/Episodes'
import Foot from './components/footer/Foot'

function App() {
	// const [n1, setN1] = useState(0)

	// const handlerPlus = () => {
	// 	setN1(n1 + 1)
	// }
	return (
		<div className='container'>
			<Header />
			<Banner />
			<Episodes />
			<Foot />
		</div>
	)
}

export default App
