package com.it192.backend.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "adoptions")
public class Adoption {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long adoption_id;
    private long dog_id;
    private String status;
    private String adopter_name;
    private String adopter_contact;
    private String adopter_email;
    private String adopter_address;
    private String adopter_reason;

    public Adoption() {
    }

    public Adoption(long adoption_id, long dog_id, String status, String adopter_name, String adopter_contact,
            String adopter_email, String adopter_address, String adopter_reason) {
        this.adoption_id = adoption_id;
        this.dog_id = dog_id;
        this.status = status;
        this.adopter_name = adopter_name;
        this.adopter_contact = adopter_contact;
        this.adopter_email = adopter_email;
        this.adopter_address = adopter_address;
        this.adopter_reason = adopter_reason;
    }

    public long getAdoption_id() {
        return adoption_id;
    }

    public void setAdoption_id(long adoption_id) {
        this.adoption_id = adoption_id;
    }

    public long getDog_id() {
        return dog_id;
    }

    public void setDog_id(long dog_id) {
        this.dog_id = dog_id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAdopter_name() {
        return adopter_name;
    }

    public void setAdopter_name(String adopter_name) {
        this.adopter_name = adopter_name;
    }

    public String getAdopter_contact() {
        return adopter_contact;
    }

    public void setAdopter_contact(String adopter_contact) {
        this.adopter_contact = adopter_contact;
    }

    public String getAdopter_email() {
        return adopter_email;
    }

    public void setAdopter_email(String adopter_email) {
        this.adopter_email = adopter_email;
    }

    public String getAdopter_address() {
        return adopter_address;
    }

    public void setAdopter_address(String adopter_address) {
        this.adopter_address = adopter_address;
    }

    public String getadopter_reason() {
        return adopter_reason;
    }

    public void setadopter_reason(String adopter_reason) {
        this.adopter_reason = adopter_reason;
    }

    @Override
    public String toString() {
        return "Adoption{" +
                "adoption_id=" + adoption_id +
                ", dog_id=" + dog_id +
                ", status='" + status + '\'' +
                ", adopter_name='" + adopter_name + '\'' +
                ", adopter_contact='" + adopter_contact + '\'' +
                ", adopter_email='" + adopter_email + '\'' +
                ", adopter_address='" + adopter_address + '\'' +
                ", adopter_reason='" + adopter_reason + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Adoption adoption = (Adoption) o;
        return adoption_id == adoption.adoption_id && dog_id == adoption.dog_id
                && Objects.equals(status, adoption.status) && Objects.equals(adopter_name, adoption.adopter_name)
                && Objects.equals(adopter_contact, adoption.adopter_contact)
                && Objects.equals(adopter_email, adoption.adopter_email)
                && Objects.equals(adopter_address, adoption.adopter_address)
                && Objects.equals(adopter_reason, adoption.adopter_reason);
    }

    @Override
    public int hashCode() {
        return Objects.hash(adoption_id, dog_id, status, adopter_name, adopter_contact, adopter_email, adopter_address, adopter_reason);
    }
}
