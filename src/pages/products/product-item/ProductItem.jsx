import { ButtonPrimary } from "@/components/buttons";
import { Skeleton } from "@/components/skeleton";
import { Text } from "@/components/texts";
import { CardActionArea, Card as MuiCard } from "@mui/material";
import PropTypes from "prop-types";
import "./product-item.scss";

const ProductItem = (props) => {
    const {
        isLoading,
        imagePath,
        imageAlt,
        title,
        description,
        className,
        ...restProps
    } = props;

    const classes = `product-item ${className ?? ""}`;

    return (
        <MuiCard className={classes} {...restProps}>
            <Skeleton className="product-item__image--skeleton" isLoading={isLoading} variant="rectangular">
                <CardActionArea>
                    <img className="product-item__image" src={imagePath} alt={imageAlt}/>
                </CardActionArea>
            </Skeleton>

            <div className="product-item__content">
                <Skeleton className="product-item__title--skeleton" isLoading={isLoading}>
                    <Text className="product-item__title" variant="h3">{title}</Text>
                </Skeleton>
                <Skeleton className="product-item__description--skeleton" isLoading={isLoading}>
                    <Text className="product-item__description" variant="p">{description}</Text>
                </Skeleton>
            </div>

            <div className="product-item__actions">
                <Skeleton className="product-item__actions--skeleton" isLoading={isLoading}>
                    <ButtonPrimary size="sm">Ver más</ButtonPrimary>
                </Skeleton>
            </div>
        </MuiCard>
    );
};

ProductItem.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    imagePath: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default ProductItem;