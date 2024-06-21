import { esbuildPlugin } from "@web/dev-server-esbuild";
import { jasmineTestRunnerConfig } from "web-test-runner-jasmine";
import { browserstackLauncher } from "@web/test-runner-browserstack";

if (
  process.env.BROWSERSTACK_USERNAME === undefined ||
  process.env.BROWSERSTACK_ACCESS_KEY === undefined
) {
  throw new Error(
    "The environment variables BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY are required to run tests on browserstack.",
  );
}

// options shared between all browsers
const sharedCapabilities = {
  // your username and key for browserstack, you can get this from your browserstack account
  // it's recommended to store these as environment variables
  "browserstack.user": process.env.BROWSERSTACK_USERNAME,
  "browserstack.key": process.env.BROWSERSTACK_ACCESS_KEY,

  concurrentBrowsers: 2,

  project: "connect-web",
  name: "browserstack-tests",
  // if you are running tests in a CI, the build id might be available as an
  // environment variable. this is useful for identifying test runs
  // this is for example the name for github actions
  build: `build ${process.env.GITHUB_RUN_NUMBER || "unknown"}`,
};

export default {
  ...jasmineTestRunnerConfig(),
  files: ["./browserstack/*.ts"],
  nodeResolve: true,
  plugins: [
    esbuildPlugin({
      ts: true,
      target: "auto",
      tsconfig: "./tsconfig.json",
    }),
  ],
  concurrentBrowsers: 2,
  // amount of test files to execute concurrently in a browser. the default value is based
  //   // on amount of available CPUs locally which is irrelevant when testing remotely
  concurrency: 6,
  browsers: [
    // create a browser launcher per browser you want to test
    // you can get the browser capabilities from the browserstack website
    browserstackLauncher({
      capabilities: {
        // your username and key for browserstack, you can get this from your browserstack account
        // it's recommended to store these as environment variables
        "browserstack.user": process.env.BROWSER_STACK_USERNAME,
        "browserstack.key": process.env.BROWSER_STACK_ACCESS_KEY,

        concurrentBrowsers: 2,

        project: "connect-web",
        name: "browserstack-tests",
        // if you are running tests in a CI, the build id might be available as an
        // environment variable. this is useful for identifying test runs
        // this is for example the name for github actions
        build: `build ${process.env.GITHUB_RUN_NUMBER || "unknown"}`,
        browserName: "Chrome",
        os: "Windows",
        os_version: "10",
      },
    }),

    browserstackLauncher({
      capabilities: {
        ...sharedCapabilities,
        browserName: "Safari",
        browser_version: "11.1",
        os: "OS X",
        os_version: "High Sierra",
      },
    }),

    browserstackLauncher({
      capabilities: {
        ...sharedCapabilities,
        browserName: "IE",
        browser_version: "11.0",
        os: "Windows",
        os_version: "7",
      },
    }),
  ],
};
