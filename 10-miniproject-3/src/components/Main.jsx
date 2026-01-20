import React, { useState } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';

const Main = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title) return;
    setTask([...task, { title, details }]);
    setTitle('');
    setDetails('');
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className='h-screen lg:flex bg-slate-600 text-white'>
      <Section1
        title={title}
        setTitle={setTitle}
        details={details}
        setDetails={setDetails}
        submitHandler={submitHandler}
      />
      <Section2
        task={task}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default Main;