export function contactsFields() {
  return [
    {
      type: "object",
      name: "section_title",
      label: "Section title",
      fields: [
        {
          type: "string",
          name: "it",
          label: "IT",
        },
        {
          type: "string",
          name: "en",
          label: "EN",
        },
      ],
    },
    {
      type: "string",
      name: "company",
      label: "Company",
    },
    {
      type: "object",
      name: "registered_office",
      label: "registered office",
      fields: [
        {
          type: "string",
          name: "it",
          label: "IT",
        },
        {
          type: "string",
          name: "en",
          label: "EN",
        },
      ],
    },
    {
      type: "string",
      name: "partita_iva",
      label: "Partita iva",
    },
    {
      type: "string",
      name: "capitale_sociale",
      label: "Capitale sociale",
    },
    {
      type: "string",
      name: "rea_mi",
      label: "REA MI",
    },
  ];
}
export function homeFields() {
  return [
    ...metadataFields(),
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Sections",
      name: "sections",
      templates: [
        {
          fields: teamFields(),
          label: "team",
          name: "team",
        },
        {
          fields: partnersFields(),
          label: "partners",
          name: "partners",
        },
        {
          fields: languagesFields(),
          label: "languages",
          name: "languages",
        },
        {
          fields: servicesFields(),
          label: "services",
          name: "services",
        },
        {
          fields: how_we_do_itFields(),
          label: "how_we_do_it",
          name: "how_we_do_it",
        },
      ],
    },
  ];
}
export function how_we_do_itFields() {
  return [
    {
      type: "object",
      name: "section_title",
      label: "Section title",
      fields: [
        {
          type: "string",
          name: "it",
          label: "IT",
        },
        {
          type: "string",
          name: "en",
          label: "EN",
        },
      ],
    },
    {
      type: "object",
      name: "paragraph_1",
      label: "Paragraph 1",
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "object",
          name: "title",
          label: "Title",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
            },
            {
              type: "string",
              name: "en",
              label: "EN",
            },
          ],
        },
        {
          type: "object",
          name: "description",
          label: "Description",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
              ui: {
                component: "textarea",
              },
            },
            {
              type: "string",
              name: "en",
              label: "EN",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
        {
          type: "object",
          name: "subtitle",
          label: "Subtitle",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
            },
            {
              type: "string",
              name: "en",
              label: "EN",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "paragraph_2",
      label: "Paragraph 2",
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "object",
          name: "description",
          label: "Description",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
              ui: {
                component: "textarea",
              },
            },
            {
              type: "string",
              name: "en",
              label: "EN",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
        {
          type: "object",
          name: "button",
          label: "Button",
          fields: [
            {
              type: "object",
              name: "label",
              label: "Label",
              fields: [
                {
                  type: "string",
                  name: "it",
                  label: "IT",
                },
                {
                  type: "string",
                  name: "en",
                  label: "EN",
                },
              ],
            },
            {
              type: "object",
              name: "action",
              label: "Action",
              fields: [
                {
                  type: "string",
                  name: "it",
                  label: "IT",
                },
                {
                  type: "string",
                  name: "en",
                  label: "EN",
                },
              ],
            },
          ],
        },
      ],
    },
  ];
}
export function job_positionsFields() {
  return [
    ...metadataFields(),
    {
      type: "object",
      name: "title_positions",
      label: "Title positions",
      fields: [
        {
          type: "string",
          name: "it",
          label: "IT",
        },
        {
          type: "string",
          name: "en",
          label: "EN",
        },
      ],
    },
    {
      type: "object",
      name: "job_positions",
      label: "Job positions",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Application",
        },
        {
          type: "string",
          name: "lang",
          label: "Language",
          options: ["it", "en"],
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "icon",
          label: "Icon",
        },
        {
          type: "object",
          name: "button",
          label: "Button",
          fields: [
            {
              type: "string",
              name: "label",
              label: "Label",
            },
            {
              type: "string",
              name: "action",
              label: "Action",
            },
          ],
        },
      ],
    },
    {
      type: "image",
      name: "cover",
      label: "cover",
    },
  ];
}
export function languagesFields() {
  return [
    {
      type: "object",
      name: "section_title",
      label: "Section title",
      fields: [
        {
          type: "string",
          name: "it",
          label: "IT",
        },
        {
          type: "string",
          name: "en",
          label: "EN",
        },
      ],
    },
    {
      type: "object",
      name: "description",
      label: "Description",
      fields: [
        {
          type: "string",
          name: "it",
          label: "IT",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "en",
          label: "EN",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "button",
      label: "Button",
      fields: [
        {
          type: "object",
          name: "label",
          label: "Label",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
            },
            {
              type: "string",
              name: "en",
              label: "EN",
            },
          ],
        },
        {
          type: "object",
          name: "action",
          label: "Action",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
            },
            {
              type: "string",
              name: "en",
              label: "EN",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "languages",
      label: "Languages",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "ISO code",
        },
        {
          type: "object",
          name: "lang",
          label: "Lang",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
            },
            {
              type: "string",
              name: "en",
              label: "EN",
            },
          ],
        },
        {
          type: "object",
          name: "label",
          label: "Label",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
            },
            {
              type: "string",
              name: "en",
              label: "EN",
            },
          ],
        },
      ],
    },
  ];
}
export function menuFields() {
  return [
    {
      type: "object",
      list: true,
      name: "menu",
      label: "Menu",
      fields: [
        {
          type: "object",
          name: "action",
          label: "Action",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
            },
            {
              type: "string",
              name: "en",
              label: "EN",
            },
          ],
        },
        {
          type: "object",
          name: "label",
          label: "Label",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
            },
            {
              type: "string",
              name: "en",
              label: "EN",
            },
          ],
        },
        {
          type: "boolean",
          name: "anchor",
          label: "Anchor",
        }
      ]
    }
  ];
}
export function metadataFields() {
  return [
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "object",
      name: "title_tag",
      label: "Title tag",
      fields: [
        {
          type: "string",
          name: "it",
          label: "IT",
        },
        {
          type: "string",
          name: "en",
          label: "EN",
        },
      ],
    },
    {
      type: "object",
      name: "description_tag",
      label: "Description tag",
      fields: [
        {
          type: "string",
          name: "it",
          label: "IT",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "en",
          label: "EN",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ];
}
export function partnersFields() {
  return [
    {
      type: "object",
      name: "section_title",
      label: "Section title",
      fields: [
        {
          type: "string",
          name: "it",
          label: "IT",
        },
        {
          type: "string",
          name: "en",
          label: "EN",
        },
      ],
    },
    {
      type: "object",
      name: "brand",
      label: "Brands",
      list: true,
      fields: [
        {
          type: "string",
          name: "brand",
          label: "Brand",
        },
        {
          type: "image",
          name: "logo",
          label: "Logo",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
      ],
    },
  ];
}
export function projectFields() {
  return [
    ...metadataFields(),
    {
      type: "string",
      name: "project_name",
      label: "Project name",
    },
    {
      type: "object",
      name: "quote",
      label: "Quote",
      fields: [
        {
          type: "string",
          name: "it",
          label: "IT",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "en",
          label: "EN",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "witness",
          label: "witness",
        },
      ],
    },
    {
      type: "object",
      name: "media",
      label: "Media",
      fields: [
        {
          type: "object",
          name: "trailer",
          label: "trailer",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
            },
            {
              type: "string",
              name: "en",
              label: "EN",
            },
          ],
        },
        {
          type: "string",
          name: "video_reel",
          label: "Video Reel",
        },
        {
          type: "image",
          name: "cover",
          label: "Cover",
        },
        {
          type: "image",
          name: "gallery",
          label: "Gallery",
          list: true,
        },
        {
          type: "object",
          name: "card_image",
          label: "Card image",
          fields: [
            {
              type: "image",
              name: "normal",
              label: "normal",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "info",
      label: "Info",
      fields: [
        {
          type: "object",
          name: "client",
          label: "Client",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
            },
            {
              type: "string",
              name: "en",
              label: "EN",
            },
          ],
        },
        {
          type: "object",
          name: "period",
          label: "Period",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
            },
            {
              type: "string",
              name: "en",
              label: "EN",
            },
          ],
        },
        {
          type: "string",
          name: "iso_codes",
          label: "ISO codes",
          list: true,
          ui: {
            component: "tags",
          },
        },
        {
          type: "object",
          name: "registration_hours",
          label: "Registration hours",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
            },
            {
              type: "string",
              name: "en",
              label: "EN",
            },
          ],
        },
        {
          type: "object",
          name: "dubbed_voices",
          label: "Dubbed_voices",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
            },
            {
              type: "string",
              name: "en",
              label: "EN",
            },
          ],
        },
        {
          type: "object",
          name: "translations",
          label: "Translations",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
              list: true,
              ui: {
                component: "tags",
              },
            },
            {
              type: "string",
              name: "en",
              label: "EN",
              list: true,
              ui: {
                component: "tags",
              },
            },
          ],
        },
        {
          type: "object",
          name: "dubbing",
          label: "Dubbing",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
              list: true,
              ui: {
                component: "tags",
              },
            },
            {
              type: "string",
              name: "en",
              label: "EN",
              list: true,
              ui: {
                component: "tags",
              },
            },
          ],
        },
      ],
    },
    {
      type: "boolean",
      name: "reel",
      label: "Reel",
    },
    {
      type: "number",
      name: "reel_order",
      label: "Reel_order",
    },
  ];
}
export function servicesFields() {
  return [
    {
      type: "object",
      name: "section_title",
      label: "Section title",
      fields: [
        {
          type: "string",
          name: "it",
          label: "IT",
        },
        {
          type: "string",
          name: "en",
          label: "EN",
        },
      ],
    },
    {
      type: "object",
      name: "services",
      label: "Services",
      list: true,
      fields: [
        {
          type: "string",
          name: "it",
          label: "IT",
        },
        {
          type: "string",
          name: "en",
          label: "EN",
        },
      ],
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
  ];
}
export function socialsFields() {
  return [
    {
      type: "object",
      name: "section_title",
      label: "Section title",
      fields: [
        {
          type: "string",
          name: "it",
          label: "IT",
        },
        {
          type: "string",
          name: "en",
          label: "EN",
        },
      ],
    },
    {
      type: "object",
      name: "socials",
      label: "Socials",
      list: true,
      fields: [
        {
          type: "string",
          name: "label",
          label: "label",
        },
        {
          type: "string",
          name: "action",
          label: "action",
        },
        {
          type: "image",
          name: "icon",
          label: "icon",
        },
      ],
    },
  ];
}
export function teamFields() {
  return [
    {
      type: "object",
      name: "section_title",
      label: "Section title",
      fields: [
        {
          type: "string",
          name: "it",
          label: "IT",
        },
        {
          type: "string",
          name: "en",
          label: "EN",
        },
      ],
    },
    {
      type: "object",
      name: "description",
      label: "Description",
      fields: [
        {
          type: "string",
          name: "it",
          label: "IT",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "en",
          label: "EN",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "button",
      label: "Button",
      fields: [
        {
          type: "object",
          name: "label",
          label: "Label",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
            },
            {
              type: "string",
              name: "en",
              label: "EN",
            },
          ],
        },
        {
          type: "object",
          name: "action",
          label: "Action",
          fields: [
            {
              type: "string",
              name: "it",
              label: "IT",
            },
            {
              type: "string",
              name: "en",
              label: "EN",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "members",
      label: "Members",
      list: true,
      fields: [
        {
          type: "image",
          name: "picture",
          label: "Picture",
        },
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "string",
          name: "qualification",
          label: "Qualification",
        },
      ],
    },
  ];
}
