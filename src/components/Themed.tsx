/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import * as React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';

import useColorScheme from '../hooks/useColorScheme';
import useTheme from '../hooks/useTheme';

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof ReturnType<typeof useTheme>,
) {
    const scheme = useColorScheme();
    const theme = useTheme();
    const colorFromProps = props[scheme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return theme[colorName];
    }
}

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
