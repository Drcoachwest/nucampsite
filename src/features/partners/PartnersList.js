import { Col } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartner } from './partnersSlice';

const PartnerList = () => {
  const partners =  selectAllPartner();

  return (
      <Col className='mt-4'>
        {partners.map((partner) => {
          return (
              <div className='d-flex mb-5' key={partner.id}>
                  <Partner partner={partner}/>
              </div>
          )
        } )}
      </Col>
  )
  }
;

export default PartnerList;
