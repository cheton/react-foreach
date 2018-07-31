import ensureArray from 'ensure-array';
import PropTypes from 'prop-types';

const ForEach = ({ items, children: render }) => {
    items = ensureArray(items);

    if (typeof render !== 'function') {
        render = (value) => null;
    }

    return items.map((value, index, array) => render(value, index, array));
};

ForEach.propTypes = {
    items: PropTypes.array.isRequired
};

export default ForEach;
