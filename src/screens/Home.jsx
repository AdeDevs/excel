import Excellence from "../assets/excellence.svg"
import Integrity from "../assets/integrity.svg"
import Respect from "../assets/respect.svg"
import Responsibility from "../assets/responsibility.svg"

export default function HomePage() {
    return (
        <div className="home">
            <div className="about-us-banner">
                <div className="about-us-bg"></div>
                <div className="about-us-text">
                    <h1>about us</h1>
                    <p>Empowering the next generation of leaders and innovators.</p>
                </div>
            </div>
            <div className="who-we-are">
                <div className="who-bg"></div>
                <div className="who-text">
                    <h1>about us</h1>
                    <h2>
                        Excel Professional International Consult is an education firm of repute. Established in 2014 to cater for the lapses in the nation’s education system, the brunt of which many youths are bearing today.
                    </h2>
                    <p>
                        Registered with the Ministry of Education in Oyo state, and with the state of the art facilities and teaching aids,  our mission is committed to groom young minds, re-establish the power of positive thinking in them and mould them to be ready for the fast paced future.
                        We are located opposite Atunrase shopping complex and adjacent Amazing filling station, Felele, around challenge area in Ibadan and our classes are taken by seasoned professionals with cumulative experience of over 150 years.
                        In terms of education, morals, discipline, we are your <span className="bold">MOST PREFFERED CHOICE,</span> for our main goal is to <span className="bold">GUIDE YOUR WARDS TO SUCCESS.
                            GET IN TOUCH WITH US TODAY FOR ALL EDUCATIONAL NEEDS, INCLUDING COUNSELING.</span>
                    </p>
                </div>
            </div>
            <div className="our-values">
                <h1>Our Core Values</h1>
                <div className="values">
                    <section>
                        <img src={Excellence} alt="icon" />
                        <h2>Excellence</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </section>
                    <section>
                        <img src={Integrity} alt="icon" />
                        <h2>Integrity</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </section>
                    <section>
                        <img src={Respect} alt="icon" />
                        <h2>Respect</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </section>
                    <section>
                        <img src={Responsibility} alt="icon" />
                        <h2>Responsibility</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </section>
                </div>
            </div>
        </div>
    )
}