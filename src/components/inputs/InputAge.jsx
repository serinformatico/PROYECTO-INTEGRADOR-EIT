import PropTypes from "prop-types";
import Input from "./Input";

const InputAge = (props) => {
    const {
        value,
        onChange,
        onBlur,
        error,
        helperText,
        ...restProps
    } = props;

    return (
        <Input
            type="number"
            id="age"
            name="age"
            label="Edad"
            value={value}
            min={18}
            max={100}
            step={1}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
            {...restProps}/>
    );
};

InputAge.propTypes = {
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.string,
};

export default InputAge;