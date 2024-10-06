import { useQuery } from 'convex/react'
import { api } from '../../../../convex/_generated/api'
import { Id } from '../../../../convex/_generated/dataModel'

interface IUseCurrentMemberProps {
	workspaceId: Id<'workspaces'>
}

export const useCurrentMember = ({ workspaceId }: IUseCurrentMemberProps) => {
	const data = useQuery(api.members.current, { workspaceId })
	const isLoading = data === undefined

	return { data, isLoading }
}
