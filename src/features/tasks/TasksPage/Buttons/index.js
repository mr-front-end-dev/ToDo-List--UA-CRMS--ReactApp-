import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper } from './styled';
import Button from '../Button';
import { 
  toggleHideDone, 
  setAllDone, 
  selectAreTasksEmpty, 
  selectHideDone, 
  selectIsEveryTaskDone, 
  // ___________________
  fetchExampleTasks,
  // ___________________
} from '../../tasksSlice';

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {/* _____________________________________________ */}
      <Button onClick={() => dispatch(fetchExampleTasks())}>
      {/* _____________________________________________ */}
      Завантажити приклади завдань
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Показати" : "Приховати"} виконані завдання
          </Button>
          <Button 
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Виконати всі завдання
          </Button>
        </>
      )}
    </Wrapper> 
  );
};

export default Buttons;