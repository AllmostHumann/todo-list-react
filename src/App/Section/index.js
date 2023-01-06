import { Div, Header } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <section>
    <Div>
      <Header>
        {title}
      </Header>
      <div>
        {extraHeaderContent}
      </div>
    </Div>
    {body}
  </section>
);

export default Section;