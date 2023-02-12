export const NEWSLETTER_QUERY_KEYS = Object.freeze({
	NEWSLETTER: 'newsletter',
	SUBSCRIBE: 'subscribe',
})

export const walletKeys = Object.freeze({
	newsletter: [NEWSLETTER_QUERY_KEYS.NEWSLETTER],
	subscribe: [NEWSLETTER_QUERY_KEYS.NEWSLETTER, NEWSLETTER_QUERY_KEYS.SUBSCRIBE],
})
