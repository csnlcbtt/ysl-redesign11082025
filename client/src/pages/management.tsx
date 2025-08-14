import { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import robertPhoto from "@assets/robert (2)_1754929566552.jpg";
import simonPhoto from "@assets/simon_1754929566552.jpg";
import kenPhoto from "@assets/ken_1754929566550.jpg";

export default function Management() {
  useEffect(() => {
    document.title = "Management - Yorke Structures Limited";
  }, []);

  return (
    <div className="min-h-screen bg-white">

      <style>{`
        :root {
          --ysl-ink: #1A1A1A;
          --ysl-muted: #6A6F76;
          --ysl-border: #E6E8EB;
          --ysl-bg: #FFFFFF;

          --role-founder: #7A3E00;
          --role-exec: #004F6E;
          --role-md: #2C3E50;
          --role-contracts: #5B3A8E;
          --role-safety: #1B6E20;

          --badge-bg: #F5F7FA;
          --badge-text: #1A1A1A;
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --ysl-bg: #0E1012;
            --ysl-ink: #F2F4F7;
            --ysl-muted: #9AA3AE;
            --ysl-border: #2A2F36;
            --badge-bg: #1A1F24;
            --badge-text: #F2F4F7;
          }
        }

        .management-card {
          background: var(--ysl-bg);
          border: 1px solid var(--ysl-border);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 3rem;
        }

        .card-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
          padding: 2rem;
          align-items: center;
        }

        .card-content.reverse {
          grid-template-columns: 2fr 1fr;
        }

        .card-portrait {
          width: 100%;
          max-width: 300px;
          aspect-ratio: 4/5;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .card-text {
          padding: 1rem 0;
        }

        .card-text h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: var(--ysl-ink);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }

        .card-text .qualifications {
          color: var(--ysl-muted);
          font-size: 0.875rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .card-text .bio {
          color: var(--ysl-ink);
          line-height: 1.7;
          font-size: 1rem;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          font-size: 0.875rem;
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          background: var(--badge-bg);
          color: var(--badge-text);
          border: 1px solid var(--ysl-border);
          gap: 0.4rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .badge::before {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
        }

        .badge--founder::before { background: var(--role-founder); }
        .badge--exec::before { background: var(--role-exec); }
        .badge--md::before { background: var(--role-md); }
        .badge--contracts::before { background: var(--role-contracts); }
        .badge--safety::before { background: var(--role-safety); }

        .card--founder .card-text { border-left: 3px solid var(--role-founder); padding-left: 1rem; }
        .card--exec .card-text { border-right: 3px solid var(--role-exec); padding-right: 1rem; }
        .card--md .card-text { border-left: 3px solid var(--role-md); padding-left: 1rem; }
        .card--contracts .card-text { border-right: 3px solid var(--role-contracts); padding-right: 1rem; }
        .card--safety .card-text { border-left: 3px solid var(--role-safety); padding-left: 1rem; }

        .linkedin-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #0066cc;
          text-decoration: none;
          font-weight: 500;
          margin-top: 1rem;
          padding: 0.5rem 0;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .linkedin-link:hover {
          color: #004499;
          text-decoration: underline;
        }

        .linkedin-link:focus {
          outline: 2px solid #0066cc;
          outline-offset: 2px;
        }

        @media (max-width: 768px) {
          .card-content,
          .card-content.reverse {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .card-portrait {
            max-width: 250px;
            margin: 0 auto;
          }

          .card--founder .card-text,
          .card--exec .card-text,
          .card--md .card-text,
          .card--contracts .card-text,
          .card--safety .card-text {
            border: none;
            padding: 1rem 0;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Management</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leadership excellence driving structural engineering innovation across the Caribbean for over five decades.
          </p>
        </div>

        {/* Dr. Robert T. Yorke - Founder (Image Left) */}
        <div className="management-card card--founder">
          <div className="card-content">
            <div>
              <img 
                src={robertPhoto} 
                alt="Dr. Robert T. Yorke, Founder of Yorke Structures Limited"
                className="card-portrait"
              />
            </div>
            <div className="card-text">
              <h2>Dr. Robert T. Yorke</h2>
              <div className="qualifications">D.Eng. (Hon.), CEng, FIStructE, FICE, FAPETT</div>
              <div className="badge badge--founder">Founder</div>
              <div className="bio">
                <p className="mb-4">
                  Dr. Robert T. Yorke, Founder of Yorke Structures Ltd, devoted nearly fifty years to advancing structural engineering in the Caribbean. His personal philosophy and vision transformed YSL into the region's premier structural engineering services company. As Founder, he provided guidance that shaped the company's direction, upheld the highest standards, and positioned the business for continued success.
                </p>
                <p>
                  Known for his clarity of vision, he maintained that success required seeing goals clearly, making the necessary sacrifices, and never losing focus. His legacy is one of excellence, leadership, and unwavering commitment to the profession. Dr. Yorke's influence remains deeply embedded in the culture and values of the company he built.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Jacqueline Yorke Westcott - Executive Chairman (Image Right) */}
        <div className="management-card card--exec">
          <div className="card-content reverse">
            <div className="card-text">
              <h2>Jacqueline Yorke Westcott</h2>
              <div className="qualifications">SHRM-SCP</div>
              <div className="badge badge--exec">Executive Chairman, YSL and MIBR</div>
              <div className="bio">
                <p className="mb-4">
                  Jacqueline Yorke Westcott brings over eighteen years' expertise in organizational development and human resources management. As Executive Chairman of Yorke Structures Ltd and Mount Irvine Bay Hotel Ltd, she oversees governance, strategy, culture, and long-term growth. Her career includes senior roles in corporate training, intercultural consultancy, and executive coaching, with specialisation in recruitment, talent management, and succession planning.
                </p>
                <p>
                  A SHRM Senior Certified Professional, Jacqueline holds advanced qualifications in leadership and organizational change. She is committed to building people systems that enhance performance, safety, and service excellence. Her leadership approach integrates strategic oversight with a strong focus on staff engagement, ensuring that YSL continues to grow while preserving its reputation for quality and integrity.
                </p>
              </div>
            </div>
            <div>
              <div className="card-portrait bg-gray-200 flex items-center justify-center text-gray-500">
                Profile Photo
              </div>
            </div>
          </div>
        </div>

        {/* Simon H. Westcott - Managing Director (Image Left) */}
        <div className="management-card card--md">
          <div className="card-content">
            <div>
              <img 
                src={simonPhoto} 
                alt="Simon H. Westcott, Managing Director of Yorke Structures Limited"
                className="card-portrait"
              />
            </div>
            <div className="card-text">
              <h2>Simon H. Westcott</h2>
              <div className="qualifications">BSc (Hons), CEng, MBA, MICE, MAPETT, FIStructE</div>
              <div className="badge badge--md">Managing Director</div>
              <div className="bio">
                <p className="mb-4">
                  Simon Westcott is a Chartered Civil and Structural Engineer with nearly forty years' experience delivering complex projects across the Caribbean, UK, Africa, and Asia. As Managing Director and a member of the Board, he leads YSL's strategic and operational direction, covering project management, contract administration, commercial performance, and business development.
                </p>
                <p>
                  He previously served as Contracts Manager at YSL, successfully managing major projects and liaising closely with all stakeholders. His professional affiliations include the Institution of Civil Engineers, the Institution of Structural Engineers, and A.P.E.T.T. Simon is known for disciplined cost control, efficient delivery, and sustaining client value while driving growth in the company's services and market presence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Kenneth Prince - Contracts Administrator (Image Right) */}
        <div className="management-card card--contracts">
          <div className="card-content reverse">
            <div className="card-text">
              <h2>Kenneth Prince</h2>
              <div className="qualifications">MCIOB</div>
              <div className="badge badge--contracts">Contracts Administrator</div>
              <div className="bio">
                <p className="mb-4">
                  Kenneth Prince has served as Contracts Administrator at Yorke Structures Ltd since 2000, bringing extensive expertise in site-based execution, contractual compliance, quantity surveying, and value management. A UK citizen, he has worked in Trinidad for over fifteen years, delivering on major projects such as Atlantic LNG Trains 2 and 3, M5000 Methanol Plant, UTT campuses, and the Waterfront Project.
                </p>
                <p>
                  A Member of the Chartered Institute of Building and Associate of Cost and Production Surveyors, Kenneth's professional knowledge ensures that YSL consistently meets contractual obligations and maintains the highest standards in project delivery. His focus on professionalism, efficiency, and client satisfaction continues to strengthen YSL's position in the regional construction industry.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={kenPhoto} 
                alt="Kenneth Prince, Contracts Administrator of Yorke Structures Limited"
                className="card-portrait"
              />
            </div>
          </div>
        </div>

        {/* Khadija Bourne Murray - Safety Officer (Image Left) */}
        <div className="management-card card--safety">
          <div className="card-content">
            <div>
              <div className="card-portrait bg-gray-200 flex items-center justify-center text-gray-500">
                Profile Photo
              </div>
            </div>
            <div className="card-text">
              <h2>Khadija Bourne Murray</h2>
              <div className="qualifications">NEBOSH Certified, ISO 14001, 45001, 9001</div>
              <div className="badge badge--safety">Safety Officer</div>
              <div className="bio">
                <p className="mb-4">
                  Khadija Bourne Murray is a Safety Officer specialising in Occupational and Environmental Health and Safety. She is NEBOSH-certified and trained in ISO 14001, 45001, and 9001 management systems. Khadija leads the development and implementation of workplace safety policies, supports training and investigations, and ensures compliance with all HSE regulations.
                </p>
                <p>
                  Her career spans HSE research, environmental consultancy, and forestry safety projects, giving her a broad perspective on risk management. Dedicated to fostering a proactive safety culture, she works closely with operational teams to improve safety performance and reduce workplace hazards. Khadija's approach combines technical expertise with a commitment to continuous improvement and employee well-being.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <a 
            href="/about" 
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold mr-4"
          >
            Back to About Us
          </a>
          <a 
            href="/about/robert-yorke" 
            className="inline-block border border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-600 hover:text-white transition-colors font-semibold"
          >
            Learn About Our Founder
          </a>
        </div>
      </div>
    </div>
  );
}