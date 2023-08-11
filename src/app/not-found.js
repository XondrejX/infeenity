// sections
import { NotFoundView } from 'src/sections/error';

// ----------------------------------------------------------------------

export const metadata = {
  title: '404 - stránka nenajdená!',
};

export default function NotFoundPage() {
  return <NotFoundView />;
}
