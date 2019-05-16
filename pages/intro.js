import Layout from '../components/Layout'
import Intro from '../components/Intro'
import Benefits from '../components/Benefits'
import Modules from '../components/Modules'
import Papers from '../components/Papers'
import ContactForm from '../components/ContactForm'
import Shape from '../components/Shape';

export default () => {
    return (
        <Layout>
            <Shape className="left-shape" color="rgba(232, 242, 248, 0.3)" width="1000px" height="1020px" />
            
            <section className="content-main">
                <Intro />
                <Benefits />
                <Modules />
                <Papers />

                <div className="contact-form-shapes-wrapper">
                    <Shape className="contact-form-left" />
                    <ContactForm />
                    <Shape className="contact-form-right" color="rgba(108, 228, 222, 0.2)" width="393px" height="443px" />
                </div>
            </section>

            {/* <div className="video-container aos-init aos-animate" data-aos="fade-up">
                <iframe
                    className="video"
                    src="https://www.youtube.com/embed/h09z2N0MtuQ"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen="">
                </iframe>
            </div> */}
            
        </Layout>
    )
}
