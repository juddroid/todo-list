package com.codesquad.todo.web.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.time.LocalDateTime;

public class Task {
    private Long id;
    private String taskTitle;
    private String taskContent;
    private User author;
    @JsonIgnore
    private Column column;
    private LocalDateTime createdDateTime;
    private LocalDateTime updatedDateTime;

    public Task(Long id, String taskTitle, String taskContent, User author, Column column) {
        this.id = id;
        this.taskTitle = taskTitle;
        this.taskContent = taskContent;
        this.author = author;
        this.column = column;
        this.createdDateTime = LocalDateTime.now();
        this.updatedDateTime = null;
    }

    public Long getId() {
        return id;
    }

    public String getTaskTitle() {
        return taskTitle;
    }

    public String getTaskContent() {
        return taskContent;
    }

    public User getAuthor() {
        return author;
    }

    public Column getColumn() {
        return column;
    }

    public LocalDateTime getCreatedDateTime() {
        return createdDateTime;
    }

    public LocalDateTime getUpdatedDateTime() {
        return updatedDateTime;
    }

    public String getAuthorName() {
        if (author != null) {
            return author.getName();
        }
        return "";
    }
}
