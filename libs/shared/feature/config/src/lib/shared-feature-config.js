// pages
import { Homepage } from '@demo-org/shared/pages/homepage';
import { ShowAll } from '@demo-org/shared/pages/showall';

export const shareRoutes = [
  { path: '/', element: <Homepage />, label: 'Homepage' },
  { path: '/all', element: <ShowAll />, label: 'Show All' },
];
