package com.it192.backend.model;

import javax.persistence.Entity;

import java.util.Objects;

import javax.persistence.*;

@Entity
@Table(name="dogs")
public class Dog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long dog_id;

    private String name;
    private String gender;
    private String age;
    private String size;
    private String color;
    private String images;
    private String adjectives;
    private String story;
    private boolean hasOwner;

    public Dog(){}

    public Dog(long dog_id, String name, String gender, String age, String size, String color,
    String images, String adjectives, String story, boolean hasOwner){
        this.dog_id = dog_id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.size = size;
        this.color = color;
        this.images = images;
        this.adjectives = adjectives;
        this.story = story;
        this.hasOwner = hasOwner;        
    }

    public void setId(long dog_id){
        this.dog_id = dog_id;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setGender(String gender){
        this.gender = gender;
    }
    public void setAge(String age){
        this.age = age;
    }
    public void setSize(String size){
        this.size = size;
    }
    public void setColor(String color){
        this.color = color;
    }
    public void setImages(String images){
        this.images = images;
    }
    public void setAdjectives(String adjectives){
        this.adjectives = adjectives;
    }
    public void setStory(String story){
        this.story = story;
    }
    public void setHasOwner(boolean hasOwner){
        this.hasOwner = hasOwner;
    }

    public long getId(){
        return dog_id;
    }
    public String getName(){
        return name;
    }
    public String getGender(){
        return gender;
    }
    public String getAge(){
        return age;
    }
    public String getSize(){
        return size;
    }
    public String getColor(){
        return color;
    }
    public String getImages(){
        return images;
    }
    public String getAdjectives(){
        return adjectives;
    }
    public String getStory(){
        return story;
    }
    public boolean getHasOwner(){
        return hasOwner;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 79 * hash + Objects.hashCode(this.dog_id);
        hash = 79 * hash + Objects.hashCode(this.name);
        hash = 79 * hash + Objects.hashCode(this.gender);
        hash = 79 * hash + Objects.hashCode(this.age);
        hash = 79 * hash + Objects.hashCode(this.size);
        hash = 79 * hash + Objects.hashCode(this.color);
        hash = 79 * hash + Objects.hashCode(this.images);
        hash = 79 * hash + Objects.hashCode(this.adjectives);
        hash = 79 * hash + Objects.hashCode(this.story);
        hash = 79 * hash + Objects.hashCode(this.hasOwner);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null) return false;
        if (getClass() != obj.getClass()) return false;
        
        final Dog other = (Dog) obj;
        if (!Objects.equals(this.dog_id, other.dog_id)) return false;
        if (!Objects.equals(this.name, other.name)) return false;
        if (!Objects.equals(this.gender, other.gender)) return false;
        if (!Objects.equals(this.age, other.age)) return false;
        if (!Objects.equals(this.size, other.size)) return false;
        if (!Objects.equals(this.color, other.color)) return false;
        if (!Objects.equals(this.images, other.images)) return false;
        if (!Objects.equals(this.adjectives, other.adjectives)) return false;
        if (!Objects.equals(this.story, other.story)) return false;
        if (!Objects.equals(this.hasOwner, other.hasOwner)) return false;

        return Objects.equals(this.dog_id, other.dog_id);
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Dog{");
        sb.append("dog_id=").append(dog_id);
        sb.append(", name=").append(name);
        sb.append(", gender=").append(gender);
        sb.append(", age=").append(age);
        sb.append(", size=").append(size);
        sb.append(", color=").append(color);
        sb.append(", images=").append(images);
        sb.append(", adjectives=").append(adjectives);
        sb.append(", story=").append(story);
        sb.append(", hasOwner=").append(hasOwner);
        sb.append('}');
        return sb.toString();
    }
}