export interface Theme {
  colors: {
    skyBlue: "#6CABDD";
    blue: "#1C2C5B";
    navy: "#1B2230";
    navy_2: "#252e43";
    glod: "#FFC659";
    darkGold: "#D4A12A";
    red: "#EC3325";
    gray: "#7f8490";
  };
  boxShadow: {
    normal: "0 3px 8px 0 rgb(0 0 0 / 10%)";
    navy: "0 3px 8px 0 #1B2230";
  };
  headerHeight: "88px";
}

interface ThemeGroup {
  // light: Theme;
  dark: Theme;
}

// export const light: Theme = {
//   bgColor: "#fff",
//   fontColor: "#000",
// };

export const dark: Theme = {
  colors: {
    skyBlue: "#6CABDD",
    blue: "#1C2C5B",
    navy: "#1B2230",
    navy_2: "#252e43",
    glod: "#FFC659",
    darkGold: "#D4A12A",
    red: "#EC3325",
    gray: "#7f8490",
  },
  boxShadow: {
    normal: "0 3px 8px 0 rgb(0 0 0 / 10%)",
    navy: "0 3px 8px 0 #1B2230",
  },
  headerHeight: "88px",
};

const mode: ThemeGroup = {
  // light,
  dark,
};

export default mode;

// export const theme: Theme = {
//   colors: {
//     skyBlue: "#6CABDD",
//     blue: "#1C2C5B",
//     navy: "#1B2230",
//     glod: "#FFC659",
//     darkGold: "#D4A12A",
//     red: "#EC3325",
//   },
//   boxShadow: {
//     normal: "0 3px 8px 0 rgb(0 0 0 / 10%)",
//     navy: "0 3px 8px 0 #1B2230",
//   },
//   headerHeight: "88px",
// };

// const customMediaQuery = (maxWidth: number): string =>
//   `@media (max-width: ${maxWidth}px)`;

// export const media = {
//   custom: customMediaQuery,
//   pc: customMediaQuery(1440),
//   tablet: customMediaQuery(768),
//   mobile: customMediaQuery(576),
// };
