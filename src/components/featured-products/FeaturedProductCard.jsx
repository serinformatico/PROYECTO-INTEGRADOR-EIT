import { Text } from "@/components/texts";
import { Skeleton } from "@/components/skeleton";
import { CardActionArea, Card as MuiCard } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./featured-product-card.scss";

const FeaturedProductCard = (props) => {
    const {
        product,
        isLoading,
        className,
        ...restProps
    } = props;

    const navigate = useNavigate();
    const classes = `featured-product-card ${className ?? ""}`;

    const handleViewProducts = () => {
        navigate("/products");
    };

    return (
        <MuiCard className={classes} {...restProps}>
            <div className="featured-product-card__badge">
                <Text variant="span" className="featured-product-card__badge-text">DESTACADO</Text>
            </div>

            <Skeleton className="featured-product-card__image--skeleton" isLoading={isLoading}>
                <CardActionArea onClick={handleViewProducts}>
                    <img
                        className="featured-product-card__image"
                        src={`/images/products/${product.thumbnail}`}
                        alt={product.name}/>
                </CardActionArea>
            </Skeleton>

            <div className="featured-product-card__content">
                <Skeleton className="featured-product-card__name--skeleton" isLoading={isLoading}>
                    <Text className="featured-product-card__name" variant="h3">{product.name}</Text>
                </Skeleton>
                <Skeleton className="featured-product-card__description--skeleton" isLoading={isLoading}>
                    <Text className="featured-product-card__description" variant="p">{product.description}</Text>
                </Skeleton>
                <Skeleton className="featured-product-card__price--skeleton" isLoading={isLoading}>
                    <Text className="featured-product-card__price" variant="span">${product.price.toFixed(2)}</Text>
                </Skeleton>
            </div>
        </MuiCard>
    );
};

FeaturedProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
    }),
    isLoading: PropTypes.bool.isRequired,
    className: PropTypes.string,
};

export default FeaturedProductCard;