import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-bold font-headline">EGS Admissions</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/80">
              Building the future, one student at a time.
            </p>
          </div>

          <div>
            <p className="font-semibold font-headline">Quick Links</p>
            <div className="mt-4 flex flex-col space-y-2 text-sm">
              <Link href="#programs" className="hover:underline">Programs</Link>
              <Link href="#apply" className="hover:underline">Admissions</Link>
              <Link href="#placements" className="hover:underline">Placements</Link>
              <Link href="#" className="hover:underline">About Us</Link>
            </div>
          </div>

          <div>
            <p className="font-semibold font-headline">Contact</p>
            <div className="mt-4 flex flex-col space-y-2 text-sm text-primary-foreground/80">
              <span>123 University Ave, Knowledge City</span>
              <span>info@egs.edu</span>
              <span>+1 (234) 567-890</span>
            </div>
          </div>

          <div>
            <p className="font-semibold font-headline">Follow Us</p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" aria-label="Facebook"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></Link>
              <Link href="#" aria-label="Twitter"><TwitterIcon className="h-6 w-6" /></Link>
              <Link href="#" aria-label="Instagram"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C8.74 2 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.306-1.459.717-2.126 1.384S.936 3.356.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.784.717 1.459 1.384 2.126s1.342.936 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.784-.306 1.459-.718 2.126-1.384s.936-1.342 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.277.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.306-.784-.718-1.459-1.384-2.126S20.644.936 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.06 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.82.679-1.38.896-.423.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.07c-1.17-.06-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.82-.896-1.38-.164-.423-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.07-4.85c.06-1.17.249-1.805.413-2.227.217-.562.477.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413C8.415 2.172 8.796 2.16 12 2.16zm0 9.09c-2.127 0-3.855 1.728-3.855 3.855s1.728 3.855 3.855 3.855 3.855-1.728 3.855-3.855-1.728-3.855-3.855-3.855zm0 6.162c-1.273 0-2.308-1.035-2.308-2.307s1.035-2.308 2.308-2.308 2.308 1.035 2.308 2.308-1.035 2.307-2.308 2.307zm4.965-9.33c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5z" clipRule="evenodd" /></svg></Link>
            </div>
          </div>
        </div>
        <hr className="my-6 border-primary-foreground/20" />
        <div className="text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} EGS Institutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
