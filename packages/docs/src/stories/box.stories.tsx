import { Box, BoxProps, Heading, Text } from '@rcrdk-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'Surfaces/Box',
	component: Box,
	args: {
		children: (
			<>
				<Heading css={{ marginBottom: '$4' }}>
					Lorem ipsum dolor sit amet.
				</Heading>

				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
					voluptatem excepturi possimus totam pariatur animi facere quos,
					deserunt saepe quod dolorem est quasi sint, ratione modi, cupiditate
					adipisci in nisi!
				</Text>
			</>
		),
	},
	argTypes: {
		children: {
			control: false,
		},
	},
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
