import {Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

declare var $: any;
declare var SimpleMDE: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    @ViewChild('simplemde') textarea: ElementRef;

    title = 'app';
    text = 'test';
    // Radar
    public radarChartType = 'radar';

    public radarChartLabels: string[] = ['category 1', 'category 2', 'category 3', 'category 4', 'category 5'];

    public radarChartData: any = [
        {data: [4, 3.5, 5, 5, 4], label: '2017'},
        {data: [4, 3, 5, 4.5, 5], label: '2018'}
    ];

    public options = {
        maintainAspectRatio: true,
        scale: {
            ticks: {
                beginAtZero: true,
                max: 5,
                stepSize: 1
            }
        }
    };

    ngAfterViewInit(): void {
        $('.icon-test').fadeIn(1000);
        $('h1').hide();

        var mde = new SimpleMDE({
            element: this.textarea.nativeElement,
            showIcons: ['code', 'table']
        });
    }
}
