import PropTypes from "prop-types";
import Input from "./Input";

const InputDescription = (props) => {
    const {
        value,
        rows = 4,
        onChange,
        onBlur,
        error,
        helperText,
        maxLength = 100,
        ...restProps
    } = props;

    return (
        <Input
            type="text"
            id="description"
            name="description"
            label="Descripción"
            value={value}
            multiline
            rows={rows}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
            inputProps={{ maxLength }}
            {...restProps}/>
    );
};

InputDescription.propTypes = {
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    rows: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    maxLength: PropTypes.number,
};

export default InputDescription;