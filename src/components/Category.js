import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Clue from './Clue';
import { getClues } from '../api/jeopardyApi';
import { useApi } from '../hooks/useApi.js';

const Category = (props) => {
  const [response, setResponse] = useState([]);
  const [clueList, setClues] = useState([]);

  const clues = useApi(getClues, props.category.id, response, setResponse);
  useEffect(() => {
    setClues(clues);
  }, [clues]);

  return (
    <div className="list">
      <div className="list-title">
        <h2 className="capitalize">{props.category.title}</h2>
      </div>
      <div className="list-container">
        {clueList.map((clue) => {
          return <Clue key={clue.answer} clue={clue} />
        })}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { category: state.category }
}
export default connect(mapStateToProps, null)(Category);