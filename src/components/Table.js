import * as React from 'react';
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import '../../src/App.css'

export function DataTable(data) {

    const rows = data.data.map( (user) => {
        return {
            id: user.id,
            name: user.name,
            age: user.age
        }
    })
    console.log('rows', rows)

    const columns = [
        { field: 'id', headerName: 'ID', width: 240, headerClassName: 'custom-header'},
        { field: 'name', headerName: 'Name', width: 220, headerClassName: 'custom-header'},
        { field: 'age', headerName: 'Age', type: 'number', width: 180, headerClassName: 'custom-header' },
    ]

    return (
        <div>
            <DataGrid 
                columns={columns}
                rows={rows}
            />
        </div>
    )
}