import "./grid.css"

export default function Grid({ children, cols, gap }) {

    const classes = [
        'grid',
        `col--${cols.default}`,
        cols.sm ? `sm:col--${cols.sm}` : '',
        cols.md ? `md:col--${cols.md}` : '',
        cols.lg ? `lg:col--${cols.lg}` : '',
        `gap--${gap.default}`,
        gap.sm ? `sm:gap--${gap.sm}` : '',
        gap.md ? `md:gap--${gap.md}` : '',
        gap.lg ? `lg:gap--${gap.lg}` : '',
    ].filter(Boolean).join(' ');


    return (
        <div className={classes}>
            { children }
        </div>
    )
}