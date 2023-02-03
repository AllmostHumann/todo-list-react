import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { AuthorText, Link } from "./styled";

const AuthorPage = () => (
  <Container>
    <Header title=" Autor" />
    <Section
      title="O mnie"
      body=
      {
        <AuthorText>
          Cześć!👋 <br />
          <p>
            Mam na imię <strong>Kuba</strong> i ukończyłem studia z tytułem magistra inżyniera na wydziale Technologii Żywności na Uniwersytecie Rolniczym w Krakowie. Jako specjalizację wybrałem <em><strong>Fermentację i Mikrobiologię Techniczną.</strong></em><br />
          </p>
          <p>
            Aktualnie pracuję w największym browarze rzemieślniczym w Polsce.
          </p>
          <p>
            Po pracy chodzę na kremówki 🍰 i uczę się programowania 👨‍💻.
          </p>
          <p>
            Zapraszam na mojego <strong><Link rel="norefferer" target="_blank" href="https://github.com/AllmostHumann">Githuba!</Link></strong>
          </p>
        </AuthorText>
      }
    />
  </Container >
);

export default AuthorPage;
