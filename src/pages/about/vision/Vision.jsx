import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import "./vision.scss";

const Vision = () => {
    const { institutionContext } = useContext(AppContext);
    const { institution } = institutionContext;

    return (
        <section className="vision">
            <div className="vision__content">
                <Text className="vision__title" variant="h3">
          Visión
                </Text>

                <Text className="vision__description" variant="p">
                    {institution.about.vision}
                </Text>
            </div>

            <img
                className="vision__image"
                src="/images/about/vision.png"
                alt="Imagen de la visión de la institución"/>
        </section>
    );
};

export default Vision;