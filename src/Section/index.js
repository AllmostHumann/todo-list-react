import "./style.css"

const Section = ({ title, body, extraHeaderContent }) => (

    <section>
        <div className="taskList__section">
            <h2 className="taskList__header">
                {title}
            </h2>
            <div className="taskList__buttons" >
                {extraHeaderContent}
            </div>
        </div>
        {body}
    </section>
)

export default Section;