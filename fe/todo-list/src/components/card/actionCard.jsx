import React from 'react';
import styled from 'styled-components';
import { FaCanadianMapleLeaf } from 'react-icons/fa';

const UserImage = () => {
  return (
    <UserImageBox>
      <FaCanadianMapleLeaf />
    </UserImageBox>
  );
};

const UserName = ({ name }) => {
  return (
    <UserNameBox>
      <span>{name}</span>
    </UserNameBox>
  );
};

const UserActionContents = () => {
  return (
    <UserActionContentsBox>
      <span>{`HTML/CSS Studying`}을 ToDo에서 여기로 이동하였습니다.</span>
    </UserActionContentsBox>
  );
};

const ActionTime = () => {
  return (
    <ActionTimeBox>
      <span>5 minutes ago</span>
    </ActionTimeBox>
  );
};

const UserAction = () => {
  return (
    <UserActionBox>
      <UserName name="@Autumn" />
      <UserActionContents />
      <ActionTime />
    </UserActionBox>
  );
};

const ActionCard = () => {
  return (
    <ActionCardBox>
      <UserImage />
      <UserAction />
    </ActionCardBox>
  );
};

export default ActionCard;

const ActionCardBox = styled.div`
  position: relative;
  display: flex;
  padding: 16px;
  width: 332px;
  background: #f5f5f5;
  border-radius: 10px;

  & + div {
    margin-top: 20px;
  }
`;

const UserImageBox = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 40px;
  height: 40px;
  padding: 5px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const UserNameBox = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: #010101;
  margin: 4px 0px;
`;

const UserActionContentsBox = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #010101;
  margin: 4px 0px;
`;

const ActionTimeBox = styled.div`
  font-size: 14px;
  color: #828282;
  margin: 4px 0;
`;

const UserActionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 244px;
  margin-left: 50px;
`;
