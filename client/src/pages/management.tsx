import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import robertPhoto from "@assets/robert (2)_1754929566552.jpg";
import simonPhoto from "@assets/simon_1754929566552.jpg";
import lauraPhoto from "@assets/laura2_1754929566551.jpg";
import hermanPhoto from "@assets/herman_1754929566551.jpg";
import kenPhoto from "@assets/ken_1754929566550.jpg";
import lizPhoto from "@assets/liz_1754929566549.jpg";
import rameshPhoto from "@assets/ramesh_1754929566549.jpg";
import donnaPhoto from "@assets/donna_1754929566547.jpg";

export default function Management() {
  return (
    <div className="yorke-beige min-h-screen">
      <div className="max-w-site mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold yorke-gray mb-2">Management Team</h1>
          <p className="text-lg yorke-gray">Leadership Excellence in Structural Engineering</p>
        </div>

        {/* Executive Leadership */}
        <Card className="border-yorke-border mb-8">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl">Executive Leadership</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Dr. Robert T. Yorke */}
              <div className="text-center">
                <img 
                  src={robertPhoto} 
                  alt="Dr. Robert T. Yorke" 
                  className="rounded-lg shadow-lg mx-auto mb-4 w-48 h-48 object-cover"
                />
                <h3 className="text-xl font-bold yorke-gray mb-2">Dr. Robert T. Yorke</h3>
                <p className="font-semibold yorke-orange mb-3">Executive Chairman</p>
                <p className="text-sm yorke-gray mb-3">D. Eng. (Hon.), CEng. FIStructE, FICE, FAPETT</p>
                <p className="text-sm yorke-gray leading-relaxed mb-4">
                  Our Executive Chairman brings well near 50 years' experience providing Structural Engineering services. Over fifty years of this time his personal philosophy and vision has made Yorke Structures Limited the premier structural engineering services Company in the Caribbean.
                </p>
                <p className="text-sm yorke-gray leading-relaxed">
                  As Executive Chairman he continues to provide valuable insight into the workings of our industry, which positions the company's operations for the future. He has said that he knew that he could not fail as he was better than his rivals, with clear goals and unwavering vision.
                </p>
              </div>

              {/* Simon H. Westcott */}
              <div className="text-center">
                <img 
                  src={simonPhoto} 
                  alt="Simon H. Westcott" 
                  className="rounded-lg shadow-lg mx-auto mb-4 w-48 h-48 object-cover"
                />
                <h3 className="text-xl font-bold yorke-gray mb-2">Simon H. Westcott</h3>
                <p className="font-semibold yorke-orange mb-3">General Manager & Board Member</p>
                <p className="text-sm yorke-gray mb-3">BSc (Hons) C.Eng, MBA, MICE, MAPETT, FIStructE</p>
                <p className="text-sm yorke-gray leading-relaxed mb-4">
                  Simon holds an Honours Degree in Civil Engineering and a Masters Degree in Business Administration. He is a Chartered Member of the Institution of Civil Engineers and a Chartered Fellow of Institution of Structural Engineers.
                </p>
                <p className="text-sm yorke-gray leading-relaxed">
                  With over 25 years of engineering experience across Africa, Asia, Europe and the USA, Simon has responsibility for all strategic and operational functions of the company, including project management, contract administration, and setting company policy and strategic direction.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Senior Management */}
        <Card className="border-yorke-border mb-8">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl">Senior Management</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Laura Cozier */}
              <div className="text-center">
                <img 
                  src={lauraPhoto} 
                  alt="Laura Cozier" 
                  className="rounded-lg shadow-lg mx-auto mb-4 w-40 h-40 object-cover"
                />
                <h3 className="text-lg font-bold yorke-gray mb-2">Laura Cozier</h3>
                <p className="font-semibold yorke-orange mb-3">Director Corporate Services</p>
                <p className="text-sm yorke-gray mb-3">B.A. Economics, Executive M.B.A. (UWI)</p>
                <p className="text-sm yorke-gray leading-relaxed mb-4">
                  Laura has responsibility for Corporate Affairs, Human Resources and Information Technology. She brings the meticulous diligence of her many years within the banking sector to our operations.
                </p>
                <p className="text-sm yorke-gray leading-relaxed">
                  With over 25 years in the financial sector, including 7 years as Head of Corporate Banking, Treasury and International Trade, Laura guides YSL's financial strategy and talent management initiatives.
                </p>
              </div>

              {/* Herman Pereira */}
              <div className="text-center">
                <img 
                  src={hermanPhoto} 
                  alt="Herman Pereira" 
                  className="rounded-lg shadow-lg mx-auto mb-4 w-40 h-40 object-cover"
                />
                <h3 className="text-lg font-bold yorke-gray mb-2">Herman Pereira</h3>
                <p className="font-semibold yorke-orange mb-3">Financial Controller</p>
                <p className="text-sm yorke-gray mb-3">ACCA Qualified</p>
                <p className="text-sm yorke-gray leading-relaxed mb-4">
                  Herman joined Yorke Structures Limited at its inception as a payroll clerk and has risen steadily through the ranks to Financial Controller, responsible for accounting and administrative functions.
                </p>
                <p className="text-sm yorke-gray leading-relaxed">
                  He controls the financial resources of the company and manages an administrative staff of around fifteen people. Herman clearly enjoys both the responsibilities and challenges of his work, recognizing communication as a key aspect of his role.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Operations Management */}
        <Card className="border-yorke-border mb-8">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl">Operations Management</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kenneth Prince */}
              <div className="text-center">
                <img 
                  src={kenPhoto} 
                  alt="Kenneth Prince" 
                  className="rounded-lg shadow-lg mx-auto mb-4 w-40 h-40 object-cover"
                />
                <h3 className="text-lg font-bold yorke-gray mb-2">Kenneth Prince</h3>
                <p className="font-semibold yorke-orange mb-3">Contracts Administrator</p>
                <p className="text-sm yorke-gray mb-3">CIOB Member, ACPS Associate</p>
                <p className="text-sm yorke-gray leading-relaxed mb-4">
                  A UK citizen working in Trinidad for 15 years, Kenneth has frontline responsibility for operational management, coordination and general execution of all projects since joining YSL in 2000.
                </p>
                <p className="text-sm yorke-gray leading-relaxed">
                  His expertise has been instrumental in managing major projects including Atlantic LNG Trains 2 & 3, M5000 Methanol Plant, UTT Campuses, and The Waterfront Project, ensuring all contractual obligations are met with high professionalism.
                </p>
              </div>

              {/* Elizabeth Saunders */}
              <div className="text-center">
                <img 
                  src={lizPhoto} 
                  alt="Elizabeth Saunders" 
                  className="rounded-lg shadow-lg mx-auto mb-4 w-40 h-40 object-cover"
                />
                <h3 className="text-lg font-bold yorke-gray mb-2">Elizabeth Saunders</h3>
                <p className="font-semibold yorke-orange mb-3">Quality Coordinator</p>
                <p className="text-sm yorke-gray mb-3">Engineer (UWI), ISO 9001 & OSHAS 18001 Lead Auditor</p>
                <p className="text-sm yorke-gray leading-relaxed mb-4">
                  Elizabeth joined YSL in 2001, graduating as an Engineer from UWI in 1987. She became a Certified Lead Auditor in ISO Quality Management Systems in 1998 and expanded to OSHAS 18001 Systems in 2003.
                </p>
                <p className="text-sm yorke-gray leading-relaxed">
                  She guided the organization through the transition from ISO 9002:1994 to current ISO 9001:2008 certification, bringing unique perspective for operationalizing quality management systems in YSL's production-oriented environment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Operations */}
        <Card className="border-yorke-border mb-8">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl">Technical Operations</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Ramesh Maharaj */}
              <div className="text-center">
                <img 
                  src={rameshPhoto} 
                  alt="Ramesh Maharaj" 
                  className="rounded-lg shadow-lg mx-auto mb-4 w-40 h-40 object-cover"
                />
                <h3 className="text-lg font-bold yorke-gray mb-2">Ramesh Maharaj</h3>
                <p className="font-semibold yorke-orange mb-3">Drawing Office Supervisor</p>
                <p className="text-sm yorke-gray mb-3">Company Associate Since 1972</p>
                <p className="text-sm yorke-gray leading-relaxed mb-4">
                  Ramesh has been associated with the company since its inception in 1972, beginning as Assistant Chief Draughtsman. Today he manages and supervises all operations within the drawing office.
                </p>
                <p className="text-sm yorke-gray leading-relaxed">
                  He has witnessed the profound shift from drawing boards to computer aided drafting and design, bringing additional capacity and flexibility to the company. Ramesh relishes the challenges of his detailed and methodical work, fitting superbly in the high-pressure environment.
                </p>
              </div>

              {/* Donna Greenidge */}
              <div className="text-center">
                <img 
                  src={donnaPhoto} 
                  alt="Donna Greenidge" 
                  className="rounded-lg shadow-lg mx-auto mb-4 w-40 h-40 object-cover"
                />
                <h3 className="text-lg font-bold yorke-gray mb-2">Donna Greenidge</h3>
                <p className="font-semibold yorke-orange mb-3">Executive Assistant to Executive Chairman</p>
                <p className="text-sm yorke-gray mb-3">Advisor, Confidante & Public Relations</p>
                <p className="text-sm yorke-gray leading-relaxed mb-4">
                  Donna manages an extremely hectic job with calm and cheerful efficiency. Her role encompasses advisor, confidante, public relations officer and personal assistant, supporting Dr. Yorke's hands-on management approach.
                </p>
                <p className="text-sm yorke-gray leading-relaxed">
                  She filters and prioritizes workload and telephone calls, dealing quickly and effectively with the output of an extremely active executive. Donna has a clear vision of why YSL is the best in its field, believing it's achieved through teamwork with honesty, initiative and hard work.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Philosophy */}
        <Card className="border-yorke-border mb-8">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl">Our Management Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4 yorke-gray">
              <p className="leading-relaxed">
                The management team at Yorke Structures Limited brings together decades of combined experience in structural engineering, project management, quality assurance, and business administration. Our leadership philosophy is rooted in Dr. Robert T. Yorke's founding principles of excellence, integrity, and unwavering commitment to quality.
              </p>
              <p className="leading-relaxed">
                Each member of our management team exemplifies our core values of professional excellence, continuous improvement, and collaborative teamwork. From our Executive Chairman's visionary leadership to our technical specialists' operational expertise, we maintain the highest standards in everything we do.
              </p>
              <p className="leading-relaxed">
                Our management structure ensures comprehensive oversight of all aspects of our operations - from strategic planning and financial management to quality control and project execution. This integrated approach has positioned Yorke Structures Limited as the premier structural engineering company in the Caribbean.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Link 
            href="/about" 
            className="inline-block bg-[hsl(25,95%,39%)] text-white px-6 py-3 rounded hover:bg-[hsl(25,95%,35%)] transition-colors font-semibold mr-4"
          >
            Back to About Us
          </Link>
          <Link 
            href="/about/robert-yorke" 
            className="inline-block border border-[hsl(25,95%,39%)] text-[hsl(25,95%,39%)] px-6 py-3 rounded hover:bg-[hsl(25,95%,39%)] hover:text-white transition-colors font-semibold"
          >
            Learn About Our Founder
          </Link>
        </div>
      </div>
    </div>
  );
}