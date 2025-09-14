import { useContext } from "react";
import AppContext from "@/contexts/AppContext";
import { Text } from "@/components/texts";
import FeaturedProductCard from "./FeaturedProductCard";
import "./featured-products-gallery.scss";

const FeaturedProductsGallery = () => {
    const { productsContext } = useContext(AppContext);
    const { products, isLoading } = productsContext;

    // Tomar los primeros 3 productos como destacados
    const featuredProducts = products.slice(0, 3);

    if (isLoading) {
        return (
            <div className="featured-products-gallery">
                <Text variant="h2" className="featured-products-gallery__title">
                    Productos Destacados
                </Text>
                <div className="featured-products-gallery__grid">
                    {[ 1, 2, 3 ].map((index) => (
                        <FeaturedProductCard
                            key={index}
                            product={{
                                id: index,
                                name: "Cargando...",
                                description: "Cargando descripción...",
                                price: 0,
                                thumbnail: "default.jpg",
                            }}
                            isLoading={true}/>
                    ))}
                </div>
            </div>
        );
    }

    if (featuredProducts.length === 0) {
        return (
            <div className="featured-products-gallery">
                <Text variant="h2" className="featured-products-gallery__title">
                    Productos Destacados
                </Text>
                <div className="featured-products-gallery__empty">
                    <Text variant="p" className="featured-products-gallery__empty-text">
                        No hay productos destacados disponibles
                    </Text>
                </div>
            </div>
        );
    }

    return (
        <div className="featured-products-gallery">
            <Text variant="h2" className="featured-products-gallery__title">
                Productos Destacados
            </Text>
            <div className="featured-products-gallery__grid">
                {featuredProducts.map((product) => (
                    <FeaturedProductCard
                        key={product.id}
                        product={product}
                        isLoading={isLoading}/>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProductsGallery;