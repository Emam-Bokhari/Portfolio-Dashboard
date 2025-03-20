export type TSkill = {
    _id: string;
    icon: string;
    name: string;
    description: string;
    category: 'frontend' | 'backend' | 'softSkills' | 'others';
    createdAt: string;
    updatedAt: string;
};