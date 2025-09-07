import PropTypes from "prop-types";
import Input from "./Input";

const InputName = (props) => {
    const {
        value,
        onChange,
        onBlur,
        error,
        helperText,
        maxLength = 25,
        ...restProps
    } = props;

    return (
        <Input
            type="text"
            id="name"
            name="name"
            label="Nombre"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
            inputProps={{ maxLength }}
            {...restProps}/>
    );
};

InputName.propTypes = {
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    maxLength: PropTypes.number,
};

export default InputName;