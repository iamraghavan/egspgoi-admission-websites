
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

const storiesData = [
    {
        id: 'story-campus-1',
        title: "Welcome to Our Campus",
        description: "Explore the sprawling, green campus of EGS Pillay Group of Institutions, a hub of learning and innovation."
    },
    {
        id: 'story-campus-2',
        title: "The Knowledge Center",
        description: "Our state-of-the-art library offers a vast collection of books, journals, and digital resources to fuel your curiosity."
    },
    {
        id: 'story-campus-3',
        title: "Vibrant Student Life",
        description: "From cultural festivals to technical symposiums, the campus is always buzzing with energy and activity."
    },
    {
        id: 'story-campus-4',
        title: "World-Class Sports Facilities",
        description: "Stay active and competitive with our top-notch sports infrastructure, including cricket grounds, basketball courts, and a modern gym."
    },
    {
        id: 'story-campus-5',
        title: "Sustainable Campus",
        description: "We take pride in our eco-friendly initiatives, maintaining a lush green environment for focused learning."
    },
    {
        id: 'story-campus-6',
        title: "Cutting Edge Laboratories",
        description: "Our labs are equipped with the latest technology, providing hands-on experience and fostering practical innovation."
    }
];

const stories = storiesData.map(story => ({
    imageUrl: PlaceHolderImages.find(p => p.id === story.id)?.imageUrl,
    title: story.title,
    description: story.description
})).filter(s => !!s.imageUrl);


export default function WebStoryPage() {
    return (
        <main className="h-screen w-screen bg-black">
            <WebStory stories={stories as any} />
        </main>
    );
}
