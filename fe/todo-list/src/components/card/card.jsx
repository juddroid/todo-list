import ActiveTask from './activeTask';
import CancelPopup from './cancelPopup';
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
  deleteData,
  toggleDisplayState,
  setDelColID,
  setDelTasID,
  delColID,
  delTasID,
  cardList,
  setCardList,
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
        deleteData={deleteData}
        toggleDisplayState={toggleDisplayState}
        setDelColID={setDelColID}
        setDelTasID={setDelTasID}
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
    cancel: (
      <CancelPopup
        display={display}
        columnID={columnID}
        taskID={taskID}
        deleteData={deleteData}
        toggleDisplayState={toggleDisplayState}
        delColID={delColID}
        delTasID={delTasID}
        cardList={cardList}
        setCardList={setCardList}
      />
    ),
  }[cardStyle];
};

export default Card;
