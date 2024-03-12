import { Heading, HeadingProps } from '@rcrdk-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'Typography/Heading',
	component: Heading,
	args: {
		children: 'Custom title',
		size: 'md',
	},
	argTypes: {
		size: {
			options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
			control: 'inline-radio',
		},
	},
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
	args: {
		children: 'Heading 1',
		as: 'h1',
	},
	parameters: {
		docs: {
			description: {
				story:
					'By default, headings will always be a `h2`, it is possibible changing it by setting `as`.',
			},
		},
	},
}
