'use client'

import React from 'react'
import { Toolbar } from './toolbar'

interface IWorkspaceIdLayoutProps {
	children: React.ReactNode
}

const WorkspaceIdLayout = ({ children }: IWorkspaceIdLayoutProps) => {
	return (
		<div className='h-ful'>
			<Toolbar />
			{children}
		</div>
	)
}

export default WorkspaceIdLayout
