export default {
  items: [
    {
      name: "menu 1",
      url: "/",
      icon: "fa fa-dashcube"
    },
    {
      name: "parent",
      url: "/",
      icon: "fa fa-dashcube",
      children: [
        {
          name: "child1",
          url: "/",
          icon: "fa fa-dashcube",
        },
        {
          name: "child2",
          url: "/",
          icon: "fa fa-dashcube",
          children: [
            {
              name: "grand Child 1",
              url: "/",
              icon: "fa fa-dashcube",
            },
            {
              name: "grand Child 2",
              url: "/",
              icon: "fa fa-dashcube",
              children: [
                {
                  name: "great grand Child 1",
                  url: "/",
                  icon: "fa fa-dashcube",
                },
                {
                  name: "great grand Child 2",
                  url: "/",
                  icon: "fa fa-dashcube",
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "menu 3",
      url: "/",
      icon: "fa fa-dashcube"
    },
    {
      name: "menu 4",
      url: "/",
      icon: "fa fa-dashcube"
    },

    {
      name: "menu 5",
      url: "/",
      icon: "fa fa-dashcube"
    },
  ]
};
