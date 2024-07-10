/**
 * 
 * @param {string} ColumnName
 * @param {Array} Rowlist
 * @returns 
 */

import { Link } from "react-router-dom";

export function Column({ ColumnName, RowList }) {
    return (
        <div className="Column">
            <h1 className="ColumnTitle">{ColumnName}</h1>

            <ul>
                {
                    RowList.map(
                        Name => (
                            <li className="Footerlist" key={Name}>
                                <Link to="" className="text-decoration-none" style={
                                    {
                                        color: "black"
                                    }
                                }
                                >
                                    {Name}
                                </Link>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}