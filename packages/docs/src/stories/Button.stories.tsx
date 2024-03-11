import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import type { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'Form/Button',
	component: Button,
	args: {
		children: 'Send',
		arg: {
			variant: 'primary',
			size: 'medium',
			disabled: false,
		},
	},
	argTypes: {
		variant: {
			options: ['primary', 'secondary', 'tertiary'],
			control: 'inline-radio',
		},
		size: {
			options: ['small', 'medium'],
			control: 'inline-radio',
		},
		disabled: {
			control: 'boolean',
		},
		onClick: {
			action: 'click',
		},
		arg: {
			control: false,
		},
	},
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
	args: {
		variant: 'secondary',
		children: 'Create new user',
	},
}

export const Tertiary: StoryObj<ButtonProps> = {
	args: {
		variant: 'tertiary',
		children: 'Cancel',
	},
}

export const Small: StoryObj<ButtonProps> = {
	args: {
		size: 'small',
	},
}

export const WithIcon: StoryObj<ButtonProps> = {
	args: {
		children: (
			<>
				Próximo Passo
				<ArrowRight weight="bold" />
			</>
		),
	},
}

export const Disabled: StoryObj<ButtonProps> = {
	args: {
		disabled: true,
	},
}
