export const COMPANY_INFO = {
  name: "Yorke Structures Limited",
  tagline: "Premier Structural Engineering & Steel Fabrication",
  established: 1972,
  email: "info@yorkestructuresltd.com",
  phone: "(868) 642-3334-5/4731/4841/4854",
  fax: "(868) 646-2572",
  address: {
    line1: "Lot 38 O'Meara Industrial Estate",
    line2: "Yorke Avenue",
    city: "Arima",
    postalCode: "301218"
  },
  description: "The Premier Structural Engineering and Steel Fabrication Company in the Caribbean"
};

export const SLIDESHOW_PROJECTS = [
  {
    id: "industrial-facility",
    title: "Industrial Facility Construction",
    description: "Large-scale petrochemical and industrial infrastructure",
    image: "a_640_300_1754928818592.jpg"
  },
  {
    id: "steel-fabrication",
    title: "Steel Structure Fabrication",
    description: "Complex steel framework and structural engineering",
    image: "b_640_300_1754928818591.jpg"
  },
  {
    id: "commercial-construction",
    title: "Commercial Building Projects",
    description: "Modern commercial and office building construction",
    image: "c_640_300_1754928818591.jpg"
  },
  {
    id: "airport-infrastructure",
    title: "Airport Infrastructure Development",
    description: "Critical transportation and aviation facility projects",
    image: "d_640_300 (1)_1754928818589.jpg"
  },
  {
    id: "skinner-park",
    title: "Recreational Facility Construction",
    description: "State-of-the-art recreational facility with modern steel construction",
    image: "Skinner-Park.jpg"
  }
];

export const NAVIGATION_ITEMS = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "#",
    children: [
      { label: "Company Profile", path: "/about" },
      { label: "Robert T. Yorke", path: "/about/robert-yorke" },
      { label: "Management", path: "/about/management" },
      { label: "Facility", path: "/about/facility" },
      { label: "Quality Management", path: "/quality" },
      { label: "News", path: "/about/news" }
    ]
  },
  {
    label: "Products & Services",
    path: "#",
    children: [
      { label: "Products", path: "/products" },
      { label: "Services", path: "/services" }
    ]
  },
  { label: "Projects", path: "/projects" },
  { label: "Contact Us", path: "/contact" }
];
