
import { HighlightedParagraph } from "@/components/highlighted-paragraph";
import { FeaturedProductsGallery } from "@/components/featured-products";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <HighlightedParagraph />
            <FeaturedProductsGallery />
        </div>
    );
};

export default Home;