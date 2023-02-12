import http from 'api/http'
import { NEWSLETTER_QUERY_KEYS } from 'api/newsletter/newsletterKeys'
import { useToaster } from 'providers/ToastProvider'
import { useMutation } from 'react-query'

export interface SubscribeRequest {
	email: string
	wantsFreeNFTs: boolean
	wantsDevelopmentProgressNews: boolean
	wantsPlatformContentNews: boolean
}

const subscribe = async (request: SubscribeRequest): Promise<void> => {
	const response = await http.post<void>(
		`${NEWSLETTER_QUERY_KEYS.NEWSLETTER}/${NEWSLETTER_QUERY_KEYS.SUBSCRIBE}`,
		request
	)
	return response.data
}

export const useNewsletter = () => {
	const toaster = useToaster()

	const subscribeMutation = useMutation((request: SubscribeRequest) => subscribe(request), {
		onSuccess: async () => {
			toaster.add('Thank you for subscribing! 🎉', 'success')
		},
		onError: toaster.onQueryError,
	})

	return subscribeMutation
}
