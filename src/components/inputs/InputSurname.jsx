import PropTypes from "prop-types";
import Input from "./Input";

const InputSurname = (props) => {
    const {
        value,
        onChange,
        onBlur,
        error,
        helperText,
        maxLength = 30,
        ...restProps
    } = props;

    return (
        <Input
            type="text"
            id="surname"
            name="surname"
            label="Apellido"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
            inputProps={{ maxLength }}
            {...restProps}/>
    );
};

InputSurname.propTypes = {
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    maxLength: PropTypes.number,
};

export default InputSurname;