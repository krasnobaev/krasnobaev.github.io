/*!
 * This file is part of Flocking UI5 Playground
 * Copyright (C) 2016 Aleksey Krasnobaev <alekseykrasnobaev@gmail.com>
 *
 * You should have received a copy of the GNU General Public License
 * version 3 along with this program.
 * If not, see <http://www.gnu.org/licenses/>.
 */
sap.ui.define([
  'sap/ui/core/UIComponent',
  'fplay/lib/Router',
], function (UIComponent) {
  'use strict';

  var Component = UIComponent.extend('fplay.Component', {
    metadata: {
      name: 'flocking-ui5playground',
      version: '0.0.1',
      includes: ['css/style.css'],
      dependencies: {
        libs: ['sap.m', 'zlib'],
      },
      rootView: 'fplay.view.App',
      routing: {
        config: {
          routerClass: 'fplay.lib.Router',
          viewType: 'XML',
          viewPath: 'fplay.view',
          clearTarget: false,
          controlId: '__xmlview0--app',
          controlAggregation: 'detailPages',
        },

        routes: [{
          pattern: '',
          name: 'main',
          target: ['scenarios', 'managescenario'],
        }],

        targets: {
          scenarios: {
            controlAggregation: 'masterPages',
            viewName: 'Master',
            viewId: 'Master',
          },

          managescenario: {
            viewPath: 'siuClassic.modules.manageScenario.view',
            viewName: 'Main',
            viewId: 'Main',
          },
        },
      },
    },

  });

  return Component;

});
