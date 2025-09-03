import { IconButtonEdit } from "@/components/icon-buttons";
import IconButtonRemove from "@/components/icon-buttons/IconButtonRemove";
import { InputName } from "@/components/inputs";
import InputDescription from "@/components/inputs/InputDescription";
import InputEmail from "@/components/inputs/InputEmail";
import InputInquiry from "@/components/inputs/InputInquiry";
import InputPhone from "@/components/inputs/InputPhone";
import InputStock from "@/components/inputs/InputStock";
import InputSurname from "@/components/inputs/InputSurname";
import InputText from "@/components/inputs/InputText";
import { Text } from "@/components/texts";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <Text variant="h2">Inicio</Text>
            <InputName
                name="name"
                label="Nombre"
                placeholder="Ingresa tu nombre"
                onChange={() => {}}
                onBlur={() => {}}
                error={false}
                helperText="Ingresa un nombre válido"/>

            <InputSurname
                name="surname"
                label="Apellido"
                onChange={() => {}}
                onBlur={() => {}}
                error={false}
                helperText="Ingresa un apellido válido"/>

            <InputEmail
                name="email"
                label="E-mail"
                onChange={() => {}}
                onBlur={() => {}}
                error={false}
                helperText="Ingresa un e-mail válido"/>

            <InputPhone
                name="phone"
                label="Teléfono"
                onChange={() => {}}
                onBlur={() => {}}
                error={false}
                helperText="Ingresa un teléfono válido"/>

            <InputInquiry
                name="inquiry"
                label="Consulta"
                onChange={() => {}}
                onBlur={() => {}}
                error={false}
                helperText="Ingresa una consulta válido"/>

            <InputText
                name="imagePath"
                label="Imagen"
                onChange={() => {}}
                onBlur={() => {}}
                error={false}
                helperText="Ingresa una ruta de imagen válida"/>

            <InputStock
                name="stock"
                label="Stock"
                onChange={() => {}}
                onBlur={() => {}}
                error={false}
                helperText="Ingresa un stock válido"/>

            <InputDescription
                name="description"
                label="Descripción"
                onChange={() => {}}
                onBlur={() => {}}
                error={false}
                helperText="Ingresa una descripción válida"/>

            <IconButtonRemove/>
            <IconButtonEdit/>
        </div>
    );
};

export default Home;