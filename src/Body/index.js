import "./style.css"

const Body = ({ title, body }) => (
    <section>
        <h2 className="body__header">
            {title}
        </h2>
        {body}
    </section>
);

export default Body;