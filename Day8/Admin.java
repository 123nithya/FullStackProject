package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="admin")
public class Admin {
	@Id
	public int pId;
	public String pName;
	public String pEmail;
	public long pMobile;
	public String pLocation;
	public String pStatus;
	public int getpId() {
		return pId;
	}
	public void setpId(int pId) {
		this.pId = pId;
	}
	public String getpName() {
		return pName;
	}
	public void setpName(String pName) {
		this.pName = pName;
	}
	public String getpEmail() {
		return pEmail;
	}
	public void setpEmail(String pEmail) {
		this.pEmail = pEmail;
	}
	public long getpMobile() {
		return pMobile;
	}
	public void setpMobile(long pMobile) {
		this.pMobile = pMobile;
	}
	public String getpLocation() {
		return pLocation;
	}
	public void setpLocation(String pLocation) {
		this.pLocation = pLocation;
	}
	public String getpStatus() {
		return pStatus;
	}
	public void setpStatus(String pStatus) {
		this.pStatus = pStatus;
	}
	
	
}
