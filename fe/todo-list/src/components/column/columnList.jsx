import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../card/card';
import Column from './column';

const ColumnList = ({ data, cardStyle, display, toggleDisplayState }) => {
  const [delColID, setDelColID] = useState('');
  const [delTasID, setDelTasID] = useState('');

  return (
    <ColumnWrapper>
      <Card
        cardStyle={cardStyle}
        display={display}
        toggleDisplayState={toggleDisplayState}
        delColID={delColID}
        delTasID={delTasID}
      />

      {data.map(({ columnTitle, id, taskList }) => (
        <Column
          title={columnTitle}
          key={id}
          taskList={taskList}
          columnID={id}
          toggleDisplayState={toggleDisplayState}
          setDelColID={setDelColID}
          setDelTasID={setDelTasID}
        />
      ))}
    </ColumnWrapper>
  );
};

export default ColumnList;

const ColumnWrapper = styled.div`
  display: flex;
`;
