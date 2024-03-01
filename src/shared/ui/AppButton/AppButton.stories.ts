import type { Meta, StoryObj } from "@storybook/react";

import { AppButton } from "./AppButton";

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

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Contained",
  },
};

export const Error: Story = {
  args: {
    variant: "outlined",
    color: "error",
    children: "Error",
  },
};

export const Success: Story = {
  args: {
    variant: "outlined",
    color: "success",
    children: "Success",
  },
};
