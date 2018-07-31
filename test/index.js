import { mount } from 'enzyme';
import _uniqueId from 'lodash/uniqueId';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { test } from 'tap';
import '../setupTests';
import ForEach from '../src';

const ListItem = styled.div`
    border: 1px solid #ccc;
    padding: 8px 12px;
`;

test('renders children', (t) => {
    const wrapper = mount(
        <ForEach items={[1, 2, 3, 4, 5]}>
            {(value, index, array) => (
                <Fragment key={_uniqueId()}>
                    <ListItem>{value}</ListItem>
                </Fragment>
            )}
        </ForEach>
    );

    t.same(wrapper.props().items, [1, 2, 3, 4, 5], 'items must match the given array');
    t.equal(wrapper.find(ListItem).length, 5, 'should render <ListItem /> component five times');

    t.end();
});

test('conditionally renders children', (t) => {
    const wrapper = mount(
        <ForEach items={[1, 2, 3, 4, 5]}>
            {(value, index, array) => {
                if (value % 2 === 1) {
                    return (
                        <Fragment key={_uniqueId()}>
                            <ListItem>{value}</ListItem>
                        </Fragment>
                    );
                }

                return null;
            }}
        </ForEach>
    );

    t.same(wrapper.props().items, [1, 2, 3, 4, 5], 'items must match the given array');
    t.equal(wrapper.find(ListItem).length, 3, 'should render <ListItem /> component three times');

    t.end();
});
