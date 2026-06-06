import { Helmet } from "react-helmet-async";
import ContactPageContent from "../../components/contact/ContactPageContent";
import ContactV1 from "../../components/contact/ContactV1";
import LayoutV5 from "../../components/layouts/LayoutV5";

const ContactPage = () => {
    return (
        <>
         <Helmet>
                <title>Chief Special - Contact Us</title>
                <meta name="description" content="Contact page for Chief Special. Reach out to us for inquiries and support." />
            </Helmet>
            <LayoutV5 title="Contact Us" breadCrumb="Contact">
                <ContactPageContent />
                <ContactV1 />
            </LayoutV5>
        </>
    );
};

export default ContactPage;