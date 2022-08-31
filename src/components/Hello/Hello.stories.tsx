import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Hello } from './Hello'

export default {
  component: Hello,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Hello>

const Template: ComponentStory<typeof Hello> = () => <Hello />

export const Base = Template.bind({})
Base.args = {}
