package com.example.demo.Model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "properties")
public class Property {
    @Id
    private String id;
    private String title;
    private float price;
    private Date fundedDate;
    private float purchasePrice;
    private int totalInvestors;
    private float totalRentalIncome;
    private String location;
    private String mapsLocation;
    private List<String> listImages;
    private int totalRooms;
    private float squareSpace;
    private String overview;

    public Property() {
    }

    public Property(String id, String title, float price, Date fundedDate, float purchasePrice, int totalInvestors,
                    float totalRentalIncome, String location, String mapsLocation, List<String> listImages,
                    int totalRooms, float squareSpace, String overview) 
    {
        this.id = id;
        this.title = title;
        this.price = price;
        this.fundedDate = fundedDate;
        this.purchasePrice = purchasePrice;
        this.totalInvestors = totalInvestors;
        this.totalRentalIncome = totalRentalIncome;
        this.location = location;
        this.listImages = listImages;
        this.totalRooms = totalRooms;
        this.squareSpace = squareSpace;
        this.overview = overview;
        this.mapsLocation = mapsLocation;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public Date getFundedDate() {
        return fundedDate;
    }

    public void setFundedDate(Date fundedDate) {
        this.fundedDate = fundedDate;
    }

    public float getPurchasePrice() {
        return purchasePrice;
    }

    public void setPurchasePrice(float purchasePrice) {
        this.purchasePrice = purchasePrice;
    }

    public int getTotalInvestors() {
        return totalInvestors;
    }

    public void setTotalInvestors(int totalInvestors) {
        this.totalInvestors = totalInvestors;
    }

    public float getTotalRentalIncome() {
        return totalRentalIncome;
    }

    public void setTotalRentalIncome(float totalRentalIncome) {
        this.totalRentalIncome = totalRentalIncome;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<String> getListImages() {
        return listImages;
    }

    public void setListImages(List<String> listImages) {
        this.listImages = listImages;
    }

    public int getTotalRooms() {
        return totalRooms;
    }

    public void setTotalRooms(int totalRooms) {
        this.totalRooms = totalRooms;
    }

    public float getSquareSpace() {
        return squareSpace;
    }

    public void setSquareSpace(float squareSpace) {
        this.squareSpace = squareSpace;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    @Override
    public String toString() {
        return "Property{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", price=" + price +
                ", fundedDate=" + fundedDate +
                ", purchasePrice=" + purchasePrice +
                ", totalInvestors=" + totalInvestors +
                ", totalRentalIncome=" + totalRentalIncome +
                ", location='" + location + '\'' +
                ", listImages=" + listImages +
                ", totalRooms=" + totalRooms +
                ", squareSpace=" + squareSpace +
                ", overview='" + overview + '\'' +
                '}';
    }
}
