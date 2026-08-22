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
    }
}