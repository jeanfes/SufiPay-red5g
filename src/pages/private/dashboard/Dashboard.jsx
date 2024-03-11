import { DynamicButton } from "../../../components/dynamicButton/DynamicButton";
import { DynamicTable } from "../../../components/dynamicTable/DynamicTable";
import IconDownLoad from "../../../assets/DownloadIcon.png";
import IconBottomArrow from "../../../assets/ArrowBottom.png";
import IconCalendar from "../../../assets/IconCalendar.png";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from "react";
import "./dashboard.scss";


const Dashboard = () => {
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const typesId = ["Tipo doc.", "Cédula de ciudadanía", "Cédula de extranjería", "Pasaporte", "Tarjeta de identidad"];
    return (
        <main className="mainDashboard">
            <section className="headerTableContainer">
                <h1 id="headerTableTitle ">Mis desembolsos</h1>
                <DynamicButton icon={IconDownLoad} text="Descargar" />
            </section>
            <section className="mainTableContainer">
                <div className="filtersContainer">
                    <Select
                        defaultValue={0}
                        className="select"
                        endAdornment={<InputAdornment sx={{ position: "absolute", right: "20px", pointerEvents: "none" }} position="end"><img src={IconBottomArrow} alt="" /></InputAdornment>}
                    >
                        {typesId.map((type, index) => (
                            <MenuItem key={index} value={index}>{type}</MenuItem>
                        ))}
                    </Select>
                    <label htmlFor="">
                        <input placeholder="Número de documento" type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        <input placeholder="Número de documento" type="text" name="" id="" />
                    </label>
                    <Select
                        defaultValue={0}
                        className="select"
                        endAdornment={<InputAdornment sx={{ position: "absolute", right: "20px", pointerEvents: "none" }} position="end"><img src={IconCalendar} alt="" /></InputAdornment>}
                    >
                        <MenuItem value={0}>Desde</MenuItem>
                    </Select>
                    <Select
                        defaultValue={0}
                        className="select"
                        endAdornment={<InputAdornment sx={{ position: "absolute", right: "20px", pointerEvents: "none" }} position="end"><img src={IconCalendar} alt="" /></InputAdornment>}
                    >
                        <MenuItem value={0}>Hasta</MenuItem>
                    </Select>
                </div>
                <DynamicTable rowsPerPage={rowsPerPage} page={page} setRowsPerPage={setRowsPerPage} setPage={setPage} />
            </section>
        </main>
    )
}

export default Dashboard;
