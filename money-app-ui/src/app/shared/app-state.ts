import { TemplateRef } from "@angular/core";

export class AppStateService {

    private _isOverlayVisible = false;
    private _overlayTemplate!: TemplateRef<any>;

    constructor() {

    }

    setIsOverlayVisible(state: boolean): void {
        this._isOverlayVisible = state;
    }

    get isOverlayVisible(): boolean {
        return this._isOverlayVisible;
    }

    get overlayTemplate(): TemplateRef<any> {
        return this._overlayTemplate;
    }

    setOverlayTemplate(template: TemplateRef<any>): void {
        this._overlayTemplate = template;
    }
}