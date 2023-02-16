<<<<<<< HEAD
import { useState } from 'react';
import './App.css';
import AppBar from './components/AppBar';
import Accordion from './components/Accordion';
import Alert from './components/Alert';
import Badge from './components/Badge';
import Avatar from './components/Avatar';
import Chip from './components/Chip';
import Paper from './components/Paper';
import Switch from './components/Switch';
import Dialog from './components/Dialog';
import Card from './components/Card';
import FloatingActionButton from './components/FloatingActionButton';
import Checkbox from './components/Checkbox';
import Button from './components/Button';

const menuItems = [
	{ id: 1, name: 'Home', url: '/home' },
	{ id: 2, name: 'Products', url: '/products' },
	{ id: 3, name: 'Pricing', url: '/pricing' },
	{ id: 4, name: 'Blog', url: '/blog' },
];
const dropdownMenuItems = [
	{ id: 1, name: 'Gallery', url: '/gallery' },
	{ id: 2, name: 'Contact', url: '/contact' },
	{ id: 3, name: 'Sign in', url: '/#' },
=======
import { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import Accordion from "./components/Accordion";
import Alert from "./components/Alert";
import Badge from "./components/Badge";
import Avatar from "./components/Avatar";
import Chip from "./components/Chip";
import Paper from "./components/Paper";
import Switch from "./components/Switch";
import Dialog from "./components/Dialog";
import Card from "./components/Card";
import FloatingActionButton from "./components/FloatingActionButton";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";

const menuItems = [
	{ id: 1, name: "Home", url: "/home" },
	{ id: 2, name: "Products", url: "/products" },
	{ id: 3, name: "Pricing", url: "/pricing" },
	{ id: 4, name: "Blog", url: "/blog" },
];
const dropdownMenuItems = [
	{ id: 1, name: "Gallery", url: "/gallery" },
	{ id: 2, name: "Contact", url: "/contact" },
	{ id: 3, name: "Sign in", url: "/#" },
>>>>>>> 1cd03a2730b3365589d5caaec09f0943fe6b615b
];

function App() {
	const [count, setCount] = useState(0);
	const [isOpen, setIsOpen] = useState(true);

	function handleCloseDialog() {
		setIsOpen(false);
	}

	function showDialog() {
		return (
			<Dialog
<<<<<<< HEAD
				alert={'you have at least 10 unread messages. you have to read them'}
=======
				alert={"you have at least 10 unread messages. you have to read them"}
>>>>>>> 1cd03a2730b3365589d5caaec09f0943fe6b615b
				isOpen={isOpen}
				onClose={handleCloseDialog}
			></Dialog>
		);
	}

	const [textsOfChip, setTextOfChips] = useState([
<<<<<<< HEAD
		{ id: 1, text: 'Delete' },
		{ id: 2, text: 'Add' },
	]);

	const [switchButtons, setSwitchButtons] = useState([
		{ id: 1, text: 'ON', className: 'Switch-red' },
		{ id: 2, text: 'OFF', className: 'Switch-blue' },
=======
		{ id: 1, text: "Delete" },
		{ id: 2, text: "Add" },
	]);

	const [switchButtons, setSwitchButtons] = useState([
		{ id: 1, text: "ON", className: "Switch-red" },
		{ id: 2, text: "OFF", className: "Switch-blue" },
>>>>>>> 1cd03a2730b3365589d5caaec09f0943fe6b615b
	]);

	function changeButton(id) {
		setSwitchButtons(
			switchButtons.map((button) => {
				if (button.id === id) {
<<<<<<< HEAD
					return button.text === 'ON'
						? { ...button, className: 'Switch-blue', text: 'OFF' }
						: { ...button, className: 'Switch-red', text: 'ON' };
=======
					return button.text === "ON"
						? { ...button, className: "Switch-blue", text: "OFF" }
						: { ...button, className: "Switch-red", text: "ON" };
>>>>>>> 1cd03a2730b3365589d5caaec09f0943fe6b615b
				} else {
					return button;
				}
			})
		);
	}

	function deleteChip(id) {
		setTextOfChips(textsOfChip.filter((chip) => chip.id !== id));
	}

	// Floating Action Button
<<<<<<< HEAD
	const [FAB1clicked, FAB1setClicked] = useState('click');
	const [FAB2clicked, FAB2setClicked] = useState('click');

	function FABdisplayClicked(stateIs, stateShouldBe) {
		stateIs === 'click' ? stateShouldBe('click!!!') : stateShouldBe('click');
=======
	const [FAB1clicked, FAB1setClicked] = useState("click");
	const [FAB2clicked, FAB2setClicked] = useState("click");

	function FABdisplayClicked(stateIs, stateShouldBe) {
		stateIs === "click" ? stateShouldBe("click!!!") : stateShouldBe("click");
>>>>>>> 1cd03a2730b3365589d5caaec09f0943fe6b615b
	}

	function changeChecked() {
		if (isChecked === false) {
			isChecked = true;
		} else if (isChecked === true) {
			isChecked = false;
		}
	}

	return (
<<<<<<< HEAD
		<div className='App'>
			<div className='appBar'>
				<AppBar
					menuItems={menuItems}
					dropdownMenuItems={dropdownMenuItems}
					name={'COMPANY'}
					appName={'COMPANY'}
				/>
			</div>
			<Badge value={count}>
				<p className='badge-image'>🛒</p>
			</Badge>

			<div className='card'>
				<Button
					onClick={() => setCount((count) => count + 1, setIsOpen(true))}
					size='large'
=======
		<div className="App">
			<div className="appBar">
				<AppBar
					menuItems={menuItems}
					dropdownMenuItems={dropdownMenuItems}
					name={"COMPANY"}
					appName={"COMPANY"}
				/>
			</div>
			<Badge value={count}></Badge>
			<Badge value={69}>😏</Badge>

			<div className="card">
				<Button
					onClick={() => setCount((count) => count + 1, setIsOpen(true))}
					size="large"
>>>>>>> 1cd03a2730b3365589d5caaec09f0943fe6b615b
				>
					count is {count}
				</Button>
				{count > 10 && showDialog()}
			</div>

			<h2>Accordion</h2>
<<<<<<< HEAD
			<Accordion title='accordion with configurable content'>
=======
			<Accordion title="accordion with configurable content">
>>>>>>> 1cd03a2730b3365589d5caaec09f0943fe6b615b
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				<br />
				Sapiente magnam voluptatem veritatis quaerat eaque quae exercitationem
				porro facilis tempore eos!
				<br />
				Suscipit obcaecati repellendus corrupti dolorem molestias corporis
				quaerat mollitia qui.
			</Accordion>
<<<<<<< HEAD
			<Accordion title='another accordion'>
=======
			<Accordion title="another accordion">
>>>>>>> 1cd03a2730b3365589d5caaec09f0943fe6b615b
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				<br />
				Sapiente magnam voluptatem veritatis quaerat eaque quae exercitationem
				porro facilis tempore eos!
				<br />
				Suscipit obcaecati repellendus corrupti dolorem molestias corporis
				quaerat mollitia qui.
			</Accordion>

			<h2>Alert</h2>
<<<<<<< HEAD
			<div className='alert-container'>
				<Alert type={'error'} title={'Error'} />
				<Alert type={'warning'} title={'Warning'} />
				<Alert type={'info'} title={'Info'} />
				<Alert type={'success'} title={'Success'} />
			</div>

			<h2>Avatar</h2>
			<Avatar avatarName={'john doe'} />
=======
			<div className="alert-container">
				<Alert type={"error"} title={"Error"} />
				<Alert type={"warning"} title={"Warning"} />
				<Alert type={"info"} title={"Info"} />
				<Alert type={"success"} title={"Success"} />
			</div>

			<h2>Avatar</h2>
			<Avatar avatarName={"john doe"} />
>>>>>>> 1cd03a2730b3365589d5caaec09f0943fe6b615b

			<h2>Chip</h2>
			<div>
				{textsOfChip.map((textofchip) => (
					<Chip id={textofchip.id} onPress={() => deleteChip(textofchip.id)}>
						{textofchip.text}
					</Chip>
				))}
			</div>

			<h2>Paper</h2>
<<<<<<< HEAD
			<Paper props={'this is a Paper component'} />
=======
			<Paper props={"this is a Paper component"} />
>>>>>>> 1cd03a2730b3365589d5caaec09f0943fe6b615b

			<h3>Switch</h3>
			<div>
				{switchButtons.map((button) => (
					<Switch
						id={button.id}
						classOfButton={button.className}
						onPress={() => {
							changeButton(button.id);
						}}
					>
						{button.text}
					</Switch>
				))}
			</div>

			<div>
				<h2>Card</h2>
				<Card>This is supposed to be the card content</Card>
			</div>

			<h2>Floating Action Button</h2>
			<FloatingActionButton
<<<<<<< HEAD
				buttonName={'❀'}
=======
				buttonName={"❀"}
>>>>>>> 1cd03a2730b3365589d5caaec09f0943fe6b615b
				FloatingActionButtonClicked={FAB1clicked}
				showResult={() => FABdisplayClicked(FAB1clicked, FAB1setClicked)}
			/>
			<FloatingActionButton
<<<<<<< HEAD
				buttonName={'This is a floating button!'}
=======
				buttonName={"This is a floating button!"}
>>>>>>> 1cd03a2730b3365589d5caaec09f0943fe6b615b
				FloatingActionButtonClicked={FAB2clicked}
				showResult={() => FABdisplayClicked(FAB2clicked, FAB2setClicked)}
			/>
			<h2>Checkbox</h2>
			<Checkbox
<<<<<<< HEAD
				isChecked={'false'}
=======
				isChecked={"false"}
>>>>>>> 1cd03a2730b3365589d5caaec09f0943fe6b615b
				onPress={(isChecked) => changeChecked(isChecked)}
			/>
			<h2>Button</h2>
			<Button>foo</Button>
		</div>
	);
}

export default App;
