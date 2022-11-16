import "./style.css"

const Main = ({title, body}) => (
    <section>
        <h2 className="main__header">
            {title}
        </h2>
        {body}
    </section>
    
    );

    export default Main;