import "./grid.css"

export default function Grid({ children, cols, gap }) {

    const classes = [
        'grid',
        `col--${cols.default}`,
        cols.sm ? `sm:col--${cols.sm}` : '',
        cols.md ? `md:col--${cols.md}` : '',
        cols.lg ? `lg:col--${cols.lg}` : '',
        `gap--${gap}`
    ].filter(Boolean).join(' ');


    return (
        <div className={classes}>
            { children }
        </div>
    )
}