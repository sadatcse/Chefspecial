import { Helmet } from "react-helmet-async";
import ChefDetailsContent from "../../components/chef/ChefDetailsContent";
import LayoutV5 from "../../components/layouts/LayoutV5";
import TeamData from '../../assets/jsonData/team/TeamData.json';
import { useParams } from "react-router-dom";

const ChefDetailsPage = () => {
    const { id } = useParams();
    const data = TeamData.find(team => team.id === parseInt(id || '0'));

    return (
        <>
            <Helmet>
                <title>{data ? `${data.name} - Chef Details` : "Chef Not Found"}</title>
                {data && (
                    <meta
                        name="description"
                        content={`Learn about Chef ${data.name}, their skills, experience, and culinary expertise.`}
                    />
                )}
            </Helmet>

            <LayoutV5 breadCrumb="chef-details" title="Chef Details">
                {data ? <ChefDetailsContent teamInfo={data} /> : <div>Chef Not Found</div>}
            </LayoutV5>
        </>
    );
};

export default ChefDetailsPage;
