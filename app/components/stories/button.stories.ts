import Button from "../Button.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export const Default: Story = {
  render: () => ({
    components: { Button },
    template: "<Button label='ボタン' />",
  }),
};

export default meta;