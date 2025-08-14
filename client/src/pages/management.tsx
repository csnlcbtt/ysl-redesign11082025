import { useEffect, useState } from "react";
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
            bio: "Jacqueline Yorke Westcott brings over eighteen years' expertise in organizational development and human resources management. As Executive Chairman of Yorke Structures Ltd and Mount Irvine Bay Hotel Ltd, she oversees governance, strategy, culture, and long-term growth. Her career includes senior roles in corporate training, intercultural consultancy, and executive coaching, with specialisation in recruitment, talent management, and succession planning. A SHRM Senior Certified Professional, Jacqueline holds advanced qualifications in leadership and organizational change. She is committed to building people systems that enhance performance, safety, and service excellence. Her leadership approach integrates strategic oversight with a strong focus on staff engagement, ensuring that YSL continues to grow while preserving its reputation for quality and integrity."
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
            role: "Safety Officer",
            quals: "NEBOSH; ISO 14001, 45001, 9001",
            image: "/img/leadership/khadija-bourne-murray.jpg",
            bio: "Khadija Bourne Murray is a Safety Officer specialising in Occupational and Environmental Health and Safety. She is NEBOSH-certified and trained in ISO 14001, 45001, and 9001 management systems. Khadija leads the development and implementation of workplace safety policies, supports training and investigations, and ensures compliance with all HSE regulations. Her career spans HSE research, environmental consultancy, and forestry safety projects, giving her a broad perspective on risk management. Dedicated to fostering a proactive safety culture, she works closely with operational teams to improve safety performance and reduce workplace hazards. Khadija's approach combines technical expertise with a commitment to continuous improvement and employee well-being."
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
      {/* Simple breadcrumb without component dependency */}
      <div className="ysl-bc">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="ysl-bc-list">
            <span className="ysl-bc-item">
              <a href="/" className="ysl-bc-link">Home</a>
            </span>
            <span className="ysl-bc-separator">/</span>
            <span className="ysl-bc-item">
              <a href="/about" className="ysl-bc-link">About</a>
            </span>
            <span className="ysl-bc-separator">/</span>
            <span className="ysl-bc-item">
              <span className="ysl-bc-current">Management</span>
            </span>
          </nav>
        </div>
      </div>
      
      <div className="management">
        <div className="container">
          <h1>Management</h1>
          <p style={{ color: 'var(--ysl-muted)', marginBottom: '32px', fontSize: '18px' }}>
            Leadership excellence driving structural engineering innovation across the Caribbean for over five decades.
          </p>

          {leaders.map((leader, index) => {
            const isAlt = index % 2 === 1;
            const imageSrc = getImageSrc(leader.slug);
            
            return (
              <div key={leader.slug} className={`card ${isAlt ? 'alt' : ''}`}>
                {/* Portrait */}
                <div className="portrait">
                  {imageSrc ? (
                    <img 
                      src={imageSrc}
                      alt={`${leader.name}, ${leader.role} of Yorke Structures Limited`}
                    />
                  ) : (
                    <div 
                      style={{
                        width: '100%',
                        height: '520px',
                        backgroundColor: '#f5f5f5',
                        borderRadius: 'var(--ysl-radius)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--ysl-muted)',
                        fontSize: '14px'
                      }}
                    >
                      Profile Photo
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="content">
                  <h2>{leader.name}</h2>
                  <div className="quals">{leader.quals}</div>
                  <div className="role-badge">{leader.role}</div>
                  <div style={{ 
                    color: 'var(--ysl-ink)', 
                    lineHeight: '1.6', 
                    fontSize: '16px',
                    marginTop: '12px'
                  }}>
                    {leader.bio}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Navigation */}
          <div style={{ textAlign: 'center', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--ysl-border)' }}>
            <a 
              href="/about" 
              className="btn"
              style={{ marginRight: '16px' }}
            >
              Back to About Us
            </a>
            <a 
              href="/about/robert-yorke" 
              className="btn"
              style={{ 
                background: 'transparent',
                color: 'var(--ysl-accent)',
                border: '1px solid var(--ysl-accent)'
              }}
            >
              Learn About Our Founder
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}