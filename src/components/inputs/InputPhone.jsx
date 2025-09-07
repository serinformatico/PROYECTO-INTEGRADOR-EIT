import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { InputAdornment } from "@mui/material";
import PropTypes from "prop-types";
import Input from "./Input";

const InputPhone = (props) => {
    const {
        value,
        onChange,
        onBlur,
        error,
        helperText,
        maxLength = 15,
        ...restProps
    } = props;

    return (
        <Input
            type="tel"
            id="phone"
            name="phone"
            label="Teléfono"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
            endAdornment={<InputAdornment position="end"><LocalPhoneOutlinedIcon/></InputAdornment>}
            inputProps={{ maxLength }}
            {...restProps}/>
    );
};

InputPhone.propTypes = {
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    maxLength: PropTypes.number,
};

export default InputPhone;