export interface Company {
    giftCardUrl?: string;
    expectedOpenDate?: Date;
    imageUrl?: string;
    websiteUrl?: string;
    mapUrl?: string;
    facebook?: string;
    instagram?: string;
    name: string;
    phone?: number;
    description?: string;
    url?: string;
    type: 'salon' | 'restaurant' | 'coffee' | 'retail';
}