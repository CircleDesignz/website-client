import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useStore } from '../../pages/_app';
import axios from 'axios';

export const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter();
    const authenticated = useStore((state) => state.authenticated);

    useEffect(() => {
      async function checkStatus() {
        if (!authenticated) {
          await axios
            .get('http://localhost:3001/api/auth', { withCredentials: true })
            .then((res) => {
              if (res.status === 204) {
                useStore.setState({ authenticated: true });
              }
            })
            .catch(() => {
              router.replace('/');
            });
        }
      }
      checkStatus();
    }, []);

    if (authenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};
