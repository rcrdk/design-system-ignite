import { Heading, HeadingProps } from '@rcrdk-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'Typography/Heading',
	component: Heading,
	args: {
		children: 'Custom title',
		size: 'md',
		as: 'h2',
	},
	argTypes: {
		size: {
			options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
			control: 'inline-radio',
		},
		as: {
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'strong', 'em'],
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
