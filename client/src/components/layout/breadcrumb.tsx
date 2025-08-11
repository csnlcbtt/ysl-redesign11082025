import { useLocation } from "wouter";
import { ChevronRight } from "lucide-react";

// Path mapping for friendly names
const PATH_MAPPING: Record<string, string> = {
  '/about': 'About Us',
  '/about/robert-yorke': 'Robert T. Yorke',
  '/about/management': 'Management',
  '/about/facility': 'Facility',
  '/about/news': 'News',
  '/products-services': 'Products & Services',
  '/products-services/products': 'Products',
  '/products-services/services': 'Services',
  '/projects': 'Projects',
  '/quality': 'Quality Management',
  '/contact': 'Contact Us'
};

interface BreadcrumbItem {
  label: string;
  path: string;
  current: boolean;
}

// Convert hyphenated string to Title Case
function toTitleCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Generate breadcrumb items from pathname
function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  // Always start with Home
  const crumbs: BreadcrumbItem[] = [{
    label: 'Home',
    path: '/',
    current: pathname === '/'
  }];

  // Skip if we're already at home
  if (pathname === '/' || pathname === '') {
    return crumbs;
  }

  // Split path and filter out empty segments
  const segments = pathname.split('/').filter(segment => 
    segment && 
    !segment.match(/^\d+$/) && // Exclude numeric segments
    segment.length > 0
  );

  let currentPath = '';

  segments.forEach((segment, index) => {
    currentPath += '/' + segment;
    const isLast = index === segments.length - 1;

    // Get label from mapping or convert from segment
    let label = PATH_MAPPING[currentPath] || toTitleCase(segment);

    crumbs.push({
      label: label,
      path: currentPath,
      current: isLast
    });
  });

  return crumbs;
}

export default function Breadcrumb() {
  const [location] = useLocation();
  const crumbs = generateBreadcrumbs(location);

  // Only show breadcrumbs if there's more than just Home
  if (crumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="ysl-bc" aria-label="Breadcrumb">
      <div className="max-w-site mx-auto px-4">
        <ol className="ysl-bc-list">
          {crumbs.map((crumb, index) => (
            <li key={crumb.path} className="ysl-bc-item">
              {crumb.current ? (
                <span aria-current="page" className="ysl-bc-current">
                  {crumb.label}
                </span>
              ) : (
                <a href={crumb.path} className="ysl-bc-link">
                  {crumb.label}
                </a>
              )}
              {index < crumbs.length - 1 && (
                <ChevronRight className="ysl-bc-separator" size={16} />
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
