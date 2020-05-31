import React, { useReducer } from 'react';
import Form from './Form';

type State = number[];

type Action = {
  type: string,
  payload: { index: number, value: number }
}

function App() {

  const myReducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'delete':
        return state.filter((_, i) => i !== action.payload.index);
      case 'change':
        return state.map((value, i) => {
          if (i === action.payload.index) {
            return action.payload.value;
          }

          return value;
        });
      default:
        return state;
    }
  }

  const deleteReducer = (state: State, action: Action) => {
    return state.filter((_, i) => i !== action.payload.index)
  }

  const [item, deleteItem] = useReducer(myReducer, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
  ])

  return (
    <div className="App">
      {
        item.map((value: number, index: number) => {
          return (<Form key={value} index={index} input={value} deleteItem={deleteItem} />)
        })
      }
    </div>
  );
}

export default App;
