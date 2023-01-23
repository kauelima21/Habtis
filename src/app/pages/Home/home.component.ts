import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "home",
  standalone: true,
  imports: [CommonModule],
  template: `
    <p class="font-medium text-lg">{{ secret }}</p>
    <button (click)="showSecret()" class="btn">
      Clique para saber o segredo
    </button>
  `,
})
export class HomeComponent {
  secret: string = "";

  showSecret() {
    this.secret = "Estou sendo renderizado pelo vite 🤫";
  }
}
