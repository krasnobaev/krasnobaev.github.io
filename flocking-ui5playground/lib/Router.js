/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides acustomized router class for the 'explored' app.
sap.ui.define([
  'jquery.sap.global',
  'sap/ui/core/routing/Router',
  'sap/ui/core/routing/History',
], function (jQuery, Router, History) {
  'use strict';

  var MyRouter = Router.extend('fplay.lib.Router', {

    /**
     * mobile nav back handling
     */
    myNavBack: function (sRoute, oData) {
      var oHistory = History.getInstance();
      var oPrevHash = oHistory.getPreviousHash();
      if (oPrevHash !== undefined) {
        window.history.go(-1);
      } else {
        var bReplace = true; // otherwise we go backwards with a forward history
        this.navTo(sRoute, oData, bReplace);
      }
    },

    /**
     * a nav to method that does not write hashes but load the views properly
     *
     * @param  {string} sViewName fplay.view.Master
     * @param  {sap.ui.core.mvc.ViewType} sViewType
     * @param  {boolean} master   States if the page should be added to the master area. If it's set to false, the page is added to detail area.
     * @param  {object} oData     This optional object can carry any payload data which should be made available to the target page.
     */
    myNavToWithoutHash: function (sViewName, sViewType, bMaster, oData) {
      var oApp = sap.ui.getCore().byId('__xmlview0--app');
      var oView = this.getView(sViewName, sViewType);
      oApp.addPage(oView, bMaster);
      oApp.toDetail(oView.getId(), 'show', oData);
    },

    /**
     * a nav to method that does not write hashes but load the views properly
     *
     * @param  {string} sViewName fplay.view.Master
     * @param  {sap.ui.core.mvc.ViewType} sViewType
     */
    navToMaster: function (sViewName, sViewType) {
      var oApp = sap.ui.getCore().byId('__xmlview0--app');
      var oView = this.getView('fplay.view.Master', 'XML');
      oApp.addPage(oView, true);
      oApp.toMaster(oView.getId(), 'show');
    },

  });

  return MyRouter;

}, /* bExport= */ true);
