type ImageResponseProp = {
  asset: {
    url: string;
  };
};

type ProjectPropType = {
  publishedAt: string;
  _id: string;
  banner: {
    _type: string;
    asset: {
      _type: string;
      _ref: string;
    };
  };
  descriptions: string;
  featured: boolean;
  categories: {
    _id: string;
    category: string;
    slug: string;
  }[];
  links: {
    repo?: string;
    live?: string;
  };
  title: string;
  slug: string;
  snapshots: {
    _key: string;
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
    alt: string;
  }[];
};

type SharedFieldsType = {
  _id: string;
  title: string;
  description: string;
  fromDate?: string;
  toDate?: string;
  keyPoints?: string[];
};

type IHeadingProps = {
  title: React.ReactElement;
  subtitle?: string;
  cn?: string;
  isReversed?: boolean;
  path?: string;
};

type SharedFieldProps = {
  title: string;
  limit?: number;
  type: "experiences" | "educations" | "initiatives";
  path?: string;
  subtitle?: string;
};

type StackProps = {
  _id: string;
  name: string;
  techItems: {
    _key: string;
    name: string;
    url: string;
    icon: {
      asset: {
        _ref: string;
        _type: string;
      };
      _type: string;
    };
  }[];
};
