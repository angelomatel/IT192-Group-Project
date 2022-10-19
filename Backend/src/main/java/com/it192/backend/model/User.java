package com.it192.backend.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name="Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long user_id;

    private String user_name;
    private String user_email;
    private String user_password;

    public User(){}

    public User(long user_id, String user_name, String user_email, 
    String user_password){
        this.user_id = user_id;
        this.user_name = user_name;
        this.user_email = user_email;
        this.user_password = user_password;
    }

    public void setId(long user_id){
        this.user_id = user_id;
    }
    public void setName(String user_name){
        this.user_name = user_name;
    }
    public void setEmail(String user_email){
        this.user_email = user_email;
    }
    public void setPassword(String user_password){
        this.user_password = user_password;
    }

    public long getId() {
        return user_id;
    }
    public String getName() {
        return user_name;
    }
    public String getEmail() {
        return user_email;
    }
    public String getPassword() {
        return user_password;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 79 * hash + Objects.hashCode(this.user_id);
        hash = 79 * hash + Objects.hashCode(this.user_name);
        hash = 79 * hash + Objects.hashCode(this.user_email);
        hash = 79 * hash + Objects.hashCode(this.user_password);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null) return false;
        if (getClass() != obj.getClass()) return false;

        final User other = (User) obj;
        if (!Objects.equals(this.user_id, other.user_id)) return false;
        if (!Objects.equals(this.user_name, other.user_name)) return false;
        if (!Objects.equals(this.user_email, other.user_email)) return false;
        if (!Objects.equals(this.user_password, other.user_password)) return false;

        return Objects.equals(this.user_id, other.user_id);
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("User{");
        sb.append("user_id=").append(user_id);
        sb.append(", user_name=").append(user_name);
        sb.append(", user_email=").append(user_email);
        sb.append(", user_password=").append(user_password);
        sb.append('}');
        return sb.toString();
    }
}
