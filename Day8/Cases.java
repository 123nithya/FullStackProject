
package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="cases")
public class Cases {

	@Id
	public int cId;
	public String cName;		
	public String cDesc;
	public String cLoca;
	public String cDocs;
	public int getcId() {
		return cId;
	}
	public void setcId(int cId) {
		this.cId = cId;
	}
	public String getcName() {
		return cName;
	}
	public void setcName(String cName) {
		this.cName = cName;
	}
	public String getcDesc() {
		return cDesc;
	}
	public void setcDesc(String cDesc) {
		this.cDesc = cDesc;
	}
	public String getcLoca() {
		return cLoca;
	}
	public void setcLoca(String cLoca) {
		this.cLoca = cLoca;
	}
	public String getcDocs() {
		return cDocs;
	}
	public void setcDocs(String cDocs) {
		this.cDocs = cDocs;
	}
	
	
}
