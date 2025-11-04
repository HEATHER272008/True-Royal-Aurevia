import { Crown, Users, Award, Heart } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const About = () => {
  const teamMembers = [
    { name: 'Kian Brylle Enriquez', role: 'Project Manager', image: 'https://i.imgur.com/C8MgI3T.png' },
    { name: 'Mark Emman Lopez', role: 'Web Developer', image: 'https://i.imgur.com/ACD5zeO.png' },
    { name: 'Rihana Khan', role: 'Content Specialist', image: 'https://i.imgur.com/mlICeOn.png' },
    { name: 'Samuel De Guzman', role: 'Content Specialist', image: 'https://i.imgur.com/WPzEwSn.png' },
    { name: 'Lian Fianca Vinluan', role: 'Web Designer', image: 'https://i.imgur.com/uJK9o8t.png' },
    { name: 'John Lawrence Kenneth Mandario', role: 'Web Designer', image: 'https://i.imgur.com/WVTOJ32.png' },
    { name: 'Joshua Ladislao', role: 'Web Strategist', image: 'https://i.imgur.com/WoWuB7X.png' },
    { name: 'Ashley Nicole Baladad', role: 'Inbound Marketer', image: 'https://i.imgur.com/YllSgO2.png' },
    { name: 'Martin Ryan Malintad', role: 'Inbound Marketer', image: 'https://i.imgur.com/gxCpADl.png' },
    { name: 'Princes Fernandez', role: 'Inbound Marketer', image: 'https://i.imgur.com/EYwKthV.png' },
    { name: 'Joerwil Jedric Bandong', role: 'Inbound Marketer', image: 'https://i.imgur.com/MhkaDtm.png' },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container text-center max-w-3xl">
          <h1 className="text-5xl font-display font-bold mb-6">Our Story</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Aurevia started with a simple dream — to create jewelry that captures the grace, elegance, and timeless beauty of royalty. What began as a passion for design and craftsmanship soon turned into a mission to bring a touch of royalty into everyday life. Each Aurevia piece is carefully crafted to reflect style and individuality, blending classic charm with a modern touch. We believe that everyone deserves to feel confident, beautiful, and a little royal — and that’s exactly what Aurevia is all about.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Meet Our Team</h2>
          <Carousel 
            className="w-full max-w-5xl mx-auto"
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent>
              {teamMembers.map((member, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <div className="aspect-square gold-border rounded-lg overflow-hidden mb-4">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-center">{member.name}</h3>
                    <p className="text-muted-foreground text-sm text-center">{member.role}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-accent text-accent-foreground hover:bg-accent/90 border-accent" />
            <CarouselNext className="right-4 bg-accent text-accent-foreground hover:bg-accent/90 border-accent" />
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default About;
