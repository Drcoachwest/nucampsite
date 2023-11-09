import { Col, Row } from "reactstrap";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../Promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";
import { useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const obj = {
  featureItem: { id: 123, campsiteName: "campHello" },
  isLoading: false,
  errMsg: "",
};

const DisplayList = () => {
  const items = useSelector((state) => [
    selectFeaturedCampsite(state),
    selectFeaturedPromotion(state),
    selectFeaturedPartner(state),
  ]);
  console.log("display items:", items);
  return (
    <Row>
      {items.map((item, idx) => {
        const { featuredItem, isLoading, errMsg } = item;
        /**
         * const featuredItem = item.featuredItem;
         * const isLoading = item.isLoading;
         * const errMsg = item.errMsg;
         */
        if (isLoading) {
          return <Loading key={idx} />;
        }
        if (errMsg) {
          return <Error errMsg={errMsg} key={idx} />;
        }
        return (
          featuredItem && (
            <Col md className="m-1" key={idx}>
              <AnimatedDisplayCard item={featuredItem} />
            </Col>
          )
        );
      })}
      ;
    </Row>
  );
};

export default DisplayList;
