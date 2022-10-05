import React, { useState } from 'react'

const btnStyle = {backgroundColor: 'black', color: 'white', border: 'none', padding: '5px 10px'}

function Table({ list, colNames, pageNum = 0, pageSize= 10, width = 'auto', height= 'auto' }) {

    const [page, setPage] = useState(pageNum)
    const [sortedlist, setSortedList] = useState(list);
    const [sortColumn, setSortColumn] = useState();
    const [sortAcscending, setSortAcscending] = useState(true);


    const onBack = () => {
        setPage(page - 1 > -1 ? page - 1 : page)
    }

    const onNext = () => { 
        setPage(page + 1 < list.length / pageSize ? page + 1 : page)
    }

    const sortByColumn = (colName) => {
        let tempSortedList = [...list];
        let newSortDirection = !sortAcscending;

        if (colName !== sortColumn) {
            newSortDirection = true;
            setSortColumn(colName);
        }

        if (newSortDirection) {
            //sorts in accending order
            tempSortedList.sort((a, b) => {
                const x = a[colName];
                const y = b[colName];
                if (x < y ) {
                    return -1;
                }
                if(x > y ) {
                    return 1;
                }
                return 0;
            });
         } else {
            //sorts in decending
            tempSortedList.sort((a, b) => {
                const x = a[colName];
                const y = b[colName];
                if (x < y ) {
                    return 1;
                }
                if(x > y ) {
                    return -1;
                }
                return 0;
            });
        }

        setSortAcscending(newSortDirection);
        setSortedList(tempSortedList);
    };


    return (
        <div style= {{ width: '50%', boxShadow: "3px 6px 3px #ccc"}}>
            {list.length > 0 && (
                <table cellSpacing='0' style={{ width: '100%', height: height, padding: '5px 10px'}}>
                    <thead style= {{ backgroundColor: "black", color: "white"}}>
                        <tr>
                            {colNames.map((headerItem, index) => (
                                <th key={index} onClick= {() => sortByColumn(headerItem.toLowerCase())}>
                                    {headerItem.toUpperCase()}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(
                            sortedlist.slice(pageSize * page, pageSize * page + pageSize)
                        ).map((obj, index) => (
                            <tr key={index}>
                                {Object.values(obj).map((value, index2) => (
                                    <td key={index2}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                        <td></td>
                        <td style={{ padding: '10px 0'}}>
                            <button style={btnStyle} onClick={onBack}>BACK</button>
                            <label style={{padding: '0 1em'}}>{page + 1}</label>
                            <button style={btnStyle} onClick={onNext}>Next</button>
                        </td>
                        </tr>
                    </tfoot>

                </table>
            )}
        </div>
    )
}

export default Table