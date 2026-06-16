
export function Group({children, layout = 'row'}) {

    const direction = layout === 'row' ? 'row' : 'col';

    return (
        <div className={`group group-${direction}`}>
            {children}
        </div>
    )
}