import { useEffect } from "react";
import { DynamicInput } from "../../../components/dynamicInput/DynamicInput";
import { DynamicButton } from "../../../components/dynamicButton/DynamicButton";
import { LogoSufi } from "../../../assets/LogoSufi";
import { IconDotRed } from "../../../assets/IconDotRed";
import { Figure1 } from "../../../assets/Figure1";
import { GroupDotsBlack } from "../../../assets/GroupDotsBlack";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./login.scss";
AOS.init();

const Login = () => {
    const navigate = useNavigate();
    const { errors, touched, handleSubmit, getFieldProps } = useFormik({
        initialValues: {
            usuario: "",
            contraseña: ""
        },
        onSubmit: (values) => {
            navigate("/dashboard");
            console.log(values);
        },
        validationSchema: Yup.object({
            usuario: Yup.string().required("El nombre de usuario es obligatorio"),
            contraseña: Yup.string().required("La contraseña es obligatoria")
        }),
        validateOnChange: true,
    });

    useEffect(() => {
        document.title = "Sufipay - Login";
    }, []);

    return (
        <main className="mainContainerLogin">
            <form onSubmit={handleSubmit} className="loginSection">
                <picture id="containerLogoSufi">
                    <LogoSufi />
                </picture>
                <div className="containerTitleLogin">
                    <h2>Sufipay</h2>
                    <p>Administrador comercial</p>
                </div>
                <div className="containerInputsLogin">
                    <DynamicInput
                        name="usuario"
                        type="text"
                        errors={errors}
                        touched={touched}
                        getFieldProps={getFieldProps} />
                    <DynamicInput
                        name="contraseña"
                        type="password"
                        errors={errors}
                        touched={touched}
                        getFieldProps={getFieldProps} />
                    <picture
                        data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="800"
                        id="iconDotRed1">
                        <IconDotRed />
                    </picture>
                    <picture
                        data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="800"
                        id="groupsDotsBlack1">
                        <GroupDotsBlack />
                    </picture>
                </div>
                <div className="containerButtonsLogin">
                    <DynamicButton text="INGRESAR" color={"var(--red_1_-dd3542)"} />
                    <Link to="/">No recuerdo mi contraseña</Link>
                    <picture
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="800"
                        id="iconDotRed2">
                        <IconDotRed />
                    </picture>
                    <picture
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="800"
                        id="groupsDotsBlack2">
                        <GroupDotsBlack />
                    </picture>
                </div>
            </form>
            <picture
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
                id="containerFigure1">
                <Figure1 />
            </picture>
            <picture
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
                id="containerFigure2">
                <Figure1 />
            </picture>
        </main >
    )
}

export default Login;
