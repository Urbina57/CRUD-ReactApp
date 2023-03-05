import './App.css';
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import {Table} from "./components/Table";

function App() {

  return (
    <div >
      <Header/>
        <div>
          <Form />
          <Table />
        </div>
    </div>
  );
}

export default App;
