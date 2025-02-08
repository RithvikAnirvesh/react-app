
import React, { useRef } from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

function Foreground() {
    const ref = useRef(null);

    const data = [
        {
            desc: "What are you doing, people? Have some good time!",
            filesize: "0.9MB",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "Enjoy your time, people!",
            filesize: "1.2MB",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" }
        },
        {
            desc: "Enjoy your time, people!",
            filesize: "1.2MB",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "Let's have some fun together!",
            filesize: "0.7MB",
            close: true,
            tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" }
        },
        {
            desc: "jaanu i am coming for u!",
            filesize: "1.2MB",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" }
        },
    ];

    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
            {data.map((item, index) => (
                <Card key={index} data={item} reference={ref} />
            ))}
        </div>
    );
}

export default Foreground;
