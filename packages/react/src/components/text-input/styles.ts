import { styled } from '../../../styles'

export const TextInputContainer = styled('div', {
	background: '$gray900',
	padding: '$3 $4',
	borderRadius: '$sm',
	boxSizing: 'border-box',
	border: '2px solid $gray900',
	display: 'flex',
	alignItems: 'baseline',
	cursor: 'text',

	'&:has(input:focus)': {
		borderColor: '$ignite300',
	},

	'&:has(input:disabled)': {
		opacity: '0.5',
		cursor: 'not-allowed',
	},
})

export const Prefix = styled('span', {
	fontFamily: '$default',
	fontSize: '$sm',
	fontWeight: '$regular',
	color: '$gray400',
})

export const Input = styled('input', {
	cursor: 'inherit',
	fontFamily: '$default',
	fontSize: '$sm',
	fontWeight: '$regular',
	color: '$white',
	background: 'transparent',
	border: 'none',
	width: '100%',

	'&:focus': {
		outline: 'none',
	},

	'&::placeholder': {
		color: '$gray400',
	},
})
