import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: '',
	description: '',
}

export default function SignInCard() {
	return (
		<Card className='w-full h-full p-8'>
			<CardHeader className='px-0 pt-0'>
				<CardTitle>Login to continue</CardTitle>
				<CardDescription>
					Use your email or another service to continue
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-5 px-0 pb-0'>
				<form className='space-y-2.5'>
					<Input
						disabled={false}
						value={''}
						onChange={() => {}}
						placeholder='Email'
						type='email'
						required
					/>
					<Input
						disabled={false}
						value={''}
						onChange={() => {}}
						placeholder='Password'
						type='password'
						required
					/>
					<Button type='submit' className='w-full' size={'lg'} disabled={false}>
						Continue
					</Button>
				</form>
				<Separator />
				<div className=''></div>
			</CardContent>
		</Card>
	)
}
