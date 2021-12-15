

export default class BikesEntity {
    constructor() {
      this.page = 0;
      this.per_page = 0;
      this.location = "";
      this.description = "";
      this.title = "";
      this.date_ini = null;
      this.date_fin = null;
    }

    setPage(page) {
      this.page = page;
      return this;
    }
    setPerPage(per_page) {
      this.per_page = per_page;
      return this;
    }
    setLocation(location) {
      this.location = location;
      return this;
    }
    setDescription(description) {  
      this.description = description;
      return this;
    }
    setTitle(title) {
      this.title = title;
      return this;
    }
    setDateIni(date_ini) {
      this.date_ini = date_ini;
      return this;
    }
    setDateFin(date_fin) {
      this.date_fin = date_fin;
      return this;
    }
    build() {
        return {
            page : this.page,
            per_page : this.per_page,
            location : this.location,
            description : this.description,
            title : this.title,
            date_ini : this.date_ini,
            date_fin : this.date_fin
        };
      }
  }