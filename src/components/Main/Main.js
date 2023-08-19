import "./Main.css";


const Main = () => {
    return (
        <main className="main">
            <section className="modal__buttons">
                <button className="modal__button">Policy</button>
                <button className="modal__button">Agree</button>
            </section>
            <section className="employee__agreement-display"></section>
        </main>
    )
}

export default Main;