import logo from "@/assets/images/logo.png";
import { Text } from "@/components/texts";
import PropTypes from "prop-types";
import "./institution-logo.scss";

const InstitutionLogo = (props) => {
    const { className, ...restProps } = props;
    const classes = `institution-logo ${className ?? ""}`;

    return (
        <div className={classes} {...restProps}>
            <img className="institution-logo__logo" src={logo} alt="Logo de la institución"/>
            <Text className="institution-logo__title" variant="h1">Mi Institución</Text>
        </div>
    );
};

InstitutionLogo.propTypes = {
    className: PropTypes.string,
};

export default InstitutionLogo;