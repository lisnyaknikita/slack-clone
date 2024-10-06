'use client'

import React from 'react'
import { Sidebar } from './sidebar'
import { Toolbar } from './toolbar'

interface IWorkspaceIdLayoutProps {
	children: React.ReactNode
}

const WorkspaceIdLayout = ({ children }: IWorkspaceIdLayoutProps) => {
	return (
		<div className='h-ful'>
			<Toolbar />
			<div className='flex h-[calc(100vh-40px)]'>
				<Sidebar />
				{children}
			</div>
		</div>
	)
}

export default WorkspaceIdLayout
