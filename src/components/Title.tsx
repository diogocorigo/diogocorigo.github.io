export function Title({ size, classes, children, flipped }: { size?: string; classes?: string; children: string; flipped?: boolean }) {
    const [first, second] = children.split(' ');

    let sizeClass = 'text-[6rem] md:text-[8rem] lg:text-[10rem]';

    switch (size) {
        case 'small':
            sizeClass = 'text-[4rem] md:text-[5rem] lg:text-[6rem]';
            break;
    }

    return !flipped ? (
        <h1 className={`${sizeClass} font-mono font-bold uppercase leading-none ${classes}`}>
            {first}
            <span className="text-transparent text-outline">
                {second}
            </span>
        </h1>
    ) : (
        <h1 className={`${sizeClass} font-mono font-bold uppercase leading-none ${classes}`}>
            <span className="text-transparent text-outline">
                {first}
            </span>
            {second}
        </h1>
    )
}