import React from "react";
import { shallow } from "enzyme";
import Day from "./Day";

test("it should render", () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<Day day={new Date()} handleDateChange={mockFn} />);

  const dayBtn = wrapper.find("div.container.today");
  dayBtn.simulate("click");

  expect(mockFn.mock.calls).toHaveLength(1);
});
