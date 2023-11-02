import React, { useEffect, useState } from 'react';

interface TocProps {
    top?: string;
    exclude?: Array<string>;
}

const Toc = (props: TocProps) => {
    const [headings, setHeadings] = useState<Array<HTMLElement>>([]);

    useEffect(() => {
        const h1s: Array<HTMLElement> = Array.from(document.querySelectorAll('h1'));
        const h2s: Array<HTMLElement> = Array.from(document.querySelectorAll('h2'));
        const headingsAll: Array<HTMLElement> = [...h1s, ...h2s];
        const filteredHeadings: Array<HTMLElement> = headingsAll.filter((heading) => !props.exclude?.includes(heading.textContent ?? ''));

        setHeadings(filteredHeadings);
    }, [props.exclude]);
    

    return (
        <div className={`sticky h-0 bg-transparent ${props.top? props.top : 'top-16'}`}>
            <ul className=''>
                {headings.map((heading, index) => (
                    <li key={index}>
                        <a href={`#${heading.id}`} style={{ display: 'block', padding: '5px 0', color: '#333', textDecoration: 'none' }} >
                            {heading.textContent}
                        </a>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Toc;
