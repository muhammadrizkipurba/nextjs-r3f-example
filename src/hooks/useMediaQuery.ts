import { useCallback, useSyncExternalStore } from "react";

export const useMediaQuery = (query: string, serverFallback: boolean) => {
  const subscribe = useCallback((onStorageChange: () => void) => {
      const mediaQueryList = matchMedia(query);
      mediaQueryList.addEventListener('change', onStorageChange);

      return () => {
        mediaQueryList.removeEventListener('change', onStorageChange);
      }
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => matchMedia(query).matches,
    () => serverFallback
  );
};