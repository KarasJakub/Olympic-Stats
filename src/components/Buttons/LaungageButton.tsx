import * as S from "src/components/Buttons/LaungageButton.styled"

interface Props {
  children: React.ReactNode
  onClick: () => void
}

export default function LaungageButton(props: Props) {
  return (
    <S.LaungageButton onClick={props.onClick}>
      {props.children}
    </S.LaungageButton>
  )
}
