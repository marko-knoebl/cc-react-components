import { useState } from 'react';
import './App.css';
import AppBar from './components/AppBar';
import Accordion from './components/Accordion';
import Alert from './components/Alert';
import Badge from './components/Badge';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<div>
				<AppBar />
			</div>
			<Badge value={count}></Badge>

			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>

			<h2>Accordion</h2>
			<Accordion title="accordion with configurable content">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>
				Sapiente magnam voluptatem veritatis quaerat eaque quae exercitationem porro facilis tempore eos!<br/>
				Suscipit obcaecati repellendus corrupti dolorem molestias corporis quaerat mollitia qui.
			</Accordion>
			<Accordion title="another accordion">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>
				Sapiente magnam voluptatem veritatis quaerat eaque quae exercitationem porro facilis tempore eos!<br/>
				Suscipit obcaecati repellendus corrupti dolorem molestias corporis quaerat mollitia qui.
			</Accordion>

			<h2>Alert</h2>
			<div className='alert-container'>
				<Alert type={'error'} title={'Error'} text={'This is an error alert'} />
				<Alert
					type={'warning'}
					title={'Warning'}
					text={'This is a warning alert'}
				/>
				<Alert type={'info'} title={'Info'} text={'This is an info alert'} />
				<Alert
					type={'success'}
					title={'Success'}
					text={'This is a success alert'}
				/>
			</div>
		</div>
	);
}

export default App;
