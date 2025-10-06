import Logo from "../assets/logo.png"
import Excellence from "../assets/excellence.svg"
import Integrity from "../assets/integrity.svg"
import Respect from "../assets/respect.svg"
import Responsibility from "../assets/responsibility.svg"
import book from "../assets/book.svg"
import grad from "../assets/grad.svg"
import people from "../assets/people.svg"
import books from "../assets/books.svg"
import grads from "../assets/grads.svg"
import peoples from "../assets/peoples.svg"
import check from "../assets/check.svg"
import quote from "../assets/quote.svg"
import avatar from "../assets/bat.jpeg"
import yemi from "../assets/yemi.jpg"
import newsletter from "../assets/email.svg"
import location from "../assets/location.svg"
import phone from "../assets/phone.svg"
import facebook from "../assets/fb.svg"
import instagram from "../assets/ig.svg"
import youtube from "../assets/yt.svg"

export default function HomePage() {
    const stopRefresh = (e) => {
        e.preventDefault()
    }
    return (
        <div className="home">
            <div className="hero">
                <div className="hero-bg"></div>
                <div className="hero-text">
                    <h1 className="title">Excel Professional <br /> International Consult</h1>
                    <p>Empowering minds, enriching souls through transformative <br /> theological education since 2014</p>
                    <section className="hero-btns">
                        <button>Apply Now</button>
                        <button>Learn More About Us</button>
                    </section>
                </div>
            </div>
            <div className="stats">
                <section>
                    <div className="stat-icon"><img src={people} alt="people" /></div>
                    <h2>500+</h2>
                    <p>active students</p>
                </section>
                <section>
                    <div className="stat-icon"><img src={grad} alt="grad" /></div>
                    <h2>1000+</h2>
                    <p>graduates</p>
                </section>
                <section>
                    <div className="stat-icon"><img src={Excellence} alt="medal" /></div>
                    <h2>11+</h2>
                    <p>years of excellence</p>
                </section>
                <section>
                    <div className="stat-icon"><img src={book} alt="book" /></div>
                    <h2>20+</h2>
                    <p>course programs</p>
                </section>
            </div>
            <div className="about-us-banner">
                <div className="about-us-bg"></div>
                <div className="about-us-text">
                    <h1 className="title">about us</h1>
                    <p>Empowering the next generation of leaders and innovators.</p>
                </div>
            </div>
            <div className="who-we-are">
                <div className="who-bg"></div>
                <div className="who-text">
                    <h1 className="title">about us</h1>
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
                <h1 className="title">Our Core Values</h1>
                <p className="values-extra">These principles guide everything we do, making us the preferred choice for theological education</p>
                <div className="values">
                    <section>
                        <img src={Excellence} alt="icon" />
                        <h2>Excellence</h2>
                        <p>
                            We pursue excellence in everything we do, from the quality of our teaching to the achievements of our students.
                        </p>
                    </section>
                    <section>
                        <img src={Integrity} alt="icon" />
                        <h2>Integrity</h2>
                        <p>
                            Honesty, transparency, and ethical conduct are the foundation of our operations and interactions.
                        </p>
                    </section>
                    <section>
                        <img src={Respect} alt="icon" />
                        <h2>Respect</h2>
                        <p>
                            We foster a culture of mutual respect, ensuring that every student feels valued and supported in their learning journey.
                        </p>
                    </section>
                    <section>
                        <img src={Responsibility} alt="icon" />
                        <h2>Responsibility</h2>
                        <p>
                            We take ownership of our role in shaping future leaders, encouraging accountability, discipline, and a strong sense of purpose.
                        </p>
                    </section>
                </div>
            </div>
            <div className="why-us">
                <h1 className="title">Why Us?</h1>
                <div className="why-us-box">
                    <div className="why-intro">
                        <h2>Excel is the most preferred choice</h2>
                        <p>
                            Shaping bright minds since 2014. <br />
                            At Excel Prevarsity, we combine discipline, excellence, and innovation to prepare students for academic and personal success in a fast-paced world.
                        </p>
                    </div>
                    <div className="why-points">
                        <h3>Why Students choose us</h3>
                        <ul>
                            <li><span className="why-icon"><img src={check} alt="check" /></span>Ministry of Education Certified</li>
                            <li><span className="why-icon"><img src={check} alt="check" /></span>A supportive environment that motivates students to reach their full potential</li>
                            <li><span className="why-icon"><img src={check} alt="check" /></span>Founded in 2014 with a proven record of academic excellence</li>
                            <li><span className="why-icon"><img src={check} alt="check" /></span>Experienced, disciplined, and passionate tutors</li>
                            <li><span className="why-icon"><img src={check} alt="check" /></span>Strong moral and academic foundation</li>
                            <li><span className="why-icon"><img src={check} alt="check" /></span>Trusted by parents, loved by students, and respected in the education sectors</li>
                            <li><span className="why-icon"><img src={check} alt="check" /></span>Rewards and recognition for stellar academic performance</li>
                            <li><span className="why-icon"><img src={check} alt="check" /></span>Proven record of producing outstanding students year after year</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="our-services">
                <h1 className="title">our services</h1>
                <div className="services">
                    <section className="consulting">
                        <div className="service-icon"><img src={grads} alt="icon" /></div>
                        <h2>International examination</h2>
                        <p>
                            Ace IELTS, TOEFL, and SAT with expert coaching that builds confidence and global readiness.
                        </p>
                    </section>
                    <section>
                        <div className="service-icon"><img src={books} alt="icon" /></div>
                        <h2>utme & ssce</h2>
                        <p>
                            Focused lessons that sharpen understanding and help students excel in WAEC, NECO, and JAMB.
                        </p>
                    </section>
                    <section>
                        <div className="service-icon"><img src={peoples} alt="icon" /></div>
                        <h2>Consulting</h2>
                        <p>
                            Smart guidance for admissions, careers, and study-abroad success.
                        </p>
                    </section>
                </div>
            </div>
            <div className="our-testimonials">
                <h1 className="title">Testimonials</h1>
                {/* <h2 className="alumni">What Our Alumni Say</h2> */}
                <p className="hear">
                    Hear from our students and graduates who have experienced growth, confidence, and real results through their time at Excel Prevarsity. Their stories reflect the impact of learning in a space built to inspire excellence.
                </p>
                <div className="testimonial-box">
                    <section className="testimonial">
                        <img className="quote" src={quote} alt="icon" />
                        <p className="testimonial-msg">
                            "Excel Theological School transformed my understanding of Scripture and equipped me for effective ministry. The faculty's dedication is unmatched."
                        </p>
                        <div className="testimonial-info">
                            <img className="avatar" src={yemi} alt="avatar" />
                            <ul>
                                <li id="name">Adeyemi Akinyemi</li>
                                <li>Graduate 2021</li>
                            </ul>
                        </div>
                    </section>
                    <section className="testimonial">
                        <img className="quote" src={quote} alt="icon" />
                        <p className="testimonial-msg">
                            "The comprehensive curriculum and spiritual formation I received here prepared me to serve God's people with confidence and wisdom."
                        </p>
                        <div className="testimonial-info">
                            <img className="avatar" src={avatar} alt="avatar" />
                            <ul>
                                <li id="name">Adewale Adediran</li>
                                <li>Graduate 2023</li>
                            </ul>
                        </div>
                    </section>
                    <section className="testimonial consulting">
                        <img className="quote" src={quote} alt="icon" />
                        <p className="testimonial-msg">
                            "This institution doesn't just educate minds—it shapes hearts for Kingdom service. I'm forever grateful for my time here."
                        </p>
                        <div className="testimonial-info">
                            <img className="avatar" src={avatar} alt="avatar" />
                            <ul>
                                <li id="name">Emenike Chibuzor</li>
                                <li>Graduate 2020</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            <div className="newsletter">
                <div className="news-box">
                    {/* <img src={newsletter} alt="newsletter" /> */}
                    <h1>Subscribe to our newsletter</h1>
                    <p>Subscribe now and receive free updates on new programs and events</p>
                    <form onSubmit={stopRefresh} className="news-form">
                        <input type="text" placeholder="Enter Your Name" required />
                        <input type="email" placeholder="Enter Your Email" required />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
            <div className="get-in-touch">
                <h1 className="title">Contact us today</h1>
                <div className="contact-box">
                    <p>
                        At Excel Prevarsity, we believe communication builds success. Whether you’d like to learn more about our tutorial programs, discuss enrollment, or ask about upcoming sessions, our team is here to assist you every step of the way.
                        <br />
                        Send us a message, and we’ll respond as quickly as possible, your journey to better learning starts with a simple “Hello.”
                    </p>
                    <form onSubmit={stopRefresh} className="contact-form">
                        <input type="text" placeholder="Enter Your Name" required />
                        <input type="email" placeholder="Enter Your Email" required />
                        <input type="number" placeholder="Enter Your Number" required />
                        <textarea placeholder="Enter Your Message" required />
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
            <footer>
                <div className="main-footer">
                    <section className="footer-intro">
                        <a href="/" className="logo"><img src={Logo} alt="logo" />Excel Prevarsity</a>
                        <p>Empowering minds and enriching souls through transformative theological education.</p>
                    </section>
                    <section>
                        <ul className="links">
                            <h2>Quick Links</h2>
                            <li><a href="/">about us</a></li>
                            <li><a href="/">UTME & SSCE</a></li>
                            <li><a href="/">IELTS & TOEFL</a></li>
                            <li><a href="/">online class</a></li>
                            <li><a href="/">contact</a></li>
                            <li><a href="/">blog</a></li>
                        </ul>
                    </section>
                    <section>
                        <ul className="links">
                            <h2>Contact Us</h2>
                            <li><a href="/"><span><img src={location} alt="icon" /></span>50, Oba Abimbola way, Felele, Challenge, Ibadan, Oyo State</a></li>
                            <li><a href="/"><span><img src={phone} alt="icon" /></span>+234 (0) 810 890 8242</a></li>
                            <li><a href="/"><span><img src={newsletter} alt="icon" /></span>eprevarsity@gmail.com</a></li>
                        </ul>
                    </section>
                </div>
                <div className="sub-footer">
                    <h1 className="copyright">© 2025 Excel Theological Interrogation School. All rights reserved.</h1>
                    <ul className="socials">
                        <li><a href="/"><img src={facebook} alt="icon" /></a></li>
                        <li><a href="/"><img src={instagram} alt="icon" /></a></li>
                        <li><a href="/"><img src={youtube} alt="icon" /></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}