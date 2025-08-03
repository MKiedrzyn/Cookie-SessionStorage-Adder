document.addEventListener('DOMContentLoaded', async () => {
	const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

	const cookiesToAdd = [
		{
			// below define the cookies you want to add
			name: 'cookieName',
			value: 'cookieValue',
		},
	]

	document.getElementById('addAllCookies').addEventListener('click', async () => {
		for (const cookie of cookiesToAdd) {
			await chrome.cookies.set({
				url: tab.url,
				name: cookie.name,
				value: cookie.value,
			})
		}
		await chrome.tabs.reload(tab.id)
	})

	document.getElementById('addToSessionStorage').addEventListener('click', async () => {
		await chrome.scripting.executeScript({
			target: { tabId: tab.id },
			func: () => {
				// below define the session storage you want to add
				sessionStorage.setItem('SessionStorageName', 'SessionStorageValue')
			},
		})
		await chrome.tabs.reload(tab.id)
	})
})
