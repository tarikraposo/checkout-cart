import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  @Input() img!: string;
  @Input() alt!: string;
  @Input() w!: number;
  @Input() h!: number;
}
