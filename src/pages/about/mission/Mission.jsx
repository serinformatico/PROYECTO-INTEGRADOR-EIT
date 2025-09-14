import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import "./mission.scss";

const Mission = () => {
    const { institutionContext } = useContext(AppContext);
    const { institution } = institutionContext;

    return (
        <section className="mission">
            <div className="mission__content">
                <Text className="mission__title" variant="h3">
          Misión
                </Text>

                <Text className="mission__description" variant="p">
                    {institution.about.mission}
                </Text>
            </div>

            <img
                className="mission__image"
                src="/images/about/mission.png"
                alt="Imagen de la misión de la institución"/>
        </section>
    );
};

export default Mission;