import Hero from "../../_components/hero";
// import { sanityFetch } from "@/sanity/lib/live";

const AboutBanner = async () => {
  // const result = await sanityFetch({
  //   query: `*[_type == "heroImages"][0]{
  //             home[]{asset->},
  //             about[]{asset->},
  //             projects[]{asset->},
  //             contact[]{asset->}
  //           }`,
  // });

  // console.log(result.data);

  // const data = {
  //   _createdAt: "2025-06-21T17:37:54Z",
  //   _id: "image-e7f67b3a7af9d31e650f9ade992eb2e16a5cbb12-3312x4140-jpg",
  //   _rev: "YxY05HRouBO6bGbgMs1R6a",
  //   _type: "sanity.imageAsset",
  //   _updatedAt: "2025-06-21T17:37:54Z",
  //   assetId: "e7f67b3a7af9d31e650f9ade992eb2e16a5cbb12",
  //   extension: "jpg",
  //   metadata: {
  //     _type: "sanity.imageMetadata",
  //     blurHash: "dHFht[?ar;%1U[Vsxuay?^%MRje=4nMxWARk?bxuo#bb",
  //     dimensions: {
  //       _type: "sanity.imageDimensions",
  //       aspectRatio: 0.8,
  //       height: 4140,
  //       width: 3312,
  //     },
  //     hasAlpha: false,
  //     isOpaque: true,
  //     lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAZABQDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAUECAEDB//EACcQAAIBAwMDAwUAAAAAAAAAAAECAwAEBRESEwYhMQc0chQVUbHh/8QAFwEBAQEBAAAAAAAAAAAAAAAABQMAAf/EABwRAQACAwADAAAAAAAAAAAAAAEAAhETIRQxUf/aAAwDAQACEQMRAD8AiZq7tLG5UXcyx7hooY+aWXKq1w5XuNo7/moHUuYxV1lZwzbuOMpI+zUJ/ah4bP2N4TFG7q4ARRIpBIFFlEPUTyfYwuowZ21orbK6tK5OnmisTkxlfTnqSLKwxjEyfQ84kuJQQd3f9U86twskVvyWFntaMak8OlWRm8UlzPsp/iaUKFTBC97awsqfb5K7dWP2+diG0JVCRRXe8P7Q/M0VLRV6y/kJwJ//2Q==",
  //     palette: {
  //       _type: "sanity.imagePalette",
  //       darkMuted: {
  //         _type: "sanity.imagePaletteSwatch",
  //         background: "#544339",
  //         foreground: "#fff",
  //         population: 6.82,
  //         title: "#fff",
  //       },
  //       darkVibrant: {
  //         _type: "sanity.imagePaletteSwatch",
  //         background: "#69361a",
  //         foreground: "#fff",
  //         population: 0.14,
  //         title: "#fff",
  //       },
  //       dominant: {
  //         _type: "sanity.imagePaletteSwatch",
  //         background: "#544339",
  //         foreground: "#fff",
  //         population: 6.82,
  //         title: "#fff",
  //       },
  //       lightMuted: {
  //         _type: "sanity.imagePaletteSwatch",
  //         background: "#ccbaa8",
  //         foreground: "#000",
  //         population: 0.1,
  //         title: "#fff",
  //       },
  //       lightVibrant: {
  //         _type: "sanity.imagePaletteSwatch",
  //         background: "#dcb594",
  //         foreground: "#000",
  //         population: 0.01,
  //         title: "#fff",
  //       },
  //       muted: {
  //         _type: "sanity.imagePaletteSwatch",
  //         background: "#9c7856",
  //         foreground: "#fff",
  //         population: 5.65,
  //         title: "#fff",
  //       },
  //       vibrant: {
  //         _type: "sanity.imagePaletteSwatch",
  //         background: "#ca9873",
  //         foreground: "#000",
  //         population: 0.5,
  //         title: "#fff",
  //       },
  //     },
  //   },
  //   mimeType: "image/jpeg",
  //   originalFilename: "IMG_0392.JPG",
  //   path: "images/3yy6phwl/production/e7f67b3a7af9d31e650f9ade992eb2e16a5cbb12-3312x4140.jpg",
  //   sha1hash: "e7f67b3a7af9d31e650f9ade992eb2e16a5cbb12",
  //   size: 2853836,
  //   uploadId: "afiLFlPhPmCAHJPUAeLhSyjyGMw2vaEJ",
  //   url: "https://cdn.sanity.io/images/3yy6phwl/production/e7f67b3a7af9d31e650f9ade992eb2e16a5cbb12-3312x4140.jpg",
  // };

  return (
    <Hero
      src="/images/about-hero.jpg"
      subtitle="Info about myself"
      title="Designing Seamless & Scalable Interfaces for Web2 & Web3."
      description="I'm a Frontend Developer passionate about crafting seamless,
  high-performing web experiences. I build Web2/Web3 Frontend that makes smart contract usable, fast and seamless"
    />
  );
};

export default AboutBanner;
