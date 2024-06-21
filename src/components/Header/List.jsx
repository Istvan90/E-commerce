export function List({ Title, Link }) {
    return (
        <li>
            <a href={Link} style = {
            {
                fontSize : "13px",
                textTransform : "uppercase"
            }
        }>
            {Title}
            </a>
        </li>
    );
}
