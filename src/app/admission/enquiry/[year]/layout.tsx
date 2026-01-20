import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enquiry Submitted',
  robots: {
    index: false,
    follow: false,
  },
};

export default function EnquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
