import { useState, useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './ModalContent.css';

function ModalContent() {
    const { setOpenModal, openModal, addNewTask } = useContext(TodoContext)
    const [newTask, setNewTask] = useState("")
    const closeModal = () => setOpenModal(false);

    const AddTask = () => {
        addNewTask(newTask);
        closeModal();
    }

    return (
        <>
            <div class="modal" hidden={openModal}>
                <div class="modal-content">
                    <h2>Add New Task</h2>
                    <input
                        type="text"
                        placeholder="Task Name"
                        id="taskName"
                        value={newTask}
                        onChange={(event) => setNewTask(event.target.value)} />
                    <button class="modal-button close-button" onClick={closeModal}>Close</button>
                    <button class="modal-button save-button"
                        onClick={AddTask}>Save</button>
                </div>
            </div>
        </>
    );
}

export { ModalContent };