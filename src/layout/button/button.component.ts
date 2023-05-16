import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {InfraButton} from "./button.interface";

const CONFIG: Partial<InfraButton> = {
  type: "default",
  class: 'btn',
}

@Component({
  selector: 'infra-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  public get getLabel(): string | undefined {
    return this.config?.label || this.label;
  }

  @Input() config?: InfraButton = CONFIG;
  @Input() label?: string;

  ngOnInit(): void {
    this.config = {label: '', ...CONFIG, ...this.config};
  }
}
