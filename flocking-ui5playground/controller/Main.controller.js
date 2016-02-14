/*!
 * This file is part of Flocking UI5 Playground
 * Copyright (C) 2016 Aleksey Krasnobaev <alekseykrasnobaev@gmail.com>
 *
 * You should have received a copy of the GNU General Public License
 * version 3 along with this program.
 * If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @requires sap.ui.core.mvc.Controller
 */
sap.ui.define([
  'sap/ui/core/mvc/Controller',
], function (Controller) {
  'use strict';

  var synth = flock.synth({
    synthDef: {
      ugen: 'flock.ugen.sinOsc',
      freq: 440,
      mul: 0.25,
    },
  });

  return Controller.extend('fplay.controller.Main', {

    /**
     * @param {sap.ui.base.Event} oControlEvent
     * @param {sap.ui.base.EventProvider} oControlEvent.getSource
     * @param {object} oControlEvent.getParameters
     */
    handleToggleButtonPress: function (oControlEvent) {
      if (oControlEvent.getParameter('pressed')) {
        synth.play();
      } else {
        synth.pause();
      }
    },

  });

});
