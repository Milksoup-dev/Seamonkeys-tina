import { defineConfig } from "tinacms";
import {homeFields, projectFields, job_positionsFields, contactsFields, menuFields, socialsFields} from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
console.log("Config", defineConfig)
export default defineConfig({
  branch,
  clientId: "324523cd-5545-4378-b87e-b717bf76b0c0", // Get this from tina.io
  token: "6c8618c07ec5005ac510f63144ef9db9c2a0bad2", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      console.log("pack", pack.TinaCloudCloudinaryMediaStore)
      return pack.TinaCloudCloudinaryMediaStore;
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Home",
        name: "home",
        path: "content/home",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...homeFields(),
        ],
      },
      {
        format: "md",
        label: "Portfolio",
        name: "portfolio",
        path: "content/portfolio",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...projectFields(),
        ],
      },
      {
        format: "md",
        label: "Lavora con noi",
        name: "lavora_con_noi",
        path: "content/work-with-us",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...job_positionsFields(),
        ],
      },
      {
        format: "md",
        label: "Partials",
        name: "partials",
        path: "content/partials",
        match: {
          include: "**/*",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...contactsFields(),
            ],
            label: "contacts",
            name: "contacts",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...menuFields(),
            ],
            label: "menu",
            name: "menu",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...socialsFields(),
            ],
            label: "socials",
            name: "socials",
          },
        ],
      },
    ],
  },
});
