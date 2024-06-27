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
                            <li className="Footerlist" key={Name}>{Name}</li>
                        )
                    )
                }
            </ul>
        </div>
    );
}