import React from "react";
import { Meta, Story } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import { Field } from "./Field";

export default {
    title: "Game of Life/Field",
    component: Field,
    decorators: [withKnobs],
} as Meta;

export const FieldDefault: Story = () => <Field height={number("height", 4)} width={number("width", 6)} />;
