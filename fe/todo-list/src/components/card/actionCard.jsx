import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaCanadianMapleLeaf } from 'react-icons/fa';

const UserImage = () => {
  return (
    <UserImageBox>
      <FaCanadianMapleLeaf />
    </UserImageBox>
  );
};

const UserName = ({ authorName }) => {
  return (
    <UserNameBox>
      <span>@{authorName || '@Autumn'}</span>
    </UserNameBox>
  );
};

const UserActionContents = ({
  action,
  fromColumnTitle,
  toColumnTitle,
  taskTitle,
}) => {
  return {
    add: (
      <UserActionContentsBox>
        <span>{taskTitle}</span>을(를) {/* */}
        <span>{toColumnTitle}</span>에 {/* */}
        <span>등록</span>하였습니다.
      </UserActionContentsBox>
    ),
    update: (
      <UserActionContentsBox>
        <span>{taskTitle}</span>을(를) {/* */}
        <span>변경</span>하였습니다.
      </UserActionContentsBox>
    ),
    remove: (
      <UserActionContentsBox>
        <span>{taskTitle}</span>을(를) {/* */}
        <span>삭제</span>하였습니다.
      </UserActionContentsBox>
    ),
    move: (
      <UserActionContentsBox>
        <span>{taskTitle}</span>을(를) {/* */}
        <span>{fromColumnTitle}</span>에서
        <span> {toColumnTitle}</span>로 <span>이동</span>하였습니다.
      </UserActionContentsBox>
    ),
  }[action];
};

const ActionTime = ({ createdDateTime }) => {
  const createdTime = new Date(createdDateTime);
  const currentTime = new Date();
  const [timeGap, setTimeGap] = useState();
  console.log('timeGap', timeGap);
  useEffect(() => {
    setTimeGap(currentTime - createdTime - 32400000);
  }, []);

  const sec = timeGap / 1000;
  const min = sec / 60;
  const hour = min / 60;
  const days = hour / 24;
  let times = '';
  let units = '';

  if (min < 1) {
    times = '방금';
  } else if (min < 60) {
    times = parseInt(min);
    units = '분';
  } else if (hour < 60) {
    times = parseInt(hour);
    units = '시간';
  } else if (days > 1) {
    times = parseInt(days);
    units = '일';
  }

  return (
    <ActionTimeBox>
      <span>
        {times}
        {units} 전
      </span>
    </ActionTimeBox>
  );
};

const UserAction = ({ data }) => {
  const {
    action,
    authorName,
    fromColumnTitle,
    toColumnTitle,
    taskTitle,
    createdDateTime,
  } = data;

  return (
    <UserActionBox>
      <UserName authorName={authorName} />
      <UserActionContents
        action={action}
        fromColumnTitle={fromColumnTitle}
        toColumnTitle={toColumnTitle}
        taskTitle={taskTitle}
      />
      <ActionTime createdDateTime={createdDateTime} />
    </UserActionBox>
  );
};

const ActionCard = ({ data }) => {
  return (
    <ActionCardBox>
      <UserImage />
      <UserAction data={data} />
    </ActionCardBox>
  );
};

export default ActionCard;

const ActionCardBox = styled.li`
  position: relative;
  display: flex;
  padding: 16px;
  width: 332px;
  background: #f5f5f5;
  border-radius: 10px;
  & + li {
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
  font-size: 14px;
  line-height: 23px;
  color: #010101;
  margin: 4px 0px;
  & > span {
    font-weight: bold;
    font-size: 16px;
  }
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
