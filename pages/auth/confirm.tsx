import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ConfirmRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { token, email, type } = router.query;

      const params = new URLSearchParams({
        token: String(token || ''),
        email: String(email || ''),
        type: String(type || 'signup'),
      });

      const deepLink = `bookofmemes://auth/confirm?${params.toString()}`;
      window.location.href = deepLink;
    }
  }, [router.isReady]);

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 100 }}>
      <h1>Redirecting to the Book of Memes app...</h1>
      <p>If nothing happens, make sure you have the app installed.</p>
    </main>
  );
}
