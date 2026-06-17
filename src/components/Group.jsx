
export function Group({children, layout = 'row', className=""}) {

    const direction = layout === 'row' ? 'row' : 'col';

    return (
        <div className={`group layout--${direction} ${className}`}>
            {children}
        </div>
    )
}