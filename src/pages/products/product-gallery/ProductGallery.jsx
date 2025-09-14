import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import ProductItem from "../product-item/ProductItem";
import ProductNewItem from "../product-new-item/ProductNewItem";
import "./product-gallery.scss";

const ProductGallery = () => {
    const { productsContext } = useContext(AppContext);
    const { filteredProducts, isLoading, searchTerm } = productsContext;

    return (
        <div className="product-gallery">
            <ProductNewItem/>
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        isLoading={isLoading}/>
                ))
            ) : (
                searchTerm && (
                    <div className="product-gallery__no-results">
                        <p>{`No se encontraron resultados para "${searchTerm}"`}</p>
                    </div>
                )
            )}
        </div>
    );
};

export default ProductGallery;