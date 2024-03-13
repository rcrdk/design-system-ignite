import * as TooltipComponent from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

import { TooltipArrow, TooltipContainer } from './styles'

export interface TooltipProps {
	children: ReactNode
	title: string
	side?: 'top' | 'right' | 'bottom' | 'left'
}

export function Tooltip({ children, title, side = 'bottom' }: TooltipProps) {
	return (
		<TooltipComponent.Root>
			<TooltipComponent.Trigger asChild>{children}</TooltipComponent.Trigger>

			<TooltipComponent.Portal>
				<TooltipContainer sideOffset={5} side={side}>
					{title}
					<TooltipArrow width={16} height={8} />
				</TooltipContainer>
			</TooltipComponent.Portal>
		</TooltipComponent.Root>
	)
}
