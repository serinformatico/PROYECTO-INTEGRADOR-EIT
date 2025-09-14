import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import "./values.scss";

const Values = () => {
    const { institutionContext } = useContext(AppContext);
    const { institution } = institutionContext;

    return (
        <section className="values">
            <div className="values__content">
                <Text className="values__title" variant="h3">
          Valores
                </Text>

                <Text className="values__description" variant="p">
                    {institution.about.values}
                </Text>
            </div>

            <img
                className="values__image"
                src="/images/about/values.png"
                alt="Imagen de los valores de la institución"/>
        </section>
    );
};

export default Values;