import { PARTNERS } from '../../app/shared/PARTNERS';

export const selectAllPartner = () => {
  return PARTNERS;
};

export const selectFeaturedPartner = () => {
  return PARTNERS.find((partner) => partner.featured);
};




