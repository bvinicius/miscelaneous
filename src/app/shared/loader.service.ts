import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
    private _loading = false;

    public start() {
        this._loading = true;
    }

    public stop() {
        this._loading = false;
    }

    public loading() {
        return this._loading
    } 
}