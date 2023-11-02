import React from "react";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import HelloRedux from "./HelloRedux";

const ReduxExamples = () => {
    return (
        <div>
             <HelloRedux />
            <CounterRedux />
            <AddRedux />
        </div>
    );
};

export default ReduxExamples;