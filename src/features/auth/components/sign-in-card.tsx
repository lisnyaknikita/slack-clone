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
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { SignInFlow } from '../types'

export const metadata: Metadata = {
	title: '',
	description: '',
}

interface ISignInCardProps {
	setState: (state: SignInFlow) => void
}

export default function SignInCard({ setState }: ISignInCardProps) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

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
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder='Email'
						type='email'
						required
					/>
					<Input
						disabled={false}
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder='Password'
						type='password'
						required
					/>
					<Button type='submit' className='w-full' size={'lg'} disabled={false}>
						Continue
					</Button>
				</form>
				<Separator />
				<div className='flex flex-col gap-y-2.5'>
					<Button
						className='w-full relative'
						disabled={false}
						onClick={() => {}}
						variant={'outline'}
						size={'lg'}
					>
						<FcGoogle className='size-5 absolute top-2.5 left-2.5' />
						Continue with Google
					</Button>
					<Button
						className='w-full relative'
						disabled={false}
						onClick={() => {}}
						variant={'outline'}
						size={'lg'}
					>
						<FaGithub className='size-5 absolute top-2.5 left-2.5' />
						Continue with GitHub
					</Button>
				</div>
				<p className='text-xs text-muted-foreground'>
					Don't have an account?{' '}
					<span
						className='text-sky-700 hover:underline cursor-pointer'
						onClick={() => setState('signUp')}
					>
						Sign in
					</span>{' '}
				</p>
			</CardContent>
		</Card>
	)
}
