import { Container } from "./style";

import { Iten } from "../../types/iten";
import { useState } from "react";

type Props = {
  iten: Iten;
};

export const ItenList = ({ iten }: Props) => {
  const [checked, Ischecked] = useState(iten.done);

  return (
    <Container done={checked}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => Ischecked(e.target.checked)}
      />
      <label>{iten.name}</label>
    </Container>
  );
};
