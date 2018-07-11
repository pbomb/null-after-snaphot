import React from 'react';
import glamorous from 'glamorous';

const StyledDiv = glamorous('div')({
  color: '#000',
  backgroundColor: '#fff',
});

export default Object.assign(({ text }) => <StyledDiv>{text}</StyledDiv>, {
  displayName: 'Display',
});
