import { WebStory } from '@/components/web-story';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Campus Tour - EGS Pillay Group',
    description: 'Take a virtual tour of the EGS Pillay Group of Institutions campus.',
    robots: {
        index: false,
        follow: false,
    }
};

const stories = [
    {
        imageUrl: PlaceHolderImages.find(p => p.id === 'story-campus-1')?.imageUrl,
        title: "Welcome to Our Campus",
        description: "Explore the sprawling, green campus of EGS Pillay Group of Institutions, a hub of learning and innovation."
    },
    {
        imageUrl: PlaceHolderImages.find(p => p.id === 'story-campus-2')?.imageUrl,
        title: "The Knowledge Center",
        description: "Our state-of-the-art library offers a vast collection of books, journals, and digital resources to fuel your curiosity."
    },
    {
        imageUrl: PlaceHolderImages.find(p => p.id === 'story-campus-3')?.imageUrl,
        title: "Vibrant Student Life",
        description: "From cultural festivals to technical symposiums, the campus is always buzzing with energy and activity."
    },
    {
        imageUrl: PlaceHolderImages.find(p => p.id === 'story-campus-4')?.imageUrl,
        title: "World-Class Sports Facilities",
        description: "Stay active and competitive with our top-notch sports infrastructure, including cricket grounds, basketball courts, and a modern gym."
    }
].filter(story => story.imageUrl);


export default function WebStoryPage() {
    return (
        <main className="h-screen w-screen bg-black">
            <WebStory stories={stories as any} />
        </main>
    );
}
