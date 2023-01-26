import Button from "../Button.vue";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'button',
  component: Button,
  argTypes: {
    click: {
      action: 'click',
    },
  },
}

const Template = (args: unknown) => ({
  components: { Button },
  setup() {
    return {
      args,
    }
  },
  template: `
    <Button v-bind="args" @click="click" />
  `,
})

export const Primary = Template.bind({})
Primary.args = {
  labels: 'button',
  type: 'button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  labels: 'secondary',
  type: 'submit'
}