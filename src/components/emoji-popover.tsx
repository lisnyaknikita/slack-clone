import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

interface IEmojiPopoverProps {
	children: React.ReactNode
	hint?: string
	//@ts-expect-error
	onEmojiSelect: (emoji) => void
}

export const EmojiPopover = ({ children, onEmojiSelect, hint = 'Emoji' }: IEmojiPopoverProps) => {
	const [popoverOpen, setPopoverOpen] = useState(false)
	const [tooltipOpen, setTooltipOpen] = useState(false)

	//@ts-expect-error
	const onSelect = emoji => {
		onEmojiSelect(emoji)
		setPopoverOpen(false)

		setTimeout(() => {
			setTooltipOpen(false)
		}, 500)
	}

	return (
		<TooltipProvider>
			<Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
				<Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen} delayDuration={50}>
					<PopoverTrigger asChild>
						<TooltipTrigger asChild>{children}</TooltipTrigger>
					</PopoverTrigger>
					<TooltipContent className='bg-black text-white border border-white/5'>
						<p className='font-medium text-xs'>{hint}</p>
					</TooltipContent>
				</Tooltip>
				<PopoverContent className='p-0 w-full border-none shadow-none'>
					<Picker data={data} onEmojiSelect={onSelect} />
				</PopoverContent>
			</Popover>
		</TooltipProvider>
	)
}
