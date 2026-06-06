'use client';
import { useEffect } from 'react';

export default function SwRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/locuterra/sw.js', { scope: '/locuterra/' })
        .catch(() => {});
    }
  }, []);
  return null;
}
