import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import "./dynamicTable.scss";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
AOS.init();

export const DynamicTable = ({ rowsPerPage, page, setRowsPerPage, setPage }) => {
    const itemperpage = [5, 10, 15, 20, 25, 30]
    return (
        <>
            <table className="dynamicTable">
                <thead>
                    <tr>
                        <th>Fecha y hora</th>
                        <th>Número de Operación</th>
                        <th>Tipo de Documento</th>
                        <th>Número de Documento</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>02/15/2022 10:30 AM</td>
                        <td>OP001</td>
                        <td>Pasaporte</td>
                        <td>12345678</td>
                        <td>$1,000.00</td>
                    </tr>
                    <tr>
                        <td>02/15/2022 11:45 AM</td>
                        <td>OP002</td>
                        <td>Licencia de Conducir</td>
                        <td>987654321</td>
                        <td>$2,000.00</td>
                    </tr>
                    <tr>
                        <td>02/16/2022 09:00 AM</td>
                        <td>OP003</td>
                        <td>Cédula de Ciudadanía</td>
                        <td>555555555</td>
                        <td>$3,000.00</td>
                    </tr>
                    <tr>
                        <td>02/16/2022 02:15 PM</td>
                        <td>OP004</td>
                        <td>Pasaporte</td>
                        <td>777777777</td>
                        <td>$4,000.00</td>
                    </tr>
                    <tr>
                        <td>02/17/2022 08:30 AM</td>
                        <td>OP005</td>
                        <td>Cédula de Ciudadanía</td>
                        <td>888888888</td>
                        <td>$5,000.00</td>
                    </tr>
                    <tr>
                        <td>02/17/2022 03:45 PM</td>
                        <td>OP006</td>
                        <td>Pasaporte</td>
                        <td>666666666</td>
                        <td>$6,000.00</td>
                    </tr>
                    <tr>
                        <td>02/18/2022 10:00 AM</td>
                        <td>OP007</td>
                        <td>Cédula de Ciudadanía</td>
                        <td>999999999</td>
                        <td>$7,000.00</td>
                    </tr>
                    <tr>
                        <td>02/18/2022 04:15 PM</td>
                        <td>OP008</td>
                        <td>Licencia de Conducir</td>
                        <td>444444444</td>
                        <td>$8,000.00</td>
                    </tr>
                </tbody>
            </table>
            <div
                className="paginationTable"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800">
                <Select
                    value={page}
                    onChange={(e) => setRowsPerPage(e.target.value)}
                >
                    {itemperpage.map((item, index) => (
                        <MenuItem key={index} value={item}>{item}</MenuItem>
                    ))}
                </Select>
            </div>
        </>
    )
}

DynamicTable.propTypes = {
    rowsPerPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    setRowsPerPage: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired
};