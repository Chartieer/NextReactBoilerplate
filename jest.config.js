module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>"],
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  //testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.jest.json"
    }
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
