import styled from "styled-components";

export const TableWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
`
export const Table = styled.table`
    width: 50%;
    background-color: #CECECE;
`

export const TableBody = styled.tbody`
`

export const Row = styled.tr`
border: 1px solid black;
`

export const Headers = styled.th`
    background-color: #CECECE;
    padding: 10px 0;
    border-spacing: none;
`

export const Cell = styled.td`
    background-color: #fff;
    text-align: center;
`

export const SortButton = styled.button`
background-color: transparent;
border: none;
margin-left: 5px;
cursor: pointer;
transition: transform .5s;
`

export const LaungageButton = styled.button`
    width: 200px;
    height: 200px;
    background-color: blue;
`