import * as S from "src/components/Table/Table.styled"
import MedalsEN from "src/data/MedalsContentRowsEN.json"
import Image from "next/image"

export default function Table() {
  return (
    <>
      <S.TableWrapper>
        <S.Table>
          <S.TableBody>
            <S.Row>
              <S.Headers>Position</S.Headers>
              <S.Headers>Country</S.Headers>
              <S.Headers>Flag</S.Headers>
              <S.Headers>Gold Medals</S.Headers>
              <S.Headers>Silver Medals</S.Headers>
              <S.Headers>Bronze Medals</S.Headers>
              <S.Headers>All Medals</S.Headers>
            </S.Row>
            {MedalsEN.map(item => (
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
