
import Image, { StaticImageData } from 'next/image';

interface PageHeaderProps {
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
}

export function PageHeader({ title, description, imageUrl }: PageHeaderProps) {
  return (
    <section className="relative h-64 md:h-80 w-full flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      </div>
      <div className="relative z-10 text-white px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
