
import { Container, Row, Col } from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsitesSlice'


const CampsitesList = ({ setCampsiteId }) => {
  const campsites = [];
  selectAllCampsites();
  return (
    <Row className = 'ms-auto'>
      {campsites.map((campsite) => {
        return (
          <Col 
          md='5' 
          classname = 'm-4' 
          key = {campsite.id}
          onClick= {() => setCampsiteId(campsite.id)}
          >
            <CampsiteCard campsite={campsite} />
          </Col>
        );
      })}
    </Row>
  )
}

export default CampsitesList