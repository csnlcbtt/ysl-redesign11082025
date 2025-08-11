import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import robertPhoto from "@assets/robert_1753191896954.jpg";
import robertFormalPhoto from "@assets/robert-t-yorke_1754926852385.jpg";
import robertBusinessPhoto from "@assets/robert (1)_1754926852385.jpg";
import mtiHotelPhoto from "@assets/ACC_012942_TTO_12WebOriginalCompressed_1754928144983.avif";

export default function RobertYorke() {
  return (
    <div className="yorke-beige min-h-screen">
      <div className="max-w-site mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold yorke-gray mb-2">Dr. Robert T. Yorke</h1>
          <p className="text-lg yorke-gray">Founder & Chairman Emeritus</p>
          <p className="yorke-gray">D. Eng. (Hon.), CEng. FIStructE, FICE, FAPE</p>
        </div>

        {/* Hero Section */}
        <Card className="border-yorke-border mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src={robertPhoto} 
                  alt="Dr. Robert T. Yorke" 
                  className="rounded-lg shadow-lg w-full mb-4"
                />
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold yorke-orange mb-4">Early Life & Education</h2>
                <p className="yorke-gray leading-relaxed mb-4">
                  Dr. Robert T. Yorke was born in 1933 in Tobago where he received his primary and secondary education. He was the second of eight siblings. After leaving school he took an apprenticeship in Tobago before moving to Trinidad to work at the Longdenville brick factory where his cousin was the general foreman.
                </p>
                <p className="yorke-gray leading-relaxed">
                  In 1956 he left for England to pursue his studies in Engineering at the Hammersmith College (part of the University of London). After graduating he continued his professional training in the United Kingdom and worked for several British engineering consultancies including Mott Hay & Anderson and Andrews, Kent & Stone.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Career Journey */}
        <Card className="border-yorke-border mb-8">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl">Career & Business Foundation</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <img 
                  src={robertFormalPhoto} 
                  alt="Dr. Robert T. Yorke - Professional" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold yorke-orange mb-2">Early Career</h3>
                  <p className="yorke-gray leading-relaxed">
                    In 1967 he left the United Kingdom to assume the post of Design Engineer at the Ministry of Works in Antigua and returned to Trinidad and Tobago in 1968 to accept the position of Chief Engineer at Sanders and Foster (Caribbean) Ltd. After three months he was promoted to Technical Director and subsequently assumed full responsibility for the company's operations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold yorke-orange mb-2">Founding Yorke Structures Limited</h3>
                  <p className="yorke-gray leading-relaxed">
                    Five years later in 1972, when Sanders and Foster pulled out of the Caribbean, Bob started Yorke Structures Ltd. When asked to articulate the vision for the new company, he is clear in his original beliefs which remain as strong today. An exceptional believer in the power of positive thinking he will say that he knew that he could not fail at the new business as he was better than his rivals.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Philosophy */}
        <Card className="border-yorke-border mb-8">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl">Business Philosophy & Leadership</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold yorke-orange mb-2">Vision & Philosophy</h3>
                  <p className="yorke-gray leading-relaxed mb-4">
                    He could clearly see his goals right from the beginning and knew that with the vision clearly in place, if he was prepared to make sacrifices to achieve those goals then nothing was impossible. This philosophy has underpinned the development of Yorke Structures Limited as a business and remains a key part of the culture of the company today.
                  </p>
                  <p className="yorke-gray leading-relaxed">
                    Bob Yorke will tell you that Yorke Structures Limited is the best of its kind around. He will tell you that the company has no competitors, as to have competitors is to acknowledge that other people are equally as good as you. Yorke Structures Limited begins with the notion that it is better than the other companies.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold yorke-orange mb-2">Leadership Style</h3>
                  <p className="yorke-gray leading-relaxed">
                    Within the company there is great fondness and respect for Bob Yorke, for his exceptional stewardship, integrity and guidance to the organisation and its people. He inspires awe but never fear. His patience, quiet manner and hardworking nature and his commitment to excellence have been the foundation of the company's success.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src={robertBusinessPhoto} 
                  alt="Dr. Robert T. Yorke - Business Leader" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Ventures */}
        <Card className="border-yorke-border mb-8">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl">Business Ventures & Expansion</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold yorke-orange mb-2">Industrial Fastenings Limited (1975)</h3>
                <p className="yorke-gray leading-relaxed">
                  In order to fill a need in the country, he established Industrial Fastenings Limited in 1975, to manufacture bolts, nuts and other fasteners for the construction and oil industry. This company employs approximately 60 employees.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold yorke-orange mb-2">Mount Irvine Bay Hotel & Golf Club (1985)</h3>
                  <p className="yorke-gray leading-relaxed mb-4">
                    In 1985 Mr. Yorke purchased the Mount Irvine Bay Hotel and Golf Club in Tobago, from the then Malaysian owners who were divesting their interests in Trinidad and Tobago. This was notable as he was the first Tobagonian to purchase a hotel of that size. This hotel which is one of the premier hotels on the island employs over 160 persons, all citizens of Trinidad and Tobago.
                  </p>
                  <p className="yorke-gray leading-relaxed">
                    He said Mt Irvine was a really good property and wished more citizens acquired their own land.
                  </p>
                </div>
                <div>
                  <img 
                    src={mtiHotelPhoto} 
                    alt="Mount Irvine Bay Hotel & Golf Club" 
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold yorke-orange mb-2">Nu Yorke Joint Venture (2001)</h3>
                <p className="yorke-gray leading-relaxed">
                  In 2001, through Mr. Yorke's initiative, Yorke Structures Limited established a joint venture with Nucor Corporation, the largest manufacturer of steel in the United States to provide engineering and detailing services for seven (7) of their divisions via electronic communication for export to the U.S. Nu Yorke was located in the Freezone in D'Abadie and employed approximately 30 persons.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Recognition */}
        <Card className="border-yorke-border mb-8">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl">Professional Recognition & Awards</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold yorke-orange mb-2">Professional Memberships</h3>
                <ul className="yorke-gray space-y-1">
                  <li>• Chartered Structural Engineer, registered with the Board of Engineering of Trinidad and Tobago</li>
                  <li>• Fellow of the Institution of Structural Engineers</li>
                  <li>• Fellow of the Institution of Civil Engineers</li>
                  <li>• Life Fellow of the Association of Professional Engineers of Trinidad and Tobago</li>
                  <li>• Patron of the Institution of Structural Engineers (Caribbean Division)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold yorke-orange mb-2">Awards & Honors</h3>
                <ul className="yorke-gray space-y-1">
                  <li>• 2003: "Career of Excellence" Award - APPETT (highest award)</li>
                  <li>• 2004: "Service Award" - Institution of Structural Engineers</li>
                  <li>• 2005: "People's Choice Award" - Institution of Structural Engineers</li>
                  <li>• 2005: Honorary Doctorate Degree in Engineering and Entrepreneurship - University of Trinidad and Tobago</li>
                  <li>• 2011: Chaconia Medal Gold - For long and meritorious service to Trinidad and Tobago in sphere of business</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legacy & Retirement */}
        <Card className="border-yorke-border mb-8">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl">Legacy & Retirement</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="yorke-gray leading-relaxed">
                The company operates a modern fabricating plant in Arima situated on 13 acres of land controlled by a Quality System certified in accordance with ISO 9001:2008. The main fabrication workshop occupies in excess of 80,000 square feet with a capacity of approximately 2,500 tons per annum.
              </p>
              
              <p className="yorke-gray leading-relaxed">
                Through Dr. Yorke's commitment to the provision of goods and services that are of the highest quality, competitively priced and produced by motivated and adequately compensated workers, the company has established itself as the market leader in structural engineering in the Caribbean.
              </p>
              
              <p className="yorke-gray leading-relaxed">
                After 39 hard working years to keep his business, Yorke Structures Ltd thriving, Robert T. Yorke retired on January 1, 2011, though he knows it will be difficult to stay away. On the 31st August 2011 Dr. Robert T. Yorke was awarded the Chaconia Medal Gold for his long and meritorious service to Trinidad and Tobago in sphere of business.
              </p>
              
              <p className="yorke-gray leading-relaxed">
                While running his company he was diagnosed with Parkinson's disease, a degenerative disorder of the central nervous system that impairs motor skills, cognitive processes and other functions, yet his dedication to excellence never wavered.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Link 
            href="/about" 
            className="inline-block bg-[hsl(25,95%,39%)] text-white px-6 py-3 rounded hover:bg-[hsl(25,95%,35%)] transition-colors font-semibold"
          >
            Back to About Us
          </Link>
        </div>
      </div>
    </div>
  );
}