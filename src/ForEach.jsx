import ensureArray from 'ensure-array';
import PropTypes from 'prop-types';
import React from 'react';

const ForEach = ({ items, children: render }) => {
    items = ensureArray(items);

    if (typeof render !== 'function') {
        render = (value) => null;
    }

    const Wrapper = React.Fragment || 'div';

    return (
        <Wrapper>
            {items.map((value, index, array) => render(value, index, array))}
        </Wrapper>
    );
};

ForEach.propTypes = {
    items: PropTypes.array.isRequired
};

export default ForEach;
