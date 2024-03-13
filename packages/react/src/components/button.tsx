import { ComponentProps, ElementType } from 'react'

import { styled } from '../styles'

export const Button = styled('button', {
	all: 'unset',
	borderRadius: '$sm',
	fontSize: '$sm',
	fontWeight: '$medium',
	fontFamily: '$default',
	textAlign: 'center',
	padding: '0 $4',
	minWidth: 120,
	boxSizing: 'border-box',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '$2',
	cursor: 'pointer',
	whiteSpace: 'nowrap',
	userSelect: 'none',
	'-webkit-font-smoothing': 'antialiased',

	'&:disabled': {
		cursor: 'not-allowed',
	},

	'&:focus-visible': {
		boxShadow: '0 0 0 2px $colors$gray8300, 0 0 0 4px $colors$ignite500',
	},

	svg: {
		width: '$4',
		height: '$4',
	},

	variants: {
		variant: {
			primary: {
				color: '$white',
				background: '$ignite500',
				'&:not(:disabled):hover': {
					background: '$ignite300',
				},
				'&:disabled': {
					background: '$gray200',
				},
			},
			secondary: {
				color: '$ignite300',
				border: '2px solid $ignite500',
				'&:not(:disabled):hover': {
					background: '$ignite500',
					color: '$white',
				},
				'&:disabled': {
					color: '$gray200',
					borderColor: '$gray200',
				},
			},
			tertiary: {
				color: '$gray100',
				'&:not(:disabled):hover': {
					background: '',
				},
				'&:disabled': {
					color: '$gray600',
				},
				'&:focus-visible': {
					boxShadow: '0 0 0 2px $colors$ignite500',
				},
			},
		},

		size: {
			small: {
				height: 38,
			},
			medium: {
				height: 46,
			},
		},
	},

	defaultVariants: {
		variant: 'primary',
		size: 'medium',
	},
})

export interface ButtonProps extends ComponentProps<typeof Button> {
	as?: ElementType
}

Button.displayName = 'Button'
