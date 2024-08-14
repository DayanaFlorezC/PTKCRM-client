
import React from "react";
import { IoIosArrowBack, } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";


import './style.css'
import { Button } from "@nextui-org/react";


function PaginationComponent({ total, page, setPage }) {


    const handleSetPage = (value) => {

        const posiblePage = page + value
        const posibleTotal = posiblePage *10

        if (page + value > 0) setPage(page + value)
    }

    return <div className="pagination-container">
        <Button isIconOnly onClick={() => { handleSetPage(-1) }}>
            <IoIosArrowBack />
        </Button>
        <span className="currentPage">
            {page}
        </span>
        <Button isIconOnly onClick={() => { handleSetPage(+1) }}>
            <GrFormNext width={100} />
        </Button>

    </div>

}

export default PaginationComponent