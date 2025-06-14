declare type tImageModal = { active: boolean; index: number };

declare interface HeadingProps {
  subtitle?: string;
  description?: string;
  title: ReactElement | string;
  back?: boolean;
}

declare interface SubheadingProps {
  subtitle?: string;
  title: ReactElement | string;
  path?: string;
}

declare interface SharedFieldProps {
  title: string;
  limit?: number;
  type: "experiences" | "educations" | "initiatives" | "achievements";
  path?: string;
  subtitle?: string;
  documents?: File;
}

declare type tProjectProps = {
  title: string;
  slug: string;
  featured: boolean;
  createdAt: string;
  url?: {
    github?: string | null;
    website?: string | null;
  };
  src: string;
  descriptions: string[];
  categories: string[];
};

declare interface InventoryProps {
  label: string;
  description?: string;
  icon?: string;
  iconDark?: string;
  url?: string;
  category: string;
}

declare interface StackInventoryProps {
  category: string;
  stacks: TechStackProps[];
}

declare interface ProjectUrl {
  github?: string;
  website?: string;
}

declare interface SanityImageAsset {
  _type: "image";
  _key?: string;
  asset: {
    _type: "reference";
    _ref: string;
  };
  alt?: string;
}

declare interface ProjectProps {
  _id: string;
  _type: "projects";
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  featured: boolean;
  publishedAt: string;
  url: ProjectUrl;
  descriptions: string[];
  src: SanityImageAsset;
  snapshots: SanityImageAsset[];
}
