
export function Group({children, layout = 'row', className=""}) {

    const direction = layout === 'row' ? 'row' : 'col';

    return (
        <div className={`group group--${direction} ${className}`}>
            {children}
        </div>
    )
}