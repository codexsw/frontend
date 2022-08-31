import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { HelloView } from './HelloView'

export default {
  component: HelloView,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof HelloView>

const Template: ComponentStory<typeof HelloView> = ({ ...args }) => (
  <HelloView {...args} />
)

export const Base = Template.bind({})
Base.args = {
  name: 'John Doe',
  onQuery: action('onQuery'),
}
