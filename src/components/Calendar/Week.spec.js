import React from "react";
import { mount } from "enzyme";

import Week from "./Week";
import Day from "./Day";

test("it should render", () => {
  const mockFn = jest.fn();
  const wrapper = mount(
    <Week date={new Date(2018, 7, 12)} onDateChange={mockFn} />
  );

  const dayOfWeek = wrapper.find("div.day .container").at(0);
  dayOfWeek.simulate("click");
  expect(mockFn.mock.calls).toHaveLength(1);
});
