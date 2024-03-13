import { DynamicButton } from "../../../components/dynamicButton/DynamicButton";
import { DynamicTable } from "../../../components/dynamicTable/DynamicTable";
import IconDownLoad from "../../../assets/DownloadIcon.png";
import IconBottomArrow from "../../../assets/ArrowBottom.png";
import IconCalendar from "../../../assets/IconCalendar.png";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import "./dashboard.scss";

const data = [
    {
        fechaYHora: "02/15/2022 10:30 AM",
        numeroDeOperacion: "OP001",
        tipoDeDocumento: "Pasaporte",
        numeroDeDocumento: "12345678",
        monto: "$1,000.00"
    },
    {
        fechaYHora: "02/15/2022 11:45 AM",
        numeroDeOperacion: "OP002",
        tipoDeDocumento: "Tarjeta de Identidad",
        numeroDeDocumento: "987654321",
        monto: "$2,000.00"
    },
    {
        fechaYHora: "02/16/2022 09:00 AM",
        numeroDeOperacion: "OP003",
        tipoDeDocumento: "Cédula de Ciudadanía",
        numeroDeDocumento: "555555555",
        monto: "$3,000.00"
    },
    {
        fechaYHora: "02/16/2022 02:15 PM",
        numeroDeOperacion: "OP004",
        tipoDeDocumento: "Pasaporte",
        numeroDeDocumento: "777777777",
        monto: "$4,000.00"
    },
    {
        fechaYHora: "02/17/2022 08:30 AM",
        numeroDeOperacion: "OP005",
        tipoDeDocumento: "Cédula de Ciudadanía",
        numeroDeDocumento: "888888888",
        monto: "$5,000.00"
    },
    {
        fechaYHora: "02/17/2022 03:45 PM",
        numeroDeOperacion: "OP006",
        tipoDeDocumento: "Pasaporte",
        numeroDeDocumento: "666666666",
        monto: "$6,000.00"
    },
    {
        fechaYHora: "02/18/2022 10:00 AM",
        numeroDeOperacion: "OP007",
        tipoDeDocumento: "Cédula de Ciudadanía",
        numeroDeDocumento: "999999999",
        monto: "$7,000.00"
    },
    {
        fechaYHora: "02/18/2022 04:15 PM",
        numeroDeOperacion: "OP008",
        tipoDeDocumento: "Tarjeta de Identidad",
        numeroDeDocumento: "444444444",
        monto: "$8,000.00"
    }
];

const columns = [
    { id: "fechaYHora", label: "Fecha y hora" },
    { id: "numeroDeOperacion", label: "Número de Operación" },
    { id: "tipoDeDocumento", label: "Tipo de Documento" },
    { id: "numeroDeDocumento", label: "Número de Documento" },
    { id: "monto", label: "Monto" }
];

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
                    <label htmlFor="numberIdentification">
                        <input placeholder="Número de documento" type="text" name="numberIdentification" id="numberIdentification" />
                    </label>
                    <label htmlFor="numberDisbursement">
                        <input placeholder="Número de desembolso" type="text" name="numberDisbursement" id="numberDisbursement" />
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
                <DynamicTable columns={columns} data={data} rowsPerPage={rowsPerPage} page={page} setRowsPerPage={setRowsPerPage} setPage={setPage} />
            </section>
        </main>
    )
}

export default Dashboard;
