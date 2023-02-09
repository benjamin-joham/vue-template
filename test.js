window.initialData['user/data'] = {
  'data': {
    'companyOrderListRights': 'NONE',
    'poller': { 'delayFirstRequest': 300, 'requestFrequency': 120, 'maxSecKeepAlive': 14400, 'type': 'pollerConfig' },
    'languages': [{
      'isocode': 'de',
      'nativeName': 'Deutsch',
      'url': '/_s/language?code=de',
      'selected': true,
      'type': 'language'
    }, {
      'isocode': 'fr',
      'nativeName': 'Français',
      'url': '/_s/language?code=fr',
      'selected': false,
      'type': 'language'
    }, { 'isocode': 'it', 'nativeName': 'Italiano', 'url': '/_s/language?code=it', 'selected': false, 'type': 'language' }],
    'showUserSnap': false,
    'googleMapsApiKey': 'AIzaSyB5KzTu_qd971YPbi5CCTn7U0cmddvjqEs',
    'contextPath': '/de',
    'links': {
      'loginPageLink': {
        'uid': 'loginPageLink',
        'visible': true,
        'url': '/login',
        'external': false,
        'linkTarget': 'sameWindow',
        'addContextPath': true,
        'iconPosition': 'left',
        'align': 'left',
        'type': 'cMSLinkComponent'
      },
      'loginLink': {
        'uid': 'loginLink',
        'visible': true,
        'url': '/j_spring_security_check',
        'external': false,
        'linkTarget': 'sameWindow',
        'addContextPath': true,
        'iconPosition': 'left',
        'align': 'left',
        'type': 'cMSLinkComponent'
      },
      'multiUserLoginLink': {
        'uid': 'multiUserLoginLink',
        'visible': true,
        'url': '/multiuser-login/subuser',
        'external': false,
        'linkTarget': 'sameWindow',
        'addContextPath': true,
        'iconPosition': 'left',
        'align': 'left',
        'type': 'cMSLinkComponent'
      },
      'registerLink': {
        'uid': 'registerLink',
        'visible': true,
        'url': '/register',
        'external': false,
        'linkTarget': 'sameWindow',
        'addContextPath': true,
        'iconPosition': 'left',
        'align': 'left',
        'type': 'cMSLinkComponent'
      },
      'passwordForgottenLink': {
        'uid': 'passwordForgottenLink',
        'name': 'Passwort zurücksetzen',
        'visible': true,
        'url': '/password-forgotten',
        'external': false,
        'linkTarget': 'sameWindow',
        'addContextPath': true,
        'iconPosition': 'left',
        'align': 'left',
        'type': 'cMSLinkComponent'
      },
      'logoutLink': {
        'uid': 'logoutLink',
        'visible': true,
        'url': '/logout',
        'external': false,
        'linkTarget': 'sameWindow',
        'addContextPath': true,
        'iconPosition': 'left',
        'align': 'left',
        'type': 'cMSLinkComponent'
      },
      'cartPageLink': {
        'uid': 'cartPageLink',
        'visible': true,
        'url': '/cart',
        'external': false,
        'linkTarget': 'sameWindow',
        'addContextPath': true,
        'iconPosition': 'left',
        'align': 'left',
        'type': 'cMSLinkComponent'
      },
      'orderListOverviewPageLink': {
        'uid': 'myAccountOrderListsLink',
        'name': 'Bestell-Listen',
        'visible': true,
        'url': '/my-account/order-lists',
        'external': false,
        'linkTarget': 'sameWindow',
        'addContextPath': true,
        'iconType': 'i-order-list',
        'iconPosition': 'left',
        'align': 'left',
        'type': 'cMSLinkComponent'
      },
      'orderHistoryOverviewPageLink': {
        'uid': 'myAccountOrderHistoryLink',
        'name': 'Bestellungen',
        'visible': true,
        'url': '/my-account/orders',
        'external': false,
        'linkTarget': 'sameWindow',
        'addContextPath': true,
        'iconType': 'i-postorder',
        'iconPosition': 'left',
        'align': 'left',
        'type': 'cMSLinkComponent'
      },
      'locationOverviewPageLink': {
        'uid': 'locationsAllLocationsLink',
        'name': 'Alle Standorte',
        'visible': true,
        'url': '/store-finder',
        'external': false,
        'linkTarget': 'sameWindow',
        'addContextPath': true,
        'iconType': 'i-all-locations',
        'iconPosition': 'left',
        'align': 'left',
        'type': 'cMSLinkComponent'
      },
      'selectableLocationsOverviewPageLink': {
        'uid': 'locationsConstructionMaterialsLink',
        'name': 'Baumaterialien',
        'visible': true,
        'url': '/store-finder?assortmentType=construction-materials',
        'external': false,
        'linkTarget': 'sameWindow',
        'addContextPath': true,
        'iconType': 'i-building-material',
        'iconPosition': 'left',
        'align': 'left',
        'type': 'cMSLinkComponent'
      },
      'uploadOrderListExampleFile': {
        'uid': 'uploadOrderListExampleFileLink',
        'visible': true,
        'url': '/medias/uploadOrderListExampleFile.csv?context=bWFzdGVyfHJvb3R8MjN8dGV4dC9jc3Z8aDlhL2gyMy84ODgzNTEwMTQ5MTUwL3VwbG9hZE9yZGVyTGlzdEV4YW1wbGVGaWxlLmNzdnwxMzI2ZmM5ZGNlNjk3OGZhYWU4Y2I1MmE3NDE1MTQ3NmJhZGU5Zjg0NzZkOGU5MjhjZTQ4ZDU5YzkzYzkwNDA1',
        'external': true,
        'linkTarget': 'sameWindow',
        'addContextPath': false,
        'iconPosition': 'left',
        'align': 'left',
        'type': 'cMSLinkComponent'
      },
      'uploadCartExampleFile': {
        'uid': 'uploadCartExampleFileLink',
        'visible': true,
        'url': '/medias/uploadCartExampleFile.csv?context=bWFzdGVyfHJvb3R8MjN8dGV4dC9jc3Z8aDMwL2gyMy84ODgzNTEwMTgxOTE4L3VwbG9hZENhcnRFeGFtcGxlRmlsZS5jc3Z8YTk3YWRjZTBmYmNlODRhOTliMTg2YmFhNjk0OGQ3NjVlZDk0YzYzZWE1OWQxMzUzNzhmMzRlMWQ1N2UyZGQwYg',
        'external': true,
        'linkTarget': 'sameWindow',
        'addContextPath': false,
        'iconPosition': 'left',
        'align': 'left',
        'type': 'cMSLinkComponent'
      },
      'agbPageLink': {
        'uid': 'generalTermsAndConditionsLink',
        'visible': true,
        'url': '/general-terms-and-conditions',
        'external': false,
        'linkTarget': 'sameWindow',
        'addContextPath': true,
        'iconPosition': 'left',
        'align': 'left',
        'type': 'cMSLinkComponent'
      },
      'userManagementDetailLink': {
        'uid': 'myAccountUserManagementDetailLink',
        'visible': true,
        'url': '/my-account/user-management',
        'external': false,
        'linkTarget': 'sameWindow',
        'addContextPath': true,
        'iconType': 'i-usermanagement',
        'iconPosition': 'left',
        'align': 'left',
        'type': 'cMSLinkComponent'
      },
      'userManagementOverviewLink': {
        'uid': 'myAccountUserManagementLink',
        'name': 'Benutzerverwaltung',
        'visible': true,
        'url': '/my-account/user-management',
        'external': false,
        'linkTarget': 'sameWindow',
        'addContextPath': true,
        'iconType': 'i-usermanagement',
        'iconPosition': 'left',
        'align': 'left',
        'type': 'cMSLinkComponent'
      },
      'type': 'hgcUserComponent'
    },
    'api': {
      'getUnitCalculationApi': '/api/unit-calculation',
      'getOrderListEntryApi': '/api/order-list/entry',
      'getOrderListUploadApi': '/api/order-list/upload',
      'getProductReferencesApi': '/api/productReferences',
      'getAddToCartPath': '/cart/add',
      'getCartCommissionApi': '/api/checkout/commission/entry',
      'getSearchStoreApi': '/api/search-store',
      'getCheckoutDeliveryMode': '/api/checkout/deliveryMode',
      'getUserManagementApi': '/api/user-management',
      'getAddToOrderListApi': '/api/order-list/entry',
      'getProductStock': '/api/productStock',
      'getProductVariantApi': '/api/product',
      'getFilterOrderHistoryDocumentsApi': '/api/orderhistorydocuments/filter',
      'getRegistrationApi': '/api/registration',
      'getCommissionApi': '/api/commissions',
      'getFavoriteStoreApi': '/api/favorite-store',
      'getFilterOrderHistoryApi': '/api/orderhistory/filter',
      'getCartUploadApi': '/api/checkout/upload',
      'getPollerApi': '/api/poller',
      'getCartEntryApi': '/api/cart-entry',
      'getOrderToCartApi': '/api/cart/order',
      'getMultiCartApi': '/api/multi-cart',
      'getOrderListCartApi': '/api/order-list',
      'getOxomiProductInfo': '/api/oxomi/product',
      'getCheckoutOrderReference': '/api/checkout/orderReference',
      'getSplitCartApi': '/api/split-cart',
      'getUpdatePasswordApi': '/api/update-password',
      'getOrderListApi': '/api/order-list',
      'getFavoritesListApi': '/api/favorites',
      'getObjectsApi': '/api/objects',
      'getPricesApi': '/api/prices',
      'getCartApi': '/api/cart-entry'
    },
    'user': {
      'uid': 'anonymous',
      'name': 'Anonymous',
      'firstName': 'Anonymous',
      'lastName': '',
      'email': 'digitalservice@hgc.ch',
      'active': false,
      'selected': false,
      'type': 'ANONYMOUS',
      'defaultPos': { 'displayName': 'Zürich Hauptsitz', 'favorite': false, 'canBeFavorite': false, 'type': 'pointOfService' },
      'loginDisabled': true
    }
  },
  'messages': { 'INFO': [], 'ERROR': [], 'SUCCESS': [] },
  'assetsPath': '/_ui/responsive/assets'
};