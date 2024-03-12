import type { StorybookConfig } from "@storybook/react-vite";

import { join, dirname } from "path";

function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
	stories: ["../src/pages/**/*.mdx", "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@storybook/addon-onboarding"),
		getAbsolutePath("@storybook/addon-interactions"),
		getAbsolutePath("@storybook/addon-a11y"),
	],
	framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {},
	},
	docs: {
		autodocs: true,
	},
	viteFinal: (config, { configType }) => {
		if (configType === 'PRODUCTION') {
			config.base = '/design-system-ignite'
		}

		return config
	}
};

export default config;
