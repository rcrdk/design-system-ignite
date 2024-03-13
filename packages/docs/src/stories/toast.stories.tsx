import * as Portal from '@radix-ui/react-portal'
import { Button, Toast, ToastProps } from '@rcrdk-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

export default {
	title: 'Popups/Toast',
	component: Toast,
	argTypes: {
		children: {
			control: false,
		},
	},
	decorators: [
		(Story) => {
			const [open, setOpen] = useState(false)

			function handleToastTrigger() {
				setOpen((prev) => !prev)
			}

			return (
				<>
					<Button type="button" onClick={handleToastTrigger}>
						Trigger toast
					</Button>

					<Portal.Root>
						{Story({
							args: {
								title: 'Your appointment was set.',
								description: 'Wednesday. November 4th, 2024.',
								providerOptions: {
									duration: 3000,
									swipeDirection: 'right',
								},
								open,
								onOpenChange: handleToastTrigger,
							},
						})}
					</Portal.Root>
				</>
			)
		},
	],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
