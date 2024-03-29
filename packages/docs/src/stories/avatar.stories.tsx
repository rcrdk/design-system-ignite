import { Avatar, AvatarProps } from '@rcrdk-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'Data display/Avatar',
	component: Avatar,
	args: {
		src: 'https://github.com/rcrdk.png',
		alt: 'Ricardo Augusto Kowalski',
	},
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
	args: {
		src: undefined,
	},
}
