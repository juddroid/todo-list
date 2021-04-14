import React, { useState } from 'react';
import styled from 'styled-components';
import ColumnHeader from './columnHeader';
import TaskCardList from '../card/taskCardList';
import { BLOCK, NONE } from '../const';

const Column = ({ title, taskList, columnID, deleteData }) => {
  const [display, setDisplay] = useState(NONE);

  const toggleDisplay = (e) => {
    e.preventDefault();
    if (display === NONE) return setDisplay(BLOCK);
    return setDisplay(NONE);
  };

  const closeActiveTask = (e) => {
    e.preventDefault();
    setDisplay(NONE);
  };

  return (
    <ColumnContainer>
      <ColumnHeader
        title={title}
        list={taskList}
        toggleDisplay={toggleDisplay}
        closeActiveTask={closeActiveTask}
      />
      <TaskCardList
        list={taskList}
        closeActiveTask={closeActiveTask}
        display={display}
        columnID={columnID}
        deleteData={deleteData}
      />
    </ColumnContainer>
  );
};

export default Column;

const ColumnContainer = styled.div`
  padding: 10px;
  width: 300px;
`;
