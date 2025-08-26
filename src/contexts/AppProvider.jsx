import PropTypes from "prop-types";
import AppContext from "./AppContext";
import { useProduct } from "@/hooks/useProduct";

const AppProvider = (props) => {
    const { children } = props;
    const productContext = useProduct();

    return (
        <AppContext.Provider
            value={{
                productContext,
            }}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppProvider;