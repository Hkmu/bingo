import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {}
});
console.log('serviceWorker' in navigator);
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function(registration) {
			console.log('ServiceWorker registration successful');
		}).catch(function(err) {
			console.log('ServiceWorker registration failed: ', err);
		});
    });
}

export default app;
