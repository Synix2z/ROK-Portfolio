export interface KvKRecord {
    id: string;
    kingdom: number;
    startDate: string;
    endDate: string;
    image?: string;

    stats?: {
        killPoints: number;
        deaths: number;
        healingPoints: number;
        merits: number;
    };
}

export const kvkRecords: KvKRecord[] = [
    { id: "2023-08", kingdom: 2259, startDate: "9 August 2023", endDate: "2 October 2023" },
    { id: "2023-11", kingdom: 3064, startDate: "22 November 2023", endDate: "15 January 2024" },
    { id: "2024-02", kingdom: 3064, startDate: "21 February 2024", endDate: "14 April 2024" },
    { id: "2024-05", kingdom: 3064, startDate: "15 May 2024", endDate: "7 July 2024"},
    { id: "2024-08", kingdom: 3064, startDate: "7 August 2024", endDate: "29 September 2024" },
    { id: "2024-10", kingdom: 3064, startDate: "30 October 2024", endDate: "22 December 2024" },
    { id: "2025-01", kingdom: 3064, startDate: "22 January 2025", endDate: "15 March 2025" },
    { id: "2025-04", kingdom: 3064, startDate: "30 April 2025", endDate: "21 June 2025" },
    { id: "2025-10", kingdom: 3345, startDate: "1st October 2025", endDate: "22 November 2025" },
    { id: "2026-03", kingdom: 2159, startDate: "13 March 2026", endDate: "4 May 2026" },
    {
        id: "2026-08",
        kingdom: 3834,
        startDate: "28 August 2026",
        endDate: "19 October 2026",
        image: "/images/War_Img.jpg",
        stats: { killPoints: 47_553_673, deaths: 499_958, healingPoints: 20_486_734, merits: 2_836_272 },
    },
];