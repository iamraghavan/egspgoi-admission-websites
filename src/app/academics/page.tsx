
import { FindProgram } from '@/components/find-program';
import { PageHeader } from '@/components/page-header';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

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
