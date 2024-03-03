import type { Meta, StoryObj } from "@storybook/react";

import { AppButton } from "./AppButton";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/AppButton",
  component: AppButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Text",
  },
};

export const Small: Story = {
  args: {
    size: "s",
    children: "Small",
  },
};

export const Large: Story = {
  args: {
    size: "l",
    children: "Large",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined",
  },
};

export const OutlinedDark: Story = {
  args: {
    variant: "outlined",
    children: "Outlined",
  },
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Contained",
  },
};

export const ErrorDark: Story = {
  args: {
    variant: "outlined",
    color: "error",
    children: "Error",
  },
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Success: Story = {
  args: {
    variant: "outlined",
    color: "success",
    children: "Success",
  },
};
