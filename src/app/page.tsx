import { redirect } from 'next/navigation';

export default function RootPage() {
  // This page only renders when the user visits `/` without a locale prefix
  // The middleware will handle the redirect to the default locale
  redirect('/fa');
}