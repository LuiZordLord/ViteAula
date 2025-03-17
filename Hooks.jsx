import { use, useState } from 'react'
import './App.css'

function App() {

  //Criar função para adicionar tarefa, 
  //Criar uma função para remover tarefa
  //Criar um função para marcar como resolvido.

  const [ nomeTarefa, setNomeTarefa ] = useState('')
  const [ listaTarefas, setListaTarefas ]  = useState([])

  //...=Spread
  //... Vai percorrer a listaTarefas e recriar a lista com as tarefas exitentes

  const adicionarTarefa = () => {
    setListaTarefas([...listaTarefas, { id: new Date(), nome: nomeTarefa, status: false }])

    //Limpar o nome da nova tarefa
    setNomeTarefa('')

  }

  return (
    <div className="todo-container">
      <h2>Lista de Tarefas ✅</h2>
      <div className="input-container">
        <input
          type="text"
          value={nomeTarefa}
          placeholder="Digite uma tarefa"
          onChange={(event) => setNomeTarefa(event.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul>

        {listaTarefas.map( (Tarefa) => (

          <li key={Tarefa.id}>
            {Tarefa.nome}
            <div>
              <button className="complete-btn" >✔</button>
              <button className="delete-btn" >❌</button>
            </div>
          </li>

        ))}

      </ul>
    </div>
  );
}

export default App

.todo-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #0a0909;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.input-container {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 8px 12px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: 0.3s ease;
}

button:hover {
  opacity: 0.8;
}

button:active {
  transform: scale(0.95);
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin-top: 8px;
  background-color: rgb(71, 66, 66);
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

li.completed {
  text-decoration: line-through;
  background-color: #d4edda;
  color: #155724;
}

.complete-btn {
  background-color: #28a745;
  color: white;
  margin-right: 5px;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
}
