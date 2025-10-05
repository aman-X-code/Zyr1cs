'use client';

import { useEffect, useState } from 'react';

export function useIsomorphicLayoutEffect(callback: () => void, deps: React.DependencyList) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      callback();
    }
  }, [isClient, ...deps]);
}

export function useClientOnly() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
