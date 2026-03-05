// Projects data for portfolio

export const featuredProjects = [
  {
    id: 1,
    title: 'Javi Ride',
    description: 'Built a complete taxi-hailing platform from scratch — two separate apps for passengers and drivers, real-time GPS tracking, smart driver matching, secure payments, and live ride monitoring. Now serving real users.',
    status: 'Production',
    statusType: 'live',
    features: ['Real-time GPS', 'Secure Payments', 'Driver Matching', 'Live Tracking'],
    role: 'Project Lead',
    icon: 'TruckIcon',
  },
  {
    id: 2,
    title: 'Teketeke ERP',
    description: 'Implemented a full enterprise resource planning system with custom modules that automated manual business processes, cut reporting time, and gave leadership real-time visibility into operations.',
    status: 'Production',
    statusType: 'live',
    features: ['Custom Modules', 'Business Automation', 'Financial Reports', 'Inventory'],
    role: 'ERP Implementor',
    icon: 'RectangleStackIcon',
  },
  {
    id: 3,
    title: 'Javi Customer App',
    description: 'Designed and shipped a cross-platform mobile app that transformed how customers interact with the business — seamless booking, instant notifications, and personalized experiences that boosted engagement.',
    status: 'Production',
    statusType: 'live',
    features: ['Easy Booking', 'Real-time Updates', 'Push Notifications', 'User Profiles'],
    role: 'Lead Developer',
    icon: 'DevicePhoneMobileIcon',
  },
  {
    id: 4,
    title: 'Niinue Nikuinue SACCO',
    description: 'Built a digital SACCO platform that replaced manual record-keeping with automated savings, loans processing, and real-time financial dashboards — giving members full control of their finances.',
    status: 'Production',
    statusType: 'live',
    features: ['Member Management', 'Savings & Loans', 'Financial Dashboard', 'Secure Transactions'],
    role: 'Lead Developer',
    icon: 'BoltIcon',
  },
];

export const portfolioProjects = [
  {
    id: 1,
    title: 'Javi Customer App',
    description: 'Mobile app for customer engagement',
    category: 'mobile',

    status: 'Live',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop',
  },
  {
    id: 2,
    title: 'Javi Ride',
    description: 'Ride-sharing platform with driver & passenger apps',
    category: 'mobile',

    status: 'In Development',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=200&fit=crop',
  },
  {
    id: 3,
    title: 'Christine Boutique',
    description: 'Custom e-commerce platform',
    category: 'ecommerce',

    status: 'Live',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
  },
  {
    id: 4,
    title: 'Mayfair Social Culture',
    description: 'Complete NGO website with modern design and digital platform integration.',
    category: 'web',

    status: 'Live',
  },
  {
    id: 5,
    title: 'Afya Bora Platform',
    description: 'AI-powered health platform with comprehensive technical documentation.',
    category: 'web',

    status: 'Development',
  },
  {
    id: 6,
    title: 'Ulezi Bora Academy',
    description: 'Complete digital branding and marketing campaign development.',
    category: 'branding',

    status: 'Live',
  },
];

export const achievements2025 = [
  {
    id: 1,
    category: 'Career',
    title: 'Head of Technology',
    description: 'Promoted to lead technology department. CTO-level ownership of software, infrastructure, and digital transformation.',
    metrics: [
      { value: 'CTO', label: 'Level' },
      { value: '3+', label: 'Products' },
    ],
    icon: 'CrownIcon',
    featured: true,
  },
  {
    id: 2,
    category: 'Product',
    title: 'Javi Customer App',
    description: 'Full development cycle from concept to production. Now live and serving users.',

    icon: 'DevicePhoneMobileIcon',
  },
  {
    id: 3,
    category: 'Innovation',
    title: 'EV Technology',
    description: 'R&D for electric 2-wheelers and 3-wheelers fleet integration.',
    // tech: ['IoT', 'R&D'],
    icon: 'BoltIcon',
    isInnovation: true,
  },
];
