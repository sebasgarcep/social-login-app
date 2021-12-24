import 'dotenv/config';

export default {
	expo: {
		name: "Social Login App",
		slug: "social-login-app",
		version: "0.1.0",
		orientation: "portrait",
		scheme: "socialloginapp",
		userInterfaceStyle: "automatic",
		splash: {
			resizeMode: "contain",
			backgroundColor: "#000000",
		},
		updates: {
			fallbackToCacheTimeout: 0,
		},
		assetBundlePatterns: [
			"**/*",
		],
		ios: {
			bundleIdentifier: "social.login.app",
			supportsTablet: true,
		},
		android: {
			package: "social.login.app",
		},
        extra: {
            GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
			SERVER_HOST: process.env.SERVER_HOST,
        },
	},
};
