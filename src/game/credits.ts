export interface CreditItem {
    name: string;
    url?: string;
    description?: string;
}

export interface CreditSection {
    key: 'music' | 'sfx' | 'programming' | 'design' | 'specialThanks';
    items: CreditItem[];
}

export const CREDITS_DATA: CreditSection[] = [
    {
        key: 'music',
        items: [
            { name: '魔王魂 様', url: 'https://maou.audio/' }
        ]
    },
    {
        key: 'sfx',
        items: [
            { name: '魔王魂 様', url: 'https://maou.audio/' }
        ]
    }
];
