export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6074686a7b914e49420f4299",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ivtmn9nw",
                  apiId: "b4124ea0-a58a-4c98-af9d-5e9db82dd066",
                },
                {
                  buildHookId: "6074686b44bb23449cd9cc22",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-1z2yuccy",
                  apiId: "4eed275d-9cea-466e-99d1-8ccb59349639",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Vini4l/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-1z2yuccy.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
