import React from "react";
import { DatePicker } from "./datePicker";
import {
  withKnobs,
  text,
  boolean,
  color,
  select,
  number,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "datePicker",
  component: DatePicker,
  decorators: [withKnobs],
};

export const knobsDatePicker = () => (
  <div style={{ height: "500px" }}>
    <DatePicker
      callback={action("callback")}
      delay={number("delay", 200)}
      initDate={text("initDate", "")}
    ></DatePicker>
  </div>
);
