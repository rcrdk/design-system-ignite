import * as Tooltip from '@radix-ui/react-tooltip'

import { keyframes, styled } from '../../styles'

const slideUpAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(-5px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(5px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(5px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(-5px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' },
})

export const TooltipContainer = styled(Tooltip.Content, {
	maxWidth: 160,
	padding: '$3 $4',
	textAlign: 'center',
	fontSize: '$sm',
	lineHeight: '$short',
	fontFamily: '$default',
	fontWeight: '$medium',
	letterSpacing: '-0.1px',
	color: '$gray100',
	backgroundColor: '$gray900',
	borderRadius: '$sm',
	userSelect: 'none',
	animationDuration: '400ms',
	animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
	willChange: 'transform, opacity',
	'-webkit-font-smoothing': 'antialiased',
	'&[data-state="delayed-open"]': {
		'&[data-side="top"]': { animationName: slideDownAndFade },
		'&[data-side="right"]': { animationName: slideLeftAndFade },
		'&[data-side="bottom"]': { animationName: slideUpAndFade },
		'&[data-side="left"]': { animationName: slideRightAndFade },
	},
})

export const TooltipArrow = styled(Tooltip.Arrow, {
	fill: '$gray900',
	fontSize: '$2xl',
})
