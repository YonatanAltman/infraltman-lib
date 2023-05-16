import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {InfraButton, InfraClass} from "./button.interface";

const CONFIG: Partial<InfraButton> = {
  type: "default",
  class: 'btn',
  size: 'medium'
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

  public get className(): string | undefined {
    return (this.config?.class as InfraClass)?.className ||
      this.config?.class as string;
  };

  public get classArr(): string | undefined {
    return [
      this.className,
      this.config?.type,
      this.config?.size,
    ].join(' ');
  };

  @Input() config?: InfraButton = CONFIG;
  @Input() label?: string;

  ngOnInit(): void {
    this.config = {label: '', ...CONFIG, ...this.config};
  }
}
