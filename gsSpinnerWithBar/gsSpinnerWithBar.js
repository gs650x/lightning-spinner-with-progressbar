/**
 * @author Gurjit Singh
 * @date 30/May/2021
 * @group lightning-spinner
 * @description Renders slds spinner with a custom progress bar.
 */

import { LightningElement, api, track } from 'lwc';

const TIMEOUT_DELAY = 1500;
var intervalDelay = 100;

export default class GsSpinnerWithBar extends LightningElement {

    interval;
    hideSpinner;

    _showSpinner;
    @api
    get showSpinner() {
        return this._showSpinner;
    };
    set showSpinner(value) {
        if (value == true || value == false) 
            this.handleShowSpinner(value);
    }

    @track percentage = 0;
    @track style;
    @track barClass = 'bar';

    connectedCallback() {
        //this.invokeBar();
    }

    disconnectedCallback() {
        clearInterval(this.interval);
    }

    handleShowSpinner(value) {
        this.hideSpinner = !value;
        if (this.hideSpinner) {
            clearInterval(this.interval);
            intervalDelay = 15;
        } else {
            intervalDelay = 100;
            this._showSpinner = true;
        }
        this.invokeBar();
    }

    invokeBar() {
        this.interval = setInterval(() => {
            if (this.percentage >= 100) {
                this.unRenderSpinner();
            } else if (this.percentage <= 90 || this.hideSpinner) {
                this.increaseProgress();
            }
        }, intervalDelay);
    }

    increaseProgress() {
        this.style = `width: ${this.percentage}%`;
        this.percentage++;

        if (this.percentage >= 35 && this.percentage < 65) {
            this.barClass = 'bar bar-extended-med';
        } else if (this.percentage >= 65) {
            this.barClass = 'bar bar-extended-final';
        }
    }

    unRenderSpinner() {
        clearInterval(this.interval);

        setTimeout(() => {
            this._showSpinner = false;
            this.percentage = 0;
            this.style = `width: ${this.percentage}%`;
        }, TIMEOUT_DELAY);
    }
}
