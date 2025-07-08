import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase'; // Adjust if needed

export default function ConfirmPage() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [status, setStatus] = useState<'checking' | 'success' | 'failed'>('checking');

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get('access_token');
    const refresh_token = params.get('refresh_token') ?? '';

    if (token) {
      supabase.auth
        .setSession({ access_token: token, refresh_token })
        .then(() => {
          setAccessToken(token);
          setStatus('success');

          // TRY automatic redirect (may fail silently in some mobile browsers)
          window.location.href = `bookofmemes://auth/callback#access_token=${token}`;
        })
        .catch((err) => {
          console.error('Session set failed:', err.message);
          setStatus('failed');
        });
    } else {
      setStatus('failed');
    }
  }, []);

  const handleOpenApp = () => {
    if (accessToken) {
      window.location.href = `bookofmemes://auth/callback#access_token=${accessToken}`;
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
