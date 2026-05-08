if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/test/sw.js', {
      scope: '/test/',
      updateViaCache: 'none',   // sw.js 自体はHTTPキャッシュを使わず毎回サーバーから取得
    })
    .then(reg => reg.update())  // 起動のたびに更新チェックを強制
    .catch(err => console.warn('Service Worker registration failed:', err));
  });
}
