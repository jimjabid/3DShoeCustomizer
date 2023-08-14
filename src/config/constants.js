import {
  swatch,
  fileIcon,
  ai,
  logoShirt,
  stylishShirt,
  logoShoe,
  stylishShoe,
} from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  // {
  //   name: "logoShirt",
  //   icon: logoShirt,
  // },
  // {
  //   name: "stylishShirt",
  //   icon: stylishShirt,
  // },
  {
    name: "logoShoe",
    icon: logoShoe,
  },
  {
    name: "stylishShirt",
    icon: stylishShoe,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
