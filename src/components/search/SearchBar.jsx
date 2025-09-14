import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./search-bar.scss";

const SearchBar = ({ onSearch, placeholder = "Buscar productos...", className = "", value = "" }) => {
    const [ searchValue, setSearchValue ] = useState(value);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        onSearch(value);
    };

    const handleClear = () => {
        setSearchValue("");
        onSearch("");
    };

    // Sincronizar el estado local con el valor recibido como prop
    useEffect(() => {
        setSearchValue(value);
    }, [value]);

    return (
        <div className={`search-bar ${className}`}>
            <div className="search-bar__input-container">
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    className="search-bar__input"/>
                {searchValue && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="search-bar__clear"
                        aria-label="Limpiar búsqueda">
                        ✕
                    </button>
                )}
            </div>
        </div>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
};

export default SearchBar;