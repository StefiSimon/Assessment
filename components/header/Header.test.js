import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe(<Header/>, () => {
    it('should render two tables', () => {
        const header = shallow(<Header />);
        expect(header.find('table')).toBeGreaterThanOrEqual(2);
    });
});