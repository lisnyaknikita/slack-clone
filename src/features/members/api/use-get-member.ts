import { useQuery } from 'convex/react'
import { api } from '../../../../convex/_generated/api'
import { Id } from '../../../../convex/_generated/dataModel'

interface IUseGetMemberProps {
	id: Id<'members'>
}

export const useGetMember = ({ id }: IUseGetMemberProps) => {
	const data = useQuery(api.members.getById, { id })
	const isLoading = data === undefined

	return { data, isLoading }
}
