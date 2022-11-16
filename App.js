import { Provider } from "react-redux";
import {store} from "./Redux/Store"
import Output from "./Redux/Output";
import Fetch from "./Redux/Fetch";
// import Slice from "./Redux/Slice";     


function App() {
  return (
    <div className="App">
     <Provider store={store}>
      <Output/>
      {/* <Slice/> */}
     </Provider>
    </div>
  );
}

export default App;
