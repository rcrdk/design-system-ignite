import { TooltipProvider } from '@radix-ui/react-tooltip'
import { Button, Tooltip, TooltipProps } from '@rcrdk-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'Popups/Tooltip',
	component: Tooltip,
	args: {
		children: <Button type="button">Hover me</Button>,
		title: 'Lorem ipsum dolor sit amet consectur adipsing.',
		side: 'bottom',
	},
	argTypes: {
		side: {
			options: ['top', 'right', 'bottom', 'left'],
			control: 'inline-radio',
		},
		children: {
			control: false,
		},
	},
	decorators: [
		(Story) => {
			return <TooltipProvider>{Story()}</TooltipProvider>
		},
	],
	parameters: {
		docs: {
			description: {
				story:
					'It is required to envolve `TooltipProvider` on main application file to make tooltips to work.',
			},
		},
	},
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
