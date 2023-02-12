import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { walletKeys, WALLET_QUERY_KEYS } from 'api/wallet'
import { useToaster } from 'providers/ToastProvider'
import { useAuth } from '@open-sauce/solomon'
import { Wallet } from 'models/wallet'
import http from 'api/http'

const { WALLET, GET, ME } = WALLET_QUERY_KEYS

const fetchMe = async (): Promise<Wallet> => {
	const response = await http.get<Wallet>(`${WALLET}/${GET}/${ME}`)
	return response.data
}

export const useFetchMe = () => {
	const { isAuthenticated } = useAuth()
	const toaster = useToaster()

	const fetchMeQuery = useQuery(walletKeys.getMe, fetchMe, {
		staleTime: 1000 * 60 * 60 * 24, // Stale for one day
		enabled: isAuthenticated,
		onError: toaster.onQueryError,
	})

	const { refetch } = fetchMeQuery

	useEffect(() => {
		if (isAuthenticated) refetch()
	}, [isAuthenticated, refetch])

	return fetchMeQuery
}
