import { createContext, useContext } from 'react';
import { site } from '@/constants/site';

const SiteContext = createContext(site);

export function SiteProvider({ children }) {
  return <SiteContext.Provider value={site}>{children}</SiteContext.Provider>;
}

export const useSite = () => useContext(SiteContext);
