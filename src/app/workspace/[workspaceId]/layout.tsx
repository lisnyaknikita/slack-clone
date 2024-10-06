'use client'

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import React from 'react'
import { Sidebar } from './sidebar'
import { Toolbar } from './toolbar'
import { WorkspaceSidebar } from './workspace-sidebar'

interface IWorkspaceIdLayoutProps {
	children: React.ReactNode
}

const WorkspaceIdLayout = ({ children }: IWorkspaceIdLayoutProps) => {
	return (
		<div className='h-ful'>
			<Toolbar />
			<div className='flex h-[calc(100vh-40px)]'>
				<Sidebar />
				<ResizablePanelGroup direction='horizontal' autoSaveId={'ca-workspace-layout'}>
					<ResizablePanel defaultSize={20} minSize={11} className='bg-[#5e2c5f]'>
						<WorkspaceSidebar />
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel minSize={20}>{children}</ResizablePanel>
				</ResizablePanelGroup>
			</div>
		</div>
	)
}

export default WorkspaceIdLayout
