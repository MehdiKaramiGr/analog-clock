import "./App.css";
import AnalogClock from "./components/analog-clock/AnalogClock.component";
import CustomeButton from "./components/CustomeButton/CustomeButton";
import Footer from './components/Section-Footer/Footer'
import { Card } from "./components/card/Card.component";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Analog Clock Component V0.1.0</h1>
				<h6>by Mehdi Karami</h6>
				<p>
					You can download the component and inject it directly into your
					projects.
				</p>
				<CustomeButton cName="contained" url="some">
					Download Component
				</CustomeButton>
				<div className="card-overview" >

				<Card>
					<h3>Default</h3>
					<AnalogClock />
				</Card>

				<Card>
					<h3>Dashed Digits</h3>
					<AnalogClock dashed />
				</Card>
				<Card>
				<h3>Small Size</h3>

					<AnalogClock small/>
				</Card>
				</div>

			</header>
			<Footer/>
		</div>
	);
}

export default App;
