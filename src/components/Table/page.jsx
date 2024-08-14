import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";
import { Button } from "@nextui-org/react";
import { IoAddCircleOutline } from "react-icons/io5";

import './style.css'

function TableComponent({ colums, data, acciones, handleActionClick }) {

    return (
        <div className="table-content">
            <Table aria-label="Example static collection table" className="table">
                <TableHeader>
                    {
                        colums.map((e, index) => {
                            return <TableColumn className="column" key={index}>{e}</TableColumn>
                        })
                    }
                </TableHeader>
                <TableBody>
                    {
                        data.map((item, index) => {
                            return <TableRow key={index}>
                                {
                                    colums.map((col, ind) => {
                                        return <TableCell key={ind}>
                                            {col === 'Acciones' ? (acciones.map((acc) => {
                                                return <button className="actions-row"  onClick={() => handleActionClick(acc.name, null, acc.title, item.id)}>{acc.icon}</button>
                                            })) : <div className="row-ul"> {item[col]}</div>}
                                        </TableCell>
                                    })
                                }
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
            <div>
                <Button onClick={() => handleActionClick('crear', null, 'Nuevo')} className="bgGradient" onEv>
                    <IoAddCircleOutline />
                </Button>
            </div>

        </div>
    )

}

export default TableComponent