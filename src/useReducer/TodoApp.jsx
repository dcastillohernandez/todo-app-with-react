import { TodoList, TodoAdd } from '.';
import { useTodos } from '../hooks';

export const TodoApp = () => {

    const { todos,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
        todosCount,
        pendingTodosCount } = useTodos();

    return (
        <>
            <h1>TodoApp: {todosCount}, <small>Pendientes: {pendingTodosCount}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={id => handleDeleteTodo(id)}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <br />

                    {/* Para mejorar la lectura del código estoy poniendo que se recibe el todo y se lo envio como referencia a la función pero de igual forma de puede hacer handleNewTodo solamente sin necesidad de pasarle el todo ya que desde es6 ya no es necesario pues pasa automáticamente por referencia  */}
                    <TodoAdd
                        onNewTodo={todo => handleNewTodo(todo)}
                    />
                </div>
            </div>
        </>
    )
}