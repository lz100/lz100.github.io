import React, { useEffect, useState } from 'react';

interface TocProps {
    top?: string;
    exclude?: Array<string>;
    scrollOffset?: number;
}

const Toc = (props: TocProps) => {
    const [headings, setHeadings] = useState<Array<HTMLElement>>([]);

    const handleScroll = () => {
        // loop through headings and check if current scroll position is within range
        headings.forEach((heading) => {
            const tocItem = document.querySelector(`li[data-heading="${heading.textContent}"]`);
            if (tocItem) {
                if (window.scrollY >= heading.offsetTop + (props.scrollOffset ?? 0) &&
                    window.scrollY < heading.offsetTop + heading.offsetHeight + (props.scrollOffset ?? 0)) {
                    tocItem.classList.add('font-bold');
                } else {
                    tocItem.classList.remove('font-bold');
                }
            }
        });
    };

    useEffect(() => {
        const h1s: Array<HTMLElement> = Array.from(document.querySelectorAll('h1'));
        const h2s: Array<HTMLElement> = Array.from(document.querySelectorAll('h2'));
        const headingsAll: Array<HTMLElement> = [...h1s, ...h2s];
        const filteredHeadings: Array<HTMLElement> = headingsAll.filter((heading) => !props.exclude?.includes(heading.textContent ?? ''));

        setHeadings(filteredHeadings);

        // add scroll event listener to window object
        window.addEventListener('scroll', handleScroll);

        // cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [props.exclude]);

        const handleClick = (heading: HTMLElement, scrollOffset: number) => {
            const scrollPosition = heading.getBoundingClientRect().top + window.scrollY + scrollOffset;
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        };

    return (
        <div className={`
            sticky h-0 bg-transparent 
            ${props.top? props.top : 'top-16'}
        `}>
            <ul className='list-disc'>
                {headings.map((heading, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer`}
                        data-heading={heading.textContent}
                        onClick={() => handleClick(heading, props.scrollOffset ?? 0)}
                    >
                        {heading.textContent}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Toc;
