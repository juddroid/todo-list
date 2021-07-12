import React from 'react';
import CancelPopup from './cancelPopup';

const Popup = ({ popupDisplay, setPopupDisplay, onRemove }) => {
  return (
    <CancelPopup
      popupDisplay={popupDisplay}
      setPopupDisplay={setPopupDisplay}
      onRemove={onRemove}
    />
  );
};

export default Popup;
