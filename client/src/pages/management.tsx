import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import robertPhoto from "@assets/robert (2)_1754929566552.jpg";
import simonPhoto from "@assets/simon_1754929566552.jpg";
import kenPhoto from "@assets/ken_1754929566550.jpg";

interface Leader {
  slug: string;
  name: string;
  role: string;
  quals: string;
  image: string;
  bio: string;
}

export default function Management() {
  const [leaders, setLeaders] = useState<Leader[]>([]);

  useEffect(() => {
    document.title = "Management - Yorke Structures Limited";
    
    // Load leadership data from backend API
    fetch('/api/assets/data/leadership.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch leadership data');
        }
        return res.json();
      })
      .then(data => setLeaders(data))
      .catch(err => {
        console.error('Failed to load leadership data:', err);
        // Fallback to hardcoded data
        setLeaders([
          {
            slug: "robert-yorke",
            name: "Dr. Robert T. Yorke",
            role: "Founder",
            quals: "D.Eng. (Hon.), CEng, FIStructE, FICE, FAPETT",
            image: "/img/leadership/robert-yorke.jpg",
            bio: "Dr. Robert T. Yorke, Founder of Yorke Structures Ltd, devoted nearly fifty years to advancing structural engineering in the Caribbean. His personal philosophy and vision transformed YSL into the region's premier structural engineering services company. As Founder, he provided guidance that shaped the company's direction, upheld the highest standards, and positioned the business for continued success. Known for his clarity of vision, he maintained that success required seeing goals clearly, making the necessary sacrifices, and never losing focus. His legacy is one of excellence, leadership, and unwavering commitment to the profession. Dr. Yorke's influence remains deeply embedded in the culture and values of the company he built."
          },
          {
            slug: "jacqueline-yorke-westcott",
            name: "Jacqueline Yorke Westcott",
            role: "Executive Chairman, YSL and MIBR",
            quals: "SHRM-SCP",
            image: "/img/leadership/jacqueline-westcott.jpg",
            bio: "Jacqueline Yorke Westcott brings over eighteen years' expertise in organizational development and human resources management. As Executive Chairman of Yorke Structures Ltd and Mount Irvine Bay Hotel Ltd, she oversees governance, strategy, culture, and long-term growth. Her career includes senior roles in corporate training, intercultural consultancy, and executive coaching, with specialisation in recruitment, talent management, and succession planning. A SHRM Senior Certified Professional, Jacqueline holds advanced qualifications in leadership and organizational change. Her diverse skills are reflected in her formal qualifications – a BEng (Hons) Degree in Civil Engineering. She is committed to building people systems that enhance performance, safety, and service excellence. Her leadership approach integrates strategic oversight with a strong focus on staff engagement, ensuring that YSL continues to grow while preserving its reputation for quality and integrity."
          },
          {
            slug: "simon-westcott",
            name: "Simon H. Westcott",
            role: "Managing Director",
            quals: "BSc (Hons), CEng, MBA, MICE, MAPETT, FIStructE",
            image: "/img/leadership/simon-westcott.jpg",
            bio: "Simon Westcott is a Chartered Civil and Structural Engineer with nearly forty years' experience delivering complex projects across the Caribbean, UK, Africa, and Asia. As Managing Director and a member of the Board, he leads YSL's strategic and operational direction, covering project management, contract administration, commercial performance, and business development. He previously served as Contracts Manager at YSL, successfully managing major projects and liaising closely with all stakeholders. His professional affiliations include the Institution of Civil Engineers, the Institution of Structural Engineers, and A.P.E.T.T. Simon is known for disciplined cost control, efficient delivery, and sustaining client value while driving growth in the company's services and market presence."
          },
          {
            slug: "kenneth-prince",
            name: "Kenneth Prince",
            role: "Contracts Administrator",
            quals: "MCIOB",
            image: "/img/leadership/kenneth-prince.jpg",
            bio: "Kenneth Prince has served as Contracts Administrator at Yorke Structures Ltd since 2000, bringing extensive expertise in site-based execution, contractual compliance, quantity surveying, and value management. A UK citizen, he has worked in Trinidad for over fifteen years, delivering on major projects such as Atlantic LNG Trains 2 and 3, M5000 Methanol Plant, UTT campuses, and the Waterfront Project. A Member of the Chartered Institute of Building and Associate of Cost and Production Surveyors, Kenneth's professional knowledge ensures that YSL consistently meets contractual obligations and maintains the highest standards in project delivery. His focus on professionalism, efficiency, and client satisfaction continues to strengthen YSL's position in the regional construction industry."
          },
          {
            slug: "khadija-bourne-murray",
            name: "Khadija Bourne Murray",
            role: "QHSE Manager",
            quals: "NEBOSH; ISO 14001, 45001, 9001",
            image: "/img/leadership/khadija-bourne-murray.jpg",
            bio: "Khadija Bourne Murray is a QHSE Manager specialising in Quality, Health, Safety and Environmental management systems. She is NEBOSH-certified and trained in ISO 14001, 45001, and 9001 management systems. Khadija leads the development and implementation of workplace safety policies, supports training and investigations, and ensures compliance with all HSE regulations. Her career spans HSE research, environmental consultancy, and forestry safety projects, giving her a broad perspective on risk management. Dedicated to fostering a proactive safety culture, she works closely with operational teams to improve safety performance and reduce workplace hazards. Khadija's approach combines technical expertise with a commitment to continuous improvement and employee well-being."
          }
        ]);
      });
  }, []);

  // Map actual images to the leadership data
  const getImageSrc = (slug: string) => {
    switch (slug) {
      case 'robert-yorke':
        return robertPhoto;
      case 'simon-westcott':
        return simonPhoto;
      case 'kenneth-prince':
        return kenPhoto;
      default:
        return null; // Will show placeholder
    }
  };

  return (
    <div className="yorke-beige min-h-screen">
      <div className="management">
        <div className="container max-w-site mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold yorke-gray mb-6">Management</h1>
          <p className="text-lg yorke-gray mb-8 max-w-4xl">
            Leadership excellence driving structural engineering innovation across the Caribbean for over five decades.
          </p>

          {leaders.map((leader, index) => {
            const isAlt = index % 2 === 1;
            const imageSrc = getImageSrc(leader.slug);
            
            return (
              <Card key={leader.slug} className={`mb-8 border-yorke-border management-card ${isAlt ? 'alt' : ''}`}>
                <CardContent className="p-6">
                  <div className={`grid gap-6 ${isAlt ? 'md:grid-cols-[1.2fr,1fr]' : 'md:grid-cols-[1fr,1.2fr]'}`}>
                    {/* Portrait */}
                    <div className={`${isAlt ? 'md:order-2' : ''}`}>
                      {imageSrc ? (
                        <img 
                          src={imageSrc}
                          alt={`${leader.name}, ${leader.role} of Yorke Structures Limited`}
                          className="w-full h-[520px] md:h-[520px] object-cover rounded-md shadow-sm"
                        />
                      ) : (
                        <div className="w-full h-[520px] bg-gray-100 rounded-md flex items-center justify-center text-gray-500 text-sm">
                          Profile Photo
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className={`space-y-4 ${isAlt ? 'md:order-1' : ''}`}>
                      <div>
                        <h2 className="text-xl font-bold yorke-gray mb-2">{leader.name}</h2>
                        <p className="text-sm text-gray-600 mb-1">{leader.quals}</p>
                        <p className="text-gray-700 font-medium">{leader.role}</p>
                      </div>
                      <div className="yorke-gray leading-relaxed">
                        {leader.bio}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Navigation */}
          <div className="text-center mt-12 pt-8 border-t border-yorke-border space-x-4">
            <Link href="/about">
              <Button className="bg-yorke-orange hover:bg-opacity-90 text-white">
                Back to About Us
              </Button>
            </Link>
            <Link href="/about/robert-yorke">
              <Button variant="outline" className="border-yorke-orange text-yorke-orange hover:bg-yorke-orange hover:text-white">
                Learn About Our Founder
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}