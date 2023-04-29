import './App.css';
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { DataTable } from "./components/Table";
import { useEffect, useState } from "react";


function App() {



    const data = JSON.parse(localStorage.getItem('data')) || []


  return (
    <>
      <Header/>
          <Form />
          <DataTable data={data}/>
    </>
  );
}
export default App;
