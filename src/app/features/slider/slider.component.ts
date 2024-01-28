import { Component } from "@angular/core";


@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})

export class SliderComponent {
    public elementIds: number[] = [1,2,3]
}