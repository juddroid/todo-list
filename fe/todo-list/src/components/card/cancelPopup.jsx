import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import Button from '../button/button';
import {
  CANCEL,
  DELETE,
  NAME_CANCEL,
  NAME_DELETE,
  NONE,
  REQUEST_URL,
} from '../const';

const CancelPopup = ({
  display,
  toggleDisplayState,
  delColID,
  delTasID,
  cardList,
  setCardList,
}) => {
  const deleteData = async (columnID, taskID) => {
    await axios.delete(
      `${REQUEST_URL}/api/columns/${columnID}/tasks/${taskID}`
    );
    toggleDisplayState(NONE);
    console.log(columnID, taskID);
    setCardList(cardList.filter((card) => card.id !== taskID));
  };
  return (
    <CancelBoxWrapper display={display}>
      <TaskBox>
        <TextArea>
          <CancelTitleBox>
            <CancelTitleSpan>정말 삭제하시겠습니까?</CancelTitleSpan>
          </CancelTitleBox>
        </TextArea>
        <ButtonArea>
          <ButtonBox onClick={toggleDisplayState}>
            <Button type={CANCEL} name={NAME_CANCEL} />
          </ButtonBox>
          <ButtonBox onClick={() => deleteData(delColID, delTasID)}>
            <Button type={DELETE} name={NAME_DELETE} />
          </ButtonBox>
        </ButtonArea>
      </TaskBox>
    </CancelBoxWrapper>
  );
};

export default CancelPopup;

const CancelBoxWrapper = styled.div`
  position: absolute;
  top: 44%;
  left: 32%;
  z-index: 10;
  width: 280px;
  height: 110px;
  display: ${(props) => props.display};
`;

const CancelTitleSpan = styled.span`
  font-size: 16px;
  font-weight: bold;
  line-height: 23px;
  margin: 8px 0px;
  color: #222;
  text-align: center;
`;

const CancelTitleBox = styled.span`
  display: flex;
  justify-content: center;
`;

const ButtonBox = styled.div`
  width: fit-content;
  height: fit-content;
`;

const IconPosition = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
`;

const TaskBox = styled.div`
  background: #fff;
  box-shadow: 0px 1px 30px rgba(224, 224, 224, 0.3);
  border-radius: 6px;
  padding: 10px 16px;
  border: 1px solid #fff;

  ${IconPosition}:hover + & {
    background: #ffeeec;
    border: 1px solid #ff4343;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
