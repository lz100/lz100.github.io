import React, { useEffect, useState } from 'react';

interface TocProps {
    top?: string;
    exclude?: Array<string>;
    scrollOffset?: number;
}

const Toc = (props: TocProps) => {
    const [headings, setHeadings] = useState<Array<HTMLElement>>([]);

    const handleScroll = (headings: Array<HTMLElement>) => {
        // loop through headings and check if current scroll position is within range
        if (!headings) return;
        headings.map((heading: HTMLElement, index: number) => {
            const tocItem = document.querySelector(`li[data-heading="${heading.textContent}"]`);
            console.log("rerender") 
            if (tocItem) {
                if (index === headings.length - 1) {
                    // last heading, keep current toc item active until end of page
                    if (window.scrollY >= heading.offsetTop + (props.scrollOffset ?? 0)) {
                        tocItem.classList.add('font-bold');
                    } else {
                        tocItem.classList.remove('font-bold');
                    }
                } else {
                    // not the last heading, check if next heading is within range
                    const nextHeading = headings[index + 1];
                    if (window.scrollY >= heading.offsetTop + (props.scrollOffset ?? 0) &&
                            window.scrollY < nextHeading.offsetTop + (props.scrollOffset ?? 0)) {
                        tocItem.classList.add('font-bold');
                    } else {
                        tocItem.classList.remove('font-bold');
                    }
                }
            }
        });
    };

    useEffect(() => {
        const h1s: Array<HTMLElement> = Array.from(document.querySelectorAll('h1'));
        const headingsAll: Array<HTMLElement> = [];

        for (let i = 0; i < h1s.length; i++) {
            const h1 = h1s[i];
            const nextH1 = h1s[i + 1];
            const h2s: Array<HTMLElement> = [];

            let current = h1.nextElementSibling;
            while (current && current !== nextH1) {
                if (current.tagName === 'H2') {
                    h2s.push(current as HTMLElement);
                }
                current = current.nextElementSibling;
            }

            headingsAll.push(h1, ...h2s);
        }

        const filteredHeadings: Array<HTMLElement> = headingsAll.filter((heading) => !props.exclude?.includes(heading.textContent ?? ''));

        setHeadings(filteredHeadings);

        // add scroll event listener to window object
        window.addEventListener('scroll', () => {
            handleScroll(filteredHeadings);
        });

        // cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', () => {
                handleScroll(filteredHeadings);
            });
        };
    }, []);

    const handleClick = (heading: HTMLElement, scrollOffset: number) => {
        const scrollPosition = heading.getBoundingClientRect().top + window.scrollY + scrollOffset;
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    };

    return (
        <div className={`
            sticky h-0 bg-transparent 
            ${props.top? props.top : 'top-16'}
        `}>
            <ul className='list-none'>
                {headings?.map((heading, index) => (
                    <li
                        key={index}
                        data-index={index}
                        className={`cursor-pointer ${heading.tagName === 'H2' ? 'ml-4' : ''}`}
                        data-heading={heading.textContent}
                        onClick={() => handleClick(heading, props.scrollOffset ?? 0)}
                    >
                        {heading.textContent}
                    </li>
                ))}
            </ul>
            <style jsx>{`
            li {
                position: relative;
                white-space: nowrap;
                padding-bottom: 1em;
                padding-left: 20px;
                overflow: hidden;
                
                &:before {
                    background-color: #c00;
                    width: 2px;
                    content: '';
                    position: absolute;
                    top: 0px;
                    bottom: 0px;
                    left: 5px;
                }
                &::after {
                    content: '';
                    position: absolute;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 32 32' focusable='false'%3E%3Ccircle stroke='none' fill='%23c00' cx='16' cy='16' r='10'%3E%3C/circle%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-size: contain;
                    left: 0;
                    top: 2px;
                    width: 12px;
                    height: 12px;
                }
            }
            `}</style>
         </div>
    );
};

export default Toc;
