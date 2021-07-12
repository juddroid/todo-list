import React from 'react';
import styled from 'styled-components';
import Button from '../button/button';
import { CANCEL, DELETE, NAME_CANCEL, NAME_DELETE } from '../const';
import { toggleDisplay } from '../util';

const CancelPopup = ({ popupDisplay, setPopupDisplay, onRemove }) => {
  return (
    <PopupBackground popupDisplay={popupDisplay}>
      <CancelBoxWrapper>
        <TaskBox>
          <TextArea>
            <CancelTitleBox>
              <CancelTitleSpan>정말 삭제하시겠습니까?</CancelTitleSpan>
            </CancelTitleBox>
          </TextArea>
          <ButtonArea>
            <ButtonBox
              onClick={() => toggleDisplay(popupDisplay, setPopupDisplay)}
            >
              <Button type={CANCEL} name={NAME_CANCEL} />
            </ButtonBox>
            <ButtonBox onClick={onRemove}>
              <Button type={DELETE} name={NAME_DELETE} />
            </ButtonBox>
          </ButtonArea>
        </TaskBox>
      </CancelBoxWrapper>
    </PopupBackground>
  );
};

export default CancelPopup;

const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: -webkit-fill-available;
  height: 100vh;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 20;
  display: ${(props) => props.popupDisplay};
`;

const CancelBoxWrapper = styled.div`
  position: relative;
  top: 30%;
  left: 30%;
  width: 280px;
  height: 110px;
  display: ${(props) => props.popupDisplay};
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
