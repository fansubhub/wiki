export interface AuthorData
{
    name: string;
    role?: string;
    avatar?: string;
    github?: string;
    discord?: string;
}

export const authors: Record<string, AuthorData> = {
    trotacalles: {
        name: 'trotacalles',
        github: 'Mandholine',
        discord: 'trotacalles',
    },
    nyalex: {
        name: 'Nyalex',
        github: 'AlexGallego2005',
        discord: 'alex_gallego2005'
    }
}