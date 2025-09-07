import PropTypes from "prop-types";
import Input from "./Input";

const InputStock = (props) => {
    const {
        value,
        onChange,
        onBlur,
        error,
        helperText,
        min = 0,
        step = 0.10,
        ...restProps
    } = props;

    return (
        <Input
            type="number"
            id="stock"
            name="stock"
            label="Stock"
            value={value}
            min={min}
            step={step}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
            {...restProps}/>
    );
};

InputStock.propTypes = {
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    min: PropTypes.number,
    step: PropTypes.number,
};

export default InputStock;