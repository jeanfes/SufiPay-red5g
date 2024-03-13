import PropTypes from "prop-types";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import IconBottomArrow from "../../assets/ArrowBottom.png";
import IconLeftArrow from "../../assets/ArrowLeft.png";
import IconRightArrow from "../../assets/ArrowRight.png";
import InputAdornment from "@mui/material/InputAdornment";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./dynamicTable.scss";
AOS.init();

export const DynamicTable = ({ columns, data, rowsPerPage, page, setRowsPerPage, setPage }) => {
    const itemperpage = [5, 10, 15, 20, 25, 30]
    const [showPagination, setShowPagination] = useState(false)

    const handleNextPage = () => {
        if (page === Math.ceil(data?.length / rowsPerPage)) return
        setPage(page + 1)
    }

    const handleBackPage = () => {
        if (page === 1) return
        setPage(page - 1)
    }

    useEffect(() => {
        setPage(1)
    }, [rowsPerPage, setPage])

    return (
        <>
            <table className="dynamicTable">
                <thead>
                    <tr>
                        {
                            columns?.map((item, index) => (
                                <th key={index}>{item?.label}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item, index) => (
                            index >= (page - 1) * rowsPerPage && index < page * rowsPerPage && (
                                <tr key={index}>
                                    <td>{item?.fechaYHora}</td>
                                    <td>{item?.numeroDeOperacion}</td>
                                    <td>{item?.tipoDeDocumento}</td>
                                    <td>{item?.numeroDeDocumento}</td>
                                    <td>{item?.monto}</td>
                                </tr>
                            )
                        ))
                    }
                </tbody>
            </table>
            <div
                className={`paginationTable ${showPagination ? "showPagination" : ""}`}
                onMouseEnter={() => setShowPagination(true)}
                onMouseLeave={() => setShowPagination(false)}>
                <div className="containerNextBackButtons">
                    <button onClick={handleBackPage}>
                        <img src={IconLeftArrow} alt="" />
                    </button>
                    <label htmlFor="">
                        <input value={page} type="text" name="" id="" />
                        <p>{`de ${Math.ceil(data?.length / rowsPerPage)}`}</p>
                    </label>
                    <button onClick={handleNextPage}>
                        <img src={IconRightArrow} alt="" />
                    </button>
                </div>
                <label className="containerRowsPerPage">
                    <span>
                        <p>Registros por página</p>
                        <p>{rowsPerPage}</p>
                    </span>
                    <Select
                        sx={{ border: "none" }}
                        value={""}
                        onChange={(e) => setRowsPerPage(e.target.value)}
                        endAdornment={<InputAdornment sx={{ position: "absolute", right: "20px", pointerEvents: "none" }} position="end"><img src={IconBottomArrow} alt="" /></InputAdornment>}
                    >
                        {itemperpage.map((item, index) => (
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </label>
            </div >
        </>
    )
}

DynamicTable.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    setRowsPerPage: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired
}