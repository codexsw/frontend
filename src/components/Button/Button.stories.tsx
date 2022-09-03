import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'

export default {
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({ ...args }) => (
  <Button {...args} />
)

export const Base = Template.bind({})
Base.args = {
  children: 'John Doe',
  onClick: action('onClick'),
}
