import { AccreditationLogos } from '@/components/accreditation-logos';
import { AchievementsSection } from '@/components/achievements-section';
import { CtaSection } from '@/components/cta-section';
import { FaqSection } from '@/components/faq-section';
import { FindProgram } from '@/components/find-program';
import { HeroSection } from '@/components/hero-section';
import { LogoCloud } from '@/components/logo-cloud';
import { PlacementShowcase } from '@/components/placement-showcase';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { TestimonialSlider } from '@/components/testimonial-slider';

const faqsLeft = [
  {
    question: "What is the EGS Pillay Group of Institutions and why is it well-known in Tamil Nadu?",
    answer: "The EGS Pillay Group of Institutions is a leading educational group in Nagapattinam, Tamil Nadu, founded by Chevalier Dr. G.S. Pillay. It is known for offering high-quality education across Engineering, Arts & Science, Polytechnic, Pharmacy, Education, Nursing, and Naturopathy & Yoga. The Group is recognised for academic excellence, modern infrastructure, strong placements, and NAAC A++ accreditation for its flagship college, E.G.S. Pillay Engineering College."
  },
  {
    question: "Which colleges are part of the EGS Pillay Group of Institutions?",
    answer: "The Group consists of the following institutions: EGS Pillay Engineering College (Autonomous, NAAC A++, NBA-accredited programmes), EGS Pillay Arts & Science College, EGS Pillay Polytechnic College, EGS Pillay College of Education, EGS Pillay College & School of Nursing, EGS Pillay College of Pharmacy, EGS Pillay Naturopathy and Yoga Medical College. Each institution offers specialised programmes with industry-aligned curriculum and experienced faculty."
  },
  {
    question: "What academic programmes are offered at EGS Pillay Engineering College?",
    answer: "EGSP Engineering College offers UG, PG, and Research programmes across multiple engineering disciplines including CSE, IT, ECE, EEE, Mechanical, Civil, AI & DS, and more. The college also offers Ph.D. and M.S. (By Research) under Anna University-recognised research centres."
  },
  {
    question: "Are the institutions accredited and affiliated to recognised bodies?",
    answer: "Yes. The colleges under the EGS Pillay Group are affiliated to Anna University, Tamil Nadu Dr. MGR Medical University, and Directorate of Technical Education (DoTE) depending on the programme. The Engineering College is NAAC A++ accredited, has NBA-accredited departments, and is ranked among the Top 200 institutions in NIRF (National Ranking)."
  },
  {
    question: "What kind of sports and extracurricular facilities are available for students?",
    answer: "The institutions provide extensive sports facilities including grounds for Cricket, Football, Volleyball, Basketball, Kabaddi, Indoor Games, Gymnasium, and Track & Field areas. Students regularly participate in state, national, and intercollegiate sports events. The campus also supports NSS, NCC, cultural clubs, innovation clubs, entrepreneurship cells, and other extracurricular activities."
  }
];

const faqsRight = [
    {
    question: "What infrastructure and campus facilities does the EGS Pillay Group offer?",
    answer: "The campuses are equipped with: Modern laboratories and research centres, Digital libraries with e-resources, Smart classrooms and seminar halls, Hostels with hygienic food and Wi-Fi, Transport facilities covering major nearby districts, Medical facilities and trained nursing staff, Cafeteria, computing centres, and high-speed internet. The focus is on providing a safe, student-friendly environment with all amenities required for academic growth."
  },
  {
    question: "How does the EGS Pillay Group support research and development?",
    answer: "The Group emphasises innovation through R&D centres, funded research projects, industry collaborations, and incubation platforms. EGS Pillay Engineering College is a recognised Research Centre of Anna University, allowing scholars to pursue Ph.D. and M.S. (By Research) programmes. Faculties and students actively participate in patent filing, research publications, hackathons, and consultancy projects."
  },
  {
    question: "How strong are the placements at EGS Pillay Group of Institutions?",
    answer: "The Placement Cell maintains partnerships with leading companies in IT, Core Engineering, Healthcare, Pharmaceuticals, and Education sectors. Students are trained in aptitude, communication skills, coding, industry tools, and undergo pre-placement training. Top recruiters include TCS, Infosys, Wipro, HCL, Zoho, L&T, Hyundai, Capgemini, and many more. The Group consistently achieves high placement percentages across all colleges."
  },
  {
    question: "What is the admission process for courses offered under the EGS Pillay Group?",
    answer: "Admissions are based on eligibility norms of the respective affiliating bodies: Engineering admissions follow TNEA counseling and management quota guidelines. Arts & Science programmes follow merit-based admission. Pharmacy, Nursing, and Naturopathy courses follow the rules of TN Health Department & MGR Medical University. Polytechnic admissions follow DoTE norms. Students can apply online through the official institution websites or visit the admissions office."
  },
  {
    question: "Why should students choose the EGS Pillay Group of Institutions?",
    answer: "Students choose the EGS Pillay Group for: NAAC A++, NBA accreditation & NIRF ranking, Strong academic foundation with experienced faculty, Modern infrastructure and research facilities, Industry-aligned curriculum and internships, Excellent placement support, Safe and supportive campus culture, Opportunities in sports, clubs, leadership, and innovation. The Group’s mission is to make quality education accessible to all and help students build successful careers."
  }
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AccreditationLogos />
        <AchievementsSection />
        <FindProgram />
        <PlacementShowcase />
        <LogoCloud />
        <FaqSection
            faqsLeft={faqsLeft}
            faqsRight={faqsRight}
        />
        <TestimonialSlider />
        <CtaSection />
      </main>
      <div className="bg-gradient-to-r from-primary to-accent">
        <hr className="border-t border-primary-foreground/20" />
      </div>
      <SiteFooter />
    </div>
  );
}

// 02