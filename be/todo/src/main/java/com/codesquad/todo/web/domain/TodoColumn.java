package com.codesquad.todo.web.domain;

import com.codesquad.todo.web.exceptions.InvalidEntityDetectedException;
import com.codesquad.todo.web.exceptions.TaskNotFoundException;
import com.codesquad.todo.web.service.dto.TaskDto;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Table("TODO_COLUMN")
public class TodoColumn {
    @Id
    private Long id;
    private String columnTitle;
    private List<TodoTask> todoTaskList = new ArrayList<>();

    public TodoColumn(String columnTitle) {
        this.columnTitle = columnTitle;
    }

    protected TodoColumn() {
    }

    public void verifyColumnEntityIsNotEmpty() {
        if (columnTitle == null || columnTitle.isEmpty()) {
            throw new InvalidEntityDetectedException(InvalidEntityDetectedException.COLUMN_TITLE_IS_NULL);
        }
    }

    public int sizeOfTaskList() {
        return todoTaskList.size();
    }

    public TodoTask findTaskById(Long taskId) {
        return todoTaskList.stream()
                .filter(task -> task.isSameId(taskId))
                .findFirst()
                .orElseThrow(TaskNotFoundException::new);
    }

    public TodoTask lastTask() {
        TodoTask todoTask = todoTaskList.get(todoTaskList.size() - 1);
        if (todoTask == null) {
            throw new TaskNotFoundException();
        }
        return todoTask;
    }

    public void addTaskAt(int index, TodoTask todoTask) {
        todoTaskList.add(index, todoTask);
    }

    public void addTask(TodoTask todoTask) {
        todoTaskList.add(todoTask);
    }

    public void addTask(String taskTitle, String taskContent) {
        TodoTask todoTask = new TodoTask(taskTitle, taskContent);
        todoTask.verifyTaskEntityIsNotEmpty();
        addTask(todoTask);
    }

    public TodoTask popTask(Long id) {
        for (int i = 0; i < todoTaskList.size(); i++) {
            TodoTask todoTask = todoTaskList.get(i);
            if (todoTask.isSameId(id)) {
                todoTaskList.remove(i);
                return todoTask;
            }
        }
        throw new TaskNotFoundException();
    }

    public void removeTaskById(Long id) {
        TodoTask todoTask = findTaskById(id);
        todoTaskList.remove(todoTask);
    }

    public List<TaskDto> convertTaskListToTaskDtoList() {
        return todoTaskList.stream().map(task -> new TaskDto(task, "test")).collect(Collectors.toList());
    }

    public boolean isSameTitle(TodoColumn todoColumn) {
        return this.columnTitle.equals(todoColumn.columnTitle);
    }

    public boolean isSameId(Long columnId) {
        return id.equals(columnId);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getColumnTitle() {
        return columnTitle;
    }

    public void setColumnTitle(String columnTitle) {
        this.columnTitle = columnTitle;
    }

    public List<TodoTask> getTaskList() {
        return todoTaskList;
    }

    public void setTaskList(List<TodoTask> todoTaskList) {
        this.todoTaskList = todoTaskList;
    }

    @Override
    public String toString() {
        return "Column{" +
                "id=" + id +
                ", columnTitle='" + columnTitle + '\'' + '\n' +
                ", taskList= \n" + todoTaskList +
                '}' + '\n';
    }
}