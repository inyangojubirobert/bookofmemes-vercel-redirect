// pages/auth/confirm.tsx

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase'; // adjust path if needed

export default function ConfirmPage() {
  const router = useRouter();
  const [redirectHash, setRedirectHash] = useState<string | null>(null);
  const [status, setStatus] = useState<'checking' | 'success' | 'failed'>('checking');

  useEffect(() => {
    const hash = window.location.hash.substring(1); // remove leading '#'
    const params = new URLSearchParams(hash);
    const access_token = params.get('access_token');
    const refresh_token = params.get('refresh_token');

    if (access_token) {
      supabase.auth
        .setSession({ access_token, refresh_token: refresh_token ?? '' })
        .then(() => {
          console.log('✅ Email confirmed!');
          setRedirectHash(hash);
          setStatus('success');

          // Try auto-redirect
          window.location.href = `bookofmemes://auth/callback#${hash}`;
        })
        .catch((error) => {
          console.error('❌ Session set failed:', error.message);
          setStatus('failed');
          router.push('/error'); // Optional
        });
    } else {
      setStatus('failed');
      router.push('/error'); // Optional
    }
  }, []);

  const handleOpenApp = () => {
    if (redirectHash) {
      window.location.href = `bookofmemes://auth/callback#${redirectHash}`;
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      {status === 'checking' && <p>Confirming your email...</p>}

      {status === 'success' && (
        <>
          <h2>✅ Email Confirmed!</h2>
          <p>You can now return to the app.</p>
          <button
            onClick={handleOpenApp}
            style={{
              marginTop: '20px',
              padding: '12px 24px',
              fontSize: '16px',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Open Book of Memes App
          </button>
        </>
      )}

      {status === 'failed' && (
        <>
          <h2>❌ Confirmation Failed</h2>
          <p>There was an issue confirming your email.</p>
        </>
      )}
    </div>
  );
}
