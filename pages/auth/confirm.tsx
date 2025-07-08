// pages/auth/confirm.tsx (if using Next.js)

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase'; // adjust path as needed

export default function ConfirmPage() {
  const router = useRouter();

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
          // Redirect to the mobile app with the token
          window.location.href = `bookofmemes://auth/callback#${hash}`;
        })
        .catch((error) => {
          console.error('❌ Session set failed:', error.message);
          router.push('/error'); // Optional error screen
        });
    } else {
      router.push('/error'); // Optional error screen
    }
  }, []);

  return <p>Confirming your email...</p>;
}