/**
 * 
 * @param {string} ColumnName
 * @param {Array} Rowlist
 * @returns 
 */

export function Column({ ColumnName, RowList }) {
    return (
        <div className="Column">
            <h1 className="ColumnTitle">{ColumnName}</h1>

            <ul>
                {
                    RowList.map(
                        Name => (
                            <li className="Footerlist" key={Name}>
                                <a href="" className="text-decoration-none" style={
                                    {
                                        color: "black"
                                    }
                                }
                                >{Name}</a>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}