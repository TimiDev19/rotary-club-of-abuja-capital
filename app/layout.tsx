import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rotary Club of Abuja Capital — Changing Lives',
  description: 'A community of friends working together for a common goal: changing lives.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
