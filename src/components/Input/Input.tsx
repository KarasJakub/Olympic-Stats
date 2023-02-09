import React from "react"
import * as S from "src/components/Input/Input.styled"

type InputProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const Input = (props: InputProps) => {
  return (
    <S.Form>
      <S.Input onChange={props.onChange} />
    </S.Form>
  )
}

export default Input
