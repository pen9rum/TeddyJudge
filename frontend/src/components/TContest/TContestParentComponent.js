// TContestParentComponent.js
import React, { useState } from 'react';
import { useRoutes, Route } from 'react-router-dom';
import { QuestionCountContext } from './QuestionCountContext';
import TContestPage from './TContestPage';
import TContestInput from './TContestInput';

const TContestParentComponent = () => {
    const [questionCount, setQuestionCount] = useState(0);

    const element = useRoutes([
        { path: '/', element: <TContestPage setQuestionCount={setQuestionCount} /> },
        { path: 'input', element: <TContestInput /> },
    ]);

    return (
        <QuestionCountContext.Provider value={questionCount}>
            {element}
        </QuestionCountContext.Provider>
    );
};

export default TContestParentComponent;
