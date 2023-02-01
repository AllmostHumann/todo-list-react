import Container from "../../common/Container";
import Header from "../../common/Header";
import { Section, Title } from "./styled";

export default () => (

  <Container>
    <Header
      title="O autorze"
    />
    <Title>
      Jakub Głuch
    </Title>
    <Section>
      <p>
        Mam na imię <strong>Kuba</strong> i ukończyłem studia z tytułem magistra inżyniera na wydziale Technologii Żywności na Uniwersytecie Rolniczym w Krakowie. Jako specjalizację wybrałem <em><strong>Fermentację i Mikrobiologię Techniczną.</strong></em><br />
      </p>
      <p>
        Aktualnie pracuję w największym browarze rzemieślniczym w Polsce.
      </p>
      <p>
        Po pracy chodzę na kremówki 🍰 i uczę się programowania 👨‍💻.
      </p>
    </Section>
  </Container >
)