// Central place for all CYCLOREX RECYCLE content and settings.
// Update phone/email/social links here as soon as they exist — nothing else needs to change.

// Set NEXT_PUBLIC_SITE_URL once CYCLOREX has a domain — used for the sitemap and robots.txt.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const company = {
  name: "CYCLOREX RECYCLE",
  founded: "2026",
  founder: "BORO Ariel Stanislas",
  founderRole: "Directeur Général — Fondateur",
  teamSize: 6,
  workshop: "Pissy, Ouagadougou, Burkina Faso",
  cities: ["Ouagadougou", "Bobo-Dioulasso"],
  sector:
    "Recyclage — Économie circulaire — Valorisation des déchets — Design durable",
  slogan:
    "Donnons une seconde vie aux déchets. Construisons un avenir durable.",
  altSlogans: [
    "Transformer les déchets. Créer de la valeur.",
    "Du déchet à l'utile. De l'utile à l'impact.",
    "Recyclons aujourd'hui, construisons demain.",
    "Des déchets transformés en solutions.",
  ],
  seoTitle: "CYCLOREX RECYCLE | Recyclage et valorisation des pneus au Burkina Faso",
  seoDescription:
    "CYCLOREX RECYCLE transforme les pneus usagés en mobilier, objets utiles et solutions durables pour contribuer à l'économie circulaire au Burkina Faso.",
};

// Intentionally left null/empty until CYCLOREX provides the real values.
// Components must treat these as "coming soon" rather than inventing data.
export const contact = {
  phone: null as string | null,
  whatsapp: null as string | null,
  email: null as string | null,
  address: "Pissy, Ouagadougou, Burkina Faso",
  gpsUrl: null as string | null,
};

export const social = {
  facebook: null as string | null,
  instagram: null as string | null,
  tiktok: null as string | null,
  linkedin: null as string | null,
};

export type NavLink = { href: string; label: string };

export const mainNav: NavLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/nos-solutions", label: "Nos solutions" },
  { href: "/nos-produits", label: "Nos produits" },
  { href: "/notre-impact", label: "Notre impact" },
  { href: "/notre-equipe", label: "Notre équipe" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

export const footerSecondaryNav: NavLink[] = [
  { href: "/nos-produits", label: "Catalogue produits" },
  { href: "/galerie", label: "Galerie" },
  { href: "/partenaires", label: "Devenir partenaire" },
  { href: "/devis", label: "Demander un devis" },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Collecte",
    description:
      "Nous récupérons les pneus usagés auprès de vulcanisateurs, garages, ateliers automobiles, partenaires et particuliers, afin d'éviter qu'ils ne soient abandonnés dans l'environnement.",
  },
  {
    step: "02",
    title: "Tri",
    description:
      "Les pneus collectés sont triés selon leur état, leur dimension et leur possibilité de valorisation.",
  },
  {
    step: "03",
    title: "Préparation",
    description:
      "Les pneus sont nettoyés, préparés, découpés et adaptés aux besoins de fabrication.",
  },
  {
    step: "04",
    title: "Transformation",
    description:
      "Ils sont associés à d'autres matériaux nécessaires à la fabrication : structures métalliques, bois, tissus, peinture, éléments de fixation.",
  },
  {
    step: "05",
    title: "Création",
    description: "Les matières préparées deviennent de nouveaux produits.",
  },
  {
    step: "06",
    title: "Valorisation",
    description:
      "Les produits finis sont proposés aux particuliers, entreprises, institutions et autres organisations.",
  },
];

export const collectionSources = [
  "Vulcanisateurs",
  "Garages",
  "Ateliers automobiles",
  "Espaces où des pneus sont abandonnés",
  "Opérations de collecte",
  "Partenaires et particuliers",
];

export type ProductCategory = {
  icon: "chair" | "flower" | "palette" | "ruler";
  title: string;
  description: string;
  items: string[];
};

export const productCategories: ProductCategory[] = [
  {
    icon: "chair",
    title: "Mobilier en pneus recyclés",
    description:
      "CYCLOREX transforme les pneus usagés en mobilier original et durable. Les produits peuvent associer le pneu à différents matériaux selon le modèle et les besoins du client.",
    items: [
      "Tables",
      "Tables de bureau",
      "Chaises",
      "Fauteuils",
      "Poufs",
      "Assises",
      "Mobilier personnalisé",
    ],
  },
  {
    icon: "flower",
    title: "Pots de fleurs",
    description:
      "Nous transformons les pneus usagés en pots de fleurs et éléments décoratifs destinés aux maisons, bureaux, restaurants, hôtels, jardins, espaces publics et événements.",
    items: [
      "Maisons",
      "Bureaux",
      "Restaurants",
      "Hôtels",
      "Jardins",
      "Espaces publics",
      "Événements",
    ],
  },
  {
    icon: "palette",
    title: "Décoration",
    description:
      "Les pneus peuvent également être transformés en éléments décoratifs et objets personnalisés. L'objectif est de démontrer qu'un déchet peut devenir un élément esthétique et fonctionnel.",
    items: ["Objets décoratifs", "Pièces personnalisées"],
  },
  {
    icon: "ruler",
    title: "Fabrication sur commande",
    description:
      "CYCLOREX peut développer des produits personnalisés selon les dimensions, les couleurs, le style, l'utilisation, l'espace disponible et les besoins du client.",
    items: [
      "Dimensions",
      "Couleurs",
      "Style",
      "Utilisation",
      "Espace disponible",
      "Besoins du client",
    ],
  },
];

export type TargetClient = { title: string; description: string };

export const targetClients: TargetClient[] = [
  {
    title: "Particuliers",
    description:
      "Personnes souhaitant aménager leur maison, jardin ou espace personnel.",
  },
  {
    title: "Entreprises",
    description:
      "Entreprises souhaitant aménager leurs bureaux ou intégrer une dimension environnementale dans leurs espaces.",
  },
  {
    title: "Hôtels et restaurants",
    description: "Mobilier, décoration et aménagement d'espaces.",
  },
  {
    title: "Écoles et universités",
    description: "Mobilier et solutions d'aménagement.",
  },
  {
    title: "Institutions et collectivités",
    description:
      "Solutions de valorisation des déchets et aménagement d'espaces.",
  },
  {
    title: "ONG et organisations environnementales",
    description:
      "Partenariats autour de l'économie circulaire et de la sensibilisation.",
  },
  {
    title: "Événements",
    description: "Mobilier et décoration personnalisés.",
  },
  {
    title: "Promoteurs et aménageurs",
    description: "Solutions d'aménagement et de décoration pour différents espaces.",
  },
];

export type ImpactObjective = {
  icon: "recycle" | "globe" | "building" | "briefcase" | "users" | "lightbulb" | "refresh";
  title: string;
  description: string;
};

export const impactObjectives: ImpactObjective[] = [
  {
    icon: "recycle",
    title: "Valoriser les déchets",
    description:
      "Transformer les pneus usagés en produits utiles plutôt que de les laisser devenir des déchets abandonnés.",
  },
  {
    icon: "globe",
    title: "Protéger l'environnement",
    description:
      "Réduire la présence de pneus usagés dans les espaces urbains et encourager des pratiques de valorisation.",
  },
  {
    icon: "building",
    title: "Des villes plus propres",
    description:
      "Participer, à notre échelle, à l'assainissement des espaces urbains.",
  },
  {
    icon: "briefcase",
    title: "Créer de la valeur économique",
    description:
      "Faire du recyclage une activité économique viable et créatrice de valeur.",
  },
  {
    icon: "users",
    title: "Des opportunités pour les jeunes",
    description:
      "Développer progressivement des emplois et des compétences dans la collecte, la transformation, la fabrication, le design et la commercialisation.",
  },
  {
    icon: "lightbulb",
    title: "Encourager l'innovation",
    description:
      "Développer de nouveaux produits et de nouvelles méthodes de valorisation.",
  },
  {
    icon: "refresh",
    title: "Promouvoir l'économie circulaire",
    description:
      "Passer d'un modèle « produire → utiliser → jeter » à une logique récupérer → transformer → réutiliser → valoriser.",
  },
];

export const environmentalDimensions = [
  {
    icon: "recycle" as const,
    title: "Environnementale",
    description: "Réduire l'abandon des pneus et favoriser leur valorisation.",
  },
  {
    icon: "building" as const,
    title: "Urbaine",
    description: "Contribuer à des espaces plus propres et mieux entretenus.",
  },
  {
    icon: "briefcase" as const,
    title: "Économique",
    description: "Créer de la valeur à partir d'une matière considérée comme un déchet.",
  },
  {
    icon: "users" as const,
    title: "Sociale",
    description:
      "Développer des opportunités d'emploi et de compétences dans les métiers du recyclage.",
  },
  {
    icon: "lightbulb" as const,
    title: "Innovation",
    description:
      "Transformer une contrainte environnementale en opportunité entrepreneuriale.",
  },
  {
    icon: "refresh" as const,
    title: "Économie circulaire",
    description:
      "Maintenir les matières en circulation le plus longtemps possible en leur donnant une nouvelle utilisation.",
  },
];

export const teamFunctions = [
  "Direction générale",
  "Marketing & communication",
  "Finance",
  "Commercial & relations clients",
  "Opérations terrain",
  "Production / transformation",
];

export type PartnershipType = {
  title: string;
  description: string;
};

export const partnershipTypes: PartnershipType[] = [
  {
    title: "Partenaires de collecte",
    description:
      "Vulcanisateurs, garages, entreprises et acteurs disposant de pneus usagés.",
  },
  {
    title: "Partenaires techniques",
    description:
      "Experts, artisans, designers, ingénieurs et structures pouvant contribuer à améliorer les procédés de transformation.",
  },
  {
    title: "Partenaires financiers",
    description:
      "Investisseurs, programmes d'accompagnement, fonds et organisations souhaitant soutenir le développement de l'économie circulaire.",
  },
  {
    title: "Partenaires commerciaux",
    description: "Entreprises, hôtels, restaurants, institutions et distributeurs.",
  },
  {
    title: "Partenaires institutionnels",
    description:
      "ONG, collectivités, programmes environnementaux et organisations de développement.",
  },
];

export const partnershipFormTypes = [
  "Collecte de pneus",
  "Financement",
  "Fourniture d'équipements",
  "Partenariat commercial",
  "Partenariat technique",
  "Accompagnement",
  "Autre",
];

export const financingNeeds = [
  "Financement",
  "Équipements",
  "Machines",
  "Accompagnement technique",
  "Accompagnement entrepreneurial",
  "Partenariats commerciaux",
  "Mentorat",
  "Accès à de nouveaux marchés",
];

export const whyCyclorex = [
  {
    title: "Une matière disponible",
    description:
      "Nous travaillons avec une matière qui constitue un problème environnemental mais qui peut être valorisée.",
  },
  {
    title: "Une approche créative",
    description:
      "Nous ne voulons pas simplement recycler. Nous voulons créer des produits désirables, utiles et esthétiques.",
  },
  {
    title: "Une initiative locale",
    description: "CYCLOREX est une initiative burkinabè développée depuis Ouagadougou.",
  },
  {
    title: "Une équipe jeune",
    description:
      "Notre équipe porte une vision entrepreneuriale tournée vers l'innovation et l'impact.",
  },
  {
    title: "Une ambition africaine",
    description:
      "Notre objectif à long terme dépasse la seule ville de Ouagadougou : nous voulons contribuer au développement d'une véritable industrie de valorisation des déchets en Afrique.",
  },
];

export const experiences = [
  {
    title: "TEF — Tony Elumelu Foundation",
    description:
      "Cette expérience constitue une première étape dans le développement entrepreneurial du projet.",
  },
];

export const productTypeOptions = [
  "Table",
  "Table de bureau",
  "Chaise",
  "Fauteuil",
  "Pouf / assise",
  "Pot de fleurs",
  "Décoration",
  "Mobilier personnalisé",
  "Autre",
];
