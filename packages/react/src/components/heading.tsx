import { ComponentProps, ElementType } from 'react'

import { styled } from '../styles'

export const Heading = styled('h2', {
	display: 'block',
	fontFamily: '$default',
	fontWeight: '$bold',
	fontStyle: 'normal',
	lineHeight: '$shorter',
	margin: 0,
	color: '$gray100',
	'-webkit-font-smoothing': 'antialiased',

	variants: {
		size: {
			sm: { fontSize: '$xl' },
			md: { fontSize: '$2xl' },
			lg: { fontSize: '$4xl' },
			'2xl': { fontSize: '$5xl' },
			'4xl': { fontSize: '$7xl' },
			'5xl': { fontSize: '$8xl' },
			'6xl': { fontSize: '$9xl' },
		},
	},

	defaultVariants: {
		size: 'md',
	},
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
	as?: ElementType
}

Heading.displayName = 'Heading'
