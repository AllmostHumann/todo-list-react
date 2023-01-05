import { BodyHeader } from "./styled";

const Body = ({ title, body }) => (
    <section>
        <BodyHeader>
            {title}
        </BodyHeader>
        {body}
    </section>
);

export default Body;