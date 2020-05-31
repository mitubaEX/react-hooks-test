import React from 'react';

type Props = {
  input: number;
  index: number;
  deleteItem: any;
}

const Form: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <input value={props.input} onChange={(e) => props.deleteItem({type: 'change', payload: {index: props.index, value: e.target.value}})} />
      <button
        onClick={() => props.deleteItem({type: 'delete', payload: {index: props.index}})}
      >
        {props.input}
      </button>
    </div>
  );
}

export default Form;
