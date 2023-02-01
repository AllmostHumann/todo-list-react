import { Title, Wrapper, Header } from "./styled";

const Section = ({ title, extraHeaderContent, optionalContent, body }) => {

  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        {extraHeaderContent}
        {optionalContent}
      </Header>
      {body}
    </Wrapper>
  )
};

export default Section;