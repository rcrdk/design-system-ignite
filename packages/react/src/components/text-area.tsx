import { ComponentProps, ElementType } from 'react'

import { styled } from '../styles'

export const TextArea = styled('textarea', {
	background: '$gray900',
	padding: '$3 $4',
	borderRadius: '$sm',
	boxSizing: 'border-box',
	border: '2px solid $gray900',
	fontFamily: '$default',
	fontSize: '$sm',
	fontWeight: '$regular',
	color: '$white',
	cursor: 'text',
	resize: 'vertical',
	minHeight: 80,

	'&:focus': {
		outline: 'none',
		borderColor: '$ignite300',
	},

	'&::placeholder': {
		color: '$gray400',
	},

	'&:disabled': {
		opacity: '0.5',
		cursor: 'not-allowed',
	},
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {
	as?: ElementType
}

TextArea.displayName = 'TextArea'
