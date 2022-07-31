import Input from "./componenet/Input";
import { useState } from "react";
import "./App.css";
import Text from "./componenet/Text";
function App() {
  const [itemList, setIteamList] = useState([]);

  function addItemsvalue(itemsData) {
    setIteamList([itemsData, ...itemList]);
    console.log(itemList);
  }

  return (
    <div className="App">
      <Input addItemsvalue={addItemsvalue} />
      <Text taskList={itemList} />
    </div>
  );
}

export default App;
