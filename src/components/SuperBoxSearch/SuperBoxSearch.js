import React from 'react';


import { useDispatch, useSelector } from 'react-redux';
import { Box, BoxContainer, Form } from './components';
import { SET_INPUT_VALUE, ADD_BOX_ITEM } from './actions';

export function SuperBoxSearch() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.superBoxSearch.data);
  const inputValue = useSelector((state) => state.superBoxSearch.inputValue);


  const filteredData = data.filter((el) => {
    return el.includes(inputValue);
  });


  const onSubmit = (event) => {
    event.preventDefault();
    if (filteredData.length === 0) {
      dispatch({ type: ADD_BOX_ITEM });
    }
  };

  const onChange = (event) => {
    dispatch({ type: SET_INPUT_VALUE, data: event.target.value });
  };


  return (
    <div>
      <Form
        isDataEmpty={filteredData.length === 0}
        onSubmit={onSubmit}
        inputValue={inputValue}
        onChange={onChange}
      />
      <BoxContainer>
        {filteredData.map((el) => <Box>{el}</Box>)}
      </BoxContainer>
    </div>
  );
}
