import { Text } from "@/components/texts";
import "./highlighted-paragraph.scss";

const HighlightedParagraph = () => {
    return (
        <div className="highlighted-paragraph">
            <div className="highlighted-paragraph__content">
                <Text variant="h1" className="highlighted-paragraph__title">
                    ¡Bienvenido a nuestra tienda!
                </Text>
                <Text variant="h3" className="highlighted-paragraph__subtitle">
                    Descubre productos increíbles
                </Text>
                <Text variant="p" className="highlighted-paragraph__description">
                    En nuestra tienda encontrarás una amplia selección de productos de alta calidad,
                    diseñados para satisfacer todas tus necesidades. Desde productos básicos hasta
                    artículos especializados, tenemos todo lo que necesitas en un solo lugar.
                </Text>
                <div className="highlighted-paragraph__features">
                    <div className="highlighted-paragraph__feature">
                        <img src="/images/envio.jpg" alt="Envío rápido" className="highlighted-paragraph__feature-image"/>
                        <span className="highlighted-paragraph__feature-text">Envío rápido y seguro</span>
                    </div>
                    <div className="highlighted-paragraph__feature">
                        <img src="/images/quality.jpg" alt="Calidad premium" className="highlighted-paragraph__feature-image"/>
                        <span className="highlighted-paragraph__feature-text">Productos de calidad premium</span>
                    </div>
                    <div className="highlighted-paragraph__feature">
                        <img src="/images/descuentos.jpg" alt="Precios competitivos" className="highlighted-paragraph__feature-image"/>
                        <span className="highlighted-paragraph__feature-text">Precios competitivos</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighlightedParagraph;