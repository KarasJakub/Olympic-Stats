import styled from "styled-components";


export const TableWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #CECECE;
    display: flex;
    justify-content: center;
    padding: 2rem 0;
`
export const Table = styled.table`
    width: 50%;
`
export const TableBody = styled.tbody`
`

export const Row = styled.tr`

`
export const Headers = styled.th`
    background-color: #fff;
    padding: 10px 0;
`

export const Cell = styled.td`
    background-color: #fff;
    text-align: center;
`
export const SortButton = styled.button`
margin-left: 5px;
cursor: pointer;
transition: transform .5s;
`