import React from "react";
import SectionLayout from "../../layouts/sectionLayout";
import ElegantShadow from "../../codepenReact/textShadowElegant";
import FormInnerShadow from "../../codepenReact/formInnerShadow";
import ScrollAnimation from "react-animate-on-scroll";

const Contactanos = () => {
  return (
    <SectionLayout section={"contacto"}>
      <ScrollAnimation delay="30" animateIn="fadeIn">
        <FormInnerShadow />
      </ScrollAnimation>
    </SectionLayout>
  );
};

export default Contactanos;
