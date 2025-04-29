
interface ILocaleWithName {
    name: string;
    code: Locales;
}

export const locales = ['en', 'ru','az'] as const;

export type Locales = typeof locales[number];

export const localeWithName: ILocaleWithName[] = [
    {name: 'English', code: 'en'},
    {name: 'Русский', code: 'ru'},
    {name: 'Azərbaycanca', code: 'az'}
]

export const defaultLocale: Locales = 'ru';