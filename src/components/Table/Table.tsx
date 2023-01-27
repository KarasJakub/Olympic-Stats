import React from "react"
import * as S from "src/components/Table/Table.styled"

export default function Table() {
  return (
    <>
      <S.Test>
        <S.Table>
          <S.TableBody>
            <S.Row>
              <S.Headers>id</S.Headers>
              <S.Headers>kraj</S.Headers>
            </S.Row>
            <S.Row>
              <S.Cell>taki</S.Cell>
              <S.Cell>fajny</S.Cell>
            </S.Row>
          </S.TableBody>
        </S.Table>
      </S.Test>
    </>
  )
}
