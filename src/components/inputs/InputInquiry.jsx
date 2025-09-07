import PropTypes from "prop-types";
import Input from "./Input";

const InputInquiry = (props) => {
    const {
        value,
        rows = 5,
        onChange,
        onBlur,
        error,
        helperText,
        maxLength = 250,
        ...restProps
    } = props;

    return (
        <Input
            type="text"
            id="inquiry"
            name="inquiry"
            label="Consulta"
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

InputInquiry.propTypes = {
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    rows: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    maxLength: PropTypes.number,
};

export default InputInquiry;