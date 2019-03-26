import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttr } from '../../../Utils'

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
};


describe('Header Component', () => {
    let component;

    beforeEach(() => {
        component = setUp();
    })

    it('should render without error', () => {
        // const component = setUp();
        const wrapper = findByTestAttr(component, 'headerComponent')
        expect(wrapper.length).toBe(1);
    })

    it('shoudl render logo', () => {
        //const component = setUp();
        const logo = findByTestAttr(component, 'logoIMG')
        expect(logo.length).toBe(1);
    })
})
