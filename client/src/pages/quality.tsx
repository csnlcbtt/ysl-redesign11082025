import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import bsiLogo from "@assets/bsi_1753191896958.png";

export default function Quality() {
  return (
    <div className="yorke-beige min-h-screen">
      <div className="max-w-site mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold yorke-gray mb-2">Quality Management</h1>
          <p className="text-lg yorke-gray">ISO 9001:2008 Certified Excellence</p>
        </div>

        {/* Quality Policy */}
        <Card className="border-yorke-border mb-8">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl">Quality Policy</CardTitle>
          </CardHeader>
          <CardContent className="p-6 yorke-gray">
            <p className="mb-4 leading-relaxed">
              <strong>Yorke Structures Limited is an ISO 9001:2008 certified organisation</strong> which is dedicated to the concept of providing a quality service by satisfying the needs and specified requirements of its Clients.
            </p>
            <p className="mb-4 leading-relaxed">
              This is fundamental to all work undertaken by the company and the aim of the Quality Management System is to achieve the satisfaction of Client requirements in the execution of each contract. Top management is committed to excellence and embraces the Quality Management System as a way by which Yorke Structures Limited can continue to be the market leader in the Construction Industry.
            </p>
            <p className="mb-4 leading-relaxed">
              In order to achieve this aim, the Quality System is fully integrated into the administration, project management and process functions of the company and is executed by all employees.
            </p>
            <p className="leading-relaxed">
              By applying the Quality Management System to the entire organisation, all activities are executed and records are kept which are used to verify and validate the actions taken and the results thereof. It is expected that the organisation's efficiency and effectiveness would allow for continual improvement with measurable characteristics and which would in turn provide the objective evidence of the improvement of the company.
            </p>
          </CardContent>
        </Card>

        {/* HSE Management Policy */}
        <Card className="border-yorke-border mb-8">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl">HSE Management Policy</CardTitle>
          </CardHeader>
          <CardContent className="p-6 yorke-gray">
            <p className="mb-4 leading-relaxed">
              <strong>Yorke Structures Limited is dedicated to ensuring that its activities comply with all relevant statutory regulations</strong> and all reasonable measures are taken to minimise Health, Safety and Environmental risks to stakeholders who may be affected by its operations.
            </p>
            <p className="mb-4 leading-relaxed">
              Management and supervisory staff are responsible for implementing this HSE Management Policy throughout the company, and ensures that health, safety and environmental considerations are given high priority in the planning and execution of all work.
            </p>
            <p className="mb-4 leading-relaxed">
              All employees are expected to co-operate with the company in carrying out this Policy, and must ensure that their work is carried out with minimum risk to themselves and others.
            </p>
            <p className="leading-relaxed">
              <strong>Training is provided to all employees</strong> to ensure that they are fully equipped to perform their jobs in accordance with regulatory health, safety and environment standards.
            </p>
          </CardContent>
        </Card>

        {/* BSI Group Information */}
        <Card className="border-yorke-border mb-8">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl flex items-center gap-4">
              The BSI Group
              <img src={bsiLogo} alt="BSI Logo" className="h-8 w-auto" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 yorke-gray space-y-4">
            <p className="leading-relaxed">
              Since its foundation in 1901 as the Engineering Standards Committee, <strong>The BSI Group is a global business services organization</strong> which provides standards-based solution in more than 150 countries. The BSI Group is an independent, private, non-profit distributing company which helps organizations improve their quality and performance, reduce their risk, manage and protect their reputations, and help them be more sustainable.
            </p>

            <div className="mb-4">
              <h3 className="font-bold text-lg yorke-orange mb-3">Main Areas of Activities</h3>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="yorke-orange font-bold">•</span>
                  <span>Development of private, national and international standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="yorke-orange font-bold">•</span>
                  <span>Assessment and certification of management systems and medical devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="yorke-orange font-bold">•</span>
                  <span>Testing and certification of products and services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="yorke-orange font-bold">•</span>
                  <span>Provision of governance, risk and compliance solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="yorke-orange font-bold">•</span>
                  <span>Training services</span>
                </li>
              </ul>
            </div>

            <p className="leading-relaxed">
              <strong>BSI is the National Standards Body of the UK</strong>, with a globally recognized reputation for independence, integrity and innovation in the production of standards that promote best practice. It develops and sells standards and standardization solutions to meet the needs of business and society.
            </p>

            <p className="leading-relaxed">
              BSI provides independent third-party certification of management systems. Their testing services deliver product and service certification and marking.
            </p>

            <p className="leading-relaxed">
              BSI has the capability to test a huge variety of industrial and consumer products such as construction, fire safety, electrical, electronic, engineering and gas products and medical devices and can identify technical requirements, product testing and certification schemes for most countries in the world.
            </p>

            <p className="leading-relaxed">
              BSI is a leading provider of training, conferences, information and knowledge on standards, management systems, business improvement, regulatory approval and international trade. This includes guidance to help customers understand how standards can be used and applied every day.
            </p>

            <p className="leading-relaxed">
              <strong>BSI has a history of over 100 years and it all started with standardization of steel and iron.</strong>
            </p>
          </CardContent>
        </Card>

        {/* Commitment to Excellence */}
        <Card className="border-yorke-border">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl">Our Commitment to Excellence</CardTitle>
          </CardHeader>
          <CardContent className="p-6 yorke-gray">
            <p className="mb-4 leading-relaxed">
              At Yorke Structures Limited, our ISO 9001:2008 certification represents more than compliance—it embodies our fundamental commitment to delivering exceptional structural engineering and steel fabrication services throughout the Caribbean region.
            </p>
            <p className="mb-4 leading-relaxed">
              Our integrated Quality Management System ensures that every project, from initial design through final delivery, meets the highest international standards while exceeding client expectations. This systematic approach to quality has established us as the premier choice for structural engineering solutions.
            </p>
            <p className="leading-relaxed">
              Through continuous improvement, rigorous health and safety protocols, and partnership with globally recognized certification bodies like BSI Group, we maintain our position as the Caribbean's leading structural engineering company, delivering projects that stand as monuments to engineering excellence.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}