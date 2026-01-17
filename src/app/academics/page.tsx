
import { PageHeader } from '@/components/page-header';
import { SiteHeader } from '@/components/site-header';
import dynamic from 'next/dynamic';

const FindProgram = dynamic(() => import('@/components/find-program').then(mod => mod.FindProgram));
const SiteFooter = dynamic(() => import('@/components/site-footer').then(mod => mod.SiteFooter));


export default function AcademicsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main>
            <PageHeader
                title="Our Academic Programs"
                description="Explore a wide range of programs and find the one that's right for you."
                imageUrl="https://picsum.photos/seed/academics/1600/400"
            />
            <div className="container mx-auto px-6 py-16">
                <FindProgram />
            </div>
        </main>
        <SiteFooter />
    </div>
  );
}
