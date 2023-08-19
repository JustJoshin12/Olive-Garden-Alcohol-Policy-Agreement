import "./Main.css";
import PolicyAgreement from "../Modal-policy-agreement/Modal-policy-agreement";


const Main = () => {
    return (
        <main className="main">
           <PolicyAgreement/>
            <section className="employee__agreement-display">
                <ul className="employee__agreement-display__chart">
                    
                </ul>
            </section>
        </main>
    )
}

export default Main;