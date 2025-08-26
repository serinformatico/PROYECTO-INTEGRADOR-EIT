import { Text } from "@/components/texts";
import "./products.scss";
import { useContext } from "react";
import AppContext from "@/contexts/AppContext";
import { ButtonPrimary } from "@/components/buttons";

const Products = () => {
    const { productsContext } = useContext(AppContext);
    const { products, create } = productsContext;

    return (
        <div className="products">
            <Text variant="h2">Productos</Text>
            <ButtonPrimary onClick={ () => create({ name:"test1", price:1500 }) }>Crear Producto</ButtonPrimary>
            {products.map((product) => (
                <p key={product.id}>{product.name}</p>
            ))}
        </div>
    );
};

export default Products;