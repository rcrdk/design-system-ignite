import * as Checkbox from '@radix-ui/react-checkbox'

import { keyframes, styled } from '../../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
	all: 'unset',
	width: '$6',
	height: '$6',
	background: '$gray900',
	border: '2px solid $gray900',
	borderRadius: '$xs',
	lineHeight: 0,
	cursor: 'pointer',
	overflow: 'hidden',
	boxSizing: 'border-box',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	'&:focus-visible': {
		border: '2px solid $ignite300',
	},

	'&[data-state="checked"]': {
		background: '$ignite500',
		borderColor: '$ignite500',

		'&:focus-visible': {
			boxShadow: `0 0 0 1px var(--colors-gray800) inset`,
		},
	},
})

const slideIn = keyframes({
	from: {
		transform: 'translateY(-100%)',
	},
	to: {
		transform: 'translateY(0)',
	},
})

const slideOut = keyframes({
	from: {
		transform: 'translateY(0)',
	},
	to: {
		transform: 'translateY(-100%)',
	},
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
	color: '$white',
	width: '$4',
	height: '$4',

	'&[data-state="checked"]': {
		animation: `${slideIn} 200ms ease-out`,
	},

	'&[data-state="unchecked"]': {
		animation: `${slideOut} 200ms ease-out`,
	},
})
