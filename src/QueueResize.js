/**
 * QueueResize.js
 *
 * Copyright 2017, Ephox
 * Released under AGPLv3 License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */


/**
 @class plupload.QueueResize
 @extends plupload.core.Queue
 @constructor
 @private
 @final
 @since 3.0
 @param {Object} options
*/
define('plupload/QueueResize', [
    'moxie/core/utils/Basic',
    'plupload/core/Queue'
], function(Basic, Queue) {

    return (function(Parent) {
        Basic.inherit(QueueResize, Parent);

        function QueueResize(options) {

            Queue.call(this, {
                max_slots: 1,
                max_retries: 0,
                auto_start: false,
                finish_active: false,
                pause_before_start: true,
                resize: {}
            });

            this.setOption = function(option, value) {
                if (typeof(option) !== 'object') {
                    if (option == 'max_resize_slots') {
                        option = 'max_slots';
                    }
                }
                QueueResize.prototype.setOption.call(this, option, value, true);
            };


            this.setOptions(options);
        }


        return QueueResize;
    }(Queue));
});