package com.example.demo.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "savedproperties")
public class SavedProperty {

    @Id
    private String id;
    private String idProperty;
    private int idUser;

    public SavedProperty() {
    }

    public SavedProperty(String idProperty, int idUser) {
        this.idProperty = idProperty;
        this.idUser = idUser;
    }

    public String getId() {
        return id;
    }

    public String getIdProperty() {
        return idProperty;
    }

    public void setIdProperty(String idProperty) {
        this.idProperty = idProperty;
    }

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public void setId(String id) {
        this.id = id;
    }
}
