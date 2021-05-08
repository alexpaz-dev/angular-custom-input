import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  searchText!: string | '';

  searching = false;
  loading = false;
  
  dataSource!: any[];
  
  countryName!: string;
  countryCapital!: string;
  countryRegion!: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCities()
    .subscribe((result: Country[]) => {
        this.dataSource = result;
        console.log(result);
    });
  }

  onKeypressEvent(event: any){
    //this.loading = true;

    if (event.key === 'Enter') {
      this.searchCountry(event.target.value);
      console.log(event.target.value);
    }
  }

  onClick(country: string){
    this.loading = true;

    console.log('Searching: '+ country);
    this.searchCountry(country);
  }

  onChange(){
    if (this.searchText != ''){
      this.searching = true;
      console.log(this.searchText);
    } else{
      this.searching = false;
    }
  }

  searchCountry(country: string){
    this.apiService.getCity(country)
    .subscribe(result => {
        // Insertamos un delay para observar el efecto de loading
        setTimeout(()=> { 
          
          this.countryName = result[0].name;
          this.countryCapital = result[0].capital;
          this.countryRegion = result[0].region;
  
          this.searchText = '';
          this.searching = false;
          this.loading = false;
  
          console.log(result);

        }, 1000)
    });
  }

}
