/* eslint-disable */
export const isComp = (complete, description) => {
  if (complete) {
    description.style.textDecoration = 'line-through';
    description.style.color = '#414141';
  } else {
    description.style.textDecoration = 'none';
    description.style.color = '#000';
  }
};
