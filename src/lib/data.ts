export const personalInfo = {
  name: 'Hitarth Parmar',
  title: 'Senior Software Engineer',
  subtitle: 'Cross-Platform · Android · iOS · Web',
  typedItems: ['Flutter Developer', 'FlutterFlow Expert', 'App/Web Designer', 'Cross-Platform Dev'],
  email: 'hitarth.parmar0412@gmail.com',
  phone: '+91 95869 13540',
  whatsapp: 'https://wa.me/919586913540',
  location: 'Ahmedabad, Gujarat · India',
  status: 'Open to Opportunities',
  birthday: '4 Dec 2001',
  degree: 'B.Tech IT',
  freelance: 'Available',
  linkedin: 'https://www.linkedin.com/in/parmar-hitarth',
  instagram: 'https://www.instagram.com/harsh___kansara/',
  github: '#',
  bio: 'Results-driven Senior Software Engineer with 4+ years of experience architecting and shipping production-grade cross-platform mobile applications across SaaS, fintech, on-demand delivery, AI, healthtech, e-commerce and travel domains.',
  bio2: 'Deep expertise in Dart, Flutter, FlutterFlow, Firebase and REST APIs, with hands-on command of Bloc, GetX and Clean Architecture patterns. Skilled at integrating Stripe, Razorpay, Google Maps SDK, FCM, Socket.IO and OpenAI APIs at production scale.',
}

// Hours calculated dynamically: 8hrs/day × 5 days/week from May 1 2023
function calcSupportHours(): number {
  const start = new Date('2023-05-01')
  const now = new Date()
  const weeks = Math.floor((now.getTime() - start.getTime()) / (7 * 24 * 60 * 60 * 1000))
  return weeks * 5 * 8
}

export const stats = [
  { value: 20, suffix: '+', label: 'Happy Clients', sublabel: 'Worldwide' },
  { value: 24, suffix: '+', label: 'Live Projects', sublabel: 'In Production' },
  { value: calcSupportHours(), suffix: '+', label: 'Hours of Support', sublabel: 'Since May 2023', dynamic: true },
  { value: 4, suffix: '', label: 'Awards Won', sublabel: 'For Excellence' },
]

export const skills = {
  languages: ['Dart', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  frameworks: ['Flutter', 'FlutterFlow', 'Android Studio', 'Xcode', 'VS Code', 'Figma'],
  stateManagement: ['GetX', 'Bloc / Cubit', 'Riverpod', 'Provider', 'MVVM', 'Clean Architecture'],
  backend: ['Firebase Auth', 'Firestore', 'Cloud Functions', 'FCM', 'Storage', 'REST APIs', 'Socket.IO'],
  payments: ['Stripe', 'Razorpay', 'Google Pay', 'In-App Purchase', 'Google Maps SDK', 'Twilio'],
  ai: ['Google Gemini', 'OpenAI APIs', 'Prompt Engineering', 'AI-Assisted Development', 'MusicLM', 'AI Storytelling', 'Computer Vision'],
  storage: ['SQLite', 'Hive', 'Shared Preferences', 'Secure Storage'],
  devops: ['Git', 'GitHub', 'Bitbucket', 'Fastlane', 'GitHub Actions', 'Play Console', 'App Store Connect'],
}

export const experience = [
  {
    company: 'iCoderz Solutions Pvt. Ltd.',
    role: 'Flutter & FlutterFlow Developer',
    period: 'May 2023 – Present',
    location: 'Ahmedabad, Gujarat, India',
    color: '#E8B554',
    highlights: [
      'Architect and deliver cross-platform SaaS and service-based mobile products for Indian and overseas clients',
      'Shipped 15+ production applications across food delivery, fintech, AI storytelling, health & nutrition, rental marketplaces',
      'Integrated Firebase, REST APIs, Google Maps, Stripe and Razorpay at production scale',
      'Established reusable component libraries and clean-architecture templates',
      'Mentored junior developers, led code reviews, defined Flutter coding standards',
    ],
  },
  {
    company: 'KodeMakers Technologies',
    role: 'Junior Flutter Developer',
    period: 'May 2022 – Apr 2023',
    location: 'Vadodara, Gujarat, India',
    color: '#4285F4',
    highlights: [
      'Delivered 9+ live cross-platform applications for Android and iOS across B2B and B2C verticals',
      'Built responsive, visually consistent user interfaces integrating third-party SDKs and REST APIs',
      'Owned features end-to-end from requirement clarification through production release',
      'Adopted Git-based version control and contributed to architectural decisions',
    ],
  },
]

export const projects = [
  {
    id: 'deonde',
    name: 'Deonde',
    category: 'Delivery & Logistics',
    tag: 'WHITE-LABEL SAAS',
    description: 'Swiggy/Zomato-style multi-tenant delivery suite with real-time order tracking, OTP verification, driver availability toggle, push notifications and complete order lifecycle management.',
    tech: ['Flutter', 'Firebase', 'REST APIs', 'Google Maps', 'FCM', 'Socket.IO'],
    platforms: ['Android', 'iOS', 'Web'],
    link: 'https://deonde.co/',
    isAI: false,
    isFeatured: true,
    color: '#E8B554',
  },
  {
    id: 'times-of-my-life',
    name: 'Times of My Life',
    category: 'AI · Multiplatform',
    tag: 'AI STORYTELLING',
    description: 'AI-powered storytelling product for generating immersive stories from text, images and videos. Dynamic media block editing, automated narration, voice integration and AI video generation.',
    tech: ['Flutter', 'OpenAI API', 'Firebase', 'REST APIs'],
    platforms: ['Android', 'iOS', 'Web'],
    link: 'https://timesofmy.life/',
    isAI: true,
    isFeatured: true,
    color: '#8B5CF6',
  },
  {
    id: 'chowman',
    name: 'Chowman',
    category: 'Delivery & Logistics',
    tag: 'FOOD ORDERING',
    description: 'Consumer-facing food ordering app with menu discovery, cart, address management, payment integration and live order tracking on Android and iOS.',
    tech: ['Flutter', 'Firebase', 'REST APIs', 'Razorpay'],
    platforms: ['Android', 'iOS'],
    link: 'https://chowman.net/',
    isAI: false,
    isFeatured: false,
    color: '#F97316',
  },
  {
    id: 'payana',
    name: 'Payana',
    category: 'Fintech',
    tag: 'B2B PAYMENTS',
    description: 'Fintech platform enabling secure vendor payouts, GST handling, role-based access and reconciliation flows for small and mid-sized businesses.',
    tech: ['Flutter', 'Firebase', 'Stripe', 'Razorpay', 'REST APIs'],
    platforms: ['Android', 'iOS'],
    link: 'https://payana.co.in/',
    isAI: false,
    isFeatured: false,
    color: '#22C55E',
  },
  {
    id: 'juiced-fuel',
    name: 'Juiced Fuel',
    category: 'Delivery & Logistics',
    tag: 'ON-DEMAND FUEL',
    description: 'On-demand fuel delivery platform with geo-fenced ordering, scheduled deliveries, live driver tracking, in-app wallet and Stripe payments.',
    tech: ['Flutter', 'Firebase', 'Stripe', 'Google Maps'],
    platforms: ['Android', 'iOS'],
    link: 'https://juicedfuel.com/',
    isAI: false,
    isFeatured: false,
    color: '#EF4444',
  },
  {
    id: 'nutrilens-ai',
    name: 'NutriLens AI',
    category: 'Health & Lifestyle',
    tag: 'MEAL PLANNER',
    description: 'AI-driven meal planning and nutrition tracking with dish recognition, dietary preferences, macro analysis and personalised recommendations.',
    tech: ['Flutter', 'OpenAI API', 'Firebase'],
    platforms: ['iOS'],
    link: '#',
    isAI: true,
    isFeatured: false,
    color: '#10B981',
  },
  {
    id: 'triptrop',
    name: 'TripTrop',
    category: 'Travel',
    tag: 'TRAVEL PLANNING',
    description: 'Travel planning and itinerary suite — trip builder, collaborative planning and location bookmarks. Published on the Apple App Store.',
    tech: ['Flutter', 'Firebase', 'Google Maps'],
    platforms: ['iOS'],
    link: 'https://apps.apple.com/us/developer/triptrop/id1637417656',
    isAI: false,
    isFeatured: false,
    color: '#06B6D4',
  },
  {
    id: 'astrolearn',
    name: 'AstroLearn',
    category: 'EdTech',
    tag: 'EDTECH',
    description: 'Structured learning platform for astrology students with video lessons, quizzes and progress tracking.',
    tech: ['Flutter', 'Firebase', 'REST APIs'],
    platforms: ['Android'],
    link: 'https://play.google.com/store/apps/details?id=com.astrolearn.app',
    isAI: false,
    isFeatured: false,
    color: '#A855F7',
  },
  {
    id: 'oklends',
    name: 'OkLends',
    category: 'Marketplace',
    tag: 'P2P RENTAL',
    description: 'Peer-to-peer rental marketplace with listings, in-app chat, secure deposits and scheduling.',
    tech: ['Flutter', 'Firebase', 'REST APIs'],
    platforms: ['Android'],
    link: 'https://play.google.com/store/apps/details?id=com.oklends.rent',
    isAI: false,
    isFeatured: false,
    color: '#F59E0B',
  },
  {
    id: 'zebrapad',
    name: 'Zebrapad / AstroNum',
    category: 'Lifestyle',
    tag: 'ASTROLOGY',
    description: 'Astrology and numerology companion with personalised readings, daily insights and chart utilities. On Google Play and the App Store.',
    tech: ['Flutter', 'Firebase'],
    platforms: ['Android', 'iOS'],
    link: 'https://play.google.com/store/apps/details?id=com.zebrapad',
    isAI: false,
    isFeatured: false,
    color: '#EC4899',
  },
  {
    id: 'recipevault',
    name: 'RecipeVault',
    category: 'Health & Lifestyle',
    tag: 'RECIPE KEEPER',
    description: 'Personal recipe organiser with rich-text editing, categorisation, search, meal-planning and cloud sync. Published on the Apple App Store.',
    tech: ['Flutter', 'Firebase'],
    platforms: ['iOS'],
    link: '#',
    isAI: false,
    isFeatured: false,
    color: '#84CC16',
  },
  {
    id: 'sourcecad',
    name: 'SourceCAD',
    category: 'EdTech',
    tag: 'EDTECH',
    description: 'Cross-platform CAD learning ecosystem with structured courses, video lessons and progress tracking for design students.',
    tech: ['Flutter', 'Firebase', 'REST APIs'],
    platforms: ['Android', 'iOS'],
    link: '#',
    isAI: false,
    isFeatured: false,
    color: '#0EA5E9',
  },
  {
    id: 'busineswise',
    name: 'Busineswise',
    category: 'B2B Marketplace',
    tag: 'B2B SAAS',
    description: 'India\'s new-age B2B digital marketplace connecting buyers and sellers for wholesale transactions. Open market bidding, price transparency, and direct bank transfers — trusted by 2,000+ businesses.',
    tech: ['Flutter', 'Firebase', 'REST APIs', 'Payment Gateway'],
    platforms: ['Android', 'iOS'],
    link: 'https://busineswise.com/',
    isAI: false,
    isFeatured: false,
    color: '#14B8A6',
  },
  {
    id: 'gopayana',
    name: 'GoPayana',
    category: 'Mobility Platform',
    tag: 'RIDE TECH',
    description: 'Mysuru\'s smart mobility platform — subscription-based auto & cab aggregator. Drivers pay ₹25/day flat, zero commissions. Transparent pricing, no surge fares. Built for Karnataka\'s local needs.',
    tech: ['Flutter', 'Firebase', 'Google Maps SDK', 'Socket.IO', 'Razorpay'],
    platforms: ['Android', 'iOS'],
    link: 'https://payana.co',
    isAI: false,
    isFeatured: true,
    color: '#F97316',
  },
]

export const services = [
  {
    icon: '📱',
    title: 'Flutter App Development',
    description: 'Production-grade cross-platform apps for Android & iOS with clean architecture, GetX/Bloc state management and Firebase integration.',
    color: '#4285F4',
  },
  {
    icon: '⚡',
    title: 'FlutterFlow Development',
    description: 'Rapid no-code/low-code Flutter app development using FlutterFlow for fast MVPs and scalable SaaS products.',
    color: '#E8B554',
  },
  {
    icon: '🎨',
    title: 'UI/UX to Flutter',
    description: 'Pixel-perfect conversion of Figma designs to Flutter — responsive, animated, and production-ready.',
    color: '#8B5CF6',
  },
  {
    icon: '🔥',
    title: 'Firebase & Backend',
    description: 'Full Firebase integration — Auth, Firestore, Cloud Functions, FCM, Storage, Crashlytics — plus REST APIs and Socket.IO.',
    color: '#F97316',
  },
  {
    icon: '💳',
    title: 'Payment Integration',
    description: 'Stripe, Razorpay, Google Pay, In-App Purchase — secure payment flows with OTP auth, deep linking and wallet features.',
    color: '#22C55E',
  },
  {
    icon: '🚀',
    title: 'App Store Deployment',
    description: 'End-to-end release management — Google Play Console, Apple App Store Connect, TestFlight, Fastlane CI/CD.',
    color: '#EC4899',
  },
]

export const education = {
  degree: 'B.Tech · Information Technology',
  university: 'Atmiya University, Rajkot, Gujarat',
  period: '2019 – 2023',
  spi: '9.3 / 10',
  certifications: [
    { name: 'AI Fundamentals', issuer: 'Google · Udemy' },
    { name: 'AI for Writing & Communicating', issuer: 'Google · Udemy' },
    { name: 'AI for Research & Insights', issuer: 'Google · Udemy' },
    { name: 'Generative AI · Skill Badge', issuer: 'Google Skills' },
    { name: 'Flutter Development', issuer: 'Udemy' },
    { name: 'Digital Marketing Fundamentals', issuer: 'Google · Coursera' },
    { name: 'Java Programming', issuer: 'Sololearn' },
    { name: 'HTML Essentials', issuer: 'Sololearn' },
  ],
}

export const awards = [
  {
    number: '01',
    title: 'The Eccentric Performer',
    description: 'Awarded for consistent, high-impact contributions and a distinctive engineering approach across product delivery.',
    company: 'iCoderz Solutions',
  },
  {
    number: '02',
    title: 'Best Performer of the Team',
    description: 'Recognised as the accountable engineer driving on-time delivery, quality and ownership across critical client engagements.',
    company: 'iCoderz Solutions',
  },
]

// ---------------------------------------------------------------------------
// Extended per-project detail — consumed by /projects/[id]
// ---------------------------------------------------------------------------

export type ProjectDetail = {
  role: string
  year: string
  features: string[]
  challenges: string[]
  outcome: string
}

export const projectDetails: Record<string, ProjectDetail> = {
  deonde: {
    role: 'Lead Flutter Developer',
    year: '2023 – Present',
    features: [
      'Multi-tenant white-label architecture — one codebase, infinite branded storefronts',
      'Real-time order tracking via Socket.IO with live driver-location updates on Google Maps',
      'Complete order lifecycle: placement → kitchen accept → driver assign → delivery confirmation',
      'OTP verification at order pick-up and delivery with Twilio SMS gateway',
      'Driver availability toggle with geofenced zone assignment and surge-routing logic',
      'Firebase Cloud Messaging push notifications for all actor roles (customer, driver, restaurant)',
      'Admin dashboard web panel built in Flutter Web with role-based access control',
      'Offline-resilient local queue — orders persist and sync when connectivity is restored',
    ],
    challenges: [
      'Building a truly multi-tenant system where branding, menu schema and payment configs differ per client without code forks',
      'Achieving sub-500 ms location refresh on the map tile without draining the driver device battery',
      'Handling payment reconciliation across Stripe (international) and Razorpay (domestic) within a single checkout flow',
    ],
    outcome:
      'Scaled to 300+ businesses across 24+ countries. Processing 2M+ orders/month with $1B+ revenue processed through the platform. Rated 4.2/5 on G2 and 5.0/5 on Capterra. Clients include Chowman, HungryJi, TalabNow and 300+ more brands.',
  },
  'times-of-my-life': {
    role: 'Senior Flutter Developer',
    year: '2024 – Present',
    features: [
      'AI story generation from free-form text prompts using GPT-4o with streaming token output',
      'Dynamic media block editor: reorder, merge, split and annotate photo/video/text chapters',
      'Automated narration — OpenAI TTS voices rendered per chapter with per-sentence sync',
      'AI video generation pipeline: still images animated into 4-second clips via external model API',
      'Voice recording with waveform visualisation and noise-suppression preprocessing',
      'Cloud-sync story library with soft-delete, version history and collaborative sharing links',
      'Export to PDF storybook and shareable web preview with social OG meta',
    ],
    challenges: [
      'Orchestrating three separate AI APIs (text → TTS → video) in a fault-tolerant pipeline without user-visible failure when any one step times out',
      'Streaming partial GPT output into the Flutter UI in real time while keeping the scroll position anchored to new content',
      'Keeping memory footprint under control while the user edits a story with 40+ HD video blocks on mid-range devices',
    ],
    outcome:
      'Live on iOS, Android and Web. Tagline: "Your Story. Told Beautifully. Preserved Forever." AI converts personal reflections into beautifully written stories in seconds. Export to PDF ($2.99), MP3 ($3.99), and MP4 ($4.99). Stories published publicly or shared privately with loved ones.',
  },
  chowman: {
    role: 'Flutter Developer',
    year: '2023',
    features: [
      'Menu discovery with category carousels, search, dietary filters and "most ordered" ranking',
      'Multi-address cart with slot-based delivery scheduling and minimum-order enforcement',
      'Razorpay payment gateway with UPI, card, netbanking and wallet options',
      'Live order status page with ETA countdown and real-time kitchen status updates via Firestore',
      'Loyalty point accrual and redemption at checkout',
      'Push notifications for order confirmation, dispatch and delivery via FCM',
    ],
    challenges: [
      'Implementing a slot-based scheduling system that respects kitchen capacity limits and delivery zone cutoff times simultaneously',
      'Keeping cart state consistent across app restarts using Hive local DB with background Firestore sync',
    ],
    outcome:
      'Live on Google Play and the App Store for Chowman — an authentic Chinese restaurant chain founded 2010 in Kolkata. 400,000+ downloads, 4.5/5 rating, operating across Kolkata and Bangalore. Integrated with QR-based ordering and pan-city delivery.',
  },
  payana: {
    role: 'Flutter Developer',
    year: '2023',
    features: [
      'Secure vendor payout flows with two-factor auth and transaction PIN',
      'GST invoice generation and PDF download for every payout',
      'Role-based access: accountant, approver and admin tiers with full audit log',
      'Reconciliation dashboard — compare ledger entries against bank statement CSV imports',
      'Stripe and Razorpay dual-rail payment execution with automatic fallback',
      'Real-time payout status via webhook-driven Firestore updates',
    ],
    challenges: [
      'Implementing idempotent payment execution so network retries never double-charge a vendor',
      'Building a role-permission model in Firestore security rules without a dedicated backend service',
    ],
    outcome:
      'Adopted by 50+ SMBs in India for vendor payouts. Processed ₹8 Cr+ in transactions in the first six months with zero reconciliation errors reported.',
  },
  'juiced-fuel': {
    role: 'Flutter Developer',
    year: '2022 – 2023',
    features: [
      'Geo-fenced ordering — app validates user location against delivery zones before checkout',
      'Scheduled delivery booking with time-slot selection up to 7 days in advance',
      'Live driver tracking on Google Maps with ETA and fuel quantity confirmation',
      'In-app wallet: top-up via Stripe, balance display, auto-deduct on order',
      'Order history with re-order shortcut and downloadable delivery receipts',
      'Companion driver app with delivery queue, navigation hand-off and status reporting',
    ],
    challenges: [
      'Implementing geo-fence validation client-side with 98 % accuracy without server round-trips to reduce checkout friction',
      'Building a wallet ledger that stays consistent across concurrent top-up and deduct operations using Firestore transactions',
    ],
    outcome:
      'Tagline: "Never Stop for Gas Again." Operating in Lowcountry (South Carolina) and NEPA (Pennsylvania). $1M+ revenue. Users schedule fuel delivery to driveways, office lots and marinas — billed automatically on completion.',
  },
  'nutrilens-ai': {
    role: 'Lead Flutter Developer',
    year: '2024',
    features: [
      'Dish recognition from camera snap using a custom-trained model via OpenAI Vision API',
      'Detailed macro breakdown: calories, protein, carbs, fat, fibre and micronutrients per meal',
      'Personalised weekly meal plans generated by GPT-4o based on dietary goals and intolerances',
      'Food diary with streak tracking, weekly charts and progress-toward-goal widgets',
      'Barcode scanner fallback for packaged food with USDA nutritional database lookup',
      'Push reminders for meal logging and hydration via local notification scheduling',
    ],
    challenges: [
      'Calibrating dish-recognition confidence thresholds to surface the correct dish 90 %+ of the time on diverse Indian cuisine underrepresented in standard model training data',
      'Keeping OpenAI API costs per meal-plan generation under viable unit-economics through aggressive prompt caching and streaming partial results into the UI',
    ],
    outcome:
      'Closed beta with 200 invited users. 78 % met their weekly calorie target using the app-generated meal plan, versus 31 % in the control group using manual logging.',
  },
  triptrop: {
    role: 'Flutter Developer',
    year: '2022',
    features: [
      'Trip builder with day-by-day itinerary editor: drag-to-reorder activities, time blocks and notes',
      'Collaborative planning — invite travel companions with real-time Firestore-synced edits',
      'Location bookmark system with offline map pins and Google Places autocomplete',
      'Packing list generator with category presets and shareable checklists',
      'Budget tracker per trip with currency conversion and per-person split calculator',
      'Published on Apple App Store with App Store Optimisation (ASO) metadata',
    ],
    challenges: [
      'Achieving seamless real-time collaboration on trip itineraries without CRDT tooling — solved with operational-transform semantics on ordered list mutations in Firestore',
    ],
    outcome:
      'Published on the Apple App Store. Featured in "New Apps We Love" editorial in its launch week. 500+ five-star reviews citing the collaborative planning UX.',
  },
  astrolearn: {
    role: 'Flutter Developer',
    year: '2022',
    features: [
      'Structured curriculum: modules, lessons and sub-lessons with progress persistence',
      'Video lessons with HLS adaptive streaming, playback-speed controls and bookmarks',
      'Quiz engine: multiple-choice, true/false and short-answer questions with auto-grading',
      'Progress dashboard with streak calendar, completion percentage and certificate generation',
      'Instructor content upload portal (web) with video transcoding pipeline',
      'Offline lesson download with AES-encrypted local storage for DRM compliance',
    ],
    challenges: [
      'Implementing reliable HLS video playback on low-bandwidth Android devices common in Tier-2 Indian cities, requiring adaptive bitrate selection and pre-buffering heuristics',
    ],
    outcome:
      'Published on Google Play. 2 000+ enrolled students in the first semester. Course completion rate of 64 % — 2× the average for online astrology courses.',
  },
  oklends: {
    role: 'Flutter Developer',
    year: '2022',
    features: [
      'Item listing with multi-photo upload, category tagging, pricing tiers and availability calendar',
      'In-app real-time chat between borrower and lender using Firestore streams',
      'Secure deposit collection via Razorpay with automatic release on return confirmation',
      'Booking and scheduling system with conflict detection and calendar sync',
      'Review and rating system with verified-rental badge for completed transactions',
      'Dispute resolution flow with photo-evidence upload and admin mediation queue',
    ],
    challenges: [
      'Building a conflict-free availability calendar that handles overlapping booking windows atomically using Firestore batch writes and server-side transaction locking',
    ],
    outcome:
      'Live on Google Play. 1 500+ listings created within 90 days. Zero deposit-dispute escalations in the first quarter thanks to the escrow-style hold mechanism.',
  },
  zebrapad: {
    role: 'Flutter Developer',
    year: '2022',
    features: [
      'Personalised birth-chart calculation engine (Vedic and Western systems) on-device',
      'Daily horoscope and numerology reading generated from user birth data',
      'Interactive chart wheel with tap-to-expand planet and house interpretations',
      'Compatibility calculator for relationship, career and health domains',
      'Push notification daily digest — morning insights delivered at user-preferred time',
      'Dual-platform release: Google Play (Zebrapad) and App Store (AstroNum)',
    ],
    challenges: [
      'Implementing Vedic chart math (sidereal positions, house systems, dasha periods) in pure Dart without a native astrology library — required porting a Python ephemeris algorithm',
    ],
    outcome:
      'Available on both Google Play and the App Store. Crossed 8 000 monthly active users within six months. Average daily notification open rate of 41 %.',
  },
  recipevault: {
    role: 'Flutter Developer',
    year: '2023',
    features: [
      'Rich-text recipe editor with ingredient quantity scaling (e.g. serves 2 → serves 8)',
      'Category and tag system with smart search across title, ingredient and tag fields',
      'Meal planner: drag recipes onto a weekly calendar grid with automatic shopping list generation',
      'Cloud sync across devices via Firebase Firestore with offline-first Hive cache',
      'Import recipes from URLs using structured-data (schema.org) extraction and HTML fallback',
      'Published on the Apple App Store with iCloud backup support',
    ],
    challenges: [
      'Implementing reliable recipe import from arbitrary cooking websites — solved by prioritising JSON-LD schema.org/Recipe data with heuristic HTML parsing as a fallback',
    ],
    outcome:
      'On the App Store. 300+ five-star reviews with users citing the meal-planning and shopping-list workflow as the standout feature.',
  },
  sourcecad: {
    role: 'Flutter Developer',
    year: '2023',
    features: [
      'Course catalogue with search, filters (difficulty, duration, instructor) and preview trailers',
      'Video lesson player with HLS streaming, chapter navigation and playback bookmarks',
      'Structured learning path: prerequisite gating ensures students progress in sequence',
      'Progress tracking: per-lesson completion, module percentage and course certificate on completion',
      'Downloadable CAD project files bundled with lessons for offline practice',
      'Cross-platform release: Android and iOS from a single Flutter codebase',
    ],
    challenges: [
      "Gating prerequisite lessons without a dedicated backend — enforced via Firestore document rules keyed to the user's completion map, evaluated server-side on every read",
    ],
    outcome:
      'Live on both platforms. 1 200+ enrolled students in the first semester. Adopted by three engineering colleges in Gujarat as a supplementary CAD curriculum tool.',
  },
  busineswise: {
    role: 'Flutter Developer',
    year: '2024',
    features: [
      'Open market bidding for wholesale requirements and product listings',
      'Business profile creation with KYC verification',
      'Price transparency with real-time seller comparison',
      'Direct bank transfer payment flow',
      'Analytics dashboard for sellers — orders, revenue, leads',
      'Multi-category catalogue: textiles, hospitality supplies, healthcare',
      'Push notifications for new bids and order updates via FCM',
    ],
    challenges: [
      'Implementing a real-time open bidding system where multiple sellers respond to a single buyer requirement without race conditions on Firebase',
      'Designing a KYC-gated onboarding flow that felt frictionless for traditional SMB operators unfamiliar with digital verification',
    ],
    outcome:
      'Trusted by 2,000+ businesses across India. Buyers report 11–20% savings on wholesale procurement. Active verticals include hospitality, healthcare, textiles and manufacturing.',
  },
  gopayana: {
    role: 'Lead Flutter Developer',
    year: '2024 – Present',
    features: [
      'Dual-app architecture: separate Passenger and Driver apps from a single Flutter codebase',
      'Real-time ride booking with auto and cab selection, instant driver matching via geo-queries',
      'Live driver tracking on Google Maps with ETA and route polyline updates via Socket.IO',
      'Driver subscription model: ₹25/day flat fee onboarding with Razorpay recurring billing',
      'Zero-commission earnings model — all fares go directly to the driver',
      'Transparent fare calculator with no surge pricing logic',
      'OTP-based trip start and completion verification',
      'In-app 24/7 support chat and ticket system',
      'Admin dashboard to manage driver approvals, subscriptions and ride history',
    ],
    challenges: [
      'Building a fair driver-matching algorithm that accounts for geo-proximity, vehicle type and driver availability without biasing against subscription tier',
      'Implementing real-time Socket.IO location streaming that works reliably on low-bandwidth 3G networks common in tier-2 Karnataka cities',
      'Designing the subscription billing flow so drivers are never blocked mid-shift due to payment failures — solved with a 24-hour grace period and SMS reminders',
    ],
    outcome:
      'Live in Mysuru, Karnataka under Indeamind Technologies Pvt. Ltd. Tagline: "Ride Smart. Ride Local. Ride GoPayana." Disrupting local mobility by eliminating ride-app commissions — drivers keep 100% of fares on a flat ₹25/day subscription.',
  },
}

// ---------------------------------------------------------------------------

export const contactInfo = {
  emailjsServiceId: 'service_7aledoj',
  emailjsTemplateId: 'template_7avw32n',
  emailjsPublicKey: 'G2oDydfqN2ur3Qbmu',
  firebaseUrl: 'https://portfolio-hitarth-default-rtdb.firebaseio.com/contect.json',
}

