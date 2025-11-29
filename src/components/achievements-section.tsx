
import { Award, BarChart3, Gem, Handshake, Repeat, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const achievements = [
  {
    icon: Award,
    title: 'NBA - Tier-1',
    description: 'Washington Accord Accredited',
  },
  {
    icon: BarChart3,
    title: 'NIRF Ranking',
    description: 'All India Rank Band 201-300',
  },
  {
    icon: Gem,
    title: 'NAAC A++',
    description: 'Top-tier institutional accreditation',
  },
  {
    icon: Trophy,
    title: 'State Level Achievement',
    description: 'Awarded 3rd time for academics',
  },
  {
    icon: Handshake,
    title: '150+ Industrial Relationships',
    description: 'Strong network for student placements',
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative w-full bg-gradient-to-r from-primary to-accent py-16 md:py-24 text-primary-foreground">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Achievements</h2>
          <p className="text-lg text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
            Decades of commitment to excellence in education, recognized by prestigious bodies and industry leaders.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground backdrop-blur-sm transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            >
              <CardContent className="flex flex-col items-center justify-start text-center p-6">
                <div className="mb-4 p-4 bg-primary-foreground/10 rounded-full">
                  <achievement.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold font-headline mb-2">{achievement.title}</h3>
                <p className="text-sm text-primary-foreground/80">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
