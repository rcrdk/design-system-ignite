import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
	background: '$gray900',
	borderRadius: '$sm',
	boxSizing: 'border-box',
	border: '2px solid $gray900',
	display: 'flex',
	alignItems: 'center',
	cursor: 'text',
	'-webkit-font-smoothing': 'antialiased',

	variants: {
		size: {
			small: {
				padding: '$2 $3',
			},
			medium: {
				padding: '$3 $4',
			},
		},
	},

	defaultVariants: {
		size: 'medium',
	},

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
		fontStyle: 'italic',
	},
})
