/*
 * Copyright (c) 2015 Juniper Networks, Inc. All rights reserved.
 */

var controllerInfraDashboardLoader = new ControllerInfraDashboardLoader();


function ControllerInfraDashboardLoader() {
    this.load = function (paramObject) {
        var self = this, currMenuObj = globalObj.currMenuObj,
            hashParams = paramObject['hashParams'],
            rootDir = currMenuObj['resources']['resource'][1]['rootDir'],
            renderFn = paramObject['function'];

        if (self.monInfraDashboardView == null) {
            require(['mon-infra-dashboard-view'],function() {
                require(['mon-infra-controller-dashboard'], function (ControllerDashboardView) {
                    self.monInfraDashboardView = new ControllerDashboardView({
                        el: $(contentContainer)
                    });
                    self.monInfraDashboardView.render();
                });
            });
        } else {
            self.renderView(renderFn, hashParams);
        }
    };

    this.destroy = function()  {
    }
}

