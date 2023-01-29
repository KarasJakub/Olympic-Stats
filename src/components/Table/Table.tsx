import * as S from "src/components/Table/Table.styled"
import MedalsEN from "src/data/MedalsContentRowsEN.json"
import Image from "next/image"
import React, { useCallback } from "react"

type Data = typeof MedalsEN

type SortKeys = keyof Data[0]

type SortOrder = "ascn" | "desc"

type SortDataTypes = {
  tableData: Data
  sortKey: SortKeys
  reverse: boolean
}

export type SortButtonTypes = {
  sortOrder: SortOrder
  columnKey: SortKeys
  sortKey: SortKeys
  onClick: () => void
}

function sortData(props: SortDataTypes) {
  if (!props.sortKey) return props.tableData

  const toSort = [...MedalsEN]
  const sortedData = toSort.sort((a, b) => {
    return a[props.sortKey] > b[props.sortKey] ? 1 : -1
  })

  if (props.reverse) {
    return sortedData.reverse()
  }

  return sortedData
}

function SortButton(props: SortButtonTypes) {
  return (
    <S.SortButton
      onClick={props.onClick}
      className={`${
        props.sortKey === props.columnKey && props.sortOrder === "desc"
          ? "sort-reverse"
          : ""
      }`}
    >
      ▲
    </S.SortButton>
  )
}

export default function Table({ data }: { data: Data }) {
  const [sortKey, setSortKey] = React.useState<SortKeys>("id")
  const [sortOrder, setSortOrder] = React.useState<SortOrder>("ascn")

  const headers: { key: SortKeys; label: string }[] = [
    { key: "id", label: "Position" },
    { key: "country", label: "Country" },
    { key: "image", label: "Flag" },
    { key: "gold", label: "Gold Medals" },
    { key: "silver", label: "Silver Medals" },
    { key: "bronze", label: "Bronze Medals" },
    { key: "all", label: "All Medals" }
  ]

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }),
    [data, sortKey, sortOrder]
  )

  function changeSort(key: SortKeys) {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn")
    setSortKey(key)
  }

  return (
    <>
      <S.TableWrapper>
        <S.Table>
          <S.TableBody>
            <S.Row>
              {headers.map(item => (
                <>
                  <S.Headers key={item.key}>
                    {item.label}{" "}
                    <SortButton
                      columnKey={item.key}
                      onClick={() => changeSort(item.key)}
                      {...{ sortOrder, sortKey }}
                    />
                  </S.Headers>
                </>
              ))}
            </S.Row>
            {sortedData().map(item => (
              <S.Row key={item.id}>
                <S.Cell>{item.id}</S.Cell>
                <S.Cell>{item.country}</S.Cell>
                <S.Cell>
                  <Image
                    src={item.image}
                    alt={item.country}
                    width={40}
                    height={40}
                  />
                </S.Cell>
                <S.Cell>{item.gold}</S.Cell>
                <S.Cell>{item.silver}</S.Cell>
                <S.Cell>{item.bronze}</S.Cell>
                <S.Cell>{item.all}</S.Cell>
              </S.Row>
            ))}
          </S.TableBody>
        </S.Table>
      </S.TableWrapper>
    </>
  )
}
