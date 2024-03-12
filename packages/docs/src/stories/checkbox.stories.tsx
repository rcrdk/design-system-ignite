import { Box, Checkbox, CheckboxProps, Text } from '@rcrdk-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'Form/Checkbox',
	component: Checkbox,
	decorators: [
		(Story) => {
			return (
				<Box
					as="label"
					css={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						gap: '$2',
					}}
				>
					{Story()}
					<Text size="sm">Accept terms of use</Text>
				</Box>
			)
		},
	],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
	args: {
		'aria-label': 'Accept terms of use',
	},
}
