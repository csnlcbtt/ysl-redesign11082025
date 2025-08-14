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
          <p className="text-lg yorke-gray">Founder</p>
          <p className="yorke-gray">D. Eng. (Hon.), CEng. FIStructE, FICE, FAPE</p>
        </div>

        {/* Biography Section */}
        <Card className="border-yorke-border mb-8">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl">Early Life, Education and Career Foundation</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src={robertPhoto} 
                  alt="Dr. Robert T. Yorke" 
                  className="rounded-lg shadow-lg w-full mb-4"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold yorke-orange mb-2">Early Life & Education</h3>
                  <p className="yorke-gray leading-relaxed">
                    Dr. Robert T. Yorke was born in 1932 in Tobago, where he received his primary and secondary education as the second of eight siblings. After leaving school he completed an apprenticeship in Tobago, then moved to Trinidad to work at the Longdenville brick factory. In 1956 he left for England to pursue engineering studies at Hammersmith College, University of London, and after graduating continued professional training in the United Kingdom, working with several British engineering consultancies.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold yorke-orange mb-2">Career Foundation</h3>
                  <p className="yorke-gray leading-relaxed">
                    In 1967 he returned to the Caribbean as a design engineer with the Ministry of Works in Antigua. He moved back to Trinidad and Tobago in 1968 to accept the post of Chief Engineer at Sanders and Foster Caribbean Ltd. Within months he was promoted to Technical Director and soon assumed full responsibility for operations. In 1972, when Sanders and Foster exited the region, he founded Yorke Structures Ltd. He often stated that clear goals, discipline, and the willingness to make sacrifices were essential to success.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold yorke-orange mb-2">Business Philosophy & Leadership</h3>
                  <p className="yorke-gray leading-relaxed mb-4">
                    His vision for the company was guided by unshakeable confidence in his abilities and those of his team. He could clearly see his goals right from the beginning and knew that with the vision clearly in place, if he was prepared to make sacrifices to achieve those goals then nothing was impossible. This philosophy has underpinned the development of Yorke Structures Limited as a business and remains a key part of the culture of the company today.
                  </p>
                  <p className="yorke-gray leading-relaxed mb-4">
                    Dr. Yorke built YSL into the Caribbean's premier structural engineering consultancy through methodical planning, exacting standards, and an unwavering commitment to client satisfaction. He will tell you that Yorke Structures Limited is the best of its kind around, with no competitors, as to have competitors is to acknowledge that other people are equally as good as you. Yorke Structures Limited begins with the notion that it is better than the other companies.
                  </p>
                  <p className="yorke-gray leading-relaxed">
                    Within the company there is great fondness and respect for Dr. Yorke, for his exceptional stewardship, integrity and guidance to the organisation and its people. He inspires awe but never fear. His patience, quiet manner and hardworking nature and his commitment to excellence have been the foundation of the company's success and leadership philosophy that emphasized both technical excellence and business acumen, establishing the foundation for YSL's continued success across multiple decades.
                  </p>
                </div>
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
                <h3 className="text-lg font-semibold yorke-orange mb-2">National Recognition</h3>
                <p className="yorke-gray leading-relaxed mb-4">
                  After 39 hard working years, Dr. Robert T. Yorke retired on January 1, 2011. On August 31, 2011, Dr. Robert T. Yorke was awarded the Chaconia Medal Gold for his long and meritorious service to Trinidad and Tobago in the sphere of business.
                </p>
                <p className="yorke-gray leading-relaxed">
                  This prestigious national award recognizes exceptional and distinguished service worthy of national recognition. The award acknowledges Dr. Yorke's outstanding contributions to engineering excellence and business leadership in Trinidad and Tobago.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold yorke-orange mb-2">Honorary Doctorate</h3>
                <p className="yorke-gray leading-relaxed">
                  Dr. Yorke was awarded an Honorary Doctorate in Engineering, recognizing his lifetime achievements in structural engineering and his significant contributions to the development of engineering practice in the Caribbean region.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center mt-8">
          <Link 
            href="/about" 
            className="inline-block bg-yorke-orange text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Back to About Us
          </Link>
        </div>
      </div>
    </div>
  );
}