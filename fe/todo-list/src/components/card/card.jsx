import ActiveTask from './activeTask';
import DefaultTask from './defaultTask';

const Card = ({
  cardStyle,
  closeActiveTask,
  title,
  content,
  author,
  display,
  taskID,
  columnID,
  cardList,
  setCardList,
  popupDisplay,
  setPopupDisplay,
}) => {
  return {
    default: (
      <DefaultTask
        title={title}
        content={content}
        author={author}
        display={display}
        taskID={taskID}
        columnID={columnID}
        cardList={cardList}
        setCardList={setCardList}
        popupDisplay={popupDisplay}
        setPopupDisplay={setPopupDisplay}
      />
    ),
    active: (
      <ActiveTask
        closeActiveTask={closeActiveTask}
        display={display}
        columnID={columnID}
        cardList={cardList}
        setCardList={setCardList}
      />
    ),
  }[cardStyle];
};

export default Card;
