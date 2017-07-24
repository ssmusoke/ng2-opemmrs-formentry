import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploaderModule } from 'ngx-file-uploader';
import { SecurePipe } from './secure.pipe';
// import { SelectModule } from 'ng2-select/ng2-select';
import { SelectModule } from '../../components/select';
import { RemoteFileUploadComponent } from './file-upload.component';
var RemoteFileUploadModule = (function () {
    function RemoteFileUploadModule() {
    }
    RemoteFileUploadModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, SelectModule, FormsModule, FileUploaderModule],
                    exports: [RemoteFileUploadComponent],
                    declarations: [RemoteFileUploadComponent, SecurePipe],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    RemoteFileUploadModule.ctorParameters = function () { return []; };
    return RemoteFileUploadModule;
}());
export { RemoteFileUploadModule };
//# sourceMappingURL=file-upload.module.js.map