import React, { useState } from 'react';
import styled from 'styled-components';
import { CANCEL, NONE } from '../const';
import Popup from '../popup/popup';
import Column from './column';

const ColumnList = ({ data }) => {
  const [popupDisplay, setPopupDisplay] = useState(NONE);

  return (
    <ColumnWrapper>
      <Popup
        cardStyle={CANCEL}
        popupDisplay={popupDisplay}
        setPopupDisplay={setPopupDisplay}
      />

      {data.map(({ columnTitle, id, taskList }) => (
        <Column
          title={columnTitle}
          key={id}
          taskList={taskList}
          columnID={id}
          popupDisplay={popupDisplay}
          setPopupDisplay={setPopupDisplay}
        />
      ))}
    </ColumnWrapper>
  );
};

export default ColumnList;

const ColumnWrapper = styled.div`
  display: flex;
`;
