export const registerSystemSettings = function() {

  /**
   * Track the system version upon which point a migration was last applied
   */
  game.settings.register("bitd", "systemMigrationVersion", {
    name: "System Migration Version",
    scope: "world",
    config: false,
    type: Number,
    default: 0
  });
  
    game.settings.register('blades-in-the-dark', 'ActionRoll', {
	name: game.i18n.localize('BITD.Settings.Action.Name'),
	hint: game.i18n.localize('BITD.Settings.Action.Hint'),
	config: true,
	default: true,
	scope: 'world',
	type: new foundry.data.fields.BooleanField(),
	requiresReload: true
  });
	
	game.settings.register('blades-in-the-dark', 'ThreatRoll', {
	name: game.i18n.localize('BITD.Settings.Threat.Name'),
	hint: game.i18n.localize('BITD.Settings.Threat.Hint'),
	config: true,
	scope: 'world',
	type: new foundry.data.fields.BooleanField(),
	requiresReload: true
  });
  
  game.settings.register('blades-in-the-dark', 'PushYourself', {
	name: game.i18n.localize('BITD.Settings.Push.Name'),
	hint: game.i18n.localize('BITD.Settings.Push.Hint'),
	config: true,
	scope: 'world',
	type: new foundry.data.fields.BooleanField(),
	requiresReload: true
  });
  
    game.settings.register('blades-in-the-dark', 'DeepCutLoad', {
	name: game.i18n.localize('BITD.Settings.Load.Name'),
	hint: game.i18n.localize('BITD.Settings.Load.Hint'),
	config: true,
	scope: 'world',
	type: new foundry.data.fields.BooleanField(),
	requiresReload: true
  });
};
