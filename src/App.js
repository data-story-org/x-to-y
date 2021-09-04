import { useState } from 'react';

function theFunction(x) {
	/*
	// Something like ...
	let diagram = DiagramBuilder.begin().setContext({numbers: [{x}]})
		.add(Input, {
			node_name: 'numbers'
		})
		.add(Multiply, {
			factor: 2
		})
		.add(Output);
	
	const y = diagram.run({numbers: [x]}).defaultOutput()
	*/

	const y = x
	
	return y
}




function App() {
	const [x, setX] = useState(1)
  return (
    <div className="App">
			<div>
      	<label>Provide a number</label>
				<input value={x} onChange={e => setX(e.target.value)} type="number"></input>
			</div>
			<div>
				<label>After DataStory processing:</label>
				<span>{theFunction(x)}</span>
			</div>
    </div>
  );
}

export default App;
