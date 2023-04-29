import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import {useState} from "react";

let nextId = 1

export function Form() {
    const [name, setName] = useState()
    const [age, setAge] = useState()

    const handleSubmit = (e) => {
        let savedData = JSON.parse(localStorage.getItem('data')) || []

        let newData = {
            id: nextId++,
            name,
            age
        }
        savedData.push(newData)
        localStorage.setItem('data', JSON.stringify(savedData))
        e.preventDefault()
    }

     const styles = {
         contenedor: {
             padding: '10px',
             marginTop: '25px',
             display: 'flex',
             justifyContent: 'center'
         },
         footer: {
             marginTop: '12px'
         }
     }

    return (
        <div style={styles.contenedor}>
            <form onSubmit={handleSubmit}>
                <p>Name:</p>
                <TextField
                    autoComplete={'off'}
                    name={'name'}
                    onChange={ (event) => setName(event.target.value)}
                    size={"small"}
                    inputProps={{style:{color: 'gray', background: 'none', border: '0.5px solid gray', borderRadius: '7px'}}}
                />
                <p>Age:</p>
                <TextField
                    name={'age'}
                    onChange={ (event) => setAge(event.target.value) }
                    type={"number"}
                    size={"small"}
                    inputProps={{style:{color: 'gray', background: 'none', border: '0.5px solid gray', borderRadius: '7px'}}}
                />
                <div style={styles.footer}>
                    <Button fullWidth variant={'contained'} color={'success'} type={"submit"}>Save</Button >
                </div>
            </form>
        </div>
    )
}