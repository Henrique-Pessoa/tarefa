import { Area, Container, Header } from "./AppStyled";
import { useState } from "react";
import { Iten } from "./types/iten";
import { ItenList } from "./components/itenList";
import { AddIten } from "./components/AddIten/index";

function App() {
  const [list, setLlist] = useState<Iten[]>([
    { id: 1, name: "Caminhar", done: false },
    { id: 2, name: "Ler um livro", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newlist = [...list];
    newlist.push({
      id: list.length + 1,
      name: taskName.charAt(0).toUpperCase() + taskName.slice(1),
      done: false,
    });
    setLlist(newlist);
  };

  return (
    <Container>
      <Area>
        <Header>
          <div>
            <h1>Lista de tarefas</h1>
          </div>
        </Header>
        <AddIten onEnter={handleAddTask} />
        {list.map((iten, index) => (
          <ItenList key={index} iten={iten} />
        ))}
      </Area>
    </Container>
  );
}

export default App;
