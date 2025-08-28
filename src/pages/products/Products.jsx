import { Text } from "@/components/texts";
import "./products.scss";
import { useContext } from "react";
import AppContext from "@/contexts/AppContext";
import { ButtonPrimary } from "@/components/buttons";
import ProductGallery from "./product-gallery/ProductGallery";

const product = {
    id:1,
    title:"test1",
    description:"descripcion",
    price:1500,
    stock:5,
    imagePath: "@/assets/images/img01.jpg",
    imageAlt: "Imagen de producto",

};
const Products = () => {
    const { productsContext } = useContext(AppContext);
    const { create } = productsContext;

    return (
        <div className="products">
            <Text variant="h2">Productos</Text>
            <ButtonPrimary onClick={ () => create(product) }>Crear Producto</ButtonPrimary>
            <ProductGallery />
        </div>
    );
};

export default Products;