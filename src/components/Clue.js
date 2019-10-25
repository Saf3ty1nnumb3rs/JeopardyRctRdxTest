import React, { useState } from 'react';

const Clue = (props) => {
  const { answer, question, value } = props.clue;
  const [reveal, setReveal] = useState({
    value: true,
    question: false,
    answer: false
  });
  const ques = reveal.question ? 'text-revealed' : 'text-hidden';
  const ans = reveal.answer ? 'text-revealed' : 'text-hidden';
  const val = reveal.value ? 'text-revealed' : 'text-hidden';

  return (
    <div className="clue">
      <h4 className={`${val} card`} onClick={() => setReveal({ ...reveal, value: false, question: true })}><div>{value || 'unknown'}</div></h4>
      <h5 className={`${ques} card`} onClick={() => { setReveal({ ...reveal, question: false, answer: true }) }}><div>{question}</div></h5>
      <h5 className={`${ans} card`} onClick={() => { setReveal({ ...reveal, value: true, answer: false }) }}><div>{answer}</div></h5>
    </div>
  );
};

export default Clue;