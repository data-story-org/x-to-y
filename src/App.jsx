import { useState, useEffect } from "react";
import { DiagramBuilder } from '@data-story-org/core'
import { Input, Multiply, Output } from '@data-story-org/core/lib/src/server/nodes'
// import { Input, Multiply, Output, DownloadJSON } from '@data-story-org/core/nodes'

function App() {
  const [x, setX] = useState(1);
  const [y, setY] = useState(x)

 const theFunction = async (x) => {
  const diagram = DiagramBuilder.begin()
    .add(Input, {
      node_name: "numbers",
    })
    .add(Multiply, {
      factor: 2,
    })
    .add(Output).diagram;

   const runResult = await diagram.run({ numbers: [x] })
   setY(runResult.data.diagram.getOutput())
}
  useEffect(() => {
    theFunction(x)
  }, [x])

  return (
    <div className="App">
      <div>
        <label>Provide a number</label>
        <input
          value={x}
          onChange={(e) => setX(e.target.value)}
          type="number"
        ></input>
      </div>
      <div>
        <label>After DataStory processing:</label>
        <span>{y}</span>
      </div>
    </div>
  );
}

export default App;
