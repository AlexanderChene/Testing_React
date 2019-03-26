import React from "react";
import { shallow } from "enzyme";
import Headline from './index';


import { findByTestAttr, checkProps } from './../../../Utils/index'

const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />);
    return component;
};

describe('Headline Component', () => {

    describe('checking proptypes', ()=>{
        it('It should not throw a warning', ()=>{
            const expectedProps = {
                header: 'Test header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@email.com',
                    age: 23,
                    onlineStatus: false
                }]
            }

            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBe(undefined);
        })
    })

    describe('Have Props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp(props);
        })

        it('should render without errors', ()=>{
            const component = findByTestAttr(wrapper, "HeadlineComponent");
            expect(component.length).toBe(1);

        })

        it('should render h1', ()=>{
            const component = findByTestAttr(wrapper, "header");
            expect(component.length).toBe(1);
        })
    });

    describe('Have no props', () => {
        let wrapper;
        beforeEach(()=>{
            wrapper=setUp();
        })

        it('should not render', ()=>{
            const component = findByTestAttr(wrapper, "HeadlineComponent");
            expect(component.length).toBe(0);
        })

    });
});