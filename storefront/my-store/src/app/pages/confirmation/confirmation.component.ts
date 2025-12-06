import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-confirmation',
  standalone: false,
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent implements OnInit{
fullName:string='';
total:number=0;

constructor(private router:ActivatedRoute){}
ngOnInit(): void {
    const query =this.router.snapshot.queryParamMap;
    this.fullName =query.get('name')||'';
    this.total =Number(query.get('total'));
}

}
