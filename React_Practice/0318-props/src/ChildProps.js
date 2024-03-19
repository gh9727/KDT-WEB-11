import React from 'react';
import PropTypes from 'prop-types';
export default function ChildProps({ name }) {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}
ChildProps.PropTypes = {
  name: PropTypes.string,
};
