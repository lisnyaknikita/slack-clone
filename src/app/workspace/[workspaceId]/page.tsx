interface IWorkspaceIdPageProps {
	params: {
		workspaceId: string
	}
}

export default function WorkspaceIdPage({ params }: IWorkspaceIdPageProps) {
	return <div>ID: {params.workspaceId}</div>
}
