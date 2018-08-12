import React from "react";
import { mount } from "enzyme";

import Calendar from "./index.js";

it("should increment month by 1", () => {
  const wrapper = mount(
    <Calendar date={new Date(2018, 7, 12)} onDateChange={jest.fn()} />
  );
  const nextMonthArrow = wrapper.find("div.forwardArr");
  const prevMonthArrow = wrapper.find("div.backArr");
  nextMonthArrow.simulate("click");
  expect(wrapper.html()).toMatch("September");
  nextMonthArrow.simulate("click");
  nextMonthArrow.simulate("click");
  nextMonthArrow.simulate("click");
  expect(wrapper.html()).toMatch("December");
  nextMonthArrow.simulate("click");
  expect(wrapper.html()).toMatch("2019");
  expect(wrapper.html()).toMatch("January");
  prevMonthArrow.simulate("click");
  prevMonthArrow.simulate("click");
  expect(wrapper.html()).toMatch("November");
  expect(wrapper.html()).toMatch("2018");
});
