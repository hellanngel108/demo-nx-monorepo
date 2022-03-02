// shared Routes
import { shareRoutes } from '@demo-org/shared/feature/config';

export const navLinkRoutes = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Dashboard',
    path: '/dashboard',
  },
  {
    label: 'Show All',
    path: '/all',
  },
];

export const routes = [...shareRoutes];
