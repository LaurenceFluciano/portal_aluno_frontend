import './group.css'

export function Group({
    children, 
    layout = {
        default: 'row',
        sm: 'row',
        md: 'row',
        lg: 'row'
    }, 
    className=""
}) {

    const classes = [
        'group',
        `group--${layout.default === 'row' ? 'row' : 'col'}`,
        `sm:group--${(layout.sm ?? layout.default) === 'row' ? 'row' : 'col'}`,
        `md:group--${(layout.md ?? layout.sm ?? layout.default) === 'row' ? 'row' : 'col'}`,
        `lg:group--${(layout.lg ?? layout.md ?? layout.sm ?? layout.default) === 'row' ? 'row' : 'col'}`
    ].filter(Boolean).join(' ');

    return (
        <div className={`${classes} ${className}`}>
            {children}
        </div>
    )
}