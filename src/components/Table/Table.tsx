import * as S from "src/components/Table/Table.styled"
import MedalsEN from "src/data/MedalsContentRowsEN.json"
import Image from "next/image"
import React, { useCallback } from "react"

type Data = typeof MedalsEN

type SortKeys = keyof Data[0]

type SortOrder = "ascn" | "desc"

function sortData({
  tableData,
  sortKey,
  reverse
}: {
  tableData: Data
  sortKey: SortKeys
  reverse: boolean
}) {
  if (!sortKey) return tableData

  const sortedData = MedalsEN.sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1
  })

  if (reverse) {
    return sortedData.reverse()
  }

  return sortedData
}

function SortButton() {
  return <button>▲</button>
}

export default function Table({ data }: { data: Data }) {
  const [sortKey, setSortKey] = React.useState<SortKeys>("id")
  const [sortOrder, setSortOrder] = React.useState<SortOrder>("ascn")

  const headers = [
    { key: "id", label: "Position" },
    { key: "country", label: "Country" },
    { key: "flag", label: "Flag" },
    { key: "gold", label: "Gold Medals" },
    { key: "silver", label: "Silver Medals" },
    { key: "bronze", label: "Bronze Medals" },
    { key: "all", label: "All Medals" }
  ]

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }),
    [data, sortKey, sortOrder]
  )

  return (
    <>
      <S.TableWrapper>
        <S.Table>
          <S.TableBody>
            <S.Row>
              {headers.map(item => (
                <>
                  <S.Headers key={item.key}>{item.label}</S.Headers>
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
                    width={30}
                    height={30}
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
