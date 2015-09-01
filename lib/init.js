Options.init('homePath');
Options.init('siteName');

ReactiveTemplates.request('tabs', 'orionTabs');
ReactiveTemplates.request('adminSidebar');

ReactiveTemplates.set('layout', 'orionLayout');
ReactiveTemplates.set('outAdminLayout', 'orionOutAdminLayout');

ReactiveTemplates.set('links', 'orionSidebar');
ReactiveTemplates.set('login', 'orionLogin');
ReactiveTemplates.set('registerWithInvitation', 'orionRegisterWithInvitation');

ReactiveTemplates.set('myAccount.index', 'orionAccountIndex');
ReactiveTemplates.set('myAccount.password', 'orionAccountPassword');
ReactiveTemplates.set('myAccount.profile', 'orionAccountProfile');

ReactiveTemplates.set('accounts.index', 'orionAccountsIndex');
ReactiveTemplates.set('accounts.update', 'orionAccountsUpdate');
ReactiveTemplates.set('accounts.create', 'orionAccountsCreate');

ReactiveTemplates.set('configUpdate', 'orionConfigUpdate');
ReactiveTemplates.set('dictionaryUpdate', 'orionDictionaryUpdate');

// Set the default entity templates
Options.set('collectionsDefaultIndexTemplate', 'orionCollectionsIndex');
Options.set('collectionsDefaultCreateTemplate', 'orionCollectionsCreate');
Options.set('collectionsDefaultUpdateTemplate', 'orionCollectionsUpdate');
Options.set('collectionsDefaultDeleteTemplate', 'orionCollectionsDelete');

// Pages
ReactiveTemplates.set('pages.index', 'orionPagesIndex');
ReactiveTemplates.set('pages.create', 'orionPagesCreate');
ReactiveTemplates.set('pages.update', 'orionPagesUpdate');
ReactiveTemplates.set('pages.delete', 'orionPagesDelete');
