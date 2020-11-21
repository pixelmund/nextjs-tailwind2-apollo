import { ReactNode } from 'react';
import { LoggedOutHeader } from './Header';

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <LoggedOutHeader />
      <div className="max-w-6xl mx-auto md:px-0 px-2">{children}</div>
    </>
  );
}
