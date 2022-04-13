import React, { useContext } from 'react';
import {
  ActionRow, Button, MailtoLink, StandardModal,
} from '@edx/paragon';
import { AppContext } from '@edx/frontend-platform/react';
import PropTypes from 'prop-types';
import { SUBSCRIPTION_EXPIRING_MODAL_TITLE } from './data/constants';

const CouponCodesWarningModal = ({ isCouponCodeWarningModalOpen, onCouponCodeWarningModalClose, offersCount }) => {
  const {
    enterpriseConfig: { contactEmail },
  } = useContext(AppContext);
  if (isCouponCodeWarningModalOpen === false) { return null; }
  const renderTitle = () => (
    <small className="font-weight-bold">{SUBSCRIPTION_EXPIRING_MODAL_TITLE}</small>
  );
  const renderContactText = () => {
    const contactText = 'contact your learning manager';
    if (contactEmail) {
      return (
        <MailtoLink to={contactEmail} className="font-weight-bold">{contactText}</MailtoLink>
      );
    }
    return contactText;
  };

  const renderExpiredBody = () => (
    <>
      <p>
        Our records show that you do not have enough codes assigned to you in order to complete the program. If you are
        not able to complete all of the courses in the program, you will not be eligible to view or share your
        program record.
      </p>
      <p>
        If you plan to complete the program, please {renderContactText()} to have additionaly codes assigned to you.
      </p>
      <i>
        Codes remaining: {offersCount}
      </i>
    </>
  );

  return (
    <StandardModal
      title={renderTitle()}
      isOpen={isCouponCodeWarningModalOpen}
      onClose={onCouponCodeWarningModalClose}
      hasCloseButton={false}
      footerNode={(
        <ActionRow>
          <Button onClick={onCouponCodeWarningModalClose}>OK</Button>
        </ActionRow>
      )}
    >
      {renderExpiredBody()}
    </StandardModal>
  );
};
CouponCodesWarningModal.propTypes = {
  isCouponCodeWarningModalOpen: PropTypes.bool.isRequired,
  onCouponCodeWarningModalClose: PropTypes.func.isRequired,
  offersCount: PropTypes.number,
};

CouponCodesWarningModal.defaultProps = {
  offersCount: 0,
};
export default CouponCodesWarningModal;