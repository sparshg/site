import type { LayoutLoad } from './$types';
import type { BlogData } from '$lib/types';
import { base } from '$app/paths';

const blogs: BlogData[] = [
    {
        title: 'Anomaly Detection in Thermal Videos',
        description: 'A frame-level unsupervised approach that learns two sets of features from two different encoders in a disentangled fashion. The proposed approach outperforms state-of-the-art models for anomaly detection from visible and thermal spectrum.',
        image: `<img src="${base}/images/dfed.png" />`,
        tags: ["Python", "PyTorch"],
        links: [{
            platform: 'Publication',
            link: 'https://icpr2024.org'
        }], repo: `${base}/blogs/icpr2024`,
        created_at: new Date(2024, 3, 10),
        id: 0,
    },
    {
        title: 'MapMyIndia Hackathon',
        description: 'Todo',
        image: '<img src="https://repository-images.githubusercontent.com/163664171/79a24eb9-077c-48a1-9caa-41fcf7e1db1c" />',
        tags: ["Flutter", "Flask", "Tensorflow"],
        links: [],
        repo: `${base}/blogs/first`,
        created_at: new Date(2024, 3, 7),
        id: 1,
    },
    {
        title: 'OpenGL Workshop',
        description: 'Todo',
        image: `<img src="${base}/images/mandel.png" />`,
        tags: ["OpenGL", "C++"],
        links: [],
        repo: `${base}/blogs/first`,
        created_at: new Date(2024, 10, 10),
        id: 2,
    },
];

export const load: LayoutLoad = async () => {
    for (let blog of blogs) {
        // blog.repo += `#id${blog.id}`;
    }
    let timelineData = blogs.toSorted((a, b) =>
        b.created_at.getTime() - a.created_at.getTime()
    );
    return { blogs, timelineData };
};