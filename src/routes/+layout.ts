import type { LayoutLoad } from './$types';
import type { Social } from '$lib/types';

export const prerender = true;

const socials: Social[] = [
    {
        icon: 'github',
        link: 'https://github.com/sparshg'
    },
    {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/sparshgoenka'
    },
    {
        icon: 'youtube',
        link: 'https://www.youtube.com/c/radiium'
    },
    {
        icon: 'email',
        link: 'mailto: sparshg.contact@gmail.com'
    },
];

const about = "I like tinkering with code and making random stuff... diving into low-level graphics, playing around with Rust, making animations with code, or messing with some Android apps...\n\n It's all about learning by doing.";


export const load: LayoutLoad = (({ url }) => {
    return { socials, about, url: url.pathname };
});