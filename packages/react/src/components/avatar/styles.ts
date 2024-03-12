import * as Avatar from '@radix-ui/react-avatar'

import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
	borderRadius: '$full',
	display: 'inline-block',
	width: '$16',
	height: '$16',
	overflow: 'hidden',
})

export const AvatarImage = styled(Avatar.Image, {
	objectFit: 'cover',
	width: '100%',
	height: '100%',
	borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	height: '100%',
	background: '$gray600',
	color: '$gray800',

	svg: {
		width: '$6',
		height: '$6',
	},
})
