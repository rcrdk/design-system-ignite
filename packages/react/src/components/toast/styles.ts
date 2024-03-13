import * as Toast from '@radix-ui/react-toast'

import { keyframes, styled } from '../../styles'

export const ToastViewport = styled(Toast.Viewport, {
	position: 'fixed',
	bottom: '$8',
	right: '$8',
	zIndex: 2147483647,
	display: 'flex',
	flexDirection: 'column',
	margin: 0,
	listStyle: 'none',
})

const hide = keyframes({
	'0%': { opacity: 1 },
	'100%': { opacity: 0 },
})

const slideIn = keyframes({
	from: { transform: `translateX(calc(100% + $8))` },
	to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
	from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
	to: { transform: `translateX(calc(100% + $8))` },
})

export const ToastRoot = styled(Toast.Root, {
	display: 'flex',
	flexDirection: 'column',
	gap: '$1',
	padding: '$3 $5',
	width: 360,
	maxWidth: 'calc(100% gray800- $8 - $8)',
	backgroundColor: '$gray800',
	border: '$gray600 1px solid',
	borderRadius: '$sm',
	boxSizing: 'border-box',
	fontFamily: '$default',
	lineHeight: '$base',
	'-webkit-font-smoothing': 'antialiased',

	'&[data-state="open"]': {
		animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
	},

	'&[data-state="closed"]': {
		animation: `${hide} 100ms ease-in`,
	},

	'&[data-swipe="move"]': {
		transform: 'translateX(var(--radix-toast-swipe-move-x))',
	},

	'&[data-swipe="cancel"]': {
		transform: 'translateX(0)',
		transition: 'transform 200ms ease-out',
	},

	'&[data-swipe="end"]': {
		animation: `${swipeOut} 100ms ease-out`,
	},
})

export const ToastTitle = styled(Toast.Title, {
	color: '$white',
	fontSize: '$xl',
	fontWeight: '$bold',
	paddingRight: '$7',
})

export const ToastDescription = styled(Toast.Description, {
	color: '$gray200',
	fontSize: '$sm',
	fontWeight: '$regular',
})

export const ToastClose = styled(Toast.Close, {
	all: 'unset',
	position: 'absolute',
	top: '$3',
	right: '$5',
	color: '$gray200',
	fontSize: '$lineHeights$base',
	width: '$5',
	height: '1em',
	cursor: 'pointer',

	'&:hover': {
		color: '$white',
	},

	svg: {
		width: '100%',
		height: '100%',
	},
})
