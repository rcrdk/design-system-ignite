import { X } from '@phosphor-icons/react'
import { ToastProvider } from '@radix-ui/react-toast'
import { ComponentProps } from 'react'

import {
	ToastClose,
	ToastDescription,
	ToastRoot,
	ToastTitle,
	ToastViewport,
} from './styles'

export interface ToastProps {
	title: string
	description: string
	open: boolean
	onOpenChange: () => void
	providerOptions?: ComponentProps<typeof ToastProvider>
}

export function Toast({
	title,
	description,
	open,
	onOpenChange,
	providerOptions,
}: ToastProps) {
	return (
		<ToastProvider {...providerOptions}>
			<ToastRoot open={open} onOpenChange={onOpenChange}>
				<ToastTitle>{title}</ToastTitle>
				<ToastDescription>{description}</ToastDescription>
				<ToastClose aria-label="Fechar">
					<X aria-hidden />
				</ToastClose>
			</ToastRoot>

			<ToastViewport />
		</ToastProvider>
	)
}

Toast.displayName = 'Toast'
