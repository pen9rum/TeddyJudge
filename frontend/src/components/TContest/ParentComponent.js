// ParentComponent.js
import React, { useState } from 'react';
import TContestPage from './TContestPage';
import TContestInput from './TContestInput';

const ParentComponent = () => {
    const [questionCount, setQuestionCount] = useState(0);

    return (
        <>
            <TContestPage setQuestionCount={setQuestionCount} />
            <TContestInput questionCount={questionCount} />
        </>
    );
};

export default ParentComponent;
