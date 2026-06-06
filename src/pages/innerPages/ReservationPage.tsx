import { Helmet } from "react-helmet-async";
import LayoutV5 from "../../components/layouts/LayoutV5";
import ReservationV1 from "../../components/reservation/ReservationV1";

const ReservationPage = () => {
    return (
        <>
            <Helmet>
                <title>Online Reservation - Book Your Table Easily</title>
                <meta
                    name="description"
                    content="Make your reservation online with ease. Book your table at our restaurant quickly and securely."
                />
            </Helmet>

            <LayoutV5 title="Online Reservation" breadCrumb="Reservation">
                <ReservationV1 sectionClass="default-padding" />
            </LayoutV5>
        </>
    );
};

export default ReservationPage;
