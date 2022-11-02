function refresh_logic_for_stuff() {	
	if(Known.kokiri_sword == true) {Logic.kokiri_sword = Location_Logic[Location.kokiri_sword];} else{Logic.kokiri_sword = false;}
	
	if(Known.farores_wind == true) {Logic.farores_wind = Location_Logic[Location.farores_wind];} else{Logic.farores_wind = false;}
	
	if(Known.slingshot1 == true) {Logic.slingshot1 = Location_Logic[Location.slingshot1];} 
	if(Known.slingshot2 == true) {Logic.slingshot2 = Location_Logic[Location.slingshot2];}
	if(Known.slingshot3 == true) {Logic.slingshot3 = Location_Logic[Location.slingshot3];}
	Logic.slingshot = Logic.slingshot1 || Logic.slingshot2 || Logic.slingshot3;
	
	if(Known.boomerang == true) {Logic.boomerang = Location_Logic[Location.boomerang];} else{Logic.boomerang = false;}
	
	if(Known.rutos_letter == true) {Logic.rutos_letter = Location_Logic[Location.rutos_letter];} else{Logic.rutos_letter = false;}
	if(Known.bottle1 == true) {Logic.bottle1 = Location_Logic[Location.bottle1];}
	if(Known.bottle2 == true) {Logic.bottle2 = Location_Logic[Location.bottle2];}
	if(Known.bottle3 == true) {Logic.bottle3 = Location_Logic[Location.bottle3];}
	Logic.bottle = (Logic.rutos_letter && ((Logic.bomb_bag && Logic.lullaby) || Logic.silver_scale)) || Logic.bottle1 || Logic.bottle2 || Logic.bottle3;
	
	if(Known.scale1 == true) {Logic.scale1 = Location_Logic[Location.scale1]; }
	if(Known.scale2 == true) {Logic.scale2 = Location_Logic[Location.scale2]; }
	Logic.silver_scale = Logic.scale1 || Logic.scale2;
	Logic.golden_scale = Logic.scale1 && Logic.scale2;
	
	if(Known.bomb_bag1 == true) {Logic.bomb_bag1 = Location_Logic[Location.bomb_bag1];}
	if(Known.bomb_bag2 == true) {Logic.bomb_bag2 = Location_Logic[Location.bomb_bag2];}
	if(Known.bomb_bag3 == true) {Logic.bomb_bag3 = Location_Logic[Location.bomb_bag3];}
	Logic.bomb_bag = Logic.bomb_bag1 || Logic.bomb_bag2 || Logic.bomb_bag3;
	
	if(Known.hammer == true) {Logic.hammer = Location_Logic[Location.hammer];} else{Logic.hammer= false;}
	
	if(Known.bow1 == true) {Logic.bow1 = Location_Logic[Location.bow1];}
	if(Known.bow2 == true) {Logic.bow2 = Location_Logic[Location.bow2];}
	if(Known.bow3 == true) {Logic.bow3 = Location_Logic[Location.bow3];}
	Logic.bow = Logic.bow1 || Logic.bow2 || Logic.bow3;
	
	if(Known.hookshot1 == true) {Logic.hookshot1 = Location_Logic[Location.hookshot1];}
	if(Known.hookshot2 == true) {Logic.hookshot2 = Location_Logic[Location.hookshot2];}
	Logic.hookshot = Logic.hookshot1 || Logic.hookshot2;
	Logic.longshot = Logic.hookshot1 && Logic.hookshot2;
	if(Known.strength1 == true) {Logic.strength1 = Location_Logic[Location.strength1];}
	if(Known.strength2 == true) {Logic.strength2 = Location_Logic[Location.strength2];}
	if(Known.strength3 == true) {Logic.strength3 = Location_Logic[Location.strength3];}
	Logic.goron_bracelet = Logic.strength1 || Logic.strength2 || Logic.strength3;
	Logic.silver_gauntlets = (Logic.strength1 && Logic.strength2) || (Logic.strength1 && Logic.strength3) || (Logic.strength2 && Logic.strength3)
	Logic.golden_gauntlets = Logic.strength1 && Logic.strength2 && Logic.strength3;
	
	if(Known.mirror_shield == true) {Logic.mirror_shield = Location_Logic[Location.mirror_shield];} else{Logic.mirror_shield = false;}
	
	if(Known.big_poe == true) {Logic.big_poe = Location_Logic[Location.big_poe];} else{Logic.big_poe= false;}
	
	if(Known.iron_boots == true) {Logic.iron_boots = Location_Logic[Location.iron_boots];} else{Logic.iron_boots = false;}
	if(Known.hover_boots == true) {Logic.hover_boots = Location_Logic[Location.hover_boots];} else{Logic.hover_boots = false;}
	
	if(Known.magic1 == true) {Logic.magic1 = Location_Logic[Location.magic1];}
	if(Known.magic2 == true) {Logic.magic2 = Location_Logic[Location.magic2];}
	Logic.magic = Logic.magic1 || Logic.magic2;
	
	if(Known.dins_fire == true) {Logic.dins_fire = Location_Logic[Location.dins_fire];} else{Logic.dins_fire = false;}
	if(Known.fire_arrows == true) {Logic.fire_arrows = Location_Logic[Location.fire_arrows];} else{Logic.fire_arrows = false;}
	
	if(Known.wallet1 == true) {Logic.wallet1 = Location_Logic[Location.wallet1];}
	if(Known.wallet2 == true) {Logic.wallet2 = Location_Logic[Location.wallet2];}
	Logic.adults_wallet = Logic.wallet1 || Logic.wallet2;
	Logic.giants_wallet = Logic.wallet1 && Logic.wallet2;
	
	if(Known.goron_tunic == true) {Logic.goron_tunic = Location_Logic[Location.goron_tunic];} else{Logic.goron_tunic = false;}
	if(Known.zora_tunic == true) {Logic.zora_tunic = Location_Logic[Location.zora_tunic];} else{Logic.zora_tunic = false;}
	if(Known.lens == true) {Logic.lens = Location_Logic[Location.lens];} else{Logic.lens = false;}
	if(Known.stone_of_agony == true) {Logic.stone_of_agony = Location_Logic[Location.stone_of_agony];} else{Logic.stone_of_agony = false;}
	if(Known.prescription == true) {Logic.prescription = Location_Logic[Location.prescription];} else{Logic.prescription = false;}
	if(Known.claim_check == true) {Logic.claim_check = Location_Logic[Location.claim_check];} else{Logic.claim_check = false;}
	Logic.trade = Logic.claim_check || Logic.prescription;
	
	if(Known.light_arrows == true) {Logic.light_arrows = Location_Logic[Location.light_arrows];}
	
	if(Known.lullaby == true) {Logic.lullaby = Location_Logic[Location.lullaby]; }
	if(Known.eponas == true) {Logic.eponas = Location_Logic[Location.eponas]; }
	if(Known.sarias == true) {Logic.sarias = Location_Logic[Location.sarias]; }
	if(Known.suns == true) {Logic.suns = Location_Logic[Location.suns]; }
	if(Known.time == true) {Logic.time = Location_Logic[Location.time]; }
	if(Known.storms == true) {Logic.storms = Location_Logic[Location.storms]; }
	if(Known.minuet == true) {Logic.minuet = Location_Logic[Location.minuet]; }
	if(Known.bolero == true) {Logic.bolero = Location_Logic[Location.bolero]; }
	if(Known.serenade == true) {Logic.serenade = Location_Logic[Location.serenade]; }
	if(Known.requiem == true) {Logic.requiem = Location_Logic[Location.requiem]; }
	if(Known.nocturne == true) {Logic.nocturne = Location_Logic[Location.nocturne]; }
	if(Known.prelude == true) {Logic.prelude = Location_Logic[Location.prelude]; }
	
	
	
	Player.bomb_bag = false;
	if (Player.bomb_bag1 || Player.bomb_bag2 || Player.bomb_bag3) {Player.bomb_bag = true;}
	
	Player.bow = false;
	if (Player.bow1 || Player.bow2 || Player.bow3) {Player.bow = true;}
	
	Player.bottle = false;
	if (Player.bottle1 || Player.bottle2 || Player.bottle3) {Player.bottle = true;}
	
	Player.trade = false;
	if (Player.prescription || Player.claim_check) {Player.trade = true;}

	Player.hookshot = false;
	if (Player.hookshot1 || Player.hookshot2) {Player.hookshot = true;}
	
	Player.longshot = false;
	if (Player.hookshot1 && Player.hookshot2) {Player.longshot = true;}
	
	Player.slingshot = false;
	if (Player.slingshot1 || Player.slingshot2 || Player.slingshot3) {Player.slingshot = true;}
	
	Player.adults_wallet = false;
	if (Player.wallet1 || Player.wallet2) {Player.adults_wallet = true;}
	
	Player.giants_wallet = false;
	if (Player.wallet1 && Player.wallet2) {Player.giants_wallet = true;}
	
	Player.goron_bracelet = false;
	if (Player.strength1 || Player.strength2 || Player.strength3) {Player.goron_bracelet = true;}
	
	Player.silver_gauntlets = false;
	if (Player.strength1 && Player.strength3) {Player.silver_gauntlets = true;}
	else if (Player.strength2 && Player.strength3) {Player.silver_gauntlets = true;}
	else if (Player.strength1 && Player.strength2) {Player.silver_gauntlets = true;}
	
	Player.golden_gauntlets = false;
	if (Player.strength1 && Player.strength2 && Player.strength3) {Player.golden_gauntlets = true;}
	
	Player.silver_scale = false;
	if (Player.scale1 || Player.scale2) {Player.silver_scale = true;}
	
	Player.golden_scale = false;
	if (Player.scale1 && Player.scale2) {Player.golden_scale = true;}
	
	if(Player.golden_scale == true) {document.getElementById("silverscaleimg").src = Player.golden_scale_img;}
	else {document.getElementById("silverscaleimg").src = Player.silver_scale_img;}
	
	Player.magic = false;
	if (Player.magic1 || Player.magic2) {Player.magic = true;}
	
	Player.double_magic = false;
	if (Player.magic1 && Player.magic2) {Player.double_magic = true;}
	
	
	for (var q = 0; q < 30; q++) {
		for (var i = 0; i < Items.length; i++) {
			if(Location_Could_Access[Location[Items[i]]] || Player[Items[i]])
				CouldHave[Items[i]] = true;
			else
				CouldHave[Items[i]] = false;
		}
	}
	
	CouldHave.bomb_bag = false;
	if (CouldHave.bomb_bag1 || CouldHave.bomb_bag2 || CouldHave.bomb_bag3) {CouldHave.bomb_bag = true;}
	
	CouldHave.bow = false;
	if (CouldHave.bow1 || CouldHave.bow2 || CouldHave.bow3) {CouldHave.bow = true;}
	
	CouldHave.trade = false;
	if (CouldHave.prescription || CouldHave.claim_check) {CouldHave.trade = true;}

	CouldHave.hookshot = false;
	if (CouldHave.hookshot1 || CouldHave.hookshot2) {CouldHave.hookshot = true;}
	
	CouldHave.longshot = false;
	if (CouldHave.hookshot1 && CouldHave.hookshot2) {CouldHave.longshot = true;}
	
	CouldHave.slingshot = false;
	if (CouldHave.slingshot1 || CouldHave.slingshot2 || CouldHave.slingshot3) {CouldHave.slingshot = true;}
	
	CouldHave.adults_wallet = false;
	if (CouldHave.wallet1 || CouldHave.wallet2) {CouldHave.adults_wallet = true;}
	
	CouldHave.giants_wallet = false;
	if (CouldHave.wallet1 && CouldHave.wallet2) {CouldHave.giants_wallet = true;}
	
	CouldHave.goron_bracelet = false;
	if (CouldHave.strength1 || CouldHave.strength2 || CouldHave.strength3) {CouldHave.goron_bracelet = true;}
	
	CouldHave.silver_gauntlets = false;
	if (CouldHave.strength1 && CouldHave.strength3) {CouldHave.silver_gauntlets = true;}
	else if (CouldHave.strength2 && CouldHave.strength3) {CouldHave.silver_gauntlets = true;}
	else if (CouldHave.strength1 && CouldHave.strength2) {CouldHave.silver_gauntlets = true;}
	
	CouldHave.golden_gauntlets = false;
	if (CouldHave.strength1 && CouldHave.strength2 && CouldHave.strength3) {CouldHave.golden_gauntlets = true;}
	
	CouldHave.silver_scale = false;
	if (CouldHave.scale1 || CouldHave.scale2) {CouldHave.silver_scale = true;}
	
	CouldHave.golden_scale = false;
	if (CouldHave.scale1 && CouldHave.scale2) {CouldHave.golden_scale = true;}
	
	CouldHave.magic = false;
	if (CouldHave.magic1 || CouldHave.magic2) {CouldHave.magic = true;}
	
	Logic.forest_boss_key = Logic.forced_forest_boss_key;
	Logic.fire_boss_key = Logic.forced_fire_boss_key;
	Logic.water_boss_key = Logic.forced_water_boss_key;
	Logic.spirit_boss_key = Logic.forced_spirit_boss_key;
	Logic.shadow_boss_key = Logic.forced_shadow_boss_key;
	CouldHave.forest_boss_key = Logic.forced_forest_boss_key;
	CouldHave.fire_boss_key = Logic.forced_fire_boss_key;
	CouldHave.water_boss_key = Logic.forced_water_boss_key;
	CouldHave.spirit_boss_key = Logic.forced_spirit_boss_key;
	CouldHave.shadow_boss_key = Logic.forced_shadow_boss_key;
	if(Player.forest_boss_key == true) {Logic.forest_boss_key = Location_Logic[Location.forest_boss_key]; CouldHave.forest_boss_key = Location_Could_Access[Location.forest_boss_key]; }
	if(Player.fire_boss_key == true) {Logic.fire_boss_key = Location_Logic[Location.fire_boss_key]; CouldHave.fire_boss_key = Location_Could_Access[Location.fire_boss_key]; }
	if(Player.water_boss_key == true) {Logic.water_boss_key = Location_Logic[Location.water_boss_key]; CouldHave.water_boss_key = Location_Could_Access[Location.water_boss_key]; }
	if(Player.spirit_boss_key == true) {Logic.spirit_boss_key = Location_Logic[Location.spirit_boss_key]; CouldHave.spirit_boss_key = Location_Could_Access[Location.spirit_boss_key]; }
	if(Player.shadow_boss_key == true) {Logic.shadow_boss_key = Location_Logic[Location.shadow_boss_key]; CouldHave.shadow_boss_key = Location_Could_Access[Location.shadow_boss_key]; }
	
	if(nerfed) {
		Logic.bomb_bag = false;
		if (Player.bomb_bag1 || Player.bomb_bag2 || Player.bomb_bag3 || CouldHave.bomb_bag1 || CouldHave.bomb_bag2 || CouldHave.bomb_bag3) {Logic.bomb_bag = true;}

		Logic.bow = false;
		if (Player.bow1 || Player.bow2 || Player.bow3 || CouldHave.bow1 || CouldHave.bow2 || CouldHave.bow3) {Logic.bow = true;}

		Logic.bottle = false;
		if (Player.bottle1 || Player.bottle2 || Player.bottle3 || CouldHave.bottle1 || CouldHave.bottle2 || CouldHave.bottle3) {Logic.bottle = true;}

		Logic.trade = false;
		if (Player.prescription || Player.claim_check || CouldHave.prescription || CouldHave.claim_check) {Logic.trade = true;}

		Logic.hookshot = false;
		if (Player.hookshot1 || Player.hookshot2 || CouldHave.hookshot1 || CouldHave.hookshot2) {Logic.hookshot = true;}

		Logic.longshot = false;
		if ((Player.hookshot1 || CouldHave.hookshot1)	&& (Player.hookshot2 || CouldHave.hookshot2)) {Logic.longshot = true;}

		Logic.slingshot = false;
		if (Player.slingshot1 || Player.slingshot2 || Player.slingshot3 || CouldHave.slingshot1 || CouldHave.slingshot2 || CouldHave.slingshot3) {Logic.slingshot = true;}

		Logic.adults_wallet = false;
		if (Player.wallet1 || Player.wallet2 || CouldHave.wallet1 || CouldHave.wallet2) {Logic.adults_wallet = true;}

		Logic.giants_wallet = false;
		if ((Player.wallet1 || CouldHave.wallet1) && (Player.wallet2 || CouldHave.wallet2)) {Logic.giants_wallet = true;}

		Logic.goron_bracelet = false;
		if (Player.strength1 || Player.strength2 || Player.strength3 || CouldHave.strength1 || CouldHave.strength2 || CouldHave.strength3) {Logic.goron_bracelet = true;}

		Logic.silver_gauntlets = false;
		if ((Player.strength1 || CouldHave.strength1) && (Player.strength3 || CouldHave.strength3)) {Logic.silver_gauntlets = true;}
		else if ((Player.strength2 || CouldHave.strength2) && (Player.strength3 || CouldHave.strength3)) {Logic.silver_gauntlets = true;}
		else if ((Player.strength1 || CouldHave.strength1) && (Player.strength2 || CouldHave.strength2)) {Logic.silver_gauntlets = true;}

		Logic.golden_gauntlets = false;
		if ((Player.strength1 || CouldHave.strength1) && (Player.strength2 || CouldHave.strength2) && (Player.strength3 || CouldHave.strength3)) {Logic.golden_gauntlets = true;}

		Logic.silver_scale = false;
		if (Player.scale1 || Player.scale2 || CouldHave.scale1 || CouldHave.scale2) {Logic.silver_scale = true;}

		Logic.golden_scale = false;
		if ((Player.scale1 || CouldHave.scale1) && (Player.scale2 || CouldHave.scale2)) {Logic.golden_scale = true;}

		Logic.magic = false;
		if (Player.magic1 || Player.magic2 || CouldHave.magic1 || CouldHave.magic2) {Logic.magic = true;}

		Logic.double_magic = false;
		if ((Player.magic1 || CouldHave.magic1) && (Player.magic2 || CouldHave.magic2)) {Logic.double_magic = true;}

		Logic.kokiri_sword = Player.kokiri_sword || CouldHave.kokiri_sword;
		Logic.farores_wind = Player.farores_wind || CouldHave.farores_wind;
		Logic.boomerang = Player.boomerang || CouldHave.boomerang;
		Logic.rutos_letter = Player.rutos_letter || CouldHave.rutos_letter;
		Logic.hammer = Player.hammer || CouldHave.hammer;
		Logic.mirror_shield = Player.mirror_shield || CouldHave.mirror_shield;
		Logic.big_poe = Player.big_poe || CouldHave.big_poe;
		Logic.iron_boots = Player.iron_boots || CouldHave.iron_boots;
		Logic.hover_boots = Player.hover_boots || CouldHave.hover_boots;
		Logic.dins_fire = Player.dins_fire || CouldHave.dins_fire;
		Logic.fire_arrows = Player.fire_arrows || CouldHave.fire_arrows;
		Logic.goron_tunic = Player.goron_tunic || CouldHave.goron_tunic;
		Logic.zora_tunic = Player.zora_tunic || CouldHave.zora_tunic;
		Logic.lens = Player.lens || CouldHave.lens;
		Logic.stone_of_agony = Player.stone_of_agony || CouldHave.stone_of_agony;
		Logic.prescription = Player.prescription || CouldHave.prescription;
		Logic.claim_check = Player.claim_check || CouldHave.claim_check;
		Logic.light_arrows = Player.light_arrows || CouldHave.light_arrows;
		Logic.lullaby = Player.lullaby || CouldHave.lullaby;
		Logic.eponas = Player.eponas || CouldHave.eponas;
		Logic.sarias = Player.sarias || CouldHave.sarias;
		Logic.suns = Player.suns || CouldHave.suns;
		Logic.time = Player.time || CouldHave.time;
		Logic.storms = Player.storms || CouldHave.storms;
		Logic.minuet = Player.minuet || CouldHave.minuet;
		Logic.bolero = Player.bolero || CouldHave.bolero;
		Logic.serenade = Player.serenade || CouldHave.serenade;
		Logic.requiem = Player.requiem || CouldHave.requiem;
		Logic.nocturne = Player.nocturne || CouldHave.nocturne;
		Logic.prelude = Player.prelude || CouldHave.prelude;

		Logic.forest_boss_key = Player.forest_boss_key || CouldHave.forest_boss_key;
		Logic.fire_boss_key = Player.fire_boss_key || CouldHave.fire_boss_key;
		Logic.water_boss_key = Player.water_boss_key || CouldHave.water_boss_key;
		Logic.spirit_boss_key = Player.spirit_boss_key || CouldHave.spirit_boss_key;
		Logic.shadow_boss_key = Player.shadow_boss_key || CouldHave.shadow_boss_key;
	}
	
	Player.forest = false; 
	CouldHave.forest = false;
	Location_Access.forest_medallion_location = false;
	if(Logic.forest_medallion_location == "deku") {if (Check.deku_queen_gohma != "unknown") {Player.forest = true;} Logic.forest_medallion = Location_Logic.deku_queen_gohma; Location_Access.forest_medallion_location = Location_Access.deku_queen_gohma; CouldHave.forest = Location_Could_Access.deku_queen_gohma;}
	else if(Logic.forest_medallion_location == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Player.forest = true;} Logic.forest_medallion = Location_Logic.dodongos_king_dodongo; Location_Access.forest_medallion_location = Location_Access.dodongos_king_dodongo; CouldHave.forest = Location_Could_Access.dodongos_king_dodongo;}
	else if(Logic.forest_medallion_location == "jabu") {if (Check.jabu_barinade != "unknown") {Player.forest = true;} Logic.forest_medallion = Location_Logic.jabu_barinade; Location_Access.forest_medallion_location = Location_Access.jabu_barinade; CouldHave.forest = Location_Could_Access.jabu_barinade;}
	else if(Logic.forest_medallion_location == "forest") {if (Check.forest_phantomGanon != "unknown") {Player.forest = true;} Logic.forest_medallion = Location_Logic.forest_phantomGanon; Location_Access.forest_medallion_location = Location_Access.forest_phantomGanon; CouldHave.forest = Location_Could_Access.forest_phantomGanon;}
	else if(Logic.forest_medallion_location == "fire") {if (Check.fire_volvagia != "unknown") {Player.forest = true;} Logic.forest_medallion = Location_Logic.fire_volvagia; Location_Access.forest_medallion_location = Location_Access.fire_volvagia; CouldHave.forest = Location_Could_Access.fire_volvagia;}
	else if(Logic.forest_medallion_location == "water") {if (Check.water_morpha != "unknown") {Player.forest = true;} Logic.forest_medallion = Location_Logic.water_morpha; Location_Access.forest_medallion_location = Location_Access.water_morpha; CouldHave.forest = Location_Could_Access.water_morpha;}
	else if(Logic.forest_medallion_location == "spirit") {if (Check.spirit_twinrova != "unknown") {Player.forest = true;} Logic.forest_medallion = Location_Logic.spirit_twinrova; Location_Access.forest_medallion_location = Location_Access.spirit_twinrova; CouldHave.forest = Location_Could_Access.spirit_twinrova;}
	else if(Logic.forest_medallion_location == "shadow") {if (Check.shadow_bongo != "unknown") {Player.forest = true;} Logic.forest_medallion = Location_Logic.shadow_bongo; Location_Access.forest_medallion_location = Location_Access.shadow_bongo; CouldHave.forest = Location_Could_Access.shadow_bongo;}
	else if(Logic.forest_medallion_location == "pocket") {Player.forest = true; Logic.forest_medallion = true; Location_Access.forest_medallion_location = true; CouldHave.forest = true;}
	else {Logic.forest_medallion_location == "unknown"; Logic.forest_medallion = false;}
	
	Player.fire = false; 
	CouldHave.fire = false;
	Location_Access.fire_medallion_location = false;
	if(Logic.fire_medallion_location == "deku") {if (Check.deku_queen_gohma != "unknown") {Player.fire = true;} Logic.fire_medallion = Location_Logic.deku_queen_gohma; Location_Access.fire_medallion_location = Location_Access.deku_queen_gohma; CouldHave.fire = Location_Could_Access.deku_queen_gohma;}
	else if(Logic.fire_medallion_location == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Player.fire = true;} Logic.fire_medallion = Location_Logic.dodongos_king_dodongo; Location_Access.fire_medallion_location = Location_Access.dodongos_king_dodongo; CouldHave.fire = Location_Could_Access.dodongos_king_dodongo;}
	else if(Logic.fire_medallion_location == "jabu") {if (Check.jabu_barinade != "unknown") {Player.fire = true;} Logic.fire_medallion = Location_Logic.jabu_barinade; Location_Access.fire_medallion_location = Location_Access.jabu_barinade; CouldHave.fire = Location_Could_Access.jabu_barinade;}
	else if(Logic.fire_medallion_location == "forest") {if (Check.forest_phantomGanon != "unknown") {Player.fire = true;} Logic.fire_medallion = Location_Logic.forest_phantomGanon; Location_Access.fire_medallion_location = Location_Access.forest_phantomGanon; CouldHave.fire = Location_Could_Access.forest_phantomGanon;}
	else if(Logic.fire_medallion_location == "fire") {if (Check.fire_volvagia != "unknown") {Player.fire = true;} Logic.fire_medallion = Location_Logic.fire_volvagia; Location_Access.fire_medallion_location = Location_Access.fire_volvagia; CouldHave.fire = Location_Could_Access.forest_phantomGanon;}
	else if(Logic.fire_medallion_location == "water") {if (Check.water_morpha != "unknown") {Player.fire = true;} Logic.fire_medallion = Location_Logic.water_morpha; Location_Access.fire_medallion_location = Location_Access.water_morpha; CouldHave.fire = Location_Could_Access.water_morpha;}
	else if(Logic.fire_medallion_location == "spirit") {if (Check.spirit_twinrova != "unknown") {Player.fire = true;} Logic.fire_medallion = Location_Logic.spirit_twinrova; Location_Access.fire_medallion_location = Location_Access.spirit_twinrova; CouldHave.fire = Location_Could_Access.spirit_twinrova;}
	else if(Logic.fire_medallion_location == "shadow") {if (Check.shadow_bongo != "unknown") {Player.fire = true;} Logic.fire_medallion = Location_Logic.shadow_bongo; Location_Access.fire_medallion_location = Location_Access.shadow_bongo; CouldHave.fire = Location_Could_Access.shadow_bongo;}
	else if(Logic.fire_medallion_location == "pocket") {Player.fire = true; Logic.fire_medallion = true; Location_Access.fire_medallion_location = true; CouldHave.fire = true;}
	else {Logic.fire_medallion_location == "unknown"; Logic.fire_medallion = false;}
	
	Player.water = false; 
	CouldHave.water = false;
	Location_Access.water_medallion_location = false;
	if(Logic.water_medallion_location == "deku") {if (Check.deku_queen_gohma != "unknown") {Player.water = true;} Logic.water_medallion = Location_Logic.deku_queen_gohma; Location_Access.water_medallion_location = Location_Access.deku_queen_gohma; CouldHave.water = Location_Could_Access.deku_queen_gohma;}
	else if(Logic.water_medallion_location == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Player.water = true;} Logic.water_medallion = Location_Logic.dodongos_king_dodongo; Location_Access.water_medallion_location = Location_Access.dodongos_king_dodongo; CouldHave.water = Location_Could_Access.dodongos_king_dodongo;}
	else if(Logic.water_medallion_location == "jabu") {if (Check.jabu_barinade != "unknown") {Player.water = true;} Logic.water_medallion = Location_Logic.jabu_barinade; Location_Access.water_medallion_location = Location_Access.jabu_barinade; CouldHave.water = Location_Could_Access.jabu_barinade;}
	else if(Logic.water_medallion_location == "forest") {if (Check.forest_phantomGanon != "unknown") {Player.water = true;} Logic.water_medallion = Location_Logic.forest_phantomGanon; Location_Access.water_medallion_location = Location_Access.forest_phantomGanon; CouldHave.water = Location_Could_Access.forest_phantomGanon;}
	else if(Logic.water_medallion_location == "fire") {if (Check.fire_volvagia != "unknown") {Player.water = true;} Logic.water_medallion = Location_Logic.fire_volvagia; Location_Access.water_medallion_location = Location_Access.fire_volvagia; CouldHave.water = Location_Could_Access.fire_volvagia;}
	else if(Logic.water_medallion_location == "water") {if (Check.water_morpha != "unknown") {Player.water = true;} Logic.water_medallion = Location_Logic.water_morpha; Location_Access.water_medallion_location = Location_Access.water_morpha; CouldHave.water = Location_Could_Access.water_morpha;}
	else if(Logic.water_medallion_location == "spirit") {if (Check.spirit_twinrova != "unknown") {Player.water = true;} Logic.water_medallion = Location_Logic.spirit_twinrova; Location_Access.water_medallion_location = Location_Access.spirit_twinrova; CouldHave.water = Location_Could_Access.spirit_twinrova;}
	else if(Logic.water_medallion_location == "shadow") {if (Check.shadow_bongo != "unknown") {Player.water = true;} Logic.water_medallion = Location_Logic.shadow_bongo; Location_Access.water_medallion_location = Location_Access.shadow_bongo; CouldHave.water = Location_Could_Access.shadow_bongo;}
	else if(Logic.water_medallion_location == "pocket") {Player.water = true; Logic.water_medallion = true; Location_Access.water_medallion_location = true; CouldHave.water = true;}
	else {Logic.water_medallion_location == "unknown"; Logic.water_medallion = false;}
	
	Logic.shadow_medallion = false;
	Logic.spirit_medallion = false;
	Logic.light_medallion = false;
	Player.shadow_medallion = false;
	Player.spirit_medallion = false;
	Player.light_medallion = false;
	CouldHave.shadow_medallion = false;
	CouldHave.spirit_medallion = false;
	CouldHave.light_medallion = false;
	Location_Access.shadow_medallion_location = false;
	Location_Access.spirit_medallion_location = false;
	Location_Access.light_medallion_location = false;
	for (var i = 1; i <=3; i++) {
		str = "generic" + i;
		str2 = "gen" + i;
		Player[str2] = false; 
		if(Logic[str] == "deku") {if (Check.deku_queen_gohma != "unknown") {Player[str2] = true;} Logic[str2] = Location_Logic.deku_queen_gohma; if(document.getElementById("text_" + dekuPlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(dekuPlacement + "_icon").src = dungIconSources[6]; Logic.shadow_medallion = Location_Logic.deku_queen_gohma; CouldHave.shadow_medallion = Location_Could_Access.deku_queen_gohma; Location_Access.shadow_medallion_location = Location_Access.deku_queen_gohma;if (Check.deku_queen_gohma != "unknown") {Player.shadow_medallion = true;};} else if(document.getElementById("text_" + dekuPlacement).style.color=="rgb(255, 165, 0)") {document.getElementById(dekuPlacement + "_icon").src = dungIconSources[7]; Logic.spirit_medallion = Location_Logic.deku_queen_gohma; CouldHave.spirit_medallion = Location_Could_Access.deku_queen_gohma; Location_Access.spirit_medallion_location = Location_Access.deku_queen_gohma;if (Check.deku_queen_gohma != "unknown") {Player.spirit_medallion = true;};} else {Logic.light_medallion = Location_Logic.deku_queen_gohma;if (Check.deku_queen_gohma != "unknown") {Player.light_medallion = true;};CouldHave.light_medallion = Location_Could_Access.deku_queen_gohma;Location_Access.light_medallion_location = Player[Check["deku_queen_gohma"]];}}
		else if(Logic[str] == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Player[str2] = true;} Logic[str2] = Location_Logic.dodongos_king_dodongo; if(document.getElementById("text_" + dodongosPlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(dodongosPlacement + "_icon").src = dungIconSources[6]; Logic.shadow_medallion = Location_Logic.dodongos_king_dodongo; CouldHave.shadow_medallion = Location_Could_Access.dodongos_king_dodongo; Location_Access.shadow_medallion_location = Location_Access.dodongos_king_dodongo;if (Check.dodongos_king_dodongo != "unknown") {Player.shadow_medallion = true;};} else if(document.getElementById("text_" + dodongosPlacement).style.color=="rgb(255, 165, 0)") {document.getElementById(dodongosPlacement + "_icon").src = dungIconSources[7]; Logic.spirit_medallion = Location_Logic.dodongos_king_dodongo; CouldHave.spirit_medallion = Location_Could_Access.dodongos_king_dodongo; Location_Access.spirit_medallion_location = Location_Access.dodongos_king_dodongo;if (Check.dodongos_king_dodongo != "unknown") {Player.spirit_medallion = true;};} else {Logic.light_medallion = Location_Logic.dodongos_king_dodongo;if (Check.dodongos_king_dodongo != "unknown") {Player.light_medallion = true;};CouldHave.light_medallion = Location_Could_Access.dodongos_king_dodongo;Location_Access.light_medallion_location = Player[Check["dodongos_king_dodongo"]];}}
		else if(Logic[str] == "jabu") {if (Check.jabu_barinade != "unknown") {Player[str2] = true;} Logic[str2] = Location_Logic.jabu_barinade; if(document.getElementById("text_" + jabuPlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(jabuPlacement + "_icon").src = dungIconSources[6]; Logic.shadow_medallion = Location_Logic.jabu_barinade; CouldHave.shadow_medallion = Location_Could_Access.jabu_barinade; Location_Access.shadow_medallion_location = Location_Access.jabu_barinade;if (Check.jabu_barinade != "unknown") {Player.shadow_medallion = true;};} else if(document.getElementById("text_" + jabuPlacement).style.color=="rgb(255, 165, 0)") {document.getElementById(jabuPlacement + "_icon").src = dungIconSources[7]; Logic.spirit_medallion = Location_Logic.jabu_barinade; CouldHave.spirit_medallion = Location_Could_Access.jabu_barinade; Location_Access.spirit_medallion_location = Location_Access.jabu_barinade;if (Check.jabu_barinade != "unknown") {Player.spirit_medallion = true;};} else {Logic.light_medallion = Location_Logic.jabu_barinade;if (Check.jabu_barinade != "unknown") {Player.light_medallion = true;};CouldHave.light_medallion = Location_Could_Access.jabu_barinade;Location_Access.light_medallion_location = Player[Check["jabu_barinade"]];}}
		else if(Logic[str] == "forest") {if (Check.forest_phantomGanon != "unknown") {Player[str2] = true;} Logic[str2] = Location_Logic.forest_phantomGanon; if(document.getElementById("text_" + forestPlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(forestPlacement + "_icon").src = dungIconSources[6]; Logic.shadow_medallion = Location_Logic.forest_phantomGanon; CouldHave.shadow_medallion = Location_Could_Access.forest_phantomGanon; Location_Access.shadow_medallion_location = Location_Access.forest_phantomGanon;if (Check.forest_phantomGanon != "unknown") {Player.shadow_medallion = true;};} else if(document.getElementById("text_" + forestPlacement).style.color=="rgb(255, 165, 0)") {document.getElementById(forestPlacement + "_icon").src = dungIconSources[7]; Logic.spirit_medallion =  Location_Logic.forest_phantomGanon; CouldHave.spirit_medallion = Location_Could_Access.forest_phantomGanon; Location_Access.spirit_medallion_location = Location_Access.forest_phantomGanon;if (Check.forest_phantomGanon != "unknown") {Player.spirit_medallion = true;};} else {Logic.light_medallion = Location_Logic.forest_phantomGanon;if (Check.forest_phantomGanon != "unknown") {Player.light_medallion = true;};CouldHave.light_medallion = Location_Could_Access.forest_phantomGanon;Location_Access.light_medallion_location = Player[Check["forest_phantomGanon"]];}}
		else if(Logic[str] == "fire") {if (Check.fire_volvagia != "unknown") {Player[str2] = true;} Logic[str2] = Location_Logic.fire_volvagia; if(document.getElementById("text_" + firePlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(firePlacement + "_icon").src = dungIconSources[6]; Logic.shadow_medallion = Location_Logic.fire_volvagia; CouldHave.shadow_medallion = Location_Could_Access.fire_volvagia; Location_Access.shadow_medallion_location = Location_Access.fire_volvagia;if (Check.fire_volvagia != "unknown") {Player.shadow_medallion = true;};} else if(document.getElementById("text_" + firePlacement).style.color=="rgb(255, 165, 0)") {document.getElementById(firePlacement + "_icon").src = dungIconSources[7]; Logic.spirit_medallion = Location_Logic.fire_volvagia; CouldHave.spirit_medallion = Location_Could_Access.fire_volvagia; Location_Access.spirit_medallion_location = Location_Access.fire_volvagia;if (Check.fire_volvagia != "unknown") {Player.spirit_medallion = true;};} else {Logic.light_medallion = Location_Logic.fire_volvagia;if (Check.fire_volvagia != "unknown") {Player.light_medallion = true;};CouldHave.light_medallion = Location_Could_Access.fire_volvagia;Location_Access.light_medallion_location = Player[Check["fire_volvagia"]];}}
		else if(Logic[str] == "water") {if (Check.water_morpha != "unknown") {Player[str2] = true;} Logic[str2] = Location_Logic.water_morpha; if(document.getElementById("text_" + waterPlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(waterPlacement + "_icon").src = dungIconSources[6]; Logic.shadow_medallion = Location_Logic.water_morpha; CouldHave.shadow_medallion = Location_Could_Access.water_morpha; Location_Access.shadow_medallion_location = Location_Access.water_morpha;if (Check.water_morpha != "unknown") {Player.shadow_medallion = true;};} else if(document.getElementById("text_" + waterPlacement).style.color=="rgb(255, 165, 0)") {document.getElementById(waterPlacement + "_icon").src = dungIconSources[7]; Logic.spirit_medallion = Location_Logic.water_morpha; CouldHave.spirit_medallion = Location_Could_Access.water_morpha; Location_Access.spirit_medallion_location = Location_Access.water_morpha;if (Check.water_morpha != "unknown") {Player.spirit_medallion = true;};} else {Logic.light_medallion = Location_Logic.water_morpha;if (Check.water_morpha != "unknown") {Player.light_medallion = true;};CouldHave.light_medallion = Location_Could_Access.water_morpha;Location_Access.light_medallion_location = Player[Check["water_morpha"]];}}
		else if(Logic[str] == "spirit") {if (Check.spirit_twinrova != "unknown") {Player[str2] = true;} Logic[str2] = Location_Logic.spirit_twinrova; if(document.getElementById("text_" + spiritPlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(spiritPlacement + "_icon").src = dungIconSources[6]; Logic.shadow_medallion = Location_Logic.spirit_twinrova; CouldHave.shadow_medallion = Location_Could_Access.spirit_twinrova; Location_Access.shadow_medallion_location = Location_Access.spirit_twinrova;if (Check.spirit_twinrova != "unknown") {Player.shadow_medallion = true;};} else if(document.getElementById("text_" + spiritPlacement).style.color=="rgb(255, 165, 0)") {document.getElementById(spiritPlacement + "_icon").src = dungIconSources[7]; Logic.spirit_medallion = Location_Logic.spirit_twinrova; CouldHave.spirit_medallion = Location_Could_Access.spirit_twinrova; Location_Access.spirit_medallion_location = Location_Access.spirit_twinrova;if (Check.spirit_twinrova != "unknown") {Player.spirit_medallion = true;};} else {Logic.light_medallion = Location_Logic.spirit_twinrova;if (Check.spirit_twinrova != "unknown") {Player.light_medallion = true;};CouldHave.light_medallion = Location_Could_Access.spirit_twinrova;Location_Access.light_medallion_location = Player[Check["spirit_twinrova"]];}}
		else if(Logic[str] == "shadow") {if (Check.shadow_bongo != "unknown") {Player[str2] = true;} Logic[str2] = Location_Logic.shadow_bongo; if(document.getElementById("text_" + shadowPlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(shadowPlacement + "_icon").src = dungIconSources[6]; Logic.shadow_medallion = Location_Logic.shadow_bongo; CouldHave.shadow_medallion = Location_Could_Access.shadow_bongo; Location_Access.shadow_medallion_location = Location_Access.shadow_bongo;if (Check.shadow_bongo != "unknown") {Player.shadow_medallion = true;};} else if(document.getElementById("text_" + shadowPlacement).style.color=="rgb(255, 165, 0)") {document.getElementById(shadowPlacement + "_icon").src = dungIconSources[7]; Logic.spirit_medallion = Location_Logic.shadow_bongo; CouldHave.spirit_medallion = Location_Could_Access.shadow_bongo; Location_Access.spirit_medallion_location = Location_Access.shadow_bongo;if (Check.shadow_bongo != "unknown") {Player.spirit_medallion = true;};} else {Logic.light_medallion = Location_Logic.shadow_bongo;if (Check.shadow_bongo != "unknown") {Player.light_medallion = true;};CouldHave.light_medallion = Location_Could_Access.shadow_bongo;Location_Access.light_medallion_location = Player[Check["shadow_bongo"]];}}
		else if(Logic[str] == "pocket") {Player[str2] = true; Logic[str2] = true; if(document.getElementById("text_" + pocketPlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(pocketPlacement + "_icon").src = dungIconSources[6]; Logic.shadow_medallion = true; CouldHave.shadow_medallion = true; Location_Access.shadow_medallion_location = true;Player.shadow_medallion = true;} else if(document.getElementById("text_" + pocketPlacement).style.color=="rgb(255, 165, 0)") {document.getElementById(pocketPlacement + "_icon").src = dungIconSources[7];  Logic.spirit_medallion = true; CouldHave.spirit_medallion = true; Location_Access.spirit_medallion_location = true;Player.spirit_medallion = true;} else {Logic.light_medallion = true;Player.light_medallion = true;CouldHave.light_medallion = true;Location_Access.light_medallion_location = true;}}
		else {Logic[str2] = false;}
	}
	
	Player.emerald = false;
	CouldHave.emerald = false;
	Location_Access.emerald_location = false;
	if(Logic.emerald == "deku") {if (Check.deku_queen_gohma != "unknown") {Player.emerald = true;} Logic.kokiri_emerald = Location_Logic.deku_queen_gohma; Location_Access.emerald_location = Location_Access.deku_queen_gohma; CouldHave.emerald = Location_Could_Access.deku_queen_gohma;}
	if(Logic.emerald == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Player.emerald = true;} Logic.kokiri_emerald = Location_Logic.dodongos_king_dodongo; Location_Access.emerald_location = Location_Access.dodongos_king_dodongo; CouldHave.emerald = Location_Could_Access.dodongos_king_dodongo;}
	if(Logic.emerald == "jabu") {if (Check.jabu_barinade != "unknown") {Player.emerald = true;} Logic.kokiri_emerald = Location_Logic.jabu_barinade; Location_Access.emerald_location = Location_Access.jabu_barinade; CouldHave.emerald = Location_Could_Access.jabu_barinade;}
	if(Logic.emerald == "forest") {if (Check.forest_phantomGanon != "unknown") {Player.emerald = true;} Logic.kokiri_emerald = Location_Logic.forest_phantomGanon; Location_Access.emerald_location = Location_Access.forest_phantomGanon; CouldHave.emerald = Location_Could_Access.forest_phantomGanon;}
	if(Logic.emerald == "fire") {if (Check.fire_volvagia != "unknown") {Player.emerald = true;} Logic.kokiri_emerald = Location_Logic.fire_volvagia; Location_Access.emerald_location = Location_Access.fire_volvagia; CouldHave.emerald = Location_Could_Access.fire_volvagia;}
	if(Logic.emerald == "water") {if (Check.water_morpha != "unknown") {Player.emerald = true;} Logic.kokiri_emerald = Location_Logic.water_morpha; Location_Access.emerald_location = Location_Access.water_morpha; CouldHave.emerald = Location_Could_Access.water_morpha;}
	if(Logic.emerald == "spirit") {if (Check.spirit_twinrova != "unknown") {Player.emerald = true;} Logic.kokiri_emerald = Location_Logic.spirit_twinrova; Location_Access.emerald_location = Location_Access.spirit_twinrova; CouldHave.emerald = Location_Could_Access.spirit_twinrova;}
	if(Logic.emerald == "shadow") {if (Check.shadow_bongo != "unknown") {Player.emerald = true;} Logic.kokiri_emerald = Location_Logic.shadow_bongo; Location_Access.emerald_location = Location_Access.shadow_bongo; CouldHave.emerald = Location_Could_Access.shadow_bongo;}
	if(Logic.emerald == "pocket") {Player.emerald = true; Logic.kokiri_emerald = true; Location_Access.emerald_location = true; CouldHave.emerald = true;}
	
	Player.ruby = false;
	CouldHave.ruby = false;
	Location_Access.ruby_location = false;
	if(Logic.ruby == "deku") {if (Check.deku_queen_gohma != "unknown") {Player.ruby = true;} Logic.goron_ruby = Location_Logic.deku_queen_gohma; Location_Access.ruby_location = Location_Access.deku_queen_gohma; CouldHave.ruby = Location_Could_Access.deku_queen_gohma;}
	if(Logic.ruby == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Player.ruby = true;} Logic.goron_ruby = Location_Logic.dodongos_king_dodongo; Location_Access.ruby_location = Location_Access.dodongos_king_dodongo; CouldHave.ruby = Location_Could_Access.dodongos_king_dodongo;}
	if(Logic.ruby == "jabu") {if (Check.jabu_barinade != "unknown") {Player.ruby = true;} Logic.goron_ruby = Location_Logic.jabu_barinade; Location_Access.ruby_location = Location_Access.jabu_barinade; CouldHave.ruby = Location_Could_Access.jabu_barinade;}
	if(Logic.ruby == "forest") {if (Check.forest_phantomGanon != "unknown") {Player.ruby = true;} Logic.goron_ruby = Location_Logic.forest_phantomGanon; Location_Access.ruby_location = Location_Access.forest_phantomGanon; CouldHave.ruby = Location_Could_Access.forest_phantomGanon;}
	if(Logic.ruby == "fire") {if (Check.fire_volvagia != "unknown") {Player.ruby = true;} Logic.goron_ruby = Location_Logic.fire_volvagia; Location_Access.ruby_location = Location_Access.fire_volvagia; CouldHave.ruby = Location_Could_Access.fire_volvagia;}
	if(Logic.ruby == "water") {if (Check.water_morpha != "unknown") {Player.ruby = true;} Logic.goron_ruby = Location_Logic.water_morpha; Location_Access.ruby_location = Location_Access.water_morpha; CouldHave.ruby = Location_Could_Access.water_morpha;}
	if(Logic.ruby == "spirit") {if (Check.spirit_twinrova != "unknown") {Player.ruby = true;} Logic.goron_ruby = Location_Logic.spirit_twinrova; Location_Access.ruby_location = Location_Access.spirit_twinrova; CouldHave.ruby = Location_Could_Access.spirit_twinrova;}
	if(Logic.ruby == "shadow") {if (Check.shadow_bongo != "unknown") {Player.ruby = true;} Logic.goron_ruby = Location_Logic.shadow_bongo; Location_Access.ruby_location = Location_Access.shadow_bongo; CouldHave.ruby = Location_Could_Access.shadow_bongo;}
	if(Logic.ruby == "pocket") {Player.ruby = true; Logic.goron_ruby = true; Location_Access.ruby_location = true; CouldHave.ruby = true;}
	
	Player.sapphire = false;
	CouldHave.sapphire = false;
	Location_Access.sapphire_location = false;
	if(Logic.sapphire == "deku") {if (Check.deku_queen_gohma != "unknown") {Player.sapphire = true;} Logic.zora_sapphire = Location_Logic.deku_queen_gohma; Location_Access.sapphire_location = Location_Access.deku_queen_gohma; CouldHave.sapphire = Location_Could_Access.deku_queen_gohma;}
	if(Logic.sapphire == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Player.sapphire = true;} Logic.zora_sapphire = Location_Logic.dodongos_king_dodongo; Location_Access.sapphire_location = Location_Access.dodongos_king_dodongo; CouldHave.sapphire = Location_Could_Access.dodongos_king_dodongo;}
	if(Logic.sapphire == "jabu") {if (Check.jabu_barinade != "unknown") {Player.sapphire = true;} Logic.zora_sapphire = Location_Logic.jabu_barinade; Location_Access.sapphire_location = Location_Access.jabu_barinade; CouldHave.sapphire = Location_Could_Access.jabu_barinade;}
	if(Logic.sapphire == "forest") {if (Check.forest_phantomGanon != "unknown") {Player.sapphire = true;} Logic.zora_sapphire = Location_Logic.forest_phantomGanon; Location_Access.sapphire_location = Location_Access.forest_phantomGanon; CouldHave.sapphire = Location_Could_Access.forest_phantomGanon;}
	if(Logic.sapphire == "fire") {if (Check.fire_volvagia != "unknown") {Player.sapphire = true;} Logic.zora_sapphire = Location_Logic.fire_volvagia; Location_Access.sapphire_location = Location_Access.fire_volvagia; CouldHave.sapphire = Location_Could_Access.fire_volvagia;}
	if(Logic.sapphire == "water") {if (Check.water_morpha != "unknown") {Player.sapphire = true;} Logic.zora_sapphire = Location_Logic.water_morpha; Location_Access.sapphire_location = Location_Access.water_morpha; CouldHave.sapphire = Location_Could_Access.water_morpha;}
	if(Logic.sapphire == "spirit") {if (Check.spirit_twinrova != "unknown") {Player.sapphire = true;} Logic.zora_sapphire = Location_Logic.spirit_twinrova; Location_Access.sapphire_location = Location_Access.spirit_twinrova; CouldHave.sapphire = Location_Could_Access.spirit_twinrova;}
	if(Logic.sapphire == "shadow") {if (Check.shadow_bongo != "unknown") {Player.sapphire = true;} Logic.zora_sapphire = Location_Logic.shadow_bongo; Location_Access.sapphire_location = Location_Access.shadow_bongo; CouldHave.sapphire = Location_Could_Access.shadow_bongo;}
	if(Logic.sapphire == "pocket") {Player.sapphire = true; Logic.zora_sapphire = true; Location_Access.sapphire_location = true; CouldHave.sapphire = true;}
	
	
	if(Logic.emerald == "unknown") {Logic.kokiri_emerald = false;}
	if(Logic.ruby == "unknown") {Logic.goron_ruby = false;}
	if(Logic.sapphire == "unknown") {Logic.zora_sapphire = false;}
	if(Logic.forest_medallion_location == "unknown") {Logic.forest_medallion = false;}
	if(Logic.fire_medallion_location == "unknown") {Logic.fire_medallion = false;}
	if(Logic.water_medallion_location == "unknown") {Logic.water_medallion = false;}
	
	Logic.current_forest_keys = Logic.forced_forest_keys;
	for (i = AreaIndexes[AreaNames.indexOf("Forest")-1]; i < AreaIndexes[AreaNames.indexOf("Forest")]; i++) {
		str = Locations[i];
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_forest_keys +=1;}
	}
	Logic.current_fire_keys = Logic.forced_fire_keys;
	for (i = AreaIndexes[AreaNames.indexOf("Fire")-1]; i < AreaIndexes[AreaNames.indexOf("Fire")]; i++) {
		str = Locations[i];
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_fire_keys +=1;}
	}
	
	Logic.current_water_keys = Logic.forced_water_keys;
	for (i = AreaIndexes[AreaNames.indexOf("Water")-1]; i < AreaIndexes[AreaNames.indexOf("Water")]; i++) {
		str = Locations[i];
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_water_keys +=1;}
	}
	
	Logic.current_spirit_keys = Logic.forced_spirit_keys;
	for (i = AreaIndexes[AreaNames.indexOf("Spirit")-1]; i < AreaIndexes[AreaNames.indexOf("Spirit")]; i++) {
		str = Locations[i];
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_spirit_keys +=1;}
	}
	
	Logic.current_shadow_keys = Logic.forced_shadow_keys;
	for (i = AreaIndexes[AreaNames.indexOf("Shadow")-1]; i < AreaIndexes[AreaNames.indexOf("Shadow")]; i++) {
		str = Locations[i];
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_shadow_keys +=1;}
	}
	
	Logic.current_ganons_keys = Logic.forced_ganons_keys;
	for (i = AreaIndexes[AreaNames.indexOf("Ganon's")-1]; i < AreaIndexes[AreaNames.indexOf("Ganon's")]; i++) {
		str = Locations[i];
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_ganons_keys +=1;}
	}
	
	Logic.current_gtg_keys = Logic.forced_gtg_keys;
	for (i = AreaIndexes[AreaNames.indexOf("GTG")-1]; i < AreaIndexes[AreaNames.indexOf("GTG")]; i++) {
		str = Locations[i];
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_gtg_keys +=1;}
	}
	
	Logic.current_well_keys = Logic.forced_well_keys;
	for (i = AreaIndexes[AreaNames.indexOf("Well")-1]; i < AreaIndexes[AreaNames.indexOf("Well")]; i++) {
		str = Locations[i];
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_well_keys +=1;}
	}
	
	if (Logic.current_forest_keys < 5) {
		var for_keys = [["forest_first","forest_stalfos","forest_midCourtyard","forest_highCourtyard","forest_lowCourtyard"], ["forest_blockRoom","forest_floormaster"], ["forest_bossKey"], ["forest_red","forest_bow","forest_blue"]]
		var done = false;
		for (i = 0; i < for_keys.length; i++) {
			for (j = 0; j < for_keys[i].length; j++) {
				str = for_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
					Logic.min_forest_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_forest_keys = 5;}
	}
	Logic.forest_keys = Math.max(Logic.min_forest_keys,Logic.current_forest_keys);
	if (!Logic.forest_boss_key) {
		var bk = true;
		for (i = AreaIndexes[AreaNames.indexOf("Forest")-1]; i < AreaIndexes[AreaNames.indexOf("Forest")]-1; i++) {
			str = "forest" + i;
			if (!Location_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		Logic.forest_boss_key = bk;
	}

	if (Logic.current_fire_keys < 8 && ((Logic.can_wear_goron_tunic && Logic.hammer && Logic.hover_boots) || (Check["fire_volvagia"] != "small_key" && Check["fire_volvagia"] != "unknown"))) {
		var fir_keys = [["fire_nearBoss","fire_hammer1","fire_hammer2"], ["fire_lavaOpen","fire_lavaBomb"],[], ["fire_lowerMaze","fire_sideRoom"],["fire_map"], ["fire_upperMaze","fire_shortcut","fire_scarecrow"], ["fire_compass","fire_sotGoron","fire_top"]]
		var done = false;
		for (i = 0; i < fir_keys.length; i++) {
			for (j = 0; j < fir_keys[i].length; j++) {
				str = fir_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" || Check[str] == "unknown" || (Check[str] == "boss_key" && (Check["fire_volvagia"] == "small_key" || Check["fire_volvagia"] == "unknown")))) {
					Logic.min_fire_keys = i;	
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		
		if (!done) {Logic.min_fire_keys = 8;}
	}
	Logic.fire_keys = Math.max(Logic.min_fire_keys,Logic.current_fire_keys);
	if (!Logic.fire_boss_key) {
		var bk = true;
		for (i = AreaIndexes[AreaNames.indexOf("Fire")-1]; i < AreaIndexes[AreaNames.indexOf("Fire")]; i++) {
			if (Locations[i] == "fire_volvagia") {
				continue;
			}
			str = Locations[i];
			if (!Location_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		Logic.fire_boss_key = bk;
	}
	
	if (Logic.current_water_keys < 6 && (Logic.longshot && Logic.iron_boots || (Check["water_morpha"] != "small_key" && Check["water_morpha"] != "unknown"))) {
		var wat_keys = [["water_compass","water_map","water_cracked","water_torches","water_block","water_pillar","water_dragon"]]
		var done = false;
		for (i = 0; i < wat_keys.length; i++) {
			for (j = 0; j < wat_keys[i].length; j++) {
				str = wat_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown"|| (Check[str] == "boss_key" && (Check["water_morpha"] == "small_key" || Check["water_morpha"] == "unknown")))) {
					Logic.min_water_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_water_keys = 6;}
	}
	Logic.water_keys = Math.max(Logic.min_water_keys,Logic.current_water_keys);
	if (!Logic.water_boss_key) {
		var bk = true;
		for (i = AreaIndexes[AreaNames.indexOf("Water")-1]; i < AreaIndexes[AreaNames.indexOf("Water")]-1; i++) {
			str = Locations[i];
			if (!Location_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		Logic.water_boss_key = bk;
	}
	if (Logic.current_spirit_keys < 5) {
		var spi_keys = [["spirit_childLeft","spirit_childRight","spirit_adultLeft","spirit_adultRight"], ["spirit_childClimb1","spirit_childClimb2","spirit_map","spirit_sunRoom"], [], ["spirit_rightHand","spirit_rotatingMirror1","spirit_rotatingMirror2","spirit_lullabyHigh","spirit_lullabyHand"],["spirit_nearFourArmos","spirit_invisible1","spirit_invisible2","spirit_leftHand"],["spirit_bossKey","spirit_tippyTop"]]
		var done = false;
		for (i = 0; i < spi_keys.length; i++) {
			for (j = 0; j < spi_keys[i].length; j++) {
				str = spi_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
					Logic.min_spirit_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_spirit_keys = 5;}
	}
	Logic.spirit_keys = Math.max(Logic.min_spirit_keys,Logic.current_spirit_keys);
	if (!Logic.spirit_boss_key) {
		var bk = true;
		for (i = AreaIndexes[AreaNames.indexOf("Spirit")-1]; i < AreaIndexes[AreaNames.indexOf("Spirit")]-1; i++) {
			str = Locations[i];
			if (!Location_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		Logic.spirit_boss_key = bk;
	}
	if (Logic.current_shadow_keys < 5) {
		var sha_keys = [["shadow_map","shadow_hovers","shadow_compass","shadow_earlySilvers"], ["shadow_spinning1","shadow_spinning2","shadow_spikesLower","shadow_spikesUpper","shadow_spikesSwitch"], ["shadow_pot","shadow_redeadSilvers"],["shadow_wind","shadow_bombable","shadow_gibdos"],["shadow_dins1","shadow_dins2","shadow_floormaster"]]
		var done = false;
		for (i = 0; i < sha_keys.length; i++) {
			for (j = 0; j < sha_keys[i].length; j++) {
				str = sha_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
					Logic.min_shadow_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_shadow_keys = 5;}
	}
	Logic.shadow_keys = Math.max(Logic.min_shadow_keys,Logic.current_shadow_keys);
	if (!Logic.shadow_boss_key) {
		var bk = true;
		for (i = AreaIndexes[AreaNames.indexOf("Shadow")-1]; i < AreaIndexes[AreaNames.indexOf("Shadow")]-1; i++) {
			str = Locations[i];
			if (!Location_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		Logic.shadow_boss_key = bk;
	}
	if (Logic.current_ganons_keys < 2) {
		Logic.min_ganons_keys = 2;
		var done = false;
		for (i = AreaIndexes[AreaNames.indexOf("Ganon's")-1]; i < AreaIndexes[AreaNames.indexOf("Ganon's")]; i++) {
			if (Locations[i] == "ganons_lightTrialLullaby") {continue;}
			str = Locations[i];
			if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
				Logic.min_ganons_keys = 0;
				break;
			}
		}
	}
	Logic.ganons_keys = Math.max(Logic.min_ganons_keys,Logic.current_ganons_keys);
	if (Logic.current_gtg_keys < 9) {
		var ger_keys = [["lobbyLeft","lobbyRight","stalfos","wolfos","silvers1","silvers2","silvers3","silvers4","eyes","aboveEyes","keese","fireChest","freestanding","right2","right3","beamos","toilet"], [],[],["left1"],["left2"],[],["left3"],["left4"]]
		var done = false;
		for (i = 0; i < ger_keys.length; i++) {
			for (j = 0; j < ger_keys[i].length; j++) {
				str = "gtg_" + ger_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
					Logic.min_gtg_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_gtg_keys = 9;}
	}
	Logic.gtg_keys = Math.max(Logic.min_gtg_keys,Logic.current_gtg_keys);
	if (Logic.current_well_keys < 3) {
		Logic.min_well_keys = 3;
		for (i = AreaIndexes[AreaNames.indexOf("Well")-1]; i < AreaIndexes[AreaNames.indexOf("Well")]; i++) {
			if (Locations[i] == "well_locked1" || Locations[i] == "well_locked2") {continue;}
			str = Locations[i];
			if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
				Logic.min_well_keys = 0;
				break;
			}
		}
	}
	Logic.well_keys = Math.max(Logic.min_well_keys,Logic.current_well_keys);
	
	if(Logic.can_enter_ganons && Logic.golden_gauntlets) {Logic.min_ganons_keys = 1;}
	Logic.ganons_keys = Math.max(Logic.min_ganons_keys,Logic.current_ganons_keys);
}
function force_stuff_in_or_out_of_logic() {
	var i;
	for (i = 1; i <= 4; i++) {
		str = "forceLogic" + i;
		if(document.getElementById(str).value == "bom") {Logic.bomb_bag = true;}
		if(document.getElementById(str).value == "far") {Logic.farores_wind = true;}
		if(document.getElementById(str).value == "sli") {Logic.slingshot = true;}
		if(document.getElementById(str).value == "boo") {Logic.boomerang = true;}
		if(document.getElementById(str).value == "sca") {if(!Logic.silver_scale) {Logic.silver_scale = true;} else if(!Logic.golden_scale){Logic.golden_scale = true;}}
		if(document.getElementById(str).value == "rut") {Logic.rutos_letter = true;}
		if(document.getElementById(str).value == "bot") {Logic.bottle = true;}
		if(document.getElementById(str).value == "big") {Logic.big_poe = true;}
		if(document.getElementById(str).value == "ham") {Logic.hammer = true;}
		if(document.getElementById(str).value == "bow") {Logic.bow = true;}
		if(document.getElementById(str).value == "hoo") {if(!Logic.hookshot) {Logic.hookshot = true;} else if(!Logic.longshot){Logic.longshot = true;}}
		if(document.getElementById(str).value == "gor") {Logic.goron_tunic= true;}
		if(document.getElementById(str).value == "zor") {Logic.zora_tunic= true;}
		if(document.getElementById(str).value == "str") {if(!Logic.goron_bracelet) {Logic.goron_bracelet = true;} else if(!Logic.silver_gauntlets){Logic.silver_gauntlets = true;} else if(!Logic.golden_gauntlets){Logic.golden_gauntlets = true;}}
		if(document.getElementById(str).value == "iro") {Logic.iron_boots = true;}
		if(document.getElementById(str).value == "hov") {Logic.hover_boots = true;}
		if(document.getElementById(str).value == "wal") {if(!Logic.adults_wallet) {Logic.adults_wallet = true;} else if(!Logic.giants_wallet){Logic.giants_wallet = true;}}
		if(document.getElementById(str).value == "mag") {Logic.magic = true;}
		if(document.getElementById(str).value == "din") {Logic.dins_fire = true;}
		if(document.getElementById(str).value == "fir") {Logic.fire_arrows = true;}
		if(document.getElementById(str).value == "len") {Logic.lens = true;}
		if(document.getElementById(str).value == "pre") {Logic.prescription = true;}
		if(document.getElementById(str).value == "cla") {Logic.claim_check = true;}
		if(document.getElementById(str).value == "1me") {Logic.forest_medallion = true;}
		if(document.getElementById(str).value == "3me") {Logic.forest_medallion = true; Logic.fire_medallion = true; Logic.water_medallion = true;}
		if(document.getElementById(str).value == "oot") {Logic.kokiri_emerald = true; Logic.goron_ruby = true; Logic.zora_sapphire = true;}
		if(document.getElementById(str).value == "lul") {Logic.lullaby = true;}
		if(document.getElementById(str).value == "epo") {Logic.eponas = true;}
		if(document.getElementById(str).value == "sar") {Logic.sarias = true;}
		if(document.getElementById(str).value == "sun") {Logic.suns = true;}
		if(document.getElementById(str).value == "sot") {Logic.time = true;}
		if(document.getElementById(str).value == "sos") {Logic.storms = true;}
		if(document.getElementById(str).value == "min") {Logic.minuet = true;}
		if(document.getElementById(str).value == "bol") {Logic.bolero = true;}
		if(document.getElementById(str).value == "noc") {Logic.nocturne = true;}
		if(document.getElementById(str).value == "req") {Logic.requiem = true;}
	}
	for (i = 1; i <= 4; i++) {
		str = "forceOutOfLogic" + i;
		if(document.getElementById(str).value == "bom") {Logic.bomb_bag = false;}
		if(document.getElementById(str).value == "far") {Logic.farores_wind = false;}
		if(document.getElementById(str).value == "sli") {Logic.slingshot = false;}
		if(document.getElementById(str).value == "boo") {Logic.boomerang = false;}
		if(document.getElementById(str).value == "sca") {if(Logic.golden_scale) {Logic.golden_scale = false;} else if(Logic.silver_scale){Logic.silver_scale = false;}}
		if(document.getElementById(str).value == "rut") {Logic.rutos_letter = false;}
		if(document.getElementById(str).value == "bot") {Logic.bottle = false;}
		if(document.getElementById(str).value == "big") {Logic.big_poe = false;}
		if(document.getElementById(str).value == "ham") {Logic.hammer = false;}
		if(document.getElementById(str).value == "bow") {Logic.bow = false;}
		if(document.getElementById(str).value == "hoo") {if(Logic.longshot) {Logic.longshot = false;} else if(Logic.hookshot){Logic.hookshot = false;}}
		if(document.getElementById(str).value == "gor") {Logic.goron_tunic= false;}
		if(document.getElementById(str).value == "zor") {Logic.zora_tunic= false;}
		if(document.getElementById(str).value == "str") {if(Logic.golden_gauntlets) {Logic.golden_gauntlets = false;} else if(Logic.silver_gauntlets){Logic.silver_gauntlets = false;} else if(Logic.goron_bracelet){Logic.goron_bracelet = false;}}
		if(document.getElementById(str).value == "iro") {Logic.iron_boots = false;}
		if(document.getElementById(str).value == "hov") {Logic.hover_boots = false;}
		if(document.getElementById(str).value == "wal") {if(Logic.giants_wallet) {Logic.giants_wallet = false;} else if(Logic.adults_wallet){Logic.adults_wallet = false;}}
		if(document.getElementById(str).value == "mag") {Logic.magic = false;}
		if(document.getElementById(str).value == "din") {Logic.dins_fire = false;}
		if(document.getElementById(str).value == "fir") {Logic.fire_arrows = false;}
		if(document.getElementById(str).value == "len") {Logic.lens = false;}
		if(document.getElementById(str).value == "pre") {Logic.prescription = false;}
		if(document.getElementById(str).value == "cla") {Logic.claim_check = false;}
		if(document.getElementById(str).value == "1me") {Logic.forest_medallion = false;}
		if(document.getElementById(str).value == "3me") {Logic.forest_medallion = false; Logic.fire_medallion = false; Logic.water_medallion = false;}
		if(document.getElementById(str).value == "oot") {Logic.kokiri_emerald = false; Logic.goron_ruby = false; Logic.zora_sapphire = false;}
		if(document.getElementById(str).value == "lul") {Logic.lullaby = false;}
		if(document.getElementById(str).value == "epo") {Logic.eponas = false;}
		if(document.getElementById(str).value == "sar") {Logic.sarias = false;}
		if(document.getElementById(str).value == "sun") {Logic.suns = false;}
		if(document.getElementById(str).value == "sot") {Logic.time = false;}
		if(document.getElementById(str).value == "sos") {Logic.storms = false;}
		if(document.getElementById(str).value == "min") {Logic.minuet = false;}
		if(document.getElementById(str).value == "bol") {Logic.bolero = false;}
		if(document.getElementById(str).value == "noc") {Logic.nocturne = false;}
		if(document.getElementById(str).value == "req") {Logic.requiem = false;}
	}
}

function logic_shortcuts() {
	Logic.child_can_enter_river = Logic.bomb_bag || Logic.silver_scale || Spawn.child_zd || Spawn.child_zr;
	Logic.child_can_enter_domain = (Logic.child_can_enter_river && Logic.lullaby) || Logic.silver_scale || Spawn.child_zd;
	Logic.can_enter_jabu = Logic.rutos_letter && Logic.child_can_enter_domain && (Logic.boomerang || Logic.bomb_bag || Logic.slingshot);
	Logic.fortress_access = Logic.eponas || Logic.longshot || Spawn.adult_gf || (Spawn.child_gv_gf && Logic.kokiri_sword);
	Logic.can_save_carpenters = (Spawn.child_gv_gf && Logic.kokiri_sword) || (Logic.fortress_access && ((Logic.bow || Logic.hookshot || Logic.hover_boots) || true)) /*fast carpenter fix**/;
	Logic.can_cross_quicksand = Logic.fortress_access && (Logic.longshot || Logic.hover_boots);
	Logic.can_enter_colossus = (Logic.can_cross_quicksand && (Logic.brackets || Logic.can_see)) || Logic.requiem;
	Logic.can_use_fire = (Logic.dins_fire || (Logic.bow && Logic.fire_arrows)) && Logic.magic;
	Logic.can_use_dins = Logic.dins_fire && Logic.magic;
	Logic.can_use_farores = Logic.farores_wind && Logic.magic;
	Logic.can_see = Logic.lens && Logic.magic;
	Logic.can_blast_or_smash = Logic.bomb_bag || Logic.hammer;
	Logic.can_enter_dodongos = Logic.can_blast_or_smash || Logic.goron_bracelet;
	Logic.dodongos_climb = Logic.can_enter_dodongos && (Logic.bomb_bag || Logic.goron_bracelet || Logic.can_use_dins);
	Logic.can_enter_shadow = (Logic.nocturne || Spawn.adult_nocturne) && Logic.can_use_dins && (Logic.hover_boots || Logic.hookshot) ;//&& Logic.can_see;
	Logic.can_cross_shadow_gap= Logic.can_enter_shadow && Logic.hover_boots;
	Logic.can_bomb_shadow_wall = Logic.can_cross_shadow_gap && Logic.bomb_bag;
	Logic.can_pass_shadow_hookshot_door = Logic.can_bomb_shadow_wall && Logic.hookshot;
	Logic.can_ride_shadow_boat = Logic.can_pass_shadow_hookshot_door && Logic.lullaby;
	Logic.can_beat_shadow_boss = Logic.can_ride_shadow_boat && (Logic.bow || Logic.longshot);
	Logic.can_stop_link_the_goron = Logic.bomb_bag || Logic.bow || Logic.goron_bracelet;
	Logic.ice_access = Logic.rutos_letter && ((Logic.lullaby && Logic.child_can_enter_river) || (Spawn.adult_zd && Logic.silver_scale));
	Logic.reverse_crater = (Logic.hover_boots || Logic.hookshot || Logic.child_can_enter_river) && Logic.bolero;
	Logic.can_enter_fire_temple = (Logic.crater_by_city && (Logic.hookshot || Logic.hover_boots)) || Logic.bolero
	Logic.crater_by_city = Logic.bow || Logic.bomb_bag || Logic.goron_bracelet || Logic.reverse_crater ||((Logic.hammer || Spawn.adult_upper_dmc) && Logic.hover_boots) || (Logic.longshot && Logic.goron_tunic && (Logic.hammer || Spawn.adult_upper_dmc)) || Spawn.adult_lower_dmc;
	Logic.crater_top = Logic.crater_by_city || Logic.hammer || Spawn.adult_upper_dmc;
	Logic.can_enter_adult_spirit = Logic.can_enter_colossus && Logic.silver_gauntlets;
	Logic.can_pass_mido_as_adult = Logic.minuet || Logic.sarias || Spawn.adult_meadow;
	
	Logic.medalCount = 0; if (Logic.forest_medallion) {Logic.medalCount += 1;} if (Logic.fire_medallion) {Logic.medalCount += 1;} if (Logic.water_medallion) {Logic.medalCount += 1;} if (Logic.shadow_medallion) {Logic.medalCount += 1;} if (Logic.spirit_medallion) {Logic.medalCount += 1;} if (Logic.light_medallion) {Logic.medalCount += 1;}
	Logic.stoneCount = 0; if (Logic.kokiri_emerald) {Logic.stoneCount += 1;} if (Logic.goron_ruby) {Logic.stoneCount += 1;} if (Logic.zora_sapphire) {Logic.stoneCount += 1;}
	Logic.rewardCount = Logic.medalCount + Logic.stoneCount;
	Logic.can_enter_ganons = (Logic.medalCount == 6 && document.getElementById("ganonsBridge").value == "ALL_MED") || document.getElementById("ganonsBridge").value == "ALWAYS" || (document.getElementById("ganonsBridge").value == "5_MEDALS" && Logic.medalCount >= 5) || (document.getElementById("ganonsBridge").value == "4_MEDALS" && Logic.medalCount >= 4) || (document.getElementById("ganonsBridge").value == "3_MEDALS" && Logic.medalCount >= 3) || (document.getElementById("ganonsBridge").value == "2_MEDALS" && Logic.medalCount >= 2) || (document.getElementById("ganonsBridge").value == "3_STONES" && Logic.stoneCount == 3) || (document.getElementById("ganonsBridge").value == "1_REWARD" && Logic.rewardCount >= 1) || (document.getElementById("ganonsBridge").value == "2_REWARDS" && Logic.rewardCount >= 2) || (document.getElementById("ganonsBridge").value == "3_REWARDS" && Logic.rewardCount >= 3) || (document.getElementById("ganonsBridge").value == "4_REWARDS" && Logic.rewardCount >= 4) || (document.getElementById("ganonsBridge").value == "5_REWARDS" && Logic.rewardCount >= 5) || (document.getElementById("ganonsBridge").value == "6_REWARDS" && Logic.rewardCount >= 6) || (document.getElementById("ganonsBridge").value == "7_REWARDS" && Logic.rewardCount >= 7) || (document.getElementById("ganonsBridge").value == "8_REWARDS" && Logic.rewardCount >= 8) || (document.getElementById("ganonsBridge").value == "9_REWARDS" && Logic.rewardCount >= 9)
	
	Logic.can_climb_fire_temple = Logic.can_enter_fire_temple && Logic.fire_keys >=3 && Logic.can_wear_goron_tunic && Logic.goron_bracelet && (Logic.bow || Logic.hookshot || Logic.bomb_bag);
	Logic.can_enter_water = Logic.hookshot && Logic.iron_boots;
	Logic.middle_water = Logic.can_enter_water && Logic.lullaby && (Logic.bow || Logic.can_use_dins);
	Logic.projectile_both = Logic.bomb_bag || ((Logic.slingshot || Logic.boomerang) && (Logic.bow || Logic.hookshot));
	Logic.projectile_child = Logic.bomb_bag || Logic.slingshot || Logic.boomerang;
	Logic.projectile_adult = Logic.bomb_bag || Logic.bow || Logic.hookshot;
	Logic.can_wear_goron_tunic = Logic.goron_tunic || (Logic.adults_wallet && (Logic.bomb_bag || Logic.goron_bracelet || Logic.bow || Spawn.adult_gc_shop));
	Logic.can_wear_zora_tunic = Logic.zora_tunic || (Logic.giants_wallet && (((Logic.lullaby || Spawn.adult_zd) && Logic.bottle) || Spawn.adult_zd_shop));
	if (document.getElementById("closedDeku").value != "CLOSED") {Logic.deku_access = true;} else {Logic.deku_access = Logic.kokiri_sword;}

	Player.child_can_enter_river = Player.bomb_bag || Player.has_chus || Player.silver_scale || Spawn.child_zd || Spawn.child_zr;
	Player.can_enter_jabu = Player.rutos_letter && (Player.bomb_bag || Player.has_chus || ((Player.silver_scale || Spawn.child_zd || Spawn.child_zr) && (Player.slingshot || Player.boomerang)));
	Player.fortress_access = Player.eponas || Player.longshot || Player.requiem || Spawn.adult_gf;
	Player.can_save_carpenters = Spawn.child_gv_gf || (Player.fortress_access && ((Player.bow || Player.hookshot || Player.hover_boots) || true)) /*fast carpenter fix**/;
	Player.can_cross_quicksand = Player.fortress_access;
	Player.can_enter_colossus = (Player.can_cross_quicksand) || Player.requiem;
	Player.can_use_fire = (Player.dins_fire || (Player.bow && Player.fire_arrows)) && Player.magic;
	Player.can_use_dins = Player.dins_fire && Player.magic;
	Player.can_use_farores = Player.farores_wind && Player.magic;
	Player.can_use_bottle = (Player.bottle1 || Player.bottle2 || Player.bottle3 || (Player.rutos_letter && Player.child_can_enter_river));
	Player.can_see = Player.lens && Player.magic;
	Player.can_blast_or_smash = Player.bomb_bag || Player.hammer || Player.has_chus;
	Player.can_enter_dodongos = Player.can_blast_or_smash || Player.goron_bracelet || ((Player.can_use_bottle || Player.can_enter_jabu) && Player.giants_wallet);
	Player.dodongos_climb	= Player.can_enter_dodongos && (Player.bomb_bag || Player.has_chus || Player.goron_bracelet || Player.can_use_dins || Player.bow);
	Player.can_enter_shadow= (Player.nocturne || Spawn.adult_nocturne) && Player.can_use_dins && (Player.hover_boots || Player.hookshot) ;//&& Player.can_see;
	Player.can_cross_shadow_gap= Player.can_enter_shadow && Player.hover_boots;
	Player.can_bomb_shadow_wall = Player.can_cross_shadow_gap && (Player.bomb_bag || Player.has_chus);
	Player.can_pass_shadow_hookshot_door = Player.can_bomb_shadow_wall && Player.hookshot;
	Player.can_ride_shadow_boat = Player.can_pass_shadow_hookshot_door && Player.lullaby;
	Player.can_beat_shadow_boss = Player.can_ride_shadow_boat && (Player.bow || Player.longshot || Player.has_chus);
	Player.can_stop_link_the_goron = Player.bomb_bag || Player.bow || Player.goron_bracelet || Player.has_chus;
	Player.ice_access = (((Player.rutos_letter && Player.child_can_enter_river) || Rules.kzSkip) && (Player.lullaby || Player.hover_boots)) || (Rules.kzSkip && Spawn.adult_zd);
	Player.reverse_crater = (Player.hover_boots || Player.hookshot || Player.child_can_enter_river) && Player.bolero;
	Player.crater_by_city = Player.can_stop_link_the_goron || Player.reverse_crater || (Player.hammer && Player.hover_boots) || (Player.longshot && Player.hammer) || Spawn.adult_lower_dmc;
	Player.crater_top = Player.crater_by_city || Player.hammer || Spawn.adult_upper_dmc;
	Player.can_enter_fire_temple = (Player.crater_by_city && (Player.hookshot || Player.hover_boots)) || Player.bolero;
	Player.can_enter_adult_spirit = Player.can_enter_colossus && Player.silver_gauntlets;
	
	Player.medalCount = 0; if (Player.forest) {Player.medalCount += 1;} if (Player.fire) {Player.medalCount += 1;} if (Player.water) {Player.medalCount += 1;} if (Player.shadow_medallion) {Player.medalCount += 1;} if (Player.spirit_medallion) {Player.medalCount += 1;} if (Player.light_medallion) {Player.medalCount += 1;}
	Player.stoneCount = 0; if (Player.emerald) {Player.stoneCount += 1;} if (Player.ruby) {Player.stoneCount += 1;} if (Player.sapphire) {Player.stoneCount += 1;}
	Player.rewardCount = Player.medalCount + Player.stoneCount;
	Player.can_enter_ganons = (Player.medalCount == 6 && document.getElementById("ganonsBridge").value == "ALL_MED") || document.getElementById("ganonsBridge").value == "ALWAYS" || (document.getElementById("ganonsBridge").value == "5_MEDALS" && Player.medalCount >= 5) || (document.getElementById("ganonsBridge").value == "4_MEDALS" && Player.medalCount >= 4) || (document.getElementById("ganonsBridge").value == "3_MEDALS" && Player.medalCount >= 3) || (document.getElementById("ganonsBridge").value == "2_MEDALS" && Player.medalCount >= 2) || (document.getElementById("ganonsBridge").value == "3_STONES" && Player.stoneCount == 3) || (document.getElementById("ganonsBridge").value == "1_REWARD" && Player.rewardCount >= 1) || (document.getElementById("ganonsBridge").value == "2_REWARDS" && Player.rewardCount >= 2) || (document.getElementById("ganonsBridge").value == "3_REWARDS" && Player.rewardCount >= 3) || (document.getElementById("ganonsBridge").value == "4_REWARDS" && Player.rewardCount >= 4) || (document.getElementById("ganonsBridge").value == "5_REWARDS" && Player.rewardCount >= 5) || (document.getElementById("ganonsBridge").value == "6_REWARDS" && Player.rewardCount >= 6) || (document.getElementById("ganonsBridge").value == "7_REWARDS" && Player.rewardCount >= 7) || (document.getElementById("ganonsBridge").value == "8_REWARDS" && Player.rewardCount >= 8) || (document.getElementById("ganonsBridge").value == "9_REWARDS" && Player.rewardCount >= 9)
	 
	Player.can_climb_fire_temple = Player.can_enter_fire_temple && Player.current_fire_keys >=3 && (Player.bow || Player.hookshot || Player.bomb_bag || Player.has_chus);
	Player.can_enter_water = (Player.hookshot && Player.iron_boots) || (Player.longshot && Player.golden_scale);
	Player.middle_water = Player.can_enter_water && Player.lullaby && (Player.bow || Player.can_use_dins || Player.current_water_keys >= 1);
	Player.projectile_both = Player.bomb_bag || Player.has_chus || ((Player.slingshot || Player.boomerang) && (Player.bow || Player.hookshot));
	Player.projectile_child = Player.bomb_bag || Player.has_chus || Player.slingshot || Player.boomerang;
	Player.projectile_adult = Player.bomb_bag || Player.has_chus || Player.bow || Player.hookshot;
	Player.can_wear_goron_tunic = true;
	Player.can_wear_zora_tunic = true;
	Player.can_climb_gtg_hole = Player.hookshot || Player.hover_boots || Player.bomb_bag;
	if (document.getElementById("closedDeku").value != "CLOSED") {Player.deku_access = true;} else {Player.deku_access = Player.kokiri_sword;}
	
	CouldHave.child_can_enter_river = CouldHave.bomb_bag || Player.has_chus || CouldHave.silver_scale || Spawn.child_zd || Spawn.child_zr;
	CouldHave.can_enter_jabu = CouldHave.rutos_letter && (CouldHave.bomb_bag || Player.has_chus || ((CouldHave.silver_scale || Spawn.child_zd || Spawn.child_zr) && (CouldHave.slingshot || CouldHave.boomerang)));
	CouldHave.fortress_access = CouldHave.eponas || CouldHave.longshot || CouldHave.requiem || Spawn.adult_gf;
	CouldHave.can_save_carpenters = Spawn.child_gv_gf || (CouldHave.fortress_access && ((CouldHave.bow || CouldHave.hookshot || CouldHave.hover_boots) || true)) /*fast carpenter fix**/;
	CouldHave.can_cross_quicksand = CouldHave.fortress_access;
	CouldHave.can_enter_colossus = (CouldHave.can_cross_quicksand) || CouldHave.requiem;
	CouldHave.can_use_fire = (CouldHave.dins_fire || (CouldHave.bow && CouldHave.fire_arrows)) && CouldHave.magic;
	CouldHave.can_use_dins = CouldHave.dins_fire && CouldHave.magic;
	CouldHave.can_use_farores = CouldHave.farores_wind && CouldHave.magic;
	CouldHave.can_use_bottle = (CouldHave.bottle1 || CouldHave.bottle2 || CouldHave.bottle3 || (CouldHave.rutos_letter && CouldHave.child_can_enter_river));
	CouldHave.can_see = CouldHave.lens && CouldHave.magic;
	CouldHave.can_blast_or_smash = CouldHave.bomb_bag || CouldHave.hammer || Player.has_chus;
	CouldHave.can_enter_dodongos = CouldHave.can_blast_or_smash || CouldHave.goron_bracelet || ((CouldHave.can_use_bottle || CouldHave.can_enter_jabu) && CouldHave.giants_wallet);
	CouldHave.dodongos_climb	= CouldHave.can_enter_dodongos && (CouldHave.bomb_bag || Player.has_chus || CouldHave.goron_bracelet || CouldHave.can_use_dins || CouldHave.bow);
	CouldHave.can_enter_shadow= (CouldHave.nocturne || Spawn.adult_nocturne) && CouldHave.can_use_dins && (CouldHave.hover_boots || CouldHave.hookshot) ;//&& CouldHave.can_see;
	CouldHave.can_cross_shadow_gap= CouldHave.can_enter_shadow && CouldHave.hover_boots;
	CouldHave.can_bomb_shadow_wall = CouldHave.can_cross_shadow_gap && (CouldHave.bomb_bag || Player.has_chus);
	CouldHave.can_pass_shadow_hookshot_door = CouldHave.can_bomb_shadow_wall && CouldHave.hookshot;
	CouldHave.can_ride_shadow_boat = CouldHave.can_pass_shadow_hookshot_door && CouldHave.lullaby;
	CouldHave.can_beat_shadow_boss = CouldHave.can_ride_shadow_boat && (CouldHave.bow || CouldHave.longshot || Player.has_chus);
	CouldHave.can_stop_link_the_goron = CouldHave.bomb_bag || CouldHave.bow || CouldHave.goron_bracelet || Player.has_chus;
	CouldHave.ice_access = (((CouldHave.rutos_letter && CouldHave.child_can_enter_river) || Rules.kzSkip) && (CouldHave.lullaby || CouldHave.hover_boots)) || (Rules.kzSkip && Spawn.adult_zd);
	CouldHave.reverse_crater = (CouldHave.hover_boots || CouldHave.hookshot || CouldHave.child_can_enter_river) && CouldHave.bolero;
	CouldHave.crater_by_city = CouldHave.can_stop_link_the_goron || CouldHave.reverse_crater || (CouldHave.hammer && CouldHave.hover_boots) || (CouldHave.longshot && CouldHave.hammer) || Spawn.adult_lower_dmc;
	CouldHave.crater_top = CouldHave.crater_by_city || CouldHave.hammer || Spawn.adult_upper_dmc;
	CouldHave.can_enter_fire_temple = (CouldHave.crater_by_city && (CouldHave.hookshot || CouldHave.hover_boots)) || CouldHave.bolero;
	CouldHave.can_enter_adult_spirit = CouldHave.can_enter_colossus && CouldHave.silver_gauntlets;
	
	CouldHave.medalCount = 0; if (CouldHave.forest || Player.forest || Location_Access.forest_medallion_location) {CouldHave.medalCount += 1;} if (CouldHave.fire || Player.fire || Location_Access.fire_medallion_location) {CouldHave.medalCount += 1;} if (CouldHave.water || Player.water || Location_Access.water_medallion_location) {CouldHave.medalCount += 1;} if (Player.shadow_medallion || CouldHave.shadow_medallion || Location_Access.shadow_medallion_location) {CouldHave.medalCount += 1;} if (Player.spirit_medallion || CouldHave.spirit_medallion || Location_Access.spirit_medallion_location) {CouldHave.medalCount += 1;} if (Player.light_medallion || CouldHave.light_medallion || Location_Access.light_medallion_location) {CouldHave.medalCount += 1;}
	CouldHave.stoneCount = 0; if (CouldHave.emerald || Player.emerald || Location_Access.emerald_location) {CouldHave.stoneCount += 1;} if (CouldHave.ruby || Player.ruby || Location_Access.ruby_location) {CouldHave.stoneCount += 1;} if (CouldHave.sapphire || Player.sapphire || Location_Access.sapphire_location) {CouldHave.stoneCount += 1;}
	CouldHave.rewardCount = CouldHave.medalCount + CouldHave.stoneCount;
	CouldHave.can_enter_ganons = (CouldHave.medalCount == 6 && document.getElementById("ganonsBridge").value == "ALL_MED") || document.getElementById("ganonsBridge").value == "ALWAYS" || (document.getElementById("ganonsBridge").value == "5_MEDALS" && CouldHave.medalCount >= 5) || (document.getElementById("ganonsBridge").value == "4_MEDALS" && CouldHave.medalCount >= 4) || (document.getElementById("ganonsBridge").value == "3_MEDALS" && CouldHave.medalCount >= 3) || (document.getElementById("ganonsBridge").value == "2_MEDALS" && CouldHave.medalCount >= 2) || (document.getElementById("ganonsBridge").value == "3_STONES" && CouldHave.stoneCount == 3) || (document.getElementById("ganonsBridge").value == "1_REWARD" && CouldHave.rewardCount >= 1) || (document.getElementById("ganonsBridge").value == "2_REWARDS" && CouldHave.rewardCount >= 2) || (document.getElementById("ganonsBridge").value == "3_REWARDS" && CouldHave.rewardCount >= 3) || (document.getElementById("ganonsBridge").value == "4_REWARDS" && CouldHave.rewardCount >= 4) || (document.getElementById("ganonsBridge").value == "5_REWARDS" && CouldHave.rewardCount >= 5) || (document.getElementById("ganonsBridge").value == "6_REWARDS" && CouldHave.rewardCount >= 6) || (document.getElementById("ganonsBridge").value == "7_REWARDS" && CouldHave.rewardCount >= 7) || (document.getElementById("ganonsBridge").value == "8_REWARDS" && CouldHave.rewardCount >= 8) || (document.getElementById("ganonsBridge").value == "9_REWARDS" && CouldHave.rewardCount >= 9)
	 
	CouldHave.can_climb_fire_temple = CouldHave.can_enter_fire_temple && CouldHave.current_fire_keys >=3 && (CouldHave.bow || CouldHave.hookshot || CouldHave.bomb_bag || Player.has_chus);
	CouldHave.can_enter_water = (CouldHave.hookshot && CouldHave.iron_boots) || (CouldHave.longshot && CouldHave.golden_scale);
	CouldHave.middle_water = CouldHave.can_enter_water && CouldHave.lullaby && (CouldHave.bow || CouldHave.can_use_dins || CouldHave.current_water_keys >= 1);
	CouldHave.projectile_both = CouldHave.bomb_bag || Player.has_chus || ((CouldHave.slingshot || CouldHave.boomerang) && (CouldHave.bow || CouldHave.hookshot));
	CouldHave.projectile_child = CouldHave.bomb_bag || Player.has_chus || CouldHave.slingshot || CouldHave.boomerang;
	CouldHave.projectile_adult = CouldHave.bomb_bag || Player.has_chus || CouldHave.bow || CouldHave.hookshot;
	CouldHave.can_wear_goron_tunic = true;
	CouldHave.can_wear_zora_tunic = true;
	CouldHave.can_climb_gtg_hole = CouldHave.hookshot || CouldHave.hover_boots || CouldHave.bomb_bag;
	if (document.getElementById("closedDeku").value != "CLOSED") {CouldHave.deku_access = true;} else {CouldHave.deku_access = CouldHave.kokiri_sword;}
}
function location_logic(){
	Location_Logic.mido_1 = true;
	Location_Logic.mido_2 = true;
	Location_Logic.mido_3 = true;
	Location_Logic.mido_4 = true;
	Location_Logic.kokiri_sword = true;
	Location_Logic.kokiri_storms = Logic.storms;
	Location_Logic.talons_chickens = true;
	Location_Logic.back_of_ranch = true;
	Location_Logic.hyrule_remote_grotto = Logic.can_blast_or_smash;
	Location_Logic.hyrule_open_grotto = true;
	Location_Logic.hyrule_hp_scrub = Logic.can_blast_or_smash;
	Location_Logic.hyrule_boulder_of_destiny = Logic.can_blast_or_smash;
	Location_Logic.hyrule_tektite_grotto = Logic.can_blast_or_smash && (Logic.golden_scale || Logic.iron_boots);
	Location_Logic.hyrule_ocarina = Logic.kokiri_emerald && Logic.goron_ruby && Logic.zora_sapphire;
	Location_Logic.gerudovalley_box = true;
	Location_Logic.gerudovalley_fall = true;
	Location_Logic.gerudo_hammer = Logic.fortress_access && Logic.hammer;
	Location_Logic.hylia_child_fishing = true;
	Location_Logic.hylia_bottle = Logic.silver_scale;
	Location_Logic.hylia_adult_fishing = Logic.hookshot || Logic.child_can_enter_river || Spawn.adult_fishing;
	Location_Logic.hylia_lab_top = Logic.hookshot || Logic.child_can_enter_river;
	Location_Logic.hylia_lab_dive = Logic.golden_scale;
	Location_Logic.hylia_sun_shoot = Logic.longshot && Logic.bow;
	Location_Logic.market_slingshot_game = true;
	Location_Logic.richard = true;
	Location_Logic.market_bowling_1 = Logic.bomb_bag;
	Location_Logic.market_bowling_2 = Logic.bomb_bag;
	Location_Logic.market_lens_game = Logic.can_see;
	Location_Logic.poes= (Logic.bow && Logic.eponas && Logic.bottle) || Logic.big_poe;
	Location_Logic.dins_fairy = (Logic.bomb_bag || Spawn.child_hyrule_fairy) && Logic.lullaby;
	Location_Logic.g_fairy = (Logic.golden_gauntlets || Spawn.adult_ogc) && Logic.lullaby;
	Location_Logic.lacs = Logic.shadow_medallion && Logic.spirit_medallion;
	Location_Logic.fountain_fairy = Logic.ice_access && Logic.bomb_bag;
	Location_Logic.ice_glacier_hp = Logic.ice_access;
	Location_Logic.ice_bottom_of_fountain = Logic.ice_access && Logic.iron_boots;
	Location_Logic.ice_map = Logic.ice_access;
	Location_Logic.ice_compass = Logic.ice_access;
	Location_Logic.ice_hp = Logic.ice_access;
	Location_Logic.ice_irons = Logic.ice_access;
	Location_Logic.deku_lobby = Logic.deku_access;
	Location_Logic.deku_slingshot = Logic.deku_access;
	Location_Logic.deku_slingshot_room_side = Logic.deku_access;
	Location_Logic.deku_compass = Logic.deku_access;
	Location_Logic.deku_compass_room_side = Logic.deku_access;
	Location_Logic.deku_basement = Logic.deku_access;
	Location_Logic.deku_queen_gohma = Logic.deku_access && Logic.slingshot;
	Location_Logic.lost_woods_fairy_ocarina = true;
	Location_Logic.ocarina_game = true;
	Location_Logic.lost_woods_grotto = Logic.can_blast_or_smash;
	Location_Logic.lost_woods_scrub_grotto = Logic.bomb_bag || (Logic.can_pass_mido_as_adult && Logic.hammer);
	Location_Logic.bridge_scrub = true;
	Location_Logic.target = Logic.slingshot;
	Location_Logic.skull_kid = Logic.sarias;
	Location_Logic.theater = true;
	Location_Logic.wolfos_grotto = Logic.bomb_bag || (Logic.can_pass_mido_as_adult && Logic.hammer);
	Location_Logic.rolling_goron = Logic.bomb_bag;
	Location_Logic.goron_dance = (Logic.lullaby || Spawn.child_lower_dmc) && Logic.sarias;
	Location_Logic.goron_pot = Logic.bomb_bag && (Logic.lullaby || Logic.can_use_dins || Spawn.child_lower_dmc);
	Location_Logic.goron_maze_1 = Logic.can_blast_or_smash || Logic.silver_gauntlets;
	Location_Logic.goron_maze_2 = Logic.can_blast_or_smash || Logic.silver_gauntlets;
	Location_Logic.goron_maze_3 = Logic.hammer || Logic.silver_gauntlets;
	Location_Logic.goron_link = Logic.can_stop_link_the_goron;
	Location_Logic.dodongos_map = Logic.can_enter_dodongos;
	Location_Logic.dodongos_compass = Logic.can_enter_dodongos;
	Location_Logic.dodongos_bomb_flower_platform = Logic.dodongos_climb;
	Location_Logic.dodongos_bomb_bag = Logic.dodongos_climb;
	Location_Logic.dodongos_end_of_bridge = Logic.dodongos_climb && Logic.can_blast_or_smash;
	Location_Logic.dodongos_above_king = Logic.bomb_bag;
	Location_Logic.dodongos_king_dodongo = Logic.bomb_bag;
	Location_Logic.trail_bombable = Logic.can_blast_or_smash;
	Location_Logic.trail_dodongos_top = true;
	Location_Logic.trail_storms = Logic.storms;
	Location_Logic.trail_fairy = (Logic.can_blast_or_smash || Spawn.child_dmt_fairy || Spawn.adult_dmt_fairy) && Logic.lullaby;
	Location_Logic.trade_quest = Location_Logic.trade_quest = (((Logic.ice_access || ((Logic.giants_wallet || Logic.can_enter_ganons) && (Logic.lullaby || Spawn.adult_zd) && Logic.bottle)) && Logic.prescription) || Logic.claim_check) && Logic.crater_top;
	Location_Logic.crater_bean = (Logic.bolero && Logic.child_can_enter_river) || (Logic.hover_boots && Logic.crater_by_city);
	Location_Logic.crater_hammer_fairy = ((Logic.crater_by_city && Logic.hammer) || Spawn.child_lower_dmc_fairy || Spawn.adult_lower_dmc_fairy) && Logic.lullaby;
	Location_Logic.crater_grotto = Logic.can_blast_or_smash;
	Location_Logic.crater_nook_hp = Logic.crater_top || Spawn.child_upper_dmc;
	Location_Logic.man_on_roof = true;//Logic.hookshot;
	Location_Logic.kakariko_grotto = true;
	Location_Logic.windmill = true;//Logic.boomerang || Logic.time;
	Location_Logic.anju = true;
	Location_Logic.cow_house = true;
	Location_Logic.archery_game = Logic.bow;
	Location_Logic.redead_grotto = Logic.can_blast_or_smash;
	Location_Logic.anjus_chickens = true;
	Location_Logic.tokens_10 = Logic.gold_skulltulas >= 10;
	Location_Logic.tokens_20 = Logic.gold_skulltulas >= 20;
	Location_Logic.tokens_30 = Logic.gold_skulltulas >= 30;
	Location_Logic.tokens_40 = Logic.gold_skulltulas >= 40;
	Location_Logic.tokens_50 = Logic.gold_skulltulas >= 50;
	Location_Logic.shield_grave = true;
	Location_Logic.gravedigging_tour = true;
	Location_Logic.redead_grave = Logic.suns;
	Location_Logic.composers_grave = Logic.lullaby && Logic.can_use_fire;
	Location_Logic.graveyard_box = Logic.child_can_enter_river || Logic.longshot;
	Location_Logic.race_1 = true;
	Location_Logic.race_2 = true;
	Location_Logic.river_pillar = Logic.child_can_enter_river || Logic.hover_boots;
	Location_Logic.river_grotto = true;
	Location_Logic.river_ledge = Logic.child_can_enter_river || Logic.hover_boots;
	Location_Logic.frogs_1 = Logic.child_can_enter_river && Logic.storms;
	Location_Logic.frogs_2 = Logic.child_can_enter_river && (Logic.storms && Logic.lullaby && Logic.eponas && Logic.sarias && Logic.suns && Logic.time);
	Location_Logic.zora_diving = Logic.child_can_enter_domain;
	Location_Logic.zora_torches = Logic.child_can_enter_domain;
	Location_Logic.thaw_king = Logic.ice_access || (Logic.bottle && (Logic.giants_wallet || Logic.can_enter_ganons) && (Logic.lullaby || Spawn.adult_zd));
	Location_Logic.colossus_bean = Logic.requiem && Logic.child_can_enter_river;
	Location_Logic.colossus_fairy = Logic.can_enter_colossus && Logic.bomb_bag && Logic.lullaby;
	Location_Logic.wasteland = Logic.can_cross_quicksand && Logic.can_use_fire;
	Location_Logic.gerudo_roof = Logic.fortress_access && (Logic.hookshot || Logic.hover_boots);
	Location_Logic.gerudo_archery_1 = Logic.eponas && Logic.bow;
	Location_Logic.gerudo_archery_2 = Logic.eponas && Logic.bow;
	Location_Logic.jabu_boomerang = Logic.can_enter_jabu;
	Location_Logic.jabu_map = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.jabu_compass = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.jabu_barinade = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.forest_first = Logic.can_pass_mido_as_adult && Logic.hookshot;
	Location_Logic.forest_stalfos = Logic.can_pass_mido_as_adult && Logic.hookshot;
	Location_Logic.forest_midCourtyard = Logic.can_pass_mido_as_adult && Logic.hookshot && (Logic.time || Logic.bow || (Logic.hover_boots && Logic.forest_keys>=1));
	Location_Logic.forest_highCourtyard = Logic.can_pass_mido_as_adult && Logic.hookshot && (Logic.time || (Logic.hover_boots && Logic.forest_keys>=1) || (Logic.bow/* && (Logic.iron_boots || Logic.golden_scale || Logic.longshot)*/));
	Location_Logic.forest_lowCourtyard = Logic.can_pass_mido_as_adult && Logic.hookshot && (Logic.time || (Logic.hover_boots && Logic.forest_keys>=1) || (Logic.bow/* && (Logic.iron_boots || Logic.golden_scale || Logic.longshot)*/));
	Location_Logic.forest_blockRoom = Logic.can_pass_mido_as_adult && Logic.hookshot && Logic.forest_keys >= 1 && Logic.bow && Logic.goron_bracelet;
	Location_Logic.forest_bossKey = Logic.can_pass_mido_as_adult && Logic.hookshot && Logic.forest_keys >= 2 && Logic.bow && Logic.goron_bracelet;
	Location_Logic.forest_floormaster = Logic.can_pass_mido_as_adult && Logic.hookshot && ((Logic.bow && Logic.goron_bracelet && Logic.forest_keys >=2) || (Logic.hover_boots && Logic.forest_keys >=1));
	Location_Logic.forest_red = Logic.can_pass_mido_as_adult && Logic.hookshot && Logic.goron_bracelet && Logic.bow && Logic.forest_keys>=3;
	Location_Logic.forest_bow = Logic.can_pass_mido_as_adult && Logic.hookshot && Logic.goron_bracelet && Logic.forest_keys>=3;
	Location_Logic.forest_blue = Logic.can_pass_mido_as_adult && Logic.hookshot && Logic.goron_bracelet && Logic.bow && Logic.forest_keys>=3;
	Location_Logic.forest_fallingCeiling = Logic.can_pass_mido_as_adult && Logic.hookshot && Logic.goron_bracelet && (Logic.bow || Logic.can_use_dins) && Logic.forest_keys>=5;
	Location_Logic.forest_nearBoss = Logic.can_pass_mido_as_adult && Logic.hookshot && Logic.goron_bracelet && Logic.bow && Logic.forest_keys>=5;
	Location_Logic.forest_phantomGanon = Logic.can_pass_mido_as_adult && Logic.hookshot && Logic.goron_bracelet && Logic.bow && Logic.forest_keys>=5 && Logic.forest_boss_key;
	Location_Logic.fire_nearBoss = Logic.can_enter_fire_temple;
	Location_Logic.fire_hammer1 = Logic.can_enter_fire_temple && Logic.hammer;
	Location_Logic.fire_hammer2 = Logic.can_enter_fire_temple && Logic.hammer;
	Location_Logic.fire_lavaOpen = Logic.can_enter_fire_temple && Logic.fire_keys >=1;
	Location_Logic.fire_lavaBomb = Logic.can_enter_fire_temple && Logic.fire_keys >=1 && Logic.bomb_bag;
	Location_Logic.fire_volvagia = Logic.can_enter_fire_temple && Logic.fire_boss_key && Logic.hammer && Logic.can_wear_goron_tunic && (Logic.hover_boots || (Logic.fire_keys >=7 && (Logic.time || Logic.bomb_bag)));
	Location_Logic.fire_lowerMaze = Logic.can_climb_fire_temple;
	Location_Logic.fire_sideRoom = Logic.can_climb_fire_temple;
	Location_Logic.fire_map = Logic.can_climb_fire_temple && ((Logic.fire_keys >= 4 && Logic.bow) || Logic.fire_keys>=5);
	Location_Logic.fire_upperMaze = Logic.can_climb_fire_temple && Logic.fire_keys>=5;
	Location_Logic.fire_shortcut = Logic.can_climb_fire_temple && Logic.fire_keys>=5 && Logic.bomb_bag;
	Location_Logic.fire_scarecrow = Logic.can_climb_fire_temple && Logic.fire_keys>=5 && Logic.hookshot;
	Location_Logic.fire_compass = Logic.can_climb_fire_temple && Logic.fire_keys>=6;
	Location_Logic.fire_sotGoron = Logic.can_climb_fire_temple && (Logic.fire_keys>=7 || (Logic.fire_keys>=6 && Logic.hover_boots)) && Logic.hammer && (Logic.time || Logic.bomb_bag);
	Location_Logic.fire_top = Logic.can_climb_fire_temple && (Logic.fire_keys>=7 || (Logic.fire_keys >= 6 && Logic.hover_boots)) && Logic.bomb_bag;
	Location_Logic.water_compass = Logic.can_enter_water;
	Location_Logic.water_map = Logic.can_enter_water;
	Location_Logic.water_cracked = Logic.middle_water && Logic.bomb_bag;
	Location_Logic.water_torches = Logic.can_enter_water && Logic.lullaby && (Logic.bow || Logic.can_use_dins);
	Location_Logic.water_block = Logic.can_enter_water && Logic.lullaby && Logic.bow && Logic.goron_bracelet && (Logic.hover_boots || Logic.longshot);
	Location_Logic.water_pillar = Logic.middle_water && Logic.can_wear_zora_tunic;
	Location_Logic.water_dLink = Logic.water_keys >= 5 && Logic.lullaby;
	Location_Logic.water_river = Logic.water_keys >= 5 && Logic.lullaby && Logic.time && Logic.bow;
	Location_Logic.water_dragon = Logic.can_enter_water && Logic.lullaby && ((Logic.water_keys >= 5 && Logic.time && Logic.bow) || Logic.goron_bracelet);
	Location_Logic.water_bossKey = Logic.can_enter_water && Logic.lullaby && Logic.longshot && Logic.water_keys >= 5 && ((Logic.bomb_bag && Logic.goron_bracelet) || Logic.hover_boots);
	Location_Logic.water_morpha = Logic.can_enter_water && Logic.water_boss_key && Logic.longshot ;
	Location_Logic.spirit_childLeft = Logic.requiem && (Logic.slingshot || Logic.boomerang);
	Location_Logic.spirit_childRight = Logic.requiem && (Logic.slingshot || Logic.boomerang);
	Location_Logic.spirit_childClimb1 = (Logic.spirit_keys >=1 && Logic.projectile_both);
	Location_Logic.spirit_childClimb2 = (Logic.spirit_keys >=1 && Logic.projectile_both);
	Location_Logic.spirit_map = (Logic.spirit_keys ==5 && Logic.requiem && Logic.bomb_bag) || (Logic.spirit_keys >=3 && Logic.silver_gauntlets && Logic.can_use_fire) || (Logic.bomb_bag && Logic.spirit_keys >=1 && Logic.can_use_fire);
	Location_Logic.spirit_sunRoom = (Logic.spirit_keys ==5 && Logic.requiem && Logic.bomb_bag) || (Logic.spirit_keys >=3 && Logic.silver_gauntlets && Logic.can_use_fire) || (Logic.bomb_bag && Logic.spirit_keys >=1 && Logic.can_use_fire);
	Location_Logic.spirit_rightHand = (Logic.spirit_keys >=3 && Logic.longshot && Logic.bomb_bag) || Logic.spirit_keys == 5;
	Location_Logic.spirit_adultLeft = Logic.can_enter_adult_spirit && Logic.hookshot && Logic.lullaby;
	Location_Logic.spirit_adultRight = Logic.can_enter_adult_spirit && (Logic.bow || Logic.hookshot || Logic.bomb_bag);
	Location_Logic.spirit_rotatingMirror1 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3;
	Location_Logic.spirit_rotatingMirror2 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3;
	Location_Logic.spirit_lullabyHand = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3 && Logic.lullaby;
	Location_Logic.spirit_lullabyHigh = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3 && Logic.lullaby && (Logic.hookshot || Logic.hover_boots);
	Location_Logic.spirit_nearFourArmos = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag && Logic.mirror_shield;
	Location_Logic.spirit_invisible1 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag ;//&& Logic.can_see;
	Location_Logic.spirit_invisible2 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag ;//&& Logic.can_see;
	Location_Logic.spirit_leftHand = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag;
	Location_Logic.spirit_bossKey = Logic.can_enter_adult_spirit && Logic.spirit_keys ==5 && Logic.bow && Logic.lullaby && Logic.hookshot;
	Location_Logic.spirit_tippyTop = Logic.can_enter_adult_spirit && Logic.spirit_keys ==5 && Logic.mirror_shield;
	Location_Logic.spirit_twinrova = Logic.can_enter_adult_spirit && Logic.spirit_keys ==5 && Logic.mirror_shield && Logic.bomb_bag && Logic.spirit_boss_key && Logic.hookshot;
	Location_Logic.shadow_map = Logic.can_enter_shadow;
	Location_Logic.shadow_hovers = Logic.can_enter_shadow;
	Location_Logic.shadow_compass = Logic.can_cross_shadow_gap;
	Location_Logic.shadow_earlySilvers = Logic.can_cross_shadow_gap;
	Location_Logic.shadow_spinning1 = Logic.can_bomb_shadow_wall;
	Location_Logic.shadow_spinning2 = Logic.can_bomb_shadow_wall;
	Location_Logic.shadow_spikesLower = Logic.can_bomb_shadow_wall;
	Location_Logic.shadow_spikesUpper = Logic.can_bomb_shadow_wall && Logic.goron_bracelet;
	Location_Logic.shadow_spikesSwitch = Logic.can_bomb_shadow_wall && Logic.goron_bracelet;
	Location_Logic.shadow_redeadSilvers = Logic.can_bomb_shadow_wall && Logic.shadow_keys >=2;
	Location_Logic.shadow_pot = Logic.can_bomb_shadow_wall && Logic.hookshot && Logic.shadow_keys >=2;
	Location_Logic.shadow_wind = Logic.can_pass_shadow_hookshot_door && Logic.shadow_keys >=3;
	Location_Logic.shadow_bombable = Logic.can_pass_shadow_hookshot_door && Logic.shadow_keys >=3;
	Location_Logic.shadow_gibdos = Logic.can_pass_shadow_hookshot_door && Logic.shadow_keys >=3;
	Location_Logic.shadow_dins1 = Logic.can_ride_shadow_boat && Logic.shadow_keys >=4;
	Location_Logic.shadow_dins2 = Logic.can_ride_shadow_boat && Logic.shadow_keys >=4;
	Location_Logic.shadow_floormaster = Logic.can_ride_shadow_boat && Logic.shadow_keys >=4;
	Location_Logic.shadow_bongo = Logic.can_beat_shadow_boss && Logic.shadow_keys >=5;
	Location_Logic.ganons_lightTrial1 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons_lightTrial2 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons_lightTrial3 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons_lightTrial4 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons_lightTrial5 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons_lightTrial6 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons_lightTrial7 = Logic.can_enter_ganons && Logic.golden_gauntlets ;//&& Logic.can_see;
	Location_Logic.ganons_lightTrialLullaby = Logic.can_enter_ganons && Logic.golden_gauntlets && Logic.lullaby && Logic.ganons_keys >= 1;
	Location_Logic.ganons_spiritTrial1 = Logic.can_enter_ganons && Logic.hookshot;
	Location_Logic.ganons_spiritTrial2 = Logic.can_enter_ganons && Logic.hookshot && Logic.bomb_bag;//&& Logic.can_see;
	Location_Logic.ganons_forestTrial = Logic.can_enter_ganons;
	Location_Logic.ganons_waterTrial1 = Logic.can_enter_ganons;
	Location_Logic.ganons_waterTrial2 = Logic.can_enter_ganons;
	Location_Logic.ganons_shadowTrial1 = Logic.can_enter_ganons && ((Logic.bow && Logic.fire_arrows && Logic.magic) || Logic.hookshot || Logic.hover_boots || Logic.time);
	Location_Logic.ganons_shadowTrial2 = Logic.can_enter_ganons && ((Logic.bow && Logic.fire_arrows && Logic.magic) || (Logic.longshot && (Logic.hover_boots || Logic.can_use_dins)));
	Location_Logic.ganons_bossKey = Logic.can_enter_ganons;
	Location_Logic.gtg_lobbyLeft = Logic.can_save_carpenters && Logic.bow;
	Location_Logic.gtg_lobbyRight = Logic.can_save_carpenters && Logic.bow;
	Location_Logic.gtg_stalfos = Logic.can_save_carpenters;
	Location_Logic.gtg_wolfos = Logic.can_save_carpenters && Logic.hookshot;
	Location_Logic.gtg_silvers1 = Logic.can_save_carpenters && Logic.hookshot && Logic.silver_gauntlets ;//&& Logic.can_see ;
	Location_Logic.gtg_silvers2 = Logic.can_save_carpenters && Logic.hookshot && Logic.silver_gauntlets ;//&& Logic.can_see ;
	Location_Logic.gtg_silvers3 = Logic.can_save_carpenters && Logic.hookshot && Logic.silver_gauntlets ;//&& Logic.can_see ;
	Location_Logic.gtg_silvers4 = Logic.can_save_carpenters && Logic.hookshot && Logic.silver_gauntlets ;//&& Logic.can_see ;
	Location_Logic.gtg_eyes = Logic.can_save_carpenters && Logic.hookshot && Logic.bow;  //((Logic.bomb_bag || Logic.gtg_keys == 9) && Logic.hammer));
	Location_Logic.gtg_aboveEyes = Logic.can_save_carpenters && Logic.hookshot && Logic.bow ;//&& Logic.can_see;
	Location_Logic.gtg_keese = Logic.can_save_carpenters && Logic.hookshot/*&& Logic.can_see*/;
	Location_Logic.gtg_flamesChest = Logic.can_save_carpenters && Logic.hookshot && Logic.hammer;// && (Logic.can_see || (Logic.bomb_bag || Logic.gtg_keys == 9)) ;
	Location_Logic.gtg_freestanding = Logic.can_save_carpenters && (Logic.gtg_keys == 9 || (Logic.bomb_bag && Logic.time) || (Logic.hookshot /*&& Logic.can_see*/ && Logic.time));
	Location_Logic.gtg_right2 = Logic.can_save_carpenters && (Logic.gtg_keys == 9 || (Logic.bomb_bag && Logic.time) || (Logic.hookshot /*&& Logic.can_see*/ && Logic.time));
	Location_Logic.gtg_right3 = Logic.can_save_carpenters && (Logic.gtg_keys == 9 || (Logic.bomb_bag && Logic.time) || (Logic.hookshot /*&& Logic.can_see*/ && Logic.time));
	Location_Logic.gtg_beamos = Logic.can_save_carpenters && Logic.bomb_bag;
	Location_Logic.gtg_left1 = Logic.can_save_carpenters && Logic.gtg_keys >= 3 ;//&& Logic.can_see;
	Location_Logic.gtg_left2 = Logic.can_save_carpenters && Logic.gtg_keys >= 4;
	Location_Logic.gtg_left3 = Logic.can_save_carpenters && Logic.gtg_keys >= 6;
	Location_Logic.gtg_left4 = Logic.can_save_carpenters && Logic.gtg_keys >= 7;
	Location_Logic.gtg_final = Logic.can_save_carpenters && Logic.gtg_keys >= 9;
	Location_Logic.gtg_toilet = Logic.can_save_carpenters && Logic.iron_boots && Logic.time && Logic.hookshot /*&& Logic.can_see*/;
	Location_Logic.well_fakeRight = Logic.storms ;//&& Logic.can_see;
	Location_Logic.well_centerSmall = Logic.storms ;//&& Logic.can_see;
	Location_Logic.well_backBombable = Logic.storms && Logic.bomb_bag;
	Location_Logic.well_waterLeft = Logic.storms && Logic.lullaby;
	Location_Logic.well_coffin = Logic.storms;
	Location_Logic.well_centerBig = Logic.storms ;//&& Logic.can_see;
	Location_Logic.well_fakeLeft = Logic.storms ;//&& Logic.can_see;
	Location_Logic.well_frontBombable = Logic.storms && Logic.bomb_bag;
	Location_Logic.well_waterFront = Logic.storms && Logic.lullaby;
	Location_Logic.well_deadHand = Logic.storms && Logic.lullaby ;//&& Logic.kokiri_sword;
	Location_Logic.well_invisible = Logic.storms && Logic.lullaby ;//&& Logic.can_see ;
	Location_Logic.well_locked1 = Logic.storms && Logic.well_keys == 3 ;//&& Logic.can_see ;
	Location_Logic.well_locked2 = Logic.storms && Logic.well_keys == 3 ;//&& Logic.can_see ;
	Location_Logic.well_basement = Logic.storms && (Logic.bomb_bag || (((/*Logic.can_see &&*/ Logic.well_keys == 3) || Logic.can_use_dins) && Logic.goron_bracelet));
	Location_Logic.zeldasSpot = true;
	Location_Logic.eponasSpot = true;
	Location_Logic.sariasSpot = true;
	Location_Logic.stormsSpot = true;
	Location_Logic.sunsSpot = Logic.lullaby;
	Location_Logic.boleroSpot = Logic.can_enter_fire_temple;
	Location_Logic.minuetSpot = Logic.can_pass_mido_as_adult;
	Location_Logic.requiemSpot = Logic.can_enter_colossus;
	Location_Logic.serenadeSpot = Logic.ice_access;
	Location_Logic.preludeSpot = Logic.forest_medallion;
	Location_Logic.nocturneSpot = Logic.forest_medallion && Logic.fire_medallion && Logic.water_medallion;
	Location_Logic.oot = Logic.kokiri_emerald && Logic.goron_ruby && Logic.zora_sapphire;
	Location_Logic.scrub_dodongos_1 = Logic.can_enter_dodongos;
	Location_Logic.scrub_dodongos_2 = Logic.can_enter_dodongos;
	Location_Logic.scrub_dodongos_3 = Logic.bomb_bag;
	Location_Logic.scrub_dodongos_4 = Logic.bomb_bag;
	Location_Logic.scrub_jabu = Logic.can_enter_jabu;
	Location_Logic.scrub_ganons_1 = Logic.can_enter_ganons;
	Location_Logic.scrub_ganons_2 = Logic.can_enter_ganons;
	Location_Logic.scrub_ganons_3 = Logic.can_enter_ganons;
	Location_Logic.scrub_ganons_4 = Logic.can_enter_ganons;
	Location_Logic.scrub_river_1 = Logic.storms;
	Location_Logic.scrub_river_2 = Logic.storms;
	Location_Logic.scrub_sfm_1 = Logic.storms;
	Location_Logic.scrub_sfm_2 = Logic.storms;
	Location_Logic.scrub_lake_1 = true;
	Location_Logic.scrub_lake_2 = true;
	Location_Logic.scrub_lake_3 = true;
	Location_Logic.scrub_lw_1 = true;
	Location_Logic.scrub_lw_2 = true;
	Location_Logic.scrub_lw_3 = Logic.can_blast_or_smash;
	Location_Logic.scrub_colossus_1 = Logic.silver_gauntlets;
	Location_Logic.scrub_colossus_2 = Logic.silver_gauntlets;
	Location_Logic.scrub_crater_1 = Logic.hammer;
	Location_Logic.scrub_crater_2 = Logic.hammer;
	Location_Logic.scrub_crater_3 = Logic.hammer;
	Location_Logic.scrub_goron_1 = Logic.time || (Logic.can_wear_goron_tunic && Logic.hookshot);
	Location_Logic.scrub_goron_2 = Logic.time || (Logic.can_wear_goron_tunic && Logic.hookshot);
	Location_Logic.scrub_goron_3 = Logic.time || (Logic.can_wear_goron_tunic && Logic.hookshot);
	Location_Logic.scrub_ranch_1 = true;
	Location_Logic.scrub_ranch_2 = true;
	Location_Logic.scrub_ranch_3 = true;
	Location_Logic.scrub_gv_1 = Logic.fortress_access && Logic.storms;
	Location_Logic.scrub_gv_2 = Logic.fortress_access && Logic.storms;
	Location_Logic.shop_kokiri_TL = Logic[Shop_Logic.shop_kokiri_TL];
	Location_Logic.shop_kokiri_TR = Logic[Shop_Logic.shop_kokiri_TR];
	Location_Logic.shop_kokiri_BR = Logic[Shop_Logic.shop_kokiri_BR];
	Location_Logic.shop_kokiri_BL = Logic[Shop_Logic.shop_kokiri_BL];
	Location_Logic.shop_market_bazaar_TL = Logic[Shop_Logic.shop_market_bazaar_TL];
	Location_Logic.shop_market_bazaar_TR = Logic[Shop_Logic.shop_market_bazaar_TR];
	Location_Logic.shop_market_bazaar_BR = Logic[Shop_Logic.shop_market_bazaar_BR];
	Location_Logic.shop_market_bazaar_BL = Logic[Shop_Logic.shop_market_bazaar_BL];
	Location_Logic.shop_market_potion_TL = Logic[Shop_Logic.shop_market_potion_TL];
	Location_Logic.shop_market_potion_TR = Logic[Shop_Logic.shop_market_potion_TR];
	Location_Logic.shop_market_potion_BR = Logic[Shop_Logic.shop_market_potion_BR];
	Location_Logic.shop_market_potion_BL = Logic[Shop_Logic.shop_market_potion_BL];
	Location_Logic.shop_market_chu_TL = Logic[Shop_Logic.shop_market_chu_TL];
	Location_Logic.shop_market_chu_TR = Logic[Shop_Logic.shop_market_chu_TR];
	Location_Logic.shop_market_chu_BR = Logic[Shop_Logic.shop_market_chu_BR];
	Location_Logic.shop_market_chu_BL = Logic[Shop_Logic.shop_market_chu_BL];
	Location_Logic.shop_kakariko_bazaar_TL = Logic[Shop_Logic.shop_kakariko_bazaar_TL];
	Location_Logic.shop_kakariko_bazaar_TR = Logic[Shop_Logic.shop_kakariko_bazaar_TR];
	Location_Logic.shop_kakariko_bazaar_BR = Logic[Shop_Logic.shop_kakariko_bazaar_BR];
	Location_Logic.shop_kakariko_bazaar_BL = Logic[Shop_Logic.shop_kakariko_bazaar_BL];
	Location_Logic.shop_kakariko_potion_TL = Logic[Shop_Logic.shop_kakariko_potion_TL];
	Location_Logic.shop_kakariko_potion_TR = Logic[Shop_Logic.shop_kakariko_potion_TR];
	Location_Logic.shop_kakariko_potion_BR = Logic[Shop_Logic.shop_kakariko_potion_BR];
	Location_Logic.shop_kakariko_potion_BL = Logic[Shop_Logic.shop_kakariko_potion_BL];
	Location_Logic.shop_goron_TL = Logic[Shop_Logic.shop_goron_TL] && (Logic.lullaby || Logic.can_stop_link_the_goron || Logic.bomb_bag || Logic.can_use_dins);
	Location_Logic.shop_goron_TR = Logic[Shop_Logic.shop_goron_TR] && (Logic.lullaby || Logic.can_stop_link_the_goron || Logic.bomb_bag || Logic.can_use_dins);
	Location_Logic.shop_goron_BR = Logic[Shop_Logic.shop_goron_BR] && (Logic.lullaby || Logic.can_stop_link_the_goron || Logic.bomb_bag || Logic.can_use_dins);
	Location_Logic.shop_goron_BL = Logic[Shop_Logic.shop_goron_BL] && (Logic.lullaby || Logic.can_stop_link_the_goron || Logic.bomb_bag || Logic.can_use_dins);
	Location_Logic.shop_domain_TL = Logic[Shop_Logic.shop_domain_TL] && ((Logic.bomb_bag && Logic.lullaby) || Logic.silver_scale || (Logic.lullaby && ((Logic.can_enter_ganons && Logic.bottle) || Logic.can_enter_jabu || (Logic.giants_wallet && Logic.bottle))));
	Location_Logic.shop_domain_TR = Logic[Shop_Logic.shop_domain_TR] && ((Logic.bomb_bag && Logic.lullaby) || Logic.silver_scale || (Logic.lullaby && ((Logic.can_enter_ganons && Logic.bottle) || Logic.can_enter_jabu || (Logic.giants_wallet && Logic.bottle))));
	Location_Logic.shop_domain_BR = Logic[Shop_Logic.shop_domain_BR] && ((Logic.bomb_bag && Logic.lullaby) || Logic.silver_scale || (Logic.lullaby && ((Logic.can_enter_ganons && Logic.bottle) || Logic.can_enter_jabu || (Logic.giants_wallet && Logic.bottle))));
	Location_Logic.shop_domain_BL = Logic[Shop_Logic.shop_domain_BL] && ((Logic.bomb_bag && Logic.lullaby) || Logic.silver_scale || (Logic.lullaby && ((Logic.can_enter_ganons && Logic.bottle) || Logic.can_enter_jabu || (Logic.giants_wallet && Logic.bottle))));

	Location_Logic.gs_kokiri_child = true;
	Location_Logic.gs_kokiri_soil = Logic.bottle;
	Location_Logic.gs_kokiri_adult = Logic.hookshot;
	Location_Logic.gs_market = true;
	Location_Logic.gs_lost_woods_bean_1 = Logic.bottle;
	Location_Logic.gs_lost_woods_bean_2 = Logic.bottle;
	Location_Logic.gs_lost_woods_above_stage = Logic.child_can_enter_river && Logic.can_pass_mido_as_adult;
	Location_Logic.gs_sacred_forest = Logic.hookshot && Logic.can_pass_mido_as_adult;
	Location_Logic.gs_outside_kakariko = (Logic.boomerang && Logic.bomb_bag) || (Logic.can_blast_or_smash && Logic.hookshot)
	Location_Logic.gs_near_gerudo = (Logic.hammer && Logic.can_use_fire && Logic.hookshot) || (Logic.can_use_dins && Logic.bomb_bag && Logic.boomerang);
	Location_Logic.gs_hyrule_castle_tree = true;
	Location_Logic.gs_hyrule_castle_grotto = Logic.storms && Logic.bomb_bag && Logic.boomerang;
	Location_Logic.gs_lon_lon_tree = true;
	Location_Logic.gs_lon_lon_shed = true;
	Location_Logic.gs_lon_lon_window = Logic.boomerang;
	Location_Logic.gs_lon_lon_back_wall = Logic.boomerang;
	Location_Logic.gs_kakariko_construction = true;
	Location_Logic.gs_kakariko_skulltula_house = true;
	Location_Logic.gs_kakariko_guard_house = true;
	Location_Logic.gs_kakariko_tree = true;
	Location_Logic.gs_kakariko_tower = Logic.bomb_bag || Logic.slingshot;
	Location_Logic.gs_kakariko_impas = Logic.hookshot || Spawn.adult_kak_roof;
	Location_Logic.gs_graveyard_wall = Logic.boomerang;
	Location_Logic.gs_graveyard_soil = Logic.bottle;
	Location_Logic.gs_trail_soil = Logic.bottle && (Logic.bomb_bag || Logic.goron_bracelet);
	Location_Logic.gs_trail_bombable_wall = Logic.can_blast_or_smash;
	Location_Logic.gs_trail_hail_path = Logic.hammer;
	Location_Logic.gs_trail_above_dodongos = Logic.hammer;
	Location_Logic.gs_goron_center = true;
	Location_Logic.gs_goron_maze = Logic.bomb_bag;
	Location_Logic.gs_crater_crate = Logic.can_blast_or_smash || Spawn.child_upper_dmc;
	Location_Logic.gs_crater_soil = Logic.bottle && Logic.bolero;
	Location_Logic.gs_river_ladder = Logic.child_can_enter_river;
	Location_Logic.gs_river_near_grotto = Logic.hookshot;
	Location_Logic.gs_river_above_bridge = Logic.hookshot;
	Location_Logic.gs_river_tree = true;
	Location_Logic.gs_domain = (Logic.lullaby || Spawn.adult_zd) && (Logic.hookshot || Logic.magic || Logic.bow);
	Location_Logic.gs_fountain_above_log = Logic.rutos_letter && Logic.child_can_enter_domain && Logic.boomerang;
	Location_Logic.gs_fountain_tree = Logic.rutos_letter && Logic.child_can_enter_domain;
	Location_Logic.gs_fountain_hidden_cave = Logic.ice_access && Logic.silver_gauntlets && Logic.hookshot && Logic.can_blast_or_smash;
	Location_Logic.gs_hylia_bean = Logic.bottle;
	Location_Logic.gs_hylia_lab_wall = Logic.boomerang;
	Location_Logic.gs_hylia_island = true;
	Location_Logic.gs_hylia_tree = Logic.longshot;
	Location_Logic.gs_hylia_lab_crate = Logic.iron_boots && Logic.hookshot;
	Location_Logic.gs_valley_small_bridge = Logic.boomerang;
	Location_Logic.gs_valley_bean = Logic.bottle;
	Location_Logic.gs_valley_tent = Logic.fortress_access && Logic.hookshot;
	Location_Logic.gs_valley_pillar = Logic.fortress_access && Logic.hookshot;
	Location_Logic.gs_fortress_archery = Logic.fortress_access && Logic.hookshot;
	Location_Logic.gs_fortress_top = Logic.fortress_access;
	Location_Logic.gs_wasteland = Logic.hookshot && Logic.can_cross_quicksand;
	Location_Logic.gs_colossus_soil = Logic.bottle && Logic.requiem;
	Location_Logic.gs_colossus_tree = Logic.hookshot && Logic.can_enter_colossus;
	Location_Logic.gs_colossus_hill = (Logic.requiem && (Logic.bomb_bag || Logic.silver_scale)) || (Logic.longshot && Logic.can_enter_colossus);
	Location_Logic.gs_ogc = true;
	Location_Logic.gs_deku_basement_back = Logic.deku_access && Logic.boomerang && Logic.bomb_bag && Logic.slingshot;
	Location_Logic.gs_deku_basement_gate = Logic.deku_access;
	Location_Logic.gs_deku_basement_vines = Logic.deku_access && (Logic.slingshot || Logic.boomerang || Logic.bomb_bag || Logic.can_use_dins);
	Location_Logic.gs_deku_compass = Logic.deku_access;
	Location_Logic.gs_dodongos_east_side = Logic.can_enter_dodongos;
	Location_Logic.gs_dodongos_stair_vines = Logic.dodongos_climb;
	Location_Logic.gs_dodongos_above_stairs = (Logic.dodongos_climb && Logic.hookshot) || (Logic.boomerang && (Logic.bomb_bag || Logic.goron_bracelet));
	Location_Logic.gs_dodongos_scarecrow = Logic.can_enter_dodongos && Logic.hookshot;
	Location_Logic.gs_dodongos_before_king = Logic.bomb_bag;
	Location_Logic.gs_jabu_vines = Logic.can_enter_jabu;
	Location_Logic.gs_jabu_near_octo_1 = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.gs_jabu_near_octo_2 = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.gs_jabu_near_boss = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.gs_forest_first = Logic.can_pass_mido_as_adult && Logic.hookshot;
	Location_Logic.gs_forest_lobby = Logic.can_pass_mido_as_adult && Logic.hookshot;
	Location_Logic.gs_forest_outdoor_east = Logic.can_pass_mido_as_adult && Logic.hookshot && ((Logic.bow || Logic.time) || (Logic.forest_keys >= 1 && Logic.hover_boots));
	Location_Logic.gs_forest_outdoor_west = Logic.can_pass_mido_as_adult && Logic.hookshot && (((Logic.bow || Logic.time) && Logic.longshot) || (Logic.forest_keys >= 1 && Logic.hover_boots) || (Logic.forest_keys >= 2 && Logic.goron_bracelet && Logic.bow))
	Location_Logic.gs_forest_basement = Logic.can_pass_mido_as_adult && Logic.bow && Logic.goron_bracelet && Logic.forest_keys == 5;
	Location_Logic.gs_fire_time = Logic.can_enter_fire_temple && Logic.fire_keys >= 1 && Logic.time;
	Location_Logic.gs_fire_bomb_wall = Logic.can_climb_fire_temple && Logic.goron_bracelet && Logic.bomb_bag;
	Location_Logic.gs_fire_scarecrow_1 = Logic.can_climb_fire_temple && Logic.goron_bracelet && Logic.fire_keys >=5 && Logic.hookshot;
	Location_Logic.gs_fire_scarecrow_2 = Logic.can_climb_fire_temple && Logic.goron_bracelet && Logic.fire_keys >=5 && Logic.hookshot;
	Location_Logic.gs_fire_basement = Logic.can_enter_fire_temple && Logic.hammer;
	Location_Logic.gs_water_south_basement = Logic.can_enter_water && Logic.bomb_bag && Logic.lullaby;
	Location_Logic.gs_water_river = Logic.can_enter_water && Logic.time && Logic.water_keys >= 5;
	Location_Logic.gs_water_central = Logic.middle_water && (Logic.longshot || Logic.can_use_farores);
	Location_Logic.gs_water_near_boss_key = Logic.can_enter_water && Logic.longshot && Logic.lullaby && Logic.water_keys >=4;
	Location_Logic.gs_water_platform_room = Logic.can_enter_water && Logic.longshot && Logic.lullaby && Logic.water_keys >=4;
	Location_Logic.gs_spirit_metal_fence = Logic.requiem && (Logic.boomerang || Logic.slingshot);
	Location_Logic.gs_spirit_before_child_knuckle = (Logic.bomb_bag && Logic.boomerang && Logic.hookshot && Logic.spirit_keys >= 1) || (Logic.boomerang && Logic.spirit_keys == 5 && Logic.bomb_bag && Logic.requiem) || (Logic.hookshot && Logic.silver_gauntlets && Logic.spirit_keys >= 3);
	Location_Logic.gs_spirit_boulder_room = Logic.can_enter_adult_spirit && Logic.time && (Logic.bow || Logic.hookshot || Logic.bomb_bag);
	Location_Logic.gs_spirit_lobby = Logic.can_enter_adult_spirit && Logic.spirit_keys >= 3 && (Logic.hookshot || Logic.hover_boots);
	Location_Logic.gs_spirit_child_climb = Logic.spirit_keys >= 1;
	Location_Logic.gs_shadow_like_like = Logic.can_bomb_shadow_wall;
	Location_Logic.gs_shadow_crusher = Logic.can_bomb_shadow_wall && Logic.hookshot;
	Location_Logic.gs_shadow_giant_pot = Logic.can_bomb_shadow_wall && Logic.shadow_keys >=2 && Logic.hookshot;
	Location_Logic.gs_shadow_near_boat = Logic.can_pass_shadow_hookshot_door && Logic.longshot && Logic.shadow_keys >=4;
	Location_Logic.gs_shadow_three_pots = Logic.can_ride_shadow_boat;
	Location_Logic.gs_well_west_inner = Logic.boomerang /*&& Logic.can_see*/ && Logic.well_keys >=3;
	Location_Logic.gs_well_east_inner = Logic.boomerang /*&& Logic.can_see*/ && Logic.well_keys >=3;
	Location_Logic.gs_well_like_like = Logic.boomerang /*&& Logic.can_see*/ && Logic.well_keys >=3;
	Location_Logic.gs_ice_spinning_scythe = Logic.ice_access && Logic.hookshot;
	Location_Logic.gs_ice_hp_room = Logic.ice_access && Logic.hookshot;
	Location_Logic.gs_ice_block_room = Logic.ice_access && Logic.hookshot;
	
	Location_Obtain.kokiri_sword = true;
	Location_Obtain.mido_1 = true;
	Location_Obtain.mido_2 = true;
	Location_Obtain.mido_3 = true;
	Location_Obtain.mido_4 = true;
	Location_Obtain.talons_chickens = true;
	Location_Obtain.back_of_ranch = true;
	Location_Obtain.hyrule_remote_grotto = Player.can_blast_or_smash;
	Location_Obtain.hyrule_open_grotto = true;
	Location_Obtain.hyrule_hp_scrub = Player.can_blast_or_smash;
	Location_Obtain.hyrule_boulder_of_destiny = Player.can_blast_or_smash;
	Location_Obtain.hyrule_tektite_grotto = Player.can_blast_or_smash && (Player.golden_scale || Player.iron_boots);
	Location_Obtain.hyrule_ocarina = Player.emerald && Player.ruby && Player.sapphire;
	Location_Obtain.gerudovalley_box = true;
	Location_Obtain.gerudovalley_fall = true;
	Location_Obtain.hylia_child_fishing = true;
	Location_Obtain.hylia_bottle = Player.silver_scale;
	Location_Obtain.hylia_adult_fishing = Player.hookshot || Player.child_can_enter_river || Spawn.adult_fishing;
	Location_Obtain.hylia_lab_top = Player.hookshot || Player.child_can_enter_river;
	Location_Obtain.hylia_lab_dive = Player.golden_scale || (Player.hookshot && Player.iron_boots);
	Location_Obtain.hylia_sun_shoot = Player.bow && Player.longshot;
	Location_Obtain.market_slingshot_game = true;
	Location_Obtain.richard = true;
	Location_Obtain.market_bowling_1 = Player.bomb_bag;
	Location_Obtain.market_bowling_2 = Player.bomb_bag;
	Location_Obtain.market_lens_game = Player.can_see;
	Location_Obtain.poes= (Player.bow && (Player.can_use_bottle || Player.can_enter_jabu)) || Player.big_poe;
	Location_Obtain.dins_fairy = (Player.bomb_bag || Player.has_chus || Spawn.child_hyrule_fairy) && Player.lullaby;
	Location_Obtain.g_fairy = (Player.golden_gauntlets || Spawn.adult_ogc) && Player.lullaby;
	Location_Obtain.lacs = Player.gen1 && Player.gen2;
	Location_Obtain.river_pillar = true;
	Location_Obtain.river_grotto = true;
	Location_Obtain.river_ledge = true;
	Location_Obtain.frogs_1 = Player.child_can_enter_river && Player.storms;
	Location_Obtain.frogs_2 = Player.child_can_enter_river && (Player.storms && Player.lullaby && Player.eponas && Player.sarias && Player.suns && Player.time);
	Location_Obtain.zora_diving = Player.child_can_enter_river;
	Location_Obtain.zora_torches = Player.child_can_enter_river;
	Location_Obtain.lost_woods_fairy_ocarina = true;
	Location_Obtain.ocarina_game = true;
	Location_Obtain.lost_woods_grotto = Player.can_blast_or_smash;
	Location_Obtain.lost_woods_scrub_grotto = Player.can_blast_or_smash;
	Location_Obtain.wolfos_grotto = Player.can_blast_or_smash;
	Location_Obtain.bridge_scrub = true;
	Location_Obtain.skull_kid = Player.sarias;
	Location_Obtain.target = Player.slingshot;
	Location_Obtain.theater = true;
	Location_Obtain.kokiri_storms = Player.storms;
	Location_Obtain.rolling_goron = Player.bomb_bag || Player.has_chus || Player.goron_bracelet;
	Location_Obtain.goron_pot = (Player.bomb_bag || Player.goron_bracelet || Player.has_chus) && (Player.lullaby || Player.can_use_dins || Spawn.child_lower_dmc || Spawn.child_lower_dmc_fairy);
	Location_Obtain.goron_dance = (Player.lullaby || Spawn.child_lower_dmc || Spawn.child_lower_dmc_fairy) && Player.sarias;
	Location_Obtain.goron_maze_1 = Player.can_blast_or_smash || Player.silver_gauntlets;
	Location_Obtain.goron_maze_2 = Player.can_blast_or_smash || Player.silver_gauntlets;
	Location_Obtain.goron_maze_3 = Player.hammer || Player.silver_gauntlets || ((Player.bomb_bag || Player.has_chus) && Player.hover_boots);
	Location_Obtain.goron_link = Player.can_stop_link_the_goron;
	Location_Obtain.trail_bombable = Player.can_blast_or_smash || Player.goron_bracelet;
	Location_Obtain.trail_dodongos_top = true;
	Location_Obtain.trail_storms = Player.storms;
	Location_Obtain.crater_bean = (Player.bolero && Player.child_can_enter_river) || (Player.crater_top && Player.hover_boots);
	Location_Obtain.crater_hammer_fairy = ((Player.crater_by_city && Player.hammer) || Spawn.child_lower_dmc_fairy  || Spawn.adult_lower_dmc_fairy  || Spawn.child_lower_dmc_fairy_ool  || Spawn.adult_lower_dmc_fairy_ool) && Player.lullaby;
	Location_Obtain.crater_nook_hp = Player.crater_top || Spawn.child_upper_dmc;
	Location_Obtain.crater_grotto = Player.can_blast_or_smash;
	Location_Obtain.trail_fairy = (Player.can_blast_or_smash || Spawn.child_dmt_fairy  || Spawn.adult_dmt_fairy || Spawn.child_dmt_fairy_ool || Spawn.adult_dmt_fairy_ool) && Player.lullaby;
	Location_Obtain.trade_quest = (((Location_Obtain.thaw_king || (Player.giants_wallet && Player.lullaby && (Player.can_use_bottle || Player.can_enter_jabu))) && Player.prescription) || Player.claim_check) && Player.crater_top;
	Location_Obtain.gerudo_hammer = Player.fortress_access && Player.hammer;
	Location_Obtain.gerudo_roof = Player.fortress_access && (Player.hookshot || Player.hover_boots);
	Location_Obtain.gerudo_archery_1 = Player.eponas && Player.bow;
	Location_Obtain.gerudo_archery_2 = Player.eponas && Player.bow;
	Location_Obtain.wasteland = (Player.can_cross_quicksand || Player.requiem) && Player.can_use_fire;
	Location_Obtain.colossus_fairy = Player.can_enter_colossus && (Player.bomb_bag || Player.has_chus) && Player.lullaby;
	Location_Obtain.colossus_bean = Player.requiem && Player.child_can_enter_river;
	Location_Obtain.man_on_roof = true;//Player.hookshot;
	Location_Obtain.kakariko_grotto = true;
	Location_Obtain.windmill = true;//Player.boomerang || Player.time;
	Location_Obtain.anju = true;
	Location_Obtain.cow_house = true;
	Location_Obtain.redead_grotto = Player.can_blast_or_smash;
	Location_Obtain.archery_game = Player.bow;
	Location_Obtain.anjus_chickens = true;
	Location_Obtain.tokens_10 = Logic.gold_skulltulas >= 10 || Player.tokens >= 10; //these are temporary because access logic for skulls isn't done yet
	Location_Obtain.tokens_20 = Logic.gold_skulltulas >= 20 || Player.tokens >= 20;
	Location_Obtain.tokens_30 = Logic.gold_skulltulas >= 30 || Player.tokens >= 30;
	Location_Obtain.tokens_40 = Logic.gold_skulltulas >= 40 || Player.tokens >= 40;
	Location_Obtain.tokens_50 = Logic.gold_skulltulas >= 50 || Player.tokens >= 50;
	Location_Obtain.gravedigging_tour = true;
	Location_Obtain.graveyard_box = Player.child_can_enter_river || Player.longshot || Player.boomerang;
	Location_Obtain.shield_grave = true;
	Location_Obtain.redead_grave = Player.suns;
	Location_Obtain.composers_grave = Player.lullaby;
	Location_Obtain.race_1 = true;
	Location_Obtain.race_2 = true;
	Location_Obtain.deku_lobby = Player.deku_access;
	Location_Obtain.deku_slingshot = Player.deku_access;
	Location_Obtain.deku_slingshot_room_side = Player.deku_access;
	Location_Obtain.deku_compass = Player.deku_access;
	Location_Obtain.deku_compass_room_side = Player.deku_access;
	Location_Obtain.deku_basement = Player.deku_access;
	Location_Obtain.deku_queen_gohma = Player.deku_access;
	Location_Obtain.dodongos_map = Player.can_enter_dodongos;
	Location_Obtain.dodongos_compass = Player.can_enter_dodongos;
	Location_Obtain.dodongos_bomb_flower_platform = Player.dodongos_climb;
	Location_Obtain.dodongos_bomb_bag = Player.dodongos_climb;
	Location_Obtain.dodongos_end_of_bridge = (Player.dodongos_climb && Player.can_blast_or_smash)
	Location_Obtain.dodongos_above_king = Player.dodongos_climb && (Player.bomb_bag || Player.has_chus);
	Location_Obtain.dodongos_king_dodongo = Player.dodongos_climb && (Player.bomb_bag || Player.has_chus);
	Location_Obtain.jabu_boomerang = Player.can_enter_jabu && (Player.boomerang || Player.bomb_bag || Player.slingshot || Player.has_chus);
	Location_Obtain.jabu_map = Player.can_enter_jabu && Player.boomerang;
	Location_Obtain.jabu_compass = Player.can_enter_jabu && Player.boomerang;
	Location_Obtain.jabu_barinade = Player.can_enter_jabu && Player.boomerang;
	Location_Obtain.fountain_fairy = Player.ice_access && (Player.bomb_bag|| Player.has_chus || (Player.hammer && Player.silver_gauntlets)) && Player.lullaby;
	Location_Obtain.ice_glacier_hp = Player.ice_access;
	Location_Obtain.ice_map = Player.ice_access && Player.can_use_bottle;
	Location_Obtain.ice_hp = Player.ice_access && Player.can_use_bottle;
	Location_Obtain.ice_compass = Player.ice_access && Player.can_use_bottle;
	Location_Obtain.ice_irons = Player.ice_access && Player.can_use_bottle;
	Location_Obtain.ice_bottom_of_fountain = Player.ice_access && Player.iron_boots;
	Location_Obtain.thaw_king = Player.can_use_bottle && (Player.ice_access || (Player.giants_wallet && (Player.lullaby || Player.hover_boots || Spawn.adult_zd)));
	Location_Obtain.forest_first = Player.hookshot;
	Location_Obtain.forest_stalfos = Player.hookshot;
	Location_Obtain.forest_midCourtyard = Player.hookshot && (Player.time || Player.bow || ((Player.hover_boots || Player.goron_bracelet) && Player.current_forest_keys>=1));
	Location_Obtain.forest_highCourtyard = Player.hookshot && (Player.time || ((Player.hover_boots || Player.goron_bracelet) && Player.current_forest_keys>=1) || (Player.bow/* && (Player.iron_boots || Player.golden_scale || Player.longshot)*/));
	Location_Obtain.forest_lowCourtyard = Player.hookshot && (Player.time || ((Player.hover_boots || Player.goron_bracelet) && Player.current_forest_keys>=1) || (Player.bow/* && (Player.iron_boots || Player.golden_scale || Player.longshot)*/));
	Location_Obtain.forest_blockRoom = Player.hookshot && Player.current_forest_keys >= 1 && Player.bow && Player.goron_bracelet;
	Location_Obtain.forest_bossKey = Player.hookshot && Player.current_forest_keys >= 2 && Player.bow && Player.goron_bracelet;
	Location_Obtain.forest_floormaster = Player.hookshot && ((Player.bow && Player.goron_bracelet && Player.current_forest_keys >=2) || ((Player.hover_boots || Player.goron_bracelet) && Player.current_forest_keys >=1));
	Location_Obtain.forest_red = Player.hookshot && Player.goron_bracelet && Player.bow && Player.current_forest_keys>=3;
	Location_Obtain.forest_bow = Player.hookshot && Player.goron_bracelet && Player.current_forest_keys>=3;
	Location_Obtain.forest_blue = Player.hookshot && Player.goron_bracelet && Player.bow && Player.current_forest_keys>=3;
	Location_Obtain.forest_fallingCeiling = Player.hookshot && Player.goron_bracelet && (Player.bow || Player.can_use_dins) && Player.current_forest_keys>=5;
	Location_Obtain.forest_nearBoss = Player.hookshot && Player.goron_bracelet && Player.bow && Player.current_forest_keys>=5;
	Location_Obtain.forest_phantomGanon = Player.hookshot && Player.goron_bracelet && Player.bow && Player.current_forest_keys>=5 && Player.forest_boss_key;
	Location_Obtain.fire_nearBoss = Player.can_enter_fire_temple;
	Location_Obtain.fire_hammer1 = Player.can_enter_fire_temple && Player.hammer;
	Location_Obtain.fire_hammer2 = Player.can_enter_fire_temple && Player.hammer;
	Location_Obtain.fire_lavaOpen = Player.can_enter_fire_temple && Player.current_fire_keys >=1;
	Location_Obtain.fire_lavaBomb = Player.can_enter_fire_temple && Player.current_fire_keys >=1 && (Player.bomb_bag || Player.has_chus);
	Location_Obtain.fire_volvagia = Player.can_enter_fire_temple && Player.fire_boss_key && Player.hammer;
	Location_Obtain.fire_lowerMaze = Player.can_climb_fire_temple;
	Location_Obtain.fire_sideRoom = Player.can_climb_fire_temple;
	Location_Obtain.fire_map = Player.can_climb_fire_temple && ((Player.current_fire_keys >= 4 && Player.bow) || Player.current_fire_keys>=5);
	Location_Obtain.fire_upperMaze = Player.can_climb_fire_temple && Player.current_fire_keys>=5;
	Location_Obtain.fire_shortcut = Player.can_climb_fire_temple && Player.current_fire_keys>=5 && (Player.bomb_bag || Player.has_chus);
	Location_Obtain.fire_scarecrow = Player.can_climb_fire_temple && Player.current_fire_keys>=5 && Player.hookshot;
	Location_Obtain.fire_compass = Player.can_climb_fire_temple && Player.current_fire_keys>=6;
	Location_Obtain.fire_sotGoron = Player.can_climb_fire_temple && (Player.current_fire_keys>=7 || (Player.current_fire_keys>=6)) && Player.hammer && (Player.time || Player.bomb_bag || Player.has_chus);
	Location_Obtain.fire_top = Player.can_climb_fire_temple && (Player.current_fire_keys>=7 || (Player.current_fire_keys >= 6)) && (Player.bomb_bag || Player.has_chus);
	Location_Obtain.water_compass = Player.can_enter_water && (Player.lullaby || Player.iron_boots);
	Location_Obtain.water_map = Player.can_enter_water;
	Location_Obtain.water_cracked = Player.can_enter_water && (Player.lullaby || (Player.iron_boots && Player.has_chus)) && (Player.bomb_bag || Player.has_chus);
	Location_Obtain.water_torches = Player.can_enter_water && Player.lullaby && (Player.bow || Player.can_use_dins);
	Location_Obtain.water_block = Player.can_enter_water && Player.lullaby && ((Player.bow || (Player.hover_boots && Player.bomb_bag)) && Player.goron_bracelet);
	Location_Obtain.water_pillar = Player.middle_water && Player.iron_boots;
	Location_Obtain.water_dLink = Player.current_water_keys >= 2;
	Location_Obtain.water_river = Player.current_water_keys >= 2 && Player.time && Player.bow;
	Location_Obtain.water_dragon = Player.can_enter_water && ((Player.current_water_keys >= 2 && Player.time && Player.bow) || (Player.goron_bracelet && Player.lullaby && (Player.iron_boots || Player.has_chus)));
	Location_Obtain.water_bossKey = Player.can_enter_water && (Player.lullaby || Player.iron_boots) && (Player.longshot || Player.hover_boots) && Player.current_water_keys >= 2;
	Location_Obtain.water_morpha = Player.can_enter_water && Player.water_boss_key && Player.longshot ;
	Location_Obtain.spirit_childLeft = Player.requiem && (Player.slingshot || Player.boomerang || Player.has_chus);
	Location_Obtain.spirit_childRight = Player.requiem && (Player.slingshot || Player.boomerang || Player.has_chus);
	Location_Obtain.spirit_childClimb1 = Player.current_spirit_keys >= 1 && ((Player.projectile_child && Player.requiem) || (Player.projectile_adult && Player.silver_gauntlets));
	Location_Obtain.spirit_childClimb2 = Player.current_spirit_keys >= 1 && ((Player.projectile_child && Player.requiem) || (Player.projectile_adult && Player.silver_gauntlets));
	Location_Obtain.spirit_map = Player.current_spirit_keys >= 1 && ((Player.requiem && (Player.bomb_bag || Player.has_chus)) || (((Player.can_use_fire || Player.bow) && Player.silver_gauntlets)));
	Location_Obtain.spirit_sunRoom = Player.current_spirit_keys >= 1 && ((Player.requiem && (Player.bomb_bag || Player.has_chus)) || (((Player.can_use_fire || Player.bow) && Player.silver_gauntlets)));
	Location_Obtain.spirit_rightHand = Player.current_spirit_keys >= 2;
	Location_Obtain.spirit_adultLeft = Player.can_enter_adult_spirit && Player.hookshot && Player.lullaby;
	Location_Obtain.spirit_adultRight = Player.can_enter_adult_spirit && (Player.bow || Player.hookshot || Player.has_chus);
	Location_Obtain.spirit_rotatingMirror1 = Player.can_enter_adult_spirit && Player.current_spirit_keys >=1;
	Location_Obtain.spirit_rotatingMirror2 = Player.can_enter_adult_spirit && Player.current_spirit_keys >=1;
	Location_Obtain.spirit_lullabyHand = Player.can_enter_adult_spirit && Player.current_spirit_keys >=1 && Player.lullaby;
	Location_Obtain.spirit_lullabyHigh = Player.can_enter_adult_spirit && Player.current_spirit_keys >=1 && Player.lullaby && (Player.hookshot || Player.hover_boots);
	Location_Obtain.spirit_nearFourArmos = Player.can_enter_adult_spirit && Player.current_spirit_keys >=2 && (Player.bomb_bag || Player.has_chus) && Player.mirror_shield;
	Location_Obtain.spirit_invisible1 = Player.can_enter_adult_spirit && Player.current_spirit_keys >=2 && (Player.bomb_bag || Player.has_chus) ;//&& Player.can_see;
	Location_Obtain.spirit_invisible2 = Player.can_enter_adult_spirit && Player.current_spirit_keys >=2 && (Player.bomb_bag || Player.has_chus) ;//&& Player.can_see;
	Location_Obtain.spirit_leftHand = Player.can_enter_adult_spirit && Player.current_spirit_keys >=2 && (Player.bomb_bag || Player.has_chus);
	Location_Obtain.spirit_bossKey = Player.can_enter_adult_spirit && Player.current_spirit_keys >=3 && Player.bow && Player.lullaby && Player.hookshot;
	Location_Obtain.spirit_tippyTop = Player.can_enter_adult_spirit && Player.current_spirit_keys >=3 && Player.mirror_shield;
	Location_Obtain.spirit_twinrova = Player.can_enter_adult_spirit && Player.current_spirit_keys >=3 && Player.mirror_shield && (Player.bomb_bag || Player.has_chus) && Player.spirit_boss_key && Player.hookshot;
	Location_Obtain.shadow_map = Player.can_enter_shadow;
	Location_Obtain.shadow_hovers = Player.can_enter_shadow;
	Location_Obtain.shadow_compass = Player.can_cross_shadow_gap;
	Location_Obtain.shadow_earlySilvers = Player.can_cross_shadow_gap;
	Location_Obtain.shadow_spinning1 = Player.can_bomb_shadow_wall;
	Location_Obtain.shadow_spinning2 = Player.can_bomb_shadow_wall;
	Location_Obtain.shadow_spikesLower = Player.can_bomb_shadow_wall;
	Location_Obtain.shadow_spikesUpper = Player.can_bomb_shadow_wall;
	Location_Obtain.shadow_spikesSwitch = Player.can_bomb_shadow_wall;
	Location_Obtain.shadow_redeadSilvers = Player.can_bomb_shadow_wall && Player.current_shadow_keys >=2;
	Location_Obtain.shadow_pot = Player.can_bomb_shadow_wall && Player.hookshot && Player.current_shadow_keys >=2;
	Location_Obtain.shadow_wind = Player.can_pass_shadow_hookshot_door && Player.current_shadow_keys >=3;
	Location_Obtain.shadow_bombable = Player.can_pass_shadow_hookshot_door && Player.current_shadow_keys >=3;
	Location_Obtain.shadow_gibdos = Player.can_pass_shadow_hookshot_door && Player.current_shadow_keys >=3;
	Location_Obtain.shadow_dins1 = Player.can_ride_shadow_boat && Player.can_use_dins && Player.current_shadow_keys >=4;
	Location_Obtain.shadow_dins2 = Player.can_ride_shadow_boat && Player.can_use_dins && Player.current_shadow_keys >=4;
	Location_Obtain.shadow_floormaster = Player.can_ride_shadow_boat && Player.current_shadow_keys >=4;
	Location_Obtain.shadow_bongo = Player.can_beat_shadow_boss && Player.current_shadow_keys >=5;
	Location_Obtain.ganons_lightTrial1 = Player.can_enter_ganons && Player.golden_gauntlets;
	Location_Obtain.ganons_lightTrial2 = Player.can_enter_ganons && Player.golden_gauntlets;
	Location_Obtain.ganons_lightTrial3 = Player.can_enter_ganons && Player.golden_gauntlets;
	Location_Obtain.ganons_lightTrial4 = Player.can_enter_ganons && Player.golden_gauntlets;
	Location_Obtain.ganons_lightTrial5 = Player.can_enter_ganons && Player.golden_gauntlets;
	Location_Obtain.ganons_lightTrial6 = Player.can_enter_ganons && Player.golden_gauntlets;
	Location_Obtain.ganons_lightTrial7 = Player.can_enter_ganons && Player.golden_gauntlets ;//&& Player.can_see;
	Location_Obtain.ganons_lightTrialLullaby = Player.can_enter_ganons && Player.golden_gauntlets && Player.lullaby && Player.current_ganons_keys >= 1;
	Location_Obtain.ganons_spiritTrial1 = Player.can_enter_ganons;
	Location_Obtain.ganons_spiritTrial2 = Player.can_enter_ganons && (Player.has_chus || Player.bow);//&& Player.can_see;
	Location_Obtain.ganons_forestTrial = Player.can_enter_ganons;
	Location_Obtain.ganons_waterTrial1 = Player.can_enter_ganons;
	Location_Obtain.ganons_waterTrial2 = Player.can_enter_ganons;
	Location_Obtain.ganons_shadowTrial1 = Player.can_enter_ganons && ((Player.bow && Player.fire_arrows && Player.magic) || Player.hookshot || Player.hover_boots || Player.time);
	Location_Obtain.ganons_shadowTrial2 = Player.can_enter_ganons && ((Player.bow && Player.fire_arrows && Player.magic) || (Player.longshot && (Player.hover_boots || Player.can_use_dins)));
	Location_Obtain.ganons_bossKey = Player.can_enter_ganons;
	Location_Obtain.gtg_lobbyLeft = Player.can_save_carpenters && Player.bow;
	Location_Obtain.gtg_lobbyRight = Player.can_save_carpenters && Player.bow;
	Location_Obtain.gtg_stalfos = Player.can_save_carpenters;
	Location_Obtain.gtg_wolfos= Player.can_save_carpenters;
	Location_Obtain.gtg_silvers1 = Player.can_save_carpenters && Player.can_climb_gtg_hole && Player.silver_gauntlets ;//&& Player.can_see ;
	Location_Obtain.gtg_silvers2 = Player.can_save_carpenters && Player.can_climb_gtg_hole && Player.silver_gauntlets ;//&& Player.can_see ;
	Location_Obtain.gtg_silvers3 = Player.can_save_carpenters && Player.can_climb_gtg_hole && Player.silver_gauntlets ;//&& Player.can_see ;
	Location_Obtain.gtg_silvers4 = Player.can_save_carpenters && Player.can_climb_gtg_hole && Player.silver_gauntlets ;//&& Player.can_see ;
	Location_Obtain.gtg_eyes = Player.can_save_carpenters && Player.can_climb_gtg_hole && Player.bow;  //((Player.bomb_bag || Player.current_gtg_keys == 9) && Player.hammer));
	Location_Obtain.gtg_aboveEyes = Player.can_save_carpenters && Player.can_climb_gtg_hole && Player.bow;//&& Player.can_see;
	Location_Obtain.gtg_keese = Player.can_save_carpenters && Player.can_climb_gtg_hole;// && (Player.can_see || (Player.bomb_bag || Player.current_gtg_keys == 9)) ;
	Location_Obtain.gtg_flamesChest = Player.can_save_carpenters && Player.can_climb_gtg_hole/*&& Player.can_see*/;
	Location_Obtain.gtg_freestanding = Player.can_save_carpenters && (Player.current_gtg_keys >= 2 || ((Player.bomb_bag || Player.has_chus) && Player.time) || (Player.can_climb_gtg_hole /*&& Player.can_see*/ && Player.time));
	Location_Obtain.gtg_right2 = Player.can_save_carpenters && (Player.current_gtg_keys >= 2 || ((Player.bomb_bag || Player.has_chus) && Player.time) || (Player.can_climb_gtg_hole /*&& Player.can_see*/ && Player.time));
	Location_Obtain.gtg_right3 = Player.can_save_carpenters && (Player.current_gtg_keys >= 2 || ((Player.bomb_bag || Player.has_chus) && Player.time) || (Player.can_climb_gtg_hole /*&& Player.can_see*/ && Player.time));
	Location_Obtain.gtg_beamos = Player.can_save_carpenters && (Player.bomb_bag || Player.has_chus);
	Location_Obtain.gtg_left1 = Player.can_save_carpenters && Player.current_gtg_keys >= 1 ;//&& Player.can_see;
	Location_Obtain.gtg_left2 = Player.can_save_carpenters && Player.current_gtg_keys >= 2;
	Location_Obtain.gtg_left3 = Player.can_save_carpenters && Player.current_gtg_keys >= 4;
	Location_Obtain.gtg_left4 = Player.can_save_carpenters && Player.current_gtg_keys >= 5;
	Location_Obtain.gtg_final = Player.can_save_carpenters && Player.current_gtg_keys >= 7;
	Location_Obtain.gtg_toilet = Player.can_save_carpenters && Player.iron_boots && Player.time && Player.hookshot /*&& Player.can_see*/;
	Location_Obtain.well_fakeRight = Player.storms ;//&& Player.can_see;
	Location_Obtain.well_backBombable = Player.storms && (Player.bomb_bag || Player.has_chus);
	Location_Obtain.well_waterLeft = Player.storms && Player.lullaby;
	Location_Obtain.well_coffin = Player.storms;
	Location_Obtain.well_centerSmall = Player.storms ;//&& Player.can_see;
	Location_Obtain.well_centerBig = Player.storms ;//&& Player.can_see;
	Location_Obtain.well_frontBombable = Player.storms && (Player.bomb_bag || Player.has_chus);
	Location_Obtain.well_deadHand = Player.storms && Player.lullaby ;//&& Player.kokiri_sword;
	Location_Obtain.well_invisible = Player.storms && Player.lullaby ;//&& Player.can_see ;
	Location_Obtain.well_waterFront = Player.storms && Player.lullaby;
	Location_Obtain.well_fakeLeft = Player.storms ;//&& Player.can_see;
	Location_Obtain.well_locked1 = Player.storms && Player.current_well_keys >= 1;//&& Player.can_see ;
	Location_Obtain.well_locked2 = Player.storms && Player.current_well_keys >= 1;//&& Player.can_see ;
	Location_Obtain.well_basement = Player.storms && ((Player.bomb_bag || Player.has_chus) || (((/*Player.can_see &&*/ Player.current_well_keys >= 1) || Player.can_use_dins) && Player.goron_bracelet));
	Location_Obtain.zeldasSpot = true;
	Location_Obtain.eponasSpot = true;
	Location_Obtain.sariasSpot = true;
	Location_Obtain.stormsSpot = true;
	Location_Obtain.sunsSpot = Player.lullaby;
	Location_Obtain.boleroSpot = Player.can_enter_fire_temple;
	Location_Obtain.minuetSpot = true;
	Location_Obtain.requiemSpot = Player.can_enter_colossus;
	Location_Obtain.serenadeSpot = Player.ice_access && Player.can_use_bottle;
	Location_Obtain.preludeSpot = Player.forest;
	Location_Obtain.nocturneSpot = Player.forest && Player.fire && Player.water;
	Location_Obtain.oot = Player.emerald && Player.ruby && Player.sapphire;
	Location_Obtain.scrub_dodongos_1 = Player.can_enter_dodongos;
	Location_Obtain.scrub_dodongos_2 = Player.can_enter_dodongos;
	Location_Obtain.scrub_dodongos_3 = Player.bomb_bag;
	Location_Obtain.scrub_dodongos_4 = Player.bomb_bag;
	Location_Obtain.scrub_jabu = Player.can_enter_jabu;
	Location_Obtain.scrub_ganons_1 = Player.can_enter_ganons;
	Location_Obtain.scrub_ganons_2 = Player.can_enter_ganons;
	Location_Obtain.scrub_ganons_3 = Player.can_enter_ganons;
	Location_Obtain.scrub_ganons_4 = Player.can_enter_ganons;
	Location_Obtain.scrub_river_1 = Player.storms;
	Location_Obtain.scrub_river_2 = Player.storms;
	Location_Obtain.scrub_sfm_1 = Player.storms;
	Location_Obtain.scrub_sfm_2 = Player.storms;
	Location_Obtain.scrub_lake_1 = true;
	Location_Obtain.scrub_lake_2 = true;
	Location_Obtain.scrub_lake_3 = true;
	Location_Obtain.scrub_lw_1 = true;
	Location_Obtain.scrub_lw_2 = true;
	Location_Obtain.scrub_lw_3 = Player.can_blast_or_smash;
	Location_Obtain.scrub_colossus_1 = Player.silver_gauntlets;
	Location_Obtain.scrub_colossus_2 = Player.silver_gauntlets;
	Location_Obtain.scrub_crater_1 = Player.hammer;
	Location_Obtain.scrub_crater_2 = Player.hammer;
	Location_Obtain.scrub_crater_3 = Player.hammer;
	Location_Obtain.scrub_goron_1 = Player.time || (Player.can_wear_goron_tunic && Player.hookshot);
	Location_Obtain.scrub_goron_2 = Player.time || (Player.can_wear_goron_tunic && Player.hookshot);
	Location_Obtain.scrub_goron_3 = Player.time || (Player.can_wear_goron_tunic && Player.hookshot);
	Location_Obtain.scrub_ranch_1 = true;
	Location_Obtain.scrub_ranch_2 = true;
	Location_Obtain.scrub_ranch_3 = true;
	Location_Obtain.scrub_gv_1 = Player.fortress_access && Player.storms;
	Location_Obtain.scrub_gv_2 = Player.fortress_access && Player.storms;
	Location_Obtain.shop_kokiri_TL = true;
	Location_Obtain.shop_kokiri_TR = true;
	Location_Obtain.shop_kokiri_BR = true;
	Location_Obtain.shop_kokiri_BL = true;
	Location_Obtain.shop_market_bazaar_TL = true;
	Location_Obtain.shop_market_bazaar_TR = true;
	Location_Obtain.shop_market_bazaar_BR = true;
	Location_Obtain.shop_market_bazaar_BL = true;
	Location_Obtain.shop_market_potion_TL = true;
	Location_Obtain.shop_market_potion_TR = true;
	Location_Obtain.shop_market_potion_BR = true;
	Location_Obtain.shop_market_potion_BL = true;
	Location_Obtain.shop_market_chu_TL = true;
	Location_Obtain.shop_market_chu_TR = true;
	Location_Obtain.shop_market_chu_BR = true;
	Location_Obtain.shop_market_chu_BL = true;
	Location_Obtain.shop_kakariko_bazaar_TL = true;
	Location_Obtain.shop_kakariko_bazaar_TR = true;
	Location_Obtain.shop_kakariko_bazaar_BR = true;
	Location_Obtain.shop_kakariko_bazaar_BL = true;
	Location_Obtain.shop_kakariko_potion_TL = true;
	Location_Obtain.shop_kakariko_potion_TR = true;
	Location_Obtain.shop_kakariko_potion_BR = true;
	Location_Obtain.shop_kakariko_potion_BL = true;
	Location_Obtain.shop_goron_TL = Player.lullaby || Player.can_stop_link_the_goron || Player.bomb_bag || Player.can_use_dins || Player.has_chus;
	Location_Obtain.shop_goron_TR = Player.lullaby || Player.can_stop_link_the_goron || Player.bomb_bag || Player.can_use_dins || Player.has_chus;
	Location_Obtain.shop_goron_BR = Player.lullaby || Player.can_stop_link_the_goron || Player.bomb_bag || Player.can_use_dins || Player.has_chus;
	Location_Obtain.shop_goron_BL = Player.lullaby || Player.can_stop_link_the_goron || Player.bomb_bag || Player.can_use_dins || Player.has_chus;
	Location_Obtain.shop_domain_TL = (Player.bomb_bag && Player.lullaby) || Player.silver_scale || (Player.lullaby && ((Player.can_enter_ganons && Player.can_use_bottle) || Player.can_enter_jabu || (Player.giants_wallet && Player.can_use_bottle)));
	Location_Obtain.shop_domain_TR = (Player.bomb_bag && Player.lullaby) || Player.silver_scale || (Player.lullaby && ((Player.can_enter_ganons && Player.can_use_bottle) || Player.can_enter_jabu || (Player.giants_wallet && Player.can_use_bottle)));
	Location_Obtain.shop_domain_BR = (Player.bomb_bag && Player.lullaby) || Player.silver_scale || (Player.lullaby && ((Player.can_enter_ganons && Player.can_use_bottle) || Player.can_enter_jabu || (Player.giants_wallet && Player.can_use_bottle)));
	Location_Obtain.shop_domain_BL = (Player.bomb_bag && Player.lullaby) || Player.silver_scale || (Player.lullaby && ((Player.can_enter_ganons && Player.can_use_bottle) || Player.can_enter_jabu || (Player.giants_wallet && Player.can_use_bottle)));
	
	Location_Could_Access.kokiri_sword = true;
	Location_Could_Access.mido_1 = true;
	Location_Could_Access.mido_2 = true;
	Location_Could_Access.mido_3 = true;
	Location_Could_Access.mido_4 = true;
	Location_Could_Access.talons_chickens = true;
	Location_Could_Access.back_of_ranch = true;
	Location_Could_Access.hyrule_remote_grotto = CouldHave.can_blast_or_smash;
	Location_Could_Access.hyrule_open_grotto = true;
	Location_Could_Access.hyrule_hp_scrub = CouldHave.can_blast_or_smash;
	Location_Could_Access.hyrule_boulder_of_destiny = CouldHave.can_blast_or_smash;
	Location_Could_Access.hyrule_tektite_grotto = CouldHave.can_blast_or_smash && (CouldHave.golden_scale || CouldHave.iron_boots);
	Location_Could_Access.hyrule_ocarina = (CouldHave.emerald || Player.emerald || Location_Access.emerald_location) && (CouldHave.ruby || Player.ruby || Location_Access.ruby_location) && (CouldHave.sapphire || Player.sapphire || Location_Access.sapphire_location);
	Location_Could_Access.gerudovalley_box = true;
	Location_Could_Access.gerudovalley_fall = true;
	Location_Could_Access.hylia_child_fishing = true;
	Location_Could_Access.hylia_bottle = CouldHave.silver_scale;
	Location_Could_Access.hylia_adult_fishing = CouldHave.hookshot || CouldHave.child_can_enter_river || Spawn.adult_fishing;
	Location_Could_Access.hylia_lab_top = CouldHave.hookshot || CouldHave.child_can_enter_river;
	Location_Could_Access.hylia_lab_dive = CouldHave.golden_scale || (CouldHave.hookshot && CouldHave.iron_boots);
	Location_Could_Access.hylia_sun_shoot = CouldHave.bow && CouldHave.longshot;
	Location_Could_Access.market_slingshot_game = true;
	Location_Could_Access.richard = true;
	Location_Could_Access.market_bowling_1 = CouldHave.bomb_bag;
	Location_Could_Access.market_bowling_2 = CouldHave.bomb_bag;
	Location_Could_Access.market_lens_game = CouldHave.can_see;
	Location_Could_Access.poes= (CouldHave.bow && (CouldHave.can_use_bottle || CouldHave.can_enter_jabu)) || CouldHave.big_poe;
	Location_Could_Access.dins_fairy = (CouldHave.bomb_bag || Player.has_chus || Spawn.child_hyrule_fairy) && CouldHave.lullaby;
	Location_Could_Access.g_fairy = (CouldHave.golden_gauntlets || Spawn.adult_ogc) && CouldHave.lullaby;
	Location_Could_Access.lacs = (Player.gen1 || CouldHave.shadow_medallion || Location_Access.shadow_medallion_location) && (Player.gen2 || CouldHave.spirit_medallion || Location_Access.spirit_medallion_location);
	Location_Could_Access.river_pillar = true;
	Location_Could_Access.river_grotto = true;
	Location_Could_Access.river_ledge = true;
	Location_Could_Access.frogs_1 = CouldHave.child_can_enter_river && CouldHave.storms;
	Location_Could_Access.frogs_2 = CouldHave.child_can_enter_river && (CouldHave.storms && CouldHave.lullaby && CouldHave.eponas && CouldHave.sarias && CouldHave.suns && CouldHave.time);
	Location_Could_Access.zora_diving = CouldHave.child_can_enter_river;
	Location_Could_Access.zora_torches = CouldHave.child_can_enter_river;
	Location_Could_Access.lost_woods_fairy_ocarina = true;
	Location_Could_Access.ocarina_game = true;
	Location_Could_Access.lost_woods_grotto = CouldHave.can_blast_or_smash;
	Location_Could_Access.lost_woods_scrub_grotto = CouldHave.can_blast_or_smash;
	Location_Could_Access.wolfos_grotto = CouldHave.can_blast_or_smash;
	Location_Could_Access.bridge_scrub = true;
	Location_Could_Access.skull_kid = CouldHave.sarias;
	Location_Could_Access.target = CouldHave.slingshot;
	Location_Could_Access.theater = true;
	Location_Could_Access.kokiri_storms = CouldHave.storms;
	Location_Could_Access.rolling_goron = CouldHave.bomb_bag || Player.has_chus || CouldHave.goron_bracelet;
	Location_Could_Access.goron_pot = (CouldHave.bomb_bag || CouldHave.goron_bracelet || Player.has_chus) && (CouldHave.lullaby || CouldHave.can_use_dins || Spawn.child_lower_dmc || Spawn.child_lower_dmc_fairy);
	Location_Could_Access.goron_dance = (CouldHave.lullaby || Spawn.child_lower_dmc || Spawn.child_lower_dmc_fairy) && CouldHave.sarias;
	Location_Could_Access.goron_maze_1 = CouldHave.can_blast_or_smash || CouldHave.silver_gauntlets;
	Location_Could_Access.goron_maze_2 = CouldHave.can_blast_or_smash || CouldHave.silver_gauntlets;
	Location_Could_Access.goron_maze_3 = CouldHave.hammer || CouldHave.silver_gauntlets || ((CouldHave.bomb_bag || Player.has_chus) && CouldHave.hover_boots);
	Location_Could_Access.goron_link = CouldHave.can_stop_link_the_goron;
	Location_Could_Access.trail_bombable = CouldHave.can_blast_or_smash || CouldHave.goron_bracelet;
	Location_Could_Access.trail_dodongos_top = true;
	Location_Could_Access.trail_storms = CouldHave.storms;
	Location_Could_Access.crater_bean = (CouldHave.bolero && CouldHave.child_can_enter_river) || (CouldHave.crater_top && CouldHave.hover_boots);
	Location_Could_Access.crater_hammer_fairy = ((CouldHave.crater_by_city && CouldHave.hammer) || Spawn.child_lower_dmc_fairy  || Spawn.adult_lower_dmc_fairy  || Spawn.child_lower_dmc_fairy_ool  || Spawn.adult_lower_dmc_fairy_ool) && CouldHave.lullaby;
	Location_Could_Access.crater_nook_hp = CouldHave.crater_top || Spawn.child_upper_dmc;
	Location_Could_Access.crater_grotto = CouldHave.can_blast_or_smash;
	Location_Could_Access.trail_fairy = (CouldHave.can_blast_or_smash || Spawn.child_dmt_fairy  || Spawn.adult_dmt_fairy || Spawn.child_dmt_fairy_ool || Spawn.adult_dmt_fairy_ool) && CouldHave.lullaby;
	Location_Could_Access.trade_quest = (((Location_Could_Access.thaw_king || (CouldHave.giants_wallet && CouldHave.lullaby && (CouldHave.can_use_bottle || CouldHave.can_enter_jabu))) && CouldHave.prescription) || CouldHave.claim_check) && CouldHave.crater_top;
	Location_Could_Access.gerudo_hammer = CouldHave.fortress_access && CouldHave.hammer;
	Location_Could_Access.gerudo_roof = CouldHave.fortress_access && (CouldHave.hookshot || CouldHave.hover_boots);
	Location_Could_Access.gerudo_archery_1 = CouldHave.eponas && CouldHave.bow;
	Location_Could_Access.gerudo_archery_2 = CouldHave.eponas && CouldHave.bow;
	Location_Could_Access.wasteland = (CouldHave.can_cross_quicksand || CouldHave.requiem) && CouldHave.can_use_fire;
	Location_Could_Access.colossus_fairy = CouldHave.can_enter_colossus && (CouldHave.bomb_bag || Player.has_chus) && CouldHave.lullaby;
	Location_Could_Access.colossus_bean = CouldHave.requiem && CouldHave.child_can_enter_river;
	Location_Could_Access.man_on_roof = true;//CouldHave.hookshot;
	Location_Could_Access.kakariko_grotto = true;
	Location_Could_Access.windmill = true;//CouldHave.boomerang || CouldHave.time;
	Location_Could_Access.anju = true;
	Location_Could_Access.cow_house = true;
	Location_Could_Access.redead_grotto = CouldHave.can_blast_or_smash;
	Location_Could_Access.archery_game = CouldHave.bow;
	Location_Could_Access.anjus_chickens = true;
	Location_Could_Access.tokens_10 = Logic.gold_skulltulas >= 10 || Player.tokens >= 10; //these are temporary because access logic for skulls isn't done yet
	Location_Could_Access.tokens_20 = Logic.gold_skulltulas >= 20 || Player.tokens >= 20;
	Location_Could_Access.tokens_30 = Logic.gold_skulltulas >= 30 || Player.tokens >= 30;
	Location_Could_Access.tokens_40 = Logic.gold_skulltulas >= 40 || Player.tokens >= 40;
	Location_Could_Access.tokens_50 = Logic.gold_skulltulas >= 50 || Player.tokens >= 50;
	Location_Could_Access.gravedigging_tour = true;
	Location_Could_Access.graveyard_box = CouldHave.child_can_enter_river || CouldHave.longshot || CouldHave.boomerang;
	Location_Could_Access.shield_grave = true;
	Location_Could_Access.redead_grave = CouldHave.suns;
	Location_Could_Access.composers_grave = CouldHave.lullaby;
	Location_Could_Access.race_1 = true;
	Location_Could_Access.race_2 = true;
	Location_Could_Access.deku_lobby = CouldHave.deku_access;
	Location_Could_Access.deku_slingshot = CouldHave.deku_access;
	Location_Could_Access.deku_slingshot_room_side = CouldHave.deku_access;
	Location_Could_Access.deku_compass = CouldHave.deku_access;
	Location_Could_Access.deku_compass_room_side = CouldHave.deku_access;
	Location_Could_Access.deku_basement = CouldHave.deku_access;
	Location_Could_Access.deku_queen_gohma = CouldHave.deku_access;
	Location_Could_Access.dodongos_map = CouldHave.can_enter_dodongos;
	Location_Could_Access.dodongos_compass = CouldHave.can_enter_dodongos;
	Location_Could_Access.dodongos_bomb_flower_platform = CouldHave.dodongos_climb;
	Location_Could_Access.dodongos_bomb_bag = CouldHave.dodongos_climb;
	Location_Could_Access.dodongos_end_of_bridge = (CouldHave.dodongos_climb && CouldHave.can_blast_or_smash)
	Location_Could_Access.dodongos_above_king = CouldHave.dodongos_climb && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Access.dodongos_king_dodongo = CouldHave.dodongos_climb && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Access.jabu_boomerang = CouldHave.can_enter_jabu && (CouldHave.boomerang || CouldHave.bomb_bag || CouldHave.slingshot || Player.has_chus);
	Location_Could_Access.jabu_map = CouldHave.can_enter_jabu && CouldHave.boomerang;
	Location_Could_Access.jabu_compass = CouldHave.can_enter_jabu && CouldHave.boomerang;
	Location_Could_Access.jabu_barinade = CouldHave.can_enter_jabu && CouldHave.boomerang;
	Location_Could_Access.fountain_fairy = CouldHave.ice_access && (CouldHave.bomb_bag|| Player.has_chus || (CouldHave.hammer && CouldHave.silver_gauntlets)) && CouldHave.lullaby;
	Location_Could_Access.ice_glacier_hp = CouldHave.ice_access;
	Location_Could_Access.ice_map = CouldHave.ice_access && CouldHave.can_use_bottle;
	Location_Could_Access.ice_hp = CouldHave.ice_access && CouldHave.can_use_bottle;
	Location_Could_Access.ice_compass = CouldHave.ice_access && CouldHave.can_use_bottle;
	Location_Could_Access.ice_irons = CouldHave.ice_access && CouldHave.can_use_bottle;
	Location_Could_Access.ice_bottom_of_fountain = CouldHave.ice_access && CouldHave.iron_boots;
	Location_Could_Access.thaw_king = (CouldHave.ice_access && CouldHave.can_use_bottle) || (CouldHave.can_use_bottle && CouldHave.giants_wallet && (CouldHave.lullaby || CouldHave.hover_boots || Spawn.adult_zd));
	Location_Could_Access.forest_first = CouldHave.hookshot;
	Location_Could_Access.forest_stalfos = CouldHave.hookshot;
	Location_Could_Access.forest_midCourtyard = CouldHave.hookshot && (CouldHave.time || CouldHave.bow || ((CouldHave.hover_boots || CouldHave.goron_bracelet) && CouldHave.current_forest_keys>=1));
	Location_Could_Access.forest_highCourtyard = CouldHave.hookshot && (CouldHave.time || ((CouldHave.hover_boots || CouldHave.goron_bracelet) && CouldHave.current_forest_keys>=1) || (CouldHave.bow/* && (CouldHave.iron_boots || CouldHave.golden_scale || CouldHave.longshot)*/));
	Location_Could_Access.forest_lowCourtyard = CouldHave.hookshot && (CouldHave.time || ((CouldHave.hover_boots || CouldHave.goron_bracelet) && CouldHave.current_forest_keys>=1) || (CouldHave.bow/* && (CouldHave.iron_boots || CouldHave.golden_scale || CouldHave.longshot)*/));
	Location_Could_Access.forest_blockRoom = CouldHave.hookshot && CouldHave.current_forest_keys >= 1 && CouldHave.bow && CouldHave.goron_bracelet;
	Location_Could_Access.forest_bossKey = CouldHave.hookshot && CouldHave.current_forest_keys >= 2 && CouldHave.bow && CouldHave.goron_bracelet;
	Location_Could_Access.forest_floormaster = CouldHave.hookshot && ((CouldHave.bow && CouldHave.goron_bracelet && CouldHave.current_forest_keys >=2) || ((CouldHave.hover_boots || CouldHave.goron_bracelet) && CouldHave.current_forest_keys >=1));
	Location_Could_Access.forest_red = CouldHave.hookshot && CouldHave.goron_bracelet && CouldHave.bow && CouldHave.current_forest_keys>=3;
	Location_Could_Access.forest_bow = CouldHave.hookshot && CouldHave.goron_bracelet && CouldHave.current_forest_keys>=3;
	Location_Could_Access.forest_blue = CouldHave.hookshot && CouldHave.goron_bracelet && CouldHave.bow && CouldHave.current_forest_keys>=3;
	Location_Could_Access.forest_fallingCeiling = CouldHave.hookshot && CouldHave.goron_bracelet && (CouldHave.bow || CouldHave.can_use_dins) && CouldHave.current_forest_keys>=5;
	Location_Could_Access.forest_nearBoss = CouldHave.hookshot && CouldHave.goron_bracelet && CouldHave.bow && CouldHave.current_forest_keys>=5;
	Location_Could_Access.forest_phantomGanon = CouldHave.hookshot && CouldHave.goron_bracelet && CouldHave.bow && CouldHave.current_forest_keys>=5 && CouldHave.forest_boss_key;
	Location_Could_Access.fire_nearBoss = CouldHave.can_enter_fire_temple;
	Location_Could_Access.fire_hammer1 = CouldHave.can_enter_fire_temple && CouldHave.hammer;
	Location_Could_Access.fire_hammer2 = CouldHave.can_enter_fire_temple && CouldHave.hammer;
	Location_Could_Access.fire_lavaOpen = CouldHave.can_enter_fire_temple && CouldHave.current_fire_keys >=1;
	Location_Could_Access.fire_lavaBomb = CouldHave.can_enter_fire_temple && CouldHave.current_fire_keys >=1 && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Access.fire_volvagia = CouldHave.can_enter_fire_temple && CouldHave.fire_boss_key && CouldHave.hammer;
	Location_Could_Access.fire_lowerMaze = CouldHave.can_climb_fire_temple;
	Location_Could_Access.fire_sideRoom = CouldHave.can_climb_fire_temple;
	Location_Could_Access.fire_map = CouldHave.can_climb_fire_temple && ((CouldHave.current_fire_keys >= 4 && CouldHave.bow) || CouldHave.current_fire_keys>=5);
	Location_Could_Access.fire_upperMaze = CouldHave.can_climb_fire_temple && CouldHave.current_fire_keys>=5;
	Location_Could_Access.fire_shortcut = CouldHave.can_climb_fire_temple && CouldHave.current_fire_keys>=5 && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Access.fire_scarecrow = CouldHave.can_climb_fire_temple && CouldHave.current_fire_keys>=5 && CouldHave.hookshot;
	Location_Could_Access.fire_compass = CouldHave.can_climb_fire_temple && CouldHave.current_fire_keys>=6;
	Location_Could_Access.fire_sotGoron = CouldHave.can_climb_fire_temple && (CouldHave.current_fire_keys>=7 || (CouldHave.current_fire_keys>=6)) && CouldHave.hammer && (CouldHave.time || CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Access.fire_top = CouldHave.can_climb_fire_temple && (CouldHave.current_fire_keys>=7 || (CouldHave.current_fire_keys >= 6)) && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Access.water_compass = CouldHave.can_enter_water && (CouldHave.lullaby || CouldHave.iron_boots);
	Location_Could_Access.water_map = CouldHave.can_enter_water;
	Location_Could_Access.water_cracked = CouldHave.can_enter_water && (CouldHave.lullaby || (CouldHave.iron_boots && Player.has_chus || CouldHave.bomb_bag)) && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Access.water_torches = CouldHave.can_enter_water && CouldHave.lullaby && (CouldHave.bow || CouldHave.can_use_dins);
	Location_Could_Access.water_block = CouldHave.can_enter_water && CouldHave.lullaby && ((CouldHave.bow || (CouldHave.hover_boots && CouldHave.bomb_bag)) && CouldHave.goron_bracelet);
	Location_Could_Access.water_pillar = CouldHave.middle_water && CouldHave.iron_boots;
	Location_Could_Access.water_dLink = CouldHave.current_water_keys >= 2;
	Location_Could_Access.water_river = CouldHave.current_water_keys >= 2 && CouldHave.time && CouldHave.bow;
	Location_Could_Access.water_dragon = CouldHave.can_enter_water && ((CouldHave.current_water_keys >= 2 && CouldHave.time && CouldHave.bow) || (CouldHave.goron_bracelet && CouldHave.lullaby && (CouldHave.iron_boots || Player.has_chus || CouldHave.bomb_bag)));
	Location_Could_Access.water_bossKey = CouldHave.can_enter_water && (CouldHave.lullaby || CouldHave.iron_boots) && (CouldHave.longshot || CouldHave.hover_boots) && CouldHave.current_water_keys >= 2;
	Location_Could_Access.water_morpha = CouldHave.can_enter_water && CouldHave.water_boss_key && CouldHave.longshot ;
	Location_Could_Access.spirit_childLeft = CouldHave.requiem && (CouldHave.slingshot || CouldHave.boomerang || Player.has_chus || Player.bomb_bag);
	Location_Could_Access.spirit_childRight = CouldHave.requiem && (CouldHave.slingshot || CouldHave.boomerang || Player.has_chus || Player.bomb_bag);
	Location_Could_Access.spirit_childClimb1 = CouldHave.current_spirit_keys >= 1 && ((CouldHave.projectile_child && CouldHave.requiem) || (CouldHave.projectile_adult && CouldHave.silver_gauntlets));
	Location_Could_Access.spirit_childClimb2 = CouldHave.current_spirit_keys >= 1 && ((CouldHave.projectile_child && CouldHave.requiem) || (CouldHave.projectile_adult && CouldHave.silver_gauntlets));
	Location_Could_Access.spirit_map = CouldHave.current_spirit_keys >= 1 && ((CouldHave.requiem && (CouldHave.bomb_bag || Player.has_chus)) || (((CouldHave.can_use_fire || CouldHave.bow) && CouldHave.silver_gauntlets)));
	Location_Could_Access.spirit_sunRoom = CouldHave.current_spirit_keys >= 1 && ((CouldHave.requiem && (CouldHave.bomb_bag || Player.has_chus)) || (((CouldHave.can_use_fire || CouldHave.bow) && CouldHave.silver_gauntlets)));
	Location_Could_Access.spirit_rightHand = CouldHave.current_spirit_keys >= 2;
	Location_Could_Access.spirit_adultLeft = CouldHave.can_enter_adult_spirit && CouldHave.hookshot && CouldHave.lullaby;
	Location_Could_Access.spirit_adultRight = CouldHave.can_enter_adult_spirit && (CouldHave.bow || CouldHave.hookshot || (CouldHave.bomb_bag || Player.has_chus));
	Location_Could_Access.spirit_rotatingMirror1 = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=1;
	Location_Could_Access.spirit_rotatingMirror2 = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=1;
	Location_Could_Access.spirit_lullabyHand = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=1 && CouldHave.lullaby;
	Location_Could_Access.spirit_lullabyHigh = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=1 && CouldHave.lullaby && (CouldHave.hookshot || CouldHave.hover_boots);
	Location_Could_Access.spirit_nearFourArmos = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=2 && (CouldHave.bomb_bag || Player.has_chus) && CouldHave.mirror_shield;
	Location_Could_Access.spirit_invisible1 = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=2 && (CouldHave.bomb_bag || Player.has_chus) ;//&& CouldHave.can_see;
	Location_Could_Access.spirit_invisible2 = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=2 && (CouldHave.bomb_bag || Player.has_chus) ;//&& CouldHave.can_see;
	Location_Could_Access.spirit_leftHand = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=2 && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Access.spirit_bossKey = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=3 && CouldHave.bow && CouldHave.lullaby && CouldHave.hookshot;
	Location_Could_Access.spirit_tippyTop = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=3 && CouldHave.mirror_shield;
	Location_Could_Access.spirit_twinrova = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=3 && CouldHave.mirror_shield && (CouldHave.bomb_bag || Player.has_chus) && CouldHave.spirit_boss_key && CouldHave.hookshot;
	Location_Could_Access.shadow_map = CouldHave.can_enter_shadow;
	Location_Could_Access.shadow_hovers = CouldHave.can_enter_shadow;
	Location_Could_Access.shadow_compass = CouldHave.can_cross_shadow_gap;
	Location_Could_Access.shadow_earlySilvers = CouldHave.can_cross_shadow_gap;
	Location_Could_Access.shadow_spinning1 = CouldHave.can_bomb_shadow_wall;
	Location_Could_Access.shadow_spinning2 = CouldHave.can_bomb_shadow_wall;
	Location_Could_Access.shadow_spikesLower = CouldHave.can_bomb_shadow_wall;
	Location_Could_Access.shadow_spikesUpper = CouldHave.can_bomb_shadow_wall;
	Location_Could_Access.shadow_spikesSwitch = CouldHave.can_bomb_shadow_wall;
	Location_Could_Access.shadow_redeadSilvers = CouldHave.can_bomb_shadow_wall && CouldHave.current_shadow_keys >=2;
	Location_Could_Access.shadow_pot = CouldHave.can_bomb_shadow_wall && CouldHave.hookshot && CouldHave.current_shadow_keys >=2;
	Location_Could_Access.shadow_wind = CouldHave.can_pass_shadow_hookshot_door && CouldHave.current_shadow_keys >=3;
	Location_Could_Access.shadow_bombable = CouldHave.can_pass_shadow_hookshot_door && CouldHave.current_shadow_keys >=3;
	Location_Could_Access.shadow_gibdos = CouldHave.can_pass_shadow_hookshot_door && CouldHave.current_shadow_keys >=3;
	Location_Could_Access.shadow_dins1 = CouldHave.can_ride_shadow_boat && CouldHave.can_use_dins && CouldHave.current_shadow_keys >=4;
	Location_Could_Access.shadow_dins2 = CouldHave.can_ride_shadow_boat && CouldHave.can_use_dins && CouldHave.current_shadow_keys >=4;
	Location_Could_Access.shadow_floormaster = CouldHave.can_ride_shadow_boat && CouldHave.current_shadow_keys >=4;
	Location_Could_Access.shadow_bongo = CouldHave.can_beat_shadow_boss && CouldHave.current_shadow_keys >=5;
	Location_Could_Access.ganons_lightTrial1 = CouldHave.can_enter_ganons && CouldHave.golden_gauntlets;
	Location_Could_Access.ganons_lightTrial2 = CouldHave.can_enter_ganons && CouldHave.golden_gauntlets;
	Location_Could_Access.ganons_lightTrial3 = CouldHave.can_enter_ganons && CouldHave.golden_gauntlets;
	Location_Could_Access.ganons_lightTrial4 = CouldHave.can_enter_ganons && CouldHave.golden_gauntlets;
	Location_Could_Access.ganons_lightTrial5 = CouldHave.can_enter_ganons && CouldHave.golden_gauntlets;
	Location_Could_Access.ganons_lightTrial6 = CouldHave.can_enter_ganons && CouldHave.golden_gauntlets;
	Location_Could_Access.ganons_lightTrial7 = CouldHave.can_enter_ganons && CouldHave.golden_gauntlets ;//&& CouldHave.can_see;
	Location_Could_Access.ganons_lightTrialLullaby = CouldHave.can_enter_ganons && CouldHave.golden_gauntlets && CouldHave.lullaby && CouldHave.current_ganons_keys >= 1;
	Location_Could_Access.ganons_spiritTrial1 = CouldHave.can_enter_ganons;
	Location_Could_Access.ganons_spiritTrial2 = CouldHave.can_enter_ganons && (CouldHave.bomb_bag || Player.has_chus || CouldHave.bow);//&& CouldHave.can_see;
	Location_Could_Access.ganons_forestTrial = CouldHave.can_enter_ganons;
	Location_Could_Access.ganons_waterTrial1 = CouldHave.can_enter_ganons;
	Location_Could_Access.ganons_waterTrial2 = CouldHave.can_enter_ganons;
	Location_Could_Access.ganons_shadowTrial1 = CouldHave.can_enter_ganons && ((CouldHave.bow && CouldHave.fire_arrows && CouldHave.magic) || CouldHave.hookshot || CouldHave.hover_boots || CouldHave.time);
	Location_Could_Access.ganons_shadowTrial2 = CouldHave.can_enter_ganons && ((CouldHave.bow && CouldHave.fire_arrows && CouldHave.magic) || (CouldHave.longshot && (CouldHave.hover_boots || CouldHave.can_use_dins)));
	Location_Could_Access.ganons_bossKey = CouldHave.can_enter_ganons;
	Location_Could_Access.gtg_lobbyLeft = CouldHave.can_save_carpenters && CouldHave.bow;
	Location_Could_Access.gtg_lobbyRight = CouldHave.can_save_carpenters && CouldHave.bow;
	Location_Could_Access.gtg_stalfos = CouldHave.can_save_carpenters;
	Location_Could_Access.gtg_wolfos= CouldHave.can_save_carpenters;
	Location_Could_Access.gtg_silvers1 = CouldHave.can_save_carpenters && CouldHave.can_climb_gtg_hole && CouldHave.silver_gauntlets ;//&& CouldHave.can_see ;
	Location_Could_Access.gtg_silvers2 = CouldHave.can_save_carpenters && CouldHave.can_climb_gtg_hole && CouldHave.silver_gauntlets ;//&& CouldHave.can_see ;
	Location_Could_Access.gtg_silvers3 = CouldHave.can_save_carpenters && CouldHave.can_climb_gtg_hole && CouldHave.silver_gauntlets ;//&& CouldHave.can_see ;
	Location_Could_Access.gtg_silvers4 = CouldHave.can_save_carpenters && CouldHave.can_climb_gtg_hole && CouldHave.silver_gauntlets ;//&& CouldHave.can_see ;
	Location_Could_Access.gtg_eyes = CouldHave.can_save_carpenters && CouldHave.can_climb_gtg_hole && CouldHave.bow;  //((CouldHave.bomb_bag || CouldHave.current_gtg_keys == 9) && CouldHave.hammer));
	Location_Could_Access.gtg_aboveEyes = CouldHave.can_save_carpenters && CouldHave.can_climb_gtg_hole && CouldHave.bow;//&& CouldHave.can_see;
	Location_Could_Access.gtg_keese = CouldHave.can_save_carpenters && CouldHave.can_climb_gtg_hole;// && (CouldHave.can_see || (CouldHave.bomb_bag || CouldHave.current_gtg_keys == 9)) ;
	Location_Could_Access.gtg_flamesChest = CouldHave.can_save_carpenters && CouldHave.can_climb_gtg_hole/*&& CouldHave.can_see*/;
	Location_Could_Access.gtg_freestanding = CouldHave.can_save_carpenters && (CouldHave.current_gtg_keys >= 2 || ((CouldHave.bomb_bag || Player.has_chus) && CouldHave.time) || (CouldHave.can_climb_gtg_hole /*&& CouldHave.can_see*/ && CouldHave.time));
	Location_Could_Access.gtg_right2 = CouldHave.can_save_carpenters && (CouldHave.current_gtg_keys >= 2 || ((CouldHave.bomb_bag || Player.has_chus) && CouldHave.time) || (CouldHave.can_climb_gtg_hole /*&& CouldHave.can_see*/ && CouldHave.time));
	Location_Could_Access.gtg_right3 = CouldHave.can_save_carpenters && (CouldHave.current_gtg_keys >= 2 || ((CouldHave.bomb_bag || Player.has_chus) && CouldHave.time) || (CouldHave.can_climb_gtg_hole /*&& CouldHave.can_see*/ && CouldHave.time));
	Location_Could_Access.gtg_beamos = CouldHave.can_save_carpenters && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Access.gtg_left1 = CouldHave.can_save_carpenters && CouldHave.current_gtg_keys >= 1 ;//&& CouldHave.can_see;
	Location_Could_Access.gtg_left2 = CouldHave.can_save_carpenters && CouldHave.current_gtg_keys >= 2;
	Location_Could_Access.gtg_left3 = CouldHave.can_save_carpenters && CouldHave.current_gtg_keys >= 4;
	Location_Could_Access.gtg_left4 = CouldHave.can_save_carpenters && CouldHave.current_gtg_keys >= 5;
	Location_Could_Access.gtg_final = CouldHave.can_save_carpenters && CouldHave.current_gtg_keys >= 7;
	Location_Could_Access.gtg_toilet = CouldHave.can_save_carpenters && CouldHave.iron_boots && CouldHave.time && CouldHave.hookshot /*&& CouldHave.can_see*/;
	Location_Could_Access.well_fakeRight = CouldHave.storms ;//&& CouldHave.can_see;
	Location_Could_Access.well_backBombable = CouldHave.storms && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Access.well_waterLeft = CouldHave.storms && CouldHave.lullaby;
	Location_Could_Access.well_coffin = CouldHave.storms;
	Location_Could_Access.well_centerSmall = CouldHave.storms ;//&& CouldHave.can_see;
	Location_Could_Access.well_centerBig = CouldHave.storms ;//&& CouldHave.can_see;
	Location_Could_Access.well_frontBombable = CouldHave.storms && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Access.well_deadHand = CouldHave.storms && CouldHave.lullaby ;//&& CouldHave.kokiri_sword;
	Location_Could_Access.well_invisible = CouldHave.storms && CouldHave.lullaby ;//&& CouldHave.can_see ;
	Location_Could_Access.well_waterFront = CouldHave.storms && CouldHave.lullaby;
	Location_Could_Access.well_fakeLeft = CouldHave.storms ;//&& CouldHave.can_see;
	Location_Could_Access.well_locked1 = CouldHave.storms && CouldHave.current_well_keys >= 1;//&& CouldHave.can_see ;
	Location_Could_Access.well_locked2 = CouldHave.storms && CouldHave.current_well_keys >= 1;//&& CouldHave.can_see ;
	Location_Could_Access.well_basement = CouldHave.storms && ((CouldHave.bomb_bag || Player.has_chus) || (((/*CouldHave.can_see &&*/ CouldHave.current_well_keys >= 1) || CouldHave.can_use_dins) && CouldHave.goron_bracelet));
	Location_Could_Access.zeldasSpot = true;
	Location_Could_Access.eponasSpot = true;
	Location_Could_Access.sariasSpot = true;
	Location_Could_Access.stormsSpot = true;
	Location_Could_Access.sunsSpot = CouldHave.lullaby;
	Location_Could_Access.boleroSpot = CouldHave.can_enter_fire_temple;
	Location_Could_Access.minuetSpot = true;
	Location_Could_Access.requiemSpot = CouldHave.can_enter_colossus;
	Location_Could_Access.serenadeSpot = CouldHave.ice_access && CouldHave.can_use_bottle;
	Location_Could_Access.preludeSpot = CouldHave.forest || Player.forest || Location_Access.forest_medallion_location;
	Location_Could_Access.nocturneSpot = (CouldHave.forest || Player.forest || Location_Access.forest_medallion_location) && (CouldHave.fire || Player.fire || Location_Access.fire_medallion_location) && (CouldHave.water || Player.water || Location_Access.water_medallion_location);
	Location_Could_Access.oot = (CouldHave.emerald || Player.emerald || Location_Access.emerald_location) && (CouldHave.ruby || Player.ruby || Location_Access.ruby_location) && (CouldHave.sapphire || Player.sapphire || Location_Access.sapphire_location);
	Location_Could_Access.scrub_dodongos_1 = CouldHave.can_enter_dodongos;
	Location_Could_Access.scrub_dodongos_2 = CouldHave.can_enter_dodongos;
	Location_Could_Access.scrub_dodongos_3 = CouldHave.bomb_bag;
	Location_Could_Access.scrub_dodongos_4 = CouldHave.bomb_bag;
	Location_Could_Access.scrub_jabu = CouldHave.can_enter_jabu;
	Location_Could_Access.scrub_ganons_1 = CouldHave.can_enter_ganons;
	Location_Could_Access.scrub_ganons_2 = CouldHave.can_enter_ganons;
	Location_Could_Access.scrub_ganons_3 = CouldHave.can_enter_ganons;
	Location_Could_Access.scrub_ganons_4 = CouldHave.can_enter_ganons;
	Location_Could_Access.scrub_river_1 = CouldHave.storms;
	Location_Could_Access.scrub_river_2 = CouldHave.storms;
	Location_Could_Access.scrub_sfm_1 = CouldHave.storms;
	Location_Could_Access.scrub_sfm_2 = CouldHave.storms;
	Location_Could_Access.scrub_lake_1 = true;
	Location_Could_Access.scrub_lake_2 = true;
	Location_Could_Access.scrub_lake_3 = true;
	Location_Could_Access.scrub_lw_1 = true;
	Location_Could_Access.scrub_lw_2 = true;
	Location_Could_Access.scrub_lw_3 = CouldHave.can_blast_or_smash;
	Location_Could_Access.scrub_colossus_1 = CouldHave.silver_gauntlets;
	Location_Could_Access.scrub_colossus_2 = CouldHave.silver_gauntlets;
	Location_Could_Access.scrub_crater_1 = CouldHave.hammer;
	Location_Could_Access.scrub_crater_2 = CouldHave.hammer;
	Location_Could_Access.scrub_crater_3 = CouldHave.hammer;
	Location_Could_Access.scrub_goron_1 = CouldHave.time || (CouldHave.can_wear_goron_tunic && CouldHave.hookshot);
	Location_Could_Access.scrub_goron_2 = CouldHave.time || (CouldHave.can_wear_goron_tunic && CouldHave.hookshot);
	Location_Could_Access.scrub_goron_3 = CouldHave.time || (CouldHave.can_wear_goron_tunic && CouldHave.hookshot);
	Location_Could_Access.scrub_ranch_1 = true;
	Location_Could_Access.scrub_ranch_2 = true;
	Location_Could_Access.scrub_ranch_3 = true;
	Location_Could_Access.scrub_gv_1 = CouldHave.fortress_access && CouldHave.storms;
	Location_Could_Access.scrub_gv_2 = CouldHave.fortress_access && CouldHave.storms;
	Location_Could_Access.shop_kokiri_TL = true;
	Location_Could_Access.shop_kokiri_TR = true;
	Location_Could_Access.shop_kokiri_BR = true;
	Location_Could_Access.shop_kokiri_BL = true;
	Location_Could_Access.shop_market_bazaar_TL = true;
	Location_Could_Access.shop_market_bazaar_TR = true;
	Location_Could_Access.shop_market_bazaar_BR = true;
	Location_Could_Access.shop_market_bazaar_BL = true;
	Location_Could_Access.shop_market_potion_TL = true;
	Location_Could_Access.shop_market_potion_TR = true;
	Location_Could_Access.shop_market_potion_BR = true;
	Location_Could_Access.shop_market_potion_BL = true;
	Location_Could_Access.shop_market_chu_TL = true;
	Location_Could_Access.shop_market_chu_TR = true;
	Location_Could_Access.shop_market_chu_BR = true;
	Location_Could_Access.shop_market_chu_BL = true;
	Location_Could_Access.shop_kakariko_bazaar_TL = true;
	Location_Could_Access.shop_kakariko_bazaar_TR = true;
	Location_Could_Access.shop_kakariko_bazaar_BR = true;
	Location_Could_Access.shop_kakariko_bazaar_BL = true;
	Location_Could_Access.shop_kakariko_potion_TL = true;
	Location_Could_Access.shop_kakariko_potion_TR = true;
	Location_Could_Access.shop_kakariko_potion_BR = true;
	Location_Could_Access.shop_kakariko_potion_BL = true;
	Location_Could_Access.shop_goron_TL = CouldHave.lullaby || CouldHave.can_stop_link_the_goron || CouldHave.bomb_bag || CouldHave.can_use_dins || Player.has_chus;
	Location_Could_Access.shop_goron_TR = CouldHave.lullaby || CouldHave.can_stop_link_the_goron || CouldHave.bomb_bag || CouldHave.can_use_dins || Player.has_chus;
	Location_Could_Access.shop_goron_BR = CouldHave.lullaby || CouldHave.can_stop_link_the_goron || CouldHave.bomb_bag || CouldHave.can_use_dins || Player.has_chus;
	Location_Could_Access.shop_goron_BL = CouldHave.lullaby || CouldHave.can_stop_link_the_goron || CouldHave.bomb_bag || CouldHave.can_use_dins || Player.has_chus;
	Location_Could_Access.shop_domain_TL = (CouldHave.bomb_bag && CouldHave.lullaby) || CouldHave.silver_scale || (CouldHave.lullaby && ((CouldHave.can_enter_ganons && CouldHave.can_use_bottle) || CouldHave.can_enter_jabu || (CouldHave.giants_wallet && CouldHave.can_use_bottle)));
	Location_Could_Access.shop_domain_TR = (CouldHave.bomb_bag && CouldHave.lullaby) || CouldHave.silver_scale || (CouldHave.lullaby && ((CouldHave.can_enter_ganons && CouldHave.can_use_bottle) || CouldHave.can_enter_jabu || (CouldHave.giants_wallet && CouldHave.can_use_bottle)));
	Location_Could_Access.shop_domain_BR = (CouldHave.bomb_bag && CouldHave.lullaby) || CouldHave.silver_scale || (CouldHave.lullaby && ((CouldHave.can_enter_ganons && CouldHave.can_use_bottle) || CouldHave.can_enter_jabu || (CouldHave.giants_wallet && CouldHave.can_use_bottle)));
	Location_Could_Access.shop_domain_BL = (CouldHave.bomb_bag && CouldHave.lullaby) || CouldHave.silver_scale || (CouldHave.lullaby && ((CouldHave.can_enter_ganons && CouldHave.can_use_bottle) || CouldHave.can_enter_jabu || (CouldHave.giants_wallet && CouldHave.can_use_bottle)));

	Location_Access.kokiri_sword = true;
	Location_Access.mido_1 = true;
	Location_Access.mido_2 = true;
	Location_Access.mido_3 = true;
	Location_Access.mido_4 = true;
	Location_Access.talons_chickens = true;
	Location_Access.back_of_ranch = true;
	Location_Access.hyrule_remote_grotto = Player.can_blast_or_smash;
	Location_Access.hyrule_open_grotto = true;
	Location_Access.hyrule_hp_scrub = Player.can_blast_or_smash;
	Location_Access.hyrule_boulder_of_destiny = Player.can_blast_or_smash;
	Location_Access.hyrule_tektite_grotto = Player.can_blast_or_smash;
	Location_Access.hyrule_ocarina = Player.emerald && Player.ruby && Player.sapphire;
	Location_Access.gerudovalley_box = true;
	Location_Access.gerudovalley_fall = true;
	Location_Access.hylia_child_fishing = true;
	Location_Access.hylia_bottle = true;
	Location_Access.hylia_adult_fishing = Player.hookshot || Player.child_can_enter_river || Spawn.adult_fishing;
	Location_Access.hylia_lab_top = Player.hookshot || Player.child_can_enter_river;
	Location_Access.hylia_lab_dive = Player.golden_scale || (Player.hookshot && Player.iron_boots);
	Location_Access.hylia_sun_shoot = Player.bow;
	Location_Access.market_slingshot_game = true;
	Location_Access.richard = true;
	Location_Access.market_bowling_1 = Player.bomb_bag;
	Location_Access.market_bowling_2 = Player.bomb_bag;
	Location_Access.market_lens_game = Player.can_see;
	Location_Access.poes= (Player.bow && (Player.can_use_bottle || Player.can_enter_jabu)) || Player.big_poe;
	Location_Access.dins_fairy = (Player.bomb_bag || Player.has_chus || Spawn.child_hyrule_fairy) && Player.lullaby;
	Location_Access.g_fairy = (Player.golden_gauntlets || Spawn.adult_ogc) && Player.lullaby;
	Location_Access.lacs = Player.gen1 && Player.gen2;
	Location_Access.river_pillar = true;
	Location_Access.river_grotto = true;
	Location_Access.river_ledge = true;
	Location_Access.frogs_1 = Player.child_can_enter_river && Player.storms;
	Location_Access.frogs_2 = Player.child_can_enter_river && (Player.storms && Player.lullaby && Player.eponas && Player.sarias && Player.suns && Player.time);
	Location_Access.zora_diving = Player.child_can_enter_river;
	Location_Access.zora_torches = Player.child_can_enter_river;
	Location_Access.lost_woods_fairy_ocarina = true;
	Location_Access.ocarina_game = true;
	Location_Access.lost_woods_grotto = Player.can_blast_or_smash;
	Location_Access.lost_woods_scrub_grotto = Player.can_blast_or_smash;
	Location_Access.wolfos_grotto = Player.can_blast_or_smash;
	Location_Access.bridge_scrub = true;
	Location_Access.skull_kid = Player.sarias;
	Location_Access.target = Player.slingshot;
	Location_Access.theater = true;
	Location_Access.kokiri_storms = Player.storms;
	Location_Access.rolling_goron = Player.bomb_bag || Player.has_chus || Player.goron_bracelet;
	Location_Access.goron_pot = (Player.bomb_bag || Player.goron_bracelet || Player.has_chus) && (Player.lullaby || Player.can_use_dins || Spawn.child_lower_dmc || Spawn.child_lower_dmc_fairy);
	Location_Access.goron_dance = (Player.lullaby || Spawn.child_lower_dmc || Spawn.child_lower_dmc_fairy) && Player.sarias;
	Location_Access.goron_maze_1 = Player.can_blast_or_smash || Player.silver_gauntlets;
	Location_Access.goron_maze_2 = Player.can_blast_or_smash || Player.silver_gauntlets;
	Location_Access.goron_maze_3 = Player.hammer || Player.silver_gauntlets || ((Player.bomb_bag || Player.has_chus) && Player.hover_boots);
	Location_Access.goron_link = Player.can_stop_link_the_goron;
	Location_Access.trail_bombable = Player.can_blast_or_smash || Player.goron_bracelet;
	Location_Access.trail_dodongos_top = true;
	Location_Access.trail_storms = Player.storms;
	Location_Access.crater_bean = Player.bolero || Player.crater_top || Spawn.child_upper_dmc || Spawn.child_lower_dmc || Spawn.child_dmt_fairy || Spawn.child_lower_dmc_fairy || Spawn.adult_lower_dmc || Spawn.adult_lower_dmc_fairy || Spawn.adult_upper_dmc || Spawn.adult_lower_dmc_fairy;
	Location_Access.crater_hammer_fairy = ((Player.crater_by_city && Player.hammer) || (Spawn.child_lower_dmc_fairy || Spawn.adult_lower_dmc_fairy || Spawn.child_lower_dmc_fairy_ool || Spawn.adult_lower_dmc_fairy_ool)) && Player.lullaby;
	Location_Access.crater_nook_hp = Player.crater_top || Player.bolero || Spawn.child_upper_dmc || Spawn.child_lower_dmc || Spawn.child_dmt_fairy || Spawn.child_lower_dmc_fairy || Spawn.adult_lower_dmc || Spawn.adult_lower_dmc_fairy || Spawn.adult_upper_dmc || Spawn.adult_lower_dmc_fairy;
	Location_Access.crater_grotto = Player.can_blast_or_smash;
	Location_Access.trail_fairy = (Player.can_blast_or_smash || Spawn.child_dmt_fairy  || Spawn.adult_dmt_fairy || Spawn.child_dmt_fairy_ool || Spawn.adult_dmt_fairy_ool) && Player.lullaby;
	Location_Access.trade_quest = (((Location_Access.thaw_king || (Player.giants_wallet && Player.lullaby && (Player.can_use_bottle || Player.can_enter_jabu))) && Player.prescription) || Player.claim_check) && Player.crater_top;
	Location_Access.gerudo_hammer = Player.fortress_access && Player.hammer;
	Location_Access.gerudo_roof = Player.fortress_access && (Player.hookshot || Player.hover_boots);
	Location_Access.gerudo_archery_1 = Player.eponas && Player.bow;
	Location_Access.gerudo_archery_2 = Player.eponas && Player.bow;
	Location_Access.wasteland = (Player.can_cross_quicksand || Player.requiem) && Player.can_use_fire;
	Location_Access.colossus_fairy = Player.can_enter_colossus && (Player.bomb_bag || Player.has_chus) && Player.lullaby;
	Location_Access.colossus_bean = Player.can_enter_colossus;
	Location_Access.man_on_roof = true;//Player.hookshot;
	Location_Access.kakariko_grotto = true;
	Location_Access.windmill = true;//Player.boomerang || Player.time;
	Location_Access.anju = true;
	Location_Access.cow_house = true;
	Location_Access.redead_grotto = Player.can_blast_or_smash;
	Location_Access.archery_game = Player.bow;
	Location_Access.anjus_chickens = true;
	Location_Access.tokens_10 = Logic.gold_skulltulas >= 10 || Player.tokens >= 10; //these are temporary because access logic for skulls isn't done yet
	Location_Access.tokens_20 = Logic.gold_skulltulas >= 20 || Player.tokens >= 20;
	Location_Access.tokens_30 = Logic.gold_skulltulas >= 30 || Player.tokens >= 30;
	Location_Access.tokens_40 = Logic.gold_skulltulas >= 40 || Player.tokens >= 40;
	Location_Access.tokens_50 = Logic.gold_skulltulas >= 50 || Player.tokens >= 50;
	Location_Access.gravedigging_tour = true;
	Location_Access.graveyard_box = true;//Player.child_can_enter_river || Player.longshot || Player.boomerang;
	Location_Access.shield_grave = true;
	Location_Access.redead_grave = Player.suns;
	Location_Access.composers_grave = Player.lullaby;
	Location_Access.race_1 = true;
	Location_Access.race_2 = true;
	Location_Access.deku_lobby = Player.deku_access;
	Location_Access.deku_slingshot = Player.deku_access;
	Location_Access.deku_slingshot_room_side = Player.deku_access;
	Location_Access.deku_compass = Player.deku_access;
	Location_Access.deku_compass_room_side = Player.deku_access;
	Location_Access.deku_basement = Player.deku_access;
	Location_Access.deku_queen_gohma = Player.deku_access;
	Location_Access.dodongos_map = Player.can_enter_dodongos;
	Location_Access.dodongos_compass = Player.can_enter_dodongos;
	Location_Access.dodongos_bomb_flower_platform = Player.dodongos_climb;
	Location_Access.dodongos_bomb_bag = Player.dodongos_climb;
	Location_Access.dodongos_end_of_bridge = (Player.dodongos_climb && Player.can_blast_or_smash)
	Location_Access.dodongos_above_king = Player.dodongos_climb && (Player.bomb_bag || Player.has_chus);
	Location_Access.dodongos_king_dodongo = Player.dodongos_climb && (Player.bomb_bag || Player.has_chus);
	Location_Access.jabu_boomerang = Player.can_enter_jabu && (Player.boomerang || Player.bomb_bag || Player.slingshot || Player.has_chus);
	Location_Access.jabu_map = Player.can_enter_jabu && Player.boomerang;
	Location_Access.jabu_compass = Player.can_enter_jabu && Player.boomerang;
	Location_Access.jabu_barinade = Player.can_enter_jabu && Player.boomerang;
	Location_Access.fountain_fairy = Player.ice_access && (Player.bomb_bag|| Player.has_chus || (Player.hammer && Player.silver_gauntlets)) && Player.lullaby;
	Location_Access.ice_glacier_hp = Player.ice_access;
	Location_Access.ice_map = Player.ice_access && Player.can_use_bottle;
	Location_Access.ice_hp = Player.ice_access && Player.can_use_bottle;
	Location_Access.ice_compass = Player.ice_access && Player.can_use_bottle;
	Location_Access.ice_irons = Player.ice_access && Player.can_use_bottle;
	Location_Access.ice_bottom_of_fountain = Player.ice_access;
	Location_Access.thaw_king = (Player.ice_access && Player.can_use_bottle) || (Player.can_use_bottle && Player.giants_wallet && (Player.lullaby || Player.hover_boots || Spawn.adult_zd));
	Location_Access.forest_first = Player.hookshot;
	Location_Access.forest_stalfos = Player.hookshot;
	Location_Access.forest_midCourtyard = Player.hookshot && (Player.time || Player.bow || ((Player.hover_boots || Player.goron_bracelet) && Player.current_forest_keys>=1));
	Location_Access.forest_highCourtyard = Player.hookshot && (Player.time || ((Player.hover_boots || Player.goron_bracelet) && Player.current_forest_keys>=1) || (Player.bow/* && (Player.iron_boots || Player.golden_scale || Player.longshot)*/));
	Location_Access.forest_lowCourtyard = Player.hookshot && (Player.time || ((Player.hover_boots || Player.goron_bracelet) && Player.current_forest_keys>=1) || (Player.bow/* && (Player.iron_boots || Player.golden_scale || Player.longshot)*/));
	Location_Access.forest_blockRoom = Player.hookshot && Player.current_forest_keys >= 1 && Player.bow && Player.goron_bracelet;
	Location_Access.forest_bossKey = Player.hookshot && Player.current_forest_keys >= 2 && Player.bow && Player.goron_bracelet;
	Location_Access.forest_floormaster = Player.hookshot && ((Player.bow && Player.goron_bracelet && Player.current_forest_keys >=2) || ((Player.hover_boots || Player.goron_bracelet) && Player.current_forest_keys >=1));
	Location_Access.forest_red = Player.hookshot && Player.goron_bracelet && Player.bow && Player.current_forest_keys>=3;
	Location_Access.forest_bow = Player.hookshot && Player.goron_bracelet && Player.current_forest_keys>=3;
	Location_Access.forest_blue = Player.hookshot && Player.goron_bracelet && Player.bow && Player.current_forest_keys>=3;
	Location_Access.forest_fallingCeiling = Player.hookshot && Player.goron_bracelet && (Player.bow || Player.can_use_dins) && Player.current_forest_keys>=5;
	Location_Access.forest_nearBoss = Player.hookshot && Player.goron_bracelet && Player.bow && Player.current_forest_keys>=5;
	Location_Access.forest_phantomGanon = Player.hookshot && Player.goron_bracelet && Player.bow && Player.current_forest_keys>=5 && Player.forest_boss_key;
	Location_Access.fire_nearBoss = Player.can_enter_fire_temple;
	Location_Access.fire_hammer1 = Player.can_enter_fire_temple && Player.hammer;
	Location_Access.fire_hammer2 = Player.can_enter_fire_temple && Player.hammer;
	Location_Access.fire_lavaOpen = Player.can_enter_fire_temple && Player.current_fire_keys >=1;
	Location_Access.fire_lavaBomb = Player.can_enter_fire_temple && Player.current_fire_keys >=1 && (Player.bomb_bag || Player.has_chus);
	Location_Access.fire_volvagia = Player.can_enter_fire_temple && Player.fire_boss_key && Player.hammer;
	Location_Access.fire_lowerMaze = Player.can_climb_fire_temple;
	Location_Access.fire_sideRoom = Player.can_climb_fire_temple;
	Location_Access.fire_map = Player.can_climb_fire_temple && ((Player.current_fire_keys >= 4 && Player.bow) || Player.current_fire_keys>=5);
	Location_Access.fire_upperMaze = Player.can_climb_fire_temple && Player.current_fire_keys>=5;
	Location_Access.fire_shortcut = Player.can_climb_fire_temple && Player.current_fire_keys>=5 && (Player.bomb_bag || Player.has_chus);
	Location_Access.fire_scarecrow = Player.can_climb_fire_temple && Player.current_fire_keys>=5 && Player.hookshot;
	Location_Access.fire_compass = Player.can_climb_fire_temple && Player.current_fire_keys>=6;
	Location_Access.fire_sotGoron = Player.can_climb_fire_temple && (Player.current_fire_keys>=7 || (Player.current_fire_keys>=6)) && Player.hammer && (Player.time || Player.bomb_bag || Player.has_chus);
	Location_Access.fire_top = Player.can_climb_fire_temple && (Player.current_fire_keys>=7 || (Player.current_fire_keys >= 6)) && (Player.bomb_bag || Player.has_chus);
	Location_Access.water_compass = Player.can_enter_water && (Player.lullaby || Player.iron_boots);
	Location_Access.water_map = Player.can_enter_water;
	Location_Access.water_cracked = Player.can_enter_water && (Player.lullaby || (Player.iron_boots && Player.has_chus)) && (Player.bomb_bag || Player.has_chus);
	Location_Access.water_torches = Player.can_enter_water && Player.lullaby && (Player.bow || Player.can_use_dins);
	Location_Access.water_block = Player.can_enter_water && Player.lullaby && ((Player.bow || (Player.hover_boots && Player.bomb_bag)) && Player.goron_bracelet);
	Location_Access.water_pillar = Player.middle_water && Player.iron_boots;
	Location_Access.water_dLink = Player.current_water_keys >= 2;
	Location_Access.water_river = Player.current_water_keys >= 2 && Player.time && Player.bow;
	Location_Access.water_dragon = Player.can_enter_water && ((Player.current_water_keys >= 2 && Player.time && Player.bow) || (Player.goron_bracelet && Player.lullaby && (Player.iron_boots || Player.has_chus)));
	Location_Access.water_bossKey = Player.can_enter_water && (Player.lullaby || Player.iron_boots) && (Player.longshot || Player.hover_boots) && Player.current_water_keys >= 2;
	Location_Access.water_morpha = Player.can_enter_water && Player.water_boss_key && Player.longshot ;
	Location_Access.spirit_childLeft = Player.requiem && (Player.slingshot || Player.boomerang || Player.has_chus);
	Location_Access.spirit_childRight = Player.requiem && (Player.slingshot || Player.boomerang || Player.has_chus);
	Location_Access.spirit_childClimb1 = Player.current_spirit_keys >= 1 && ((Player.projectile_child && Player.requiem) || (Player.projectile_adult && Player.silver_gauntlets));
	Location_Access.spirit_childClimb2 = Player.current_spirit_keys >= 1 && ((Player.projectile_child && Player.requiem) || (Player.projectile_adult && Player.silver_gauntlets));
	Location_Access.spirit_map = Player.current_spirit_keys >= 1 && ((Player.requiem && (Player.bomb_bag || Player.has_chus)) || (((Player.can_use_fire || Player.bow) && Player.silver_gauntlets)));
	Location_Access.spirit_sunRoom = Player.current_spirit_keys >= 1 && ((Player.requiem && (Player.bomb_bag || Player.has_chus)) || (((Player.can_use_fire || Player.bow) && Player.silver_gauntlets)));
	Location_Access.spirit_rightHand = Player.current_spirit_keys >= 2;
	Location_Access.spirit_adultLeft = Player.can_enter_adult_spirit && Player.hookshot && Player.lullaby;
	Location_Access.spirit_adultRight = Player.can_enter_adult_spirit && (Player.bow || Player.hookshot || Player.has_chus);
	Location_Access.spirit_rotatingMirror1 = Player.can_enter_adult_spirit && Player.current_spirit_keys >=1;
	Location_Access.spirit_rotatingMirror2 = Player.can_enter_adult_spirit && Player.current_spirit_keys >=1;
	Location_Access.spirit_lullabyHand = Player.can_enter_adult_spirit && Player.current_spirit_keys >=1 && Player.lullaby;
	Location_Access.spirit_lullabyHigh = Player.can_enter_adult_spirit && Player.current_spirit_keys >=1 && Player.lullaby && (Player.hookshot || Player.hover_boots);
	Location_Access.spirit_nearFourArmos = Player.can_enter_adult_spirit && Player.current_spirit_keys >=2 && (Player.bomb_bag || Player.has_chus) && Player.mirror_shield;
	Location_Access.spirit_invisible1 = Player.can_enter_adult_spirit && Player.current_spirit_keys >=2 && (Player.bomb_bag || Player.has_chus) ;//&& Player.can_see;
	Location_Access.spirit_invisible2 = Player.can_enter_adult_spirit && Player.current_spirit_keys >=2 && (Player.bomb_bag || Player.has_chus) ;//&& Player.can_see;
	Location_Access.spirit_leftHand = Player.can_enter_adult_spirit && Player.current_spirit_keys >=2 && (Player.bomb_bag || Player.has_chus);
	Location_Access.spirit_bossKey = Player.can_enter_adult_spirit && Player.current_spirit_keys >=3 && Player.bow && Player.lullaby && Player.hookshot;
	Location_Access.spirit_tippyTop = Player.can_enter_adult_spirit && Player.current_spirit_keys >=3 && Player.mirror_shield;
	Location_Access.spirit_twinrova = Player.can_enter_adult_spirit && Player.current_spirit_keys >=3 && Player.mirror_shield && (Player.bomb_bag || Player.has_chus) && Player.spirit_boss_key && Player.hookshot;
	Location_Access.shadow_map = Player.can_enter_shadow;
	Location_Access.shadow_hovers = Player.can_enter_shadow;
	Location_Access.shadow_compass = Player.can_cross_shadow_gap;
	Location_Access.shadow_earlySilvers = Player.can_cross_shadow_gap;
	Location_Access.shadow_spinning1 = Player.can_bomb_shadow_wall;
	Location_Access.shadow_spinning2 = Player.can_bomb_shadow_wall;
	Location_Access.shadow_spikesLower = Player.can_bomb_shadow_wall;
	Location_Access.shadow_spikesUpper = Player.can_bomb_shadow_wall;
	Location_Access.shadow_spikesSwitch = Player.can_bomb_shadow_wall;
	Location_Access.shadow_redeadSilvers = Player.can_bomb_shadow_wall && Player.current_shadow_keys >=2;
	Location_Access.shadow_pot = Player.can_bomb_shadow_wall && Player.hookshot && Player.current_shadow_keys >=2;
	Location_Access.shadow_wind = Player.can_pass_shadow_hookshot_door && Player.current_shadow_keys >=3;
	Location_Access.shadow_bombable = Player.can_pass_shadow_hookshot_door && Player.current_shadow_keys >=3;
	Location_Access.shadow_gibdos = Player.can_pass_shadow_hookshot_door && Player.current_shadow_keys >=3;
	Location_Access.shadow_dins1 = Player.can_ride_shadow_boat && Player.can_use_dins && Player.current_shadow_keys >=4;
	Location_Access.shadow_dins2 = Player.can_ride_shadow_boat && Player.can_use_dins && Player.current_shadow_keys >=4;
	Location_Access.shadow_floormaster = Player.can_ride_shadow_boat && Player.current_shadow_keys >=4;
	Location_Access.shadow_bongo = Player.can_beat_shadow_boss && Player.current_shadow_keys >=5;
	Location_Access.ganons_lightTrial1 = Player.can_enter_ganons && Player.golden_gauntlets;
	Location_Access.ganons_lightTrial2 = Player.can_enter_ganons && Player.golden_gauntlets;
	Location_Access.ganons_lightTrial3 = Player.can_enter_ganons && Player.golden_gauntlets;
	Location_Access.ganons_lightTrial4 = Player.can_enter_ganons && Player.golden_gauntlets;
	Location_Access.ganons_lightTrial5 = Player.can_enter_ganons && Player.golden_gauntlets;
	Location_Access.ganons_lightTrial6 = Player.can_enter_ganons && Player.golden_gauntlets;
	Location_Access.ganons_lightTrial7 = Player.can_enter_ganons && Player.golden_gauntlets ;//&& Player.can_see;
	Location_Access.ganons_lightTrialLullaby = Player.can_enter_ganons && Player.golden_gauntlets && Player.lullaby && Player.current_ganons_keys >= 1;
	Location_Access.ganons_spiritTrial1 = Player.can_enter_ganons;
	Location_Access.ganons_spiritTrial2 = Player.can_enter_ganons && (Player.has_chus || Player.bow);//&& Player.can_see;
	Location_Access.ganons_forestTrial = Player.can_enter_ganons;
	Location_Access.ganons_waterTrial1 = Player.can_enter_ganons;
	Location_Access.ganons_waterTrial2 = Player.can_enter_ganons;
	Location_Access.ganons_shadowTrial1 = Player.can_enter_ganons && ((Player.bow && Player.fire_arrows && Player.magic) || Player.hookshot || Player.hover_boots || Player.time);
	Location_Access.ganons_shadowTrial2 = Player.can_enter_ganons && ((Player.bow && Player.fire_arrows && Player.magic) || (Player.longshot && (Player.hover_boots || Player.can_use_dins)));
	Location_Access.ganons_bossKey = Player.can_enter_ganons;
	Location_Access.gtg_lobbyLeft = Player.can_save_carpenters && Player.bow;
	Location_Access.gtg_lobbyRight = Player.can_save_carpenters && Player.bow;
	Location_Access.gtg_stalfos = Player.can_save_carpenters;
	Location_Access.gtg_wolfos= Player.can_save_carpenters;
	Location_Access.gtg_silvers1 = Player.can_save_carpenters && Player.can_climb_gtg_hole && Player.silver_gauntlets ;//&& Player.can_see ;
	Location_Access.gtg_silvers2 = Player.can_save_carpenters && Player.can_climb_gtg_hole && Player.silver_gauntlets ;//&& Player.can_see ;
	Location_Access.gtg_silvers3 = Player.can_save_carpenters && Player.can_climb_gtg_hole && Player.silver_gauntlets ;//&& Player.can_see ;
	Location_Access.gtg_silvers4 = Player.can_save_carpenters && Player.can_climb_gtg_hole && Player.silver_gauntlets ;//&& Player.can_see ;
	Location_Access.gtg_eyes = Player.can_save_carpenters && Player.can_climb_gtg_hole && Player.bow;  //((Player.bomb_bag || Player.current_gtg_keys == 9) && Player.hammer));
	Location_Access.gtg_aboveEyes = Player.can_save_carpenters && Player.can_climb_gtg_hole && Player.bow;//&& Player.can_see;
	Location_Access.gtg_keese = Player.can_save_carpenters && Player.can_climb_gtg_hole;// && (Player.can_see || (Player.bomb_bag || Player.current_gtg_keys == 9)) ;
	Location_Access.gtg_flamesChest = Player.can_save_carpenters && Player.can_climb_gtg_hole/*&& Player.can_see*/;
	Location_Access.gtg_freestanding = Player.can_save_carpenters && (Player.current_gtg_keys >= 2 || ((Player.bomb_bag || Player.has_chus) && Player.time) || (Player.can_climb_gtg_hole /*&& Player.can_see*/ && Player.time));
	Location_Access.gtg_right2 = Player.can_save_carpenters && (Player.current_gtg_keys >= 2 || ((Player.bomb_bag || Player.has_chus) && Player.time) || (Player.can_climb_gtg_hole /*&& Player.can_see*/ && Player.time));
	Location_Access.gtg_right3 = Player.can_save_carpenters && (Player.current_gtg_keys >= 2 || ((Player.bomb_bag || Player.has_chus) && Player.time) || (Player.can_climb_gtg_hole /*&& Player.can_see*/ && Player.time));
	Location_Access.gtg_beamos = Player.can_save_carpenters && (Player.bomb_bag || Player.has_chus);
	Location_Access.gtg_left1 = Player.can_save_carpenters && Player.current_gtg_keys >= 1 ;//&& Player.can_see;
	Location_Access.gtg_left2 = Player.can_save_carpenters && Player.current_gtg_keys >= 2;
	Location_Access.gtg_left3 = Player.can_save_carpenters && Player.current_gtg_keys >= 4;
	Location_Access.gtg_left4 = Player.can_save_carpenters && Player.current_gtg_keys >= 5;
	Location_Access.gtg_final = Player.can_save_carpenters && Player.current_gtg_keys >= 7;
	Location_Access.gtg_toilet = Player.can_save_carpenters && Player.iron_boots && Player.time && Player.hookshot /*&& Player.can_see*/;
	Location_Access.well_fakeRight = Player.storms ;//&& Player.can_see;
	Location_Access.well_backBombable = Player.storms && (Player.bomb_bag || Player.has_chus);
	Location_Access.well_waterLeft = Player.storms && Player.lullaby;
	Location_Access.well_coffin = Player.storms;
	Location_Access.well_centerSmall = Player.storms ;//&& Player.can_see;
	Location_Access.well_centerBig = Player.storms ;//&& Player.can_see;
	Location_Access.well_frontBombable = Player.storms && (Player.bomb_bag || Player.has_chus);
	Location_Access.well_deadHand = Player.storms && Player.lullaby ;//&& Player.kokiri_sword;
	Location_Access.well_invisible = Player.storms && Player.lullaby ;//&& Player.can_see ;
	Location_Access.well_waterFront = Player.storms && Player.lullaby;
	Location_Access.well_fakeLeft = Player.storms ;//&& Player.can_see;
	Location_Access.well_locked1 = Player.storms && Player.current_well_keys >= 1;//&& Player.can_see ;
	Location_Access.well_locked2 = Player.storms && Player.current_well_keys >= 1;//&& Player.can_see ;
	Location_Access.well_basement = Player.storms && ((Player.bomb_bag || Player.has_chus) || (((/*Player.can_see &&*/ Player.current_well_keys >= 1) || Player.can_use_dins) && Player.goron_bracelet));
	Location_Access.zeldasSpot = true;
	Location_Access.eponasSpot = true;
	Location_Access.sariasSpot = true;
	Location_Access.stormsSpot = true;
	Location_Access.sunsSpot = Player.lullaby;
	Location_Access.boleroSpot = Player.can_enter_fire_temple;
	Location_Access.minuetSpot = true;
	Location_Access.requiemSpot = Player.can_enter_colossus;
	Location_Access.serenadeSpot = Player.ice_access && Player.can_use_bottle;
	Location_Access.preludeSpot = Player.forest;
	Location_Access.nocturneSpot = Player.forest && Player.fire && Player.water;
	Location_Access.oot = Player.emerald && Player.ruby && Player.sapphire;
	Location_Access.scrub_dodongos_1 = Player.can_enter_dodongos;
	Location_Access.scrub_dodongos_2 = Player.can_enter_dodongos;
	Location_Access.scrub_dodongos_3 = Player.bomb_bag;
	Location_Access.scrub_dodongos_4 = Player.bomb_bag;
	Location_Access.scrub_jabu = Player.can_enter_jabu;
	Location_Access.scrub_ganons_1 = Player.can_enter_ganons;
	Location_Access.scrub_ganons_2 = Player.can_enter_ganons;
	Location_Access.scrub_ganons_3 = Player.can_enter_ganons;
	Location_Access.scrub_ganons_4 = Player.can_enter_ganons;
	Location_Access.scrub_river_1 = Player.storms;
	Location_Access.scrub_river_2 = Player.storms;
	Location_Access.scrub_sfm_1 = Player.storms;
	Location_Access.scrub_sfm_2 = Player.storms;
	Location_Access.scrub_lake_1 = true;
	Location_Access.scrub_lake_2 = true;
	Location_Access.scrub_lake_3 = true;
	Location_Access.scrub_lw_1 = true;
	Location_Access.scrub_lw_2 = true;
	Location_Access.scrub_lw_3 = Player.can_blast_or_smash;
	Location_Access.scrub_colossus_1 = Player.silver_gauntlets;
	Location_Access.scrub_colossus_2 = Player.silver_gauntlets;
	Location_Access.scrub_crater_1 = Player.hammer;
	Location_Access.scrub_crater_2 = Player.hammer;
	Location_Access.scrub_crater_3 = Player.hammer;
	Location_Access.scrub_goron_1 = Player.time || (Player.can_wear_goron_tunic && Player.hookshot);
	Location_Access.scrub_goron_2 = Player.time || (Player.can_wear_goron_tunic && Player.hookshot);
	Location_Access.scrub_goron_3 = Player.time || (Player.can_wear_goron_tunic && Player.hookshot);
	Location_Access.scrub_ranch_1 = true;
	Location_Access.scrub_ranch_2 = true;
	Location_Access.scrub_ranch_3 = true;
	Location_Access.scrub_gv_1 = Player.fortress_access && Player.storms;
	Location_Access.scrub_gv_2 = Player.fortress_access && Player.storms;
	Location_Access.shop_kokiri_TL = true;
	Location_Access.shop_kokiri_TR = true;
	Location_Access.shop_kokiri_BR = true;
	Location_Access.shop_kokiri_BL = true;
	Location_Access.shop_market_bazaar_TL = true;
	Location_Access.shop_market_bazaar_TR = true;
	Location_Access.shop_market_bazaar_BR = true;
	Location_Access.shop_market_bazaar_BL = true;
	Location_Access.shop_market_potion_TL = true;
	Location_Access.shop_market_potion_TR = true;
	Location_Access.shop_market_potion_BR = true;
	Location_Access.shop_market_potion_BL = true;
	Location_Access.shop_market_chu_TL = true;
	Location_Access.shop_market_chu_TR = true;
	Location_Access.shop_market_chu_BR = true;
	Location_Access.shop_market_chu_BL = true;
	Location_Access.shop_kakariko_bazaar_TL = true;
	Location_Access.shop_kakariko_bazaar_TR = true;
	Location_Access.shop_kakariko_bazaar_BR = true;
	Location_Access.shop_kakariko_bazaar_BL = true;
	Location_Access.shop_kakariko_potion_TL = true;
	Location_Access.shop_kakariko_potion_TR = true;
	Location_Access.shop_kakariko_potion_BR = true;
	Location_Access.shop_kakariko_potion_BL = true;
	Location_Access.shop_goron_TL = Player.lullaby || Player.can_stop_link_the_goron || Player.bomb_bag || Player.can_use_dins || Player.has_chus;
	Location_Access.shop_goron_TR = Player.lullaby || Player.can_stop_link_the_goron || Player.bomb_bag || Player.can_use_dins || Player.has_chus;
	Location_Access.shop_goron_BR = Player.lullaby || Player.can_stop_link_the_goron || Player.bomb_bag || Player.can_use_dins || Player.has_chus;
	Location_Access.shop_goron_BL = Player.lullaby || Player.can_stop_link_the_goron || Player.bomb_bag || Player.can_use_dins || Player.has_chus;
	Location_Access.shop_domain_TL = (Player.bomb_bag && Player.lullaby) || Player.silver_scale || (Player.lullaby && ((Player.can_enter_ganons && Player.can_use_bottle) || Player.can_enter_jabu || (Player.giants_wallet && Player.can_use_bottle)));
	Location_Access.shop_domain_TR = (Player.bomb_bag && Player.lullaby) || Player.silver_scale || (Player.lullaby && ((Player.can_enter_ganons && Player.can_use_bottle) || Player.can_enter_jabu || (Player.giants_wallet && Player.can_use_bottle)));
	Location_Access.shop_domain_BR = (Player.bomb_bag && Player.lullaby) || Player.silver_scale || (Player.lullaby && ((Player.can_enter_ganons && Player.can_use_bottle) || Player.can_enter_jabu || (Player.giants_wallet && Player.can_use_bottle)));
	Location_Access.shop_domain_BL = (Player.bomb_bag && Player.lullaby) || Player.silver_scale || (Player.lullaby && ((Player.can_enter_ganons && Player.can_use_bottle) || Player.can_enter_jabu || (Player.giants_wallet && Player.can_use_bottle)));
	
	Location_Could_Peek.kokiri_sword = true;
	Location_Could_Peek.mido_1 = true;
	Location_Could_Peek.mido_2 = true;
	Location_Could_Peek.mido_3 = true;
	Location_Could_Peek.mido_4 = true;
	Location_Could_Peek.talons_chickens = true;
	Location_Could_Peek.back_of_ranch = true;
	Location_Could_Peek.hyrule_remote_grotto = CouldHave.can_blast_or_smash;
	Location_Could_Peek.hyrule_open_grotto = true;
	Location_Could_Peek.hyrule_hp_scrub = CouldHave.can_blast_or_smash;
	Location_Could_Peek.hyrule_boulder_of_destiny = CouldHave.can_blast_or_smash;
	Location_Could_Peek.hyrule_tektite_grotto = CouldHave.can_blast_or_smash;
	Location_Could_Peek.hyrule_ocarina = (CouldHave.emerald || Player.emerald || Location_Access.emerald_location) && (CouldHave.ruby || Player.ruby || Location_Access.ruby_location) && (CouldHave.sapphire || Player.sapphire || Location_Access.sapphire_location);
	Location_Could_Peek.gerudovalley_box = true;
	Location_Could_Peek.gerudovalley_fall = true;
	Location_Could_Peek.hylia_child_fishing = true;
	Location_Could_Peek.hylia_bottle = true;
	Location_Could_Peek.hylia_adult_fishing = CouldHave.hookshot || CouldHave.child_can_enter_river || Spawn.adult_fishing;
	Location_Could_Peek.hylia_lab_top = CouldHave.hookshot || CouldHave.child_can_enter_river;
	Location_Could_Peek.hylia_lab_dive = CouldHave.golden_scale || (CouldHave.hookshot && CouldHave.iron_boots);
	Location_Could_Peek.hylia_sun_shoot = CouldHave.bow;
	Location_Could_Peek.market_slingshot_game = true;
	Location_Could_Peek.richard = true;
	Location_Could_Peek.market_bowling_1 = CouldHave.bomb_bag;
	Location_Could_Peek.market_bowling_2 = CouldHave.bomb_bag;
	Location_Could_Peek.market_lens_game = CouldHave.can_see;;
	Location_Could_Peek.poes= (CouldHave.bow && (CouldHave.can_use_bottle || CouldHave.can_enter_jabu)) || CouldHave.big_poe;
	Location_Could_Peek.dins_fairy = (CouldHave.bomb_bag || Player.has_chus || Spawn.child_hyrule_fairy) && CouldHave.lullaby;
	Location_Could_Peek.g_fairy = (CouldHave.golden_gauntlets || Spawn.adult_ogc) && CouldHave.lullaby;
	Location_Could_Peek.lacs = (Player.gen1 || CouldHave.shadow_medallion || Location_Access.shadow_medallion_location) && (Player.gen2 || CouldHave.spirit_medallion || Location_Access.spirit_medallion_location);
	Location_Could_Peek.river_pillar = true;
	Location_Could_Peek.river_grotto = true;
	Location_Could_Peek.river_ledge = true;
	Location_Could_Peek.frogs_1 = CouldHave.child_can_enter_river && CouldHave.storms;
	Location_Could_Peek.frogs_2 = CouldHave.child_can_enter_river && (CouldHave.storms && CouldHave.lullaby && CouldHave.eponas && CouldHave.sarias && CouldHave.suns && CouldHave.time);
	Location_Could_Peek.zora_diving = CouldHave.child_can_enter_river;
	Location_Could_Peek.zora_torches = CouldHave.child_can_enter_river;
	Location_Could_Peek.lost_woods_fairy_ocarina = true;
	Location_Could_Peek.ocarina_game = true;
	Location_Could_Peek.lost_woods_grotto = CouldHave.can_blast_or_smash;
	Location_Could_Peek.lost_woods_scrub_grotto = CouldHave.can_blast_or_smash;
	Location_Could_Peek.wolfos_grotto = CouldHave.can_blast_or_smash;
	Location_Could_Peek.bridge_scrub = true;
	Location_Could_Peek.skull_kid = CouldHave.sarias;
	Location_Could_Peek.target = CouldHave.slingshot;
	Location_Could_Peek.theater = true;
	Location_Could_Peek.kokiri_storms = CouldHave.storms;
	Location_Could_Peek.rolling_goron = CouldHave.bomb_bag || Player.has_chus || CouldHave.goron_bracelet;
	Location_Could_Peek.goron_pot = (CouldHave.bomb_bag || CouldHave.goron_bracelet || Player.has_chus) && (CouldHave.lullaby || CouldHave.can_use_dins || Spawn.child_lower_dmc || Spawn.child_lower_dmc_fairy);
	Location_Could_Peek.goron_dance = (CouldHave.lullaby || Spawn.child_lower_dmc || Spawn.child_lower_dmc_fairy) && CouldHave.sarias;
	Location_Could_Peek.goron_maze_1 = CouldHave.can_blast_or_smash || CouldHave.silver_gauntlets;
	Location_Could_Peek.goron_maze_2 = CouldHave.can_blast_or_smash || CouldHave.silver_gauntlets;
	Location_Could_Peek.goron_maze_3 = CouldHave.hammer || CouldHave.silver_gauntlets || ((CouldHave.bomb_bag || Player.has_chus) && CouldHave.hover_boots);
	Location_Could_Peek.goron_link = CouldHave.can_stop_link_the_goron;
	Location_Could_Peek.trail_bombable = CouldHave.can_blast_or_smash || Player.goron_bracelet;
	Location_Could_Peek.trail_dodongos_top = true;
	Location_Could_Peek.trail_storms = CouldHave.storms;
	Location_Could_Peek.crater_bean = CouldHave.bolero || CouldHave.crater_top || Spawn.child_upper_dmc || Spawn.child_lower_dmc || Spawn.child_dmt_fairy || Spawn.child_lower_dmc_fairy || Spawn.adult_lower_dmc || Spawn.adult_lower_dmc_fairy || Spawn.adult_upper_dmc || Spawn.adult_lower_dmc_fairy;
	Location_Could_Peek.crater_hammer_fairy = ((CouldHave.crater_by_city && CouldHave.hammer) || (Spawn.child_lower_dmc_fairy || Spawn.adult_lower_dmc_fairy || Spawn.child_lower_dmc_fairy_ool || Spawn.adult_lower_dmc_fairy_ool)) && CouldHave.lullaby;
	Location_Could_Peek.crater_nook_hp = CouldHave.crater_top || CouldHave.bolero || Spawn.child_upper_dmc || Spawn.child_lower_dmc || Spawn.child_dmt_fairy || Spawn.child_lower_dmc_fairy || Spawn.adult_lower_dmc || Spawn.adult_lower_dmc_fairy || Spawn.adult_upper_dmc || Spawn.adult_lower_dmc_fairy;
	Location_Could_Peek.crater_grotto = CouldHave.can_blast_or_smash;
	Location_Could_Peek.trail_fairy = (CouldHave.can_blast_or_smash || Spawn.child_dmt_fairy  || Spawn.adult_dmt_fairy || Spawn.child_dmt_fairy_ool || Spawn.adult_dmt_fairy_ool) && CouldHave.lullaby;
	Location_Could_Peek.trade_quest = (((Location_Could_Peek.thaw_king || (CouldHave.giants_wallet && CouldHave.lullaby && (CouldHave.can_use_bottle || CouldHave.can_enter_jabu))) && CouldHave.prescription) || CouldHave.claim_check) && CouldHave.crater_top;
	Location_Could_Peek.gerudo_hammer = CouldHave.fortress_access && CouldHave.hammer;
	Location_Could_Peek.gerudo_roof = CouldHave.fortress_access && (CouldHave.hookshot || CouldHave.hover_boots);
	Location_Could_Peek.gerudo_archery_1 = CouldHave.eponas && CouldHave.bow;
	Location_Could_Peek.gerudo_archery_2 = CouldHave.eponas && CouldHave.bow;
	Location_Could_Peek.wasteland = (CouldHave.can_cross_quicksand || CouldHave.requiem) && CouldHave.can_use_fire;
	Location_Could_Peek.colossus_fairy = CouldHave.can_enter_colossus && (CouldHave.bomb_bag || Player.has_chus) && CouldHave.lullaby;
	Location_Could_Peek.colossus_bean = CouldHave.can_enter_colossus;
	Location_Could_Peek.man_on_roof = true;//CouldHave.hookshot;
	Location_Could_Peek.kakariko_grotto = true;
	Location_Could_Peek.windmill = true;//CouldHave.boomerang || CouldHave.time;
	Location_Could_Peek.anju = true;
	Location_Could_Peek.cow_house = true;
	Location_Could_Peek.redead_grotto = CouldHave.can_blast_or_smash;
	Location_Could_Peek.archery_game = CouldHave.bow;
	Location_Could_Peek.anjus_chickens = true;
	Location_Could_Peek.tokens_10 = Logic.gold_skulltulas >= 10 || Player.tokens >= 10; //these are temporary because access logic for skulls isn't done yet
	Location_Could_Peek.tokens_20 = Logic.gold_skulltulas >= 20 || Player.tokens >= 20;
	Location_Could_Peek.tokens_30 = Logic.gold_skulltulas >= 30 || Player.tokens >= 30;
	Location_Could_Peek.tokens_40 = Logic.gold_skulltulas >= 40 || Player.tokens >= 40;
	Location_Could_Peek.tokens_50 = Logic.gold_skulltulas >= 50 || Player.tokens >= 50;
	Location_Could_Peek.gravedigging_tour = true;
	Location_Could_Peek.graveyard_box = true;//CouldHave.child_can_enter_river || CouldHave.longshot || CouldHave.boomerang;
	Location_Could_Peek.shield_grave = true;
	Location_Could_Peek.redead_grave = CouldHave.suns;
	Location_Could_Peek.composers_grave = CouldHave.lullaby;
	Location_Could_Peek.race_1 = true;
	Location_Could_Peek.race_2 = true;
	Location_Could_Peek.deku_lobby = CouldHave.deku_access;
	Location_Could_Peek.deku_slingshot = CouldHave.deku_access;
	Location_Could_Peek.deku_slingshot_room_side = CouldHave.deku_access;
	Location_Could_Peek.deku_compass = CouldHave.deku_access;
	Location_Could_Peek.deku_compass_room_side = CouldHave.deku_access;
	Location_Could_Peek.deku_basement = CouldHave.deku_access;
	Location_Could_Peek.deku_queen_gohma = CouldHave.deku_access;
	Location_Could_Peek.dodongos_map = CouldHave.can_enter_dodongos;
	Location_Could_Peek.dodongos_compass = CouldHave.can_enter_dodongos;
	Location_Could_Peek.dodongos_bomb_flower_platform = CouldHave.dodongos_climb;
	Location_Could_Peek.dodongos_bomb_bag = CouldHave.dodongos_climb;
	Location_Could_Peek.dodongos_end_of_bridge = (CouldHave.dodongos_climb && CouldHave.can_blast_or_smash)
	Location_Could_Peek.dodongos_above_king = CouldHave.dodongos_climb && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Peek.dodongos_king_dodongo = CouldHave.dodongos_climb && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Peek.jabu_boomerang = CouldHave.can_enter_jabu && (CouldHave.boomerang || CouldHave.bomb_bag || CouldHave.slingshot || Player.has_chus);
	Location_Could_Peek.jabu_map = CouldHave.can_enter_jabu && CouldHave.boomerang;
	Location_Could_Peek.jabu_compass = CouldHave.can_enter_jabu && CouldHave.boomerang;
	Location_Could_Peek.jabu_barinade = CouldHave.can_enter_jabu && CouldHave.boomerang;
	Location_Could_Peek.fountain_fairy = CouldHave.ice_access && (CouldHave.bomb_bag|| Player.has_chus || (CouldHave.hammer && CouldHave.silver_gauntlets)) && CouldHave.lullaby;
	Location_Could_Peek.ice_glacier_hp = CouldHave.ice_access;
	Location_Could_Peek.ice_map = CouldHave.ice_access && CouldHave.can_use_bottle;
	Location_Could_Peek.ice_hp = CouldHave.ice_access && CouldHave.can_use_bottle;
	Location_Could_Peek.ice_compass = CouldHave.ice_access && CouldHave.can_use_bottle;
	Location_Could_Peek.ice_irons = CouldHave.ice_access && CouldHave.can_use_bottle;
	Location_Could_Peek.ice_bottom_of_fountain = CouldHave.ice_access;
	Location_Could_Peek.thaw_king = (CouldHave.ice_access && CouldHave.can_use_bottle) || (CouldHave.can_use_bottle && CouldHave.giants_wallet && (CouldHave.lullaby || CouldHave.hover_boots || Spawn.adult_zd));
	Location_Could_Peek.forest_first = CouldHave.hookshot;
	Location_Could_Peek.forest_stalfos = CouldHave.hookshot;
	Location_Could_Peek.forest_midCourtyard = CouldHave.hookshot && (CouldHave.time || CouldHave.bow || ((CouldHave.hover_boots || CouldHave.goron_bracelet) && CouldHave.current_forest_keys>=1));
	Location_Could_Peek.forest_highCourtyard = CouldHave.hookshot && (CouldHave.time || ((CouldHave.hover_boots || CouldHave.goron_bracelet) && CouldHave.current_forest_keys>=1) || (CouldHave.bow/* && (CouldHave.iron_boots || CouldHave.golden_scale || CouldHave.longshot)*/));
	Location_Could_Peek.forest_lowCourtyard = CouldHave.hookshot && (CouldHave.time || ((CouldHave.hover_boots || CouldHave.goron_bracelet) && CouldHave.current_forest_keys>=1) || (CouldHave.bow/* && (CouldHave.iron_boots || CouldHave.golden_scale || CouldHave.longshot)*/));
	Location_Could_Peek.forest_blockRoom = CouldHave.hookshot && CouldHave.current_forest_keys >= 1 && CouldHave.bow && CouldHave.goron_bracelet;
	Location_Could_Peek.forest_bossKey = CouldHave.hookshot && CouldHave.current_forest_keys >= 2 && CouldHave.bow && CouldHave.goron_bracelet;
	Location_Could_Peek.forest_floormaster = CouldHave.hookshot && ((CouldHave.bow && CouldHave.goron_bracelet && CouldHave.current_forest_keys >=2) || ((CouldHave.hover_boots || CouldHave.goron_bracelet) && CouldHave.current_forest_keys >=1));
	Location_Could_Peek.forest_red = CouldHave.hookshot && CouldHave.goron_bracelet && CouldHave.bow && CouldHave.current_forest_keys>=3;
	Location_Could_Peek.forest_bow = CouldHave.hookshot && CouldHave.goron_bracelet && CouldHave.current_forest_keys>=3;
	Location_Could_Peek.forest_blue = CouldHave.hookshot && CouldHave.goron_bracelet && CouldHave.bow && CouldHave.current_forest_keys>=3;
	Location_Could_Peek.forest_fallingCeiling = CouldHave.hookshot && CouldHave.goron_bracelet && (CouldHave.bow || CouldHave.can_use_dins) && CouldHave.current_forest_keys>=5;
	Location_Could_Peek.forest_nearBoss = CouldHave.hookshot && CouldHave.goron_bracelet && CouldHave.bow && CouldHave.current_forest_keys>=5;
	Location_Could_Peek.forest_phantomGanon = CouldHave.hookshot && CouldHave.goron_bracelet && CouldHave.bow && CouldHave.current_forest_keys>=5 && CouldHave.forest_boss_key;
	Location_Could_Peek.fire_nearBoss = CouldHave.can_enter_fire_temple;
	Location_Could_Peek.fire_hammer1 = CouldHave.can_enter_fire_temple && CouldHave.hammer;
	Location_Could_Peek.fire_hammer2 = CouldHave.can_enter_fire_temple && CouldHave.hammer;
	Location_Could_Peek.fire_lavaOpen = CouldHave.can_enter_fire_temple && CouldHave.current_fire_keys >=1;
	Location_Could_Peek.fire_lavaBomb = CouldHave.can_enter_fire_temple && CouldHave.current_fire_keys >=1 && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Peek.fire_volvagia = CouldHave.can_enter_fire_temple && CouldHave.fire_boss_key && CouldHave.hammer;
	Location_Could_Peek.fire_lowerMaze = CouldHave.can_climb_fire_temple;
	Location_Could_Peek.fire_sideRoom = CouldHave.can_climb_fire_temple;
	Location_Could_Peek.fire_map = CouldHave.can_climb_fire_temple && ((CouldHave.current_fire_keys >= 4 && CouldHave.bow) || CouldHave.current_fire_keys>=5);
	Location_Could_Peek.fire_upperMaze = CouldHave.can_climb_fire_temple && CouldHave.current_fire_keys>=5;
	Location_Could_Peek.fire_shortcut = CouldHave.can_climb_fire_temple && CouldHave.current_fire_keys>=5 && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Peek.fire_scarecrow = CouldHave.can_climb_fire_temple && CouldHave.current_fire_keys>=5 && CouldHave.hookshot;
	Location_Could_Peek.fire_compass = CouldHave.can_climb_fire_temple && CouldHave.current_fire_keys>=6;
	Location_Could_Peek.fire_sotGoron = CouldHave.can_climb_fire_temple && (CouldHave.current_fire_keys>=7 || (CouldHave.current_fire_keys>=6)) && CouldHave.hammer && (CouldHave.time || CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Peek.fire_top = CouldHave.can_climb_fire_temple && (CouldHave.current_fire_keys>=7 || (CouldHave.current_fire_keys >= 6)) && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Peek.water_compass = CouldHave.can_enter_water && (CouldHave.lullaby || CouldHave.iron_boots);
	Location_Could_Peek.water_map = CouldHave.can_enter_water;
	Location_Could_Peek.water_cracked = CouldHave.can_enter_water && (CouldHave.lullaby || (CouldHave.iron_boots && Player.has_chus || CouldHave.bomb_bag)) && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Peek.water_torches = CouldHave.can_enter_water && CouldHave.lullaby && (CouldHave.bow || CouldHave.can_use_dins);
	Location_Could_Peek.water_block = CouldHave.can_enter_water && CouldHave.lullaby && ((CouldHave.bow || (CouldHave.hover_boots && CouldHave.bomb_bag)) && CouldHave.goron_bracelet);
	Location_Could_Peek.water_pillar = CouldHave.middle_water && CouldHave.iron_boots;
	Location_Could_Peek.water_dLink = CouldHave.current_water_keys >= 2;
	Location_Could_Peek.water_river = CouldHave.current_water_keys >= 2 && CouldHave.time && CouldHave.bow;
	Location_Could_Peek.water_dragon = CouldHave.can_enter_water && ((CouldHave.current_water_keys >= 2 && CouldHave.time && CouldHave.bow) || (CouldHave.goron_bracelet && CouldHave.lullaby && (CouldHave.iron_boots || Player.has_chus || CouldHave.bomb_bag)));
	Location_Could_Peek.water_bossKey = CouldHave.can_enter_water && (CouldHave.lullaby || CouldHave.iron_boots) && (CouldHave.longshot || CouldHave.hover_boots) && CouldHave.current_water_keys >= 2;
	Location_Could_Peek.water_morpha = CouldHave.can_enter_water && CouldHave.water_boss_key && CouldHave.longshot ;
	Location_Could_Peek.spirit_childLeft = CouldHave.requiem && (CouldHave.slingshot || CouldHave.boomerang || Player.has_chus || CouldHave.bomb_bag);
	Location_Could_Peek.spirit_childRight = CouldHave.requiem && (CouldHave.slingshot || CouldHave.boomerang || Player.has_chus || CouldHave.bomb_bag);
	Location_Could_Peek.spirit_childClimb1 = CouldHave.current_spirit_keys >= 1 && ((CouldHave.projectile_child && CouldHave.requiem) || (CouldHave.projectile_adult && CouldHave.silver_gauntlets));
	Location_Could_Peek.spirit_childClimb2 = CouldHave.current_spirit_keys >= 1 && ((CouldHave.projectile_child && CouldHave.requiem) || (CouldHave.projectile_adult && CouldHave.silver_gauntlets));
	Location_Could_Peek.spirit_map = CouldHave.current_spirit_keys >= 1 && ((CouldHave.requiem && (CouldHave.bomb_bag || Player.has_chus)) || (((CouldHave.can_use_fire || CouldHave.bow) && CouldHave.silver_gauntlets)));
	Location_Could_Peek.spirit_sunRoom = CouldHave.current_spirit_keys >= 1 && ((CouldHave.requiem && (CouldHave.bomb_bag || Player.has_chus)) || (((CouldHave.can_use_fire || CouldHave.bow) && CouldHave.silver_gauntlets)));
	Location_Could_Peek.spirit_rightHand = CouldHave.current_spirit_keys >= 2;
	Location_Could_Peek.spirit_adultLeft = CouldHave.can_enter_adult_spirit && CouldHave.hookshot && CouldHave.lullaby;
	Location_Could_Peek.spirit_adultRight = CouldHave.can_enter_adult_spirit && (CouldHave.bow || CouldHave.hookshot || (CouldHave.bomb_bag || Player.has_chus));
	Location_Could_Peek.spirit_rotatingMirror1 = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=1;
	Location_Could_Peek.spirit_rotatingMirror2 = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=1;
	Location_Could_Peek.spirit_lullabyHand = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=1 && CouldHave.lullaby;
	Location_Could_Peek.spirit_lullabyHigh = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=1 && CouldHave.lullaby && (CouldHave.hookshot || CouldHave.hover_boots);
	Location_Could_Peek.spirit_nearFourArmos = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=2 && (CouldHave.bomb_bag || Player.has_chus) && CouldHave.mirror_shield;
	Location_Could_Peek.spirit_invisible1 = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=2 && (CouldHave.bomb_bag || Player.has_chus) ;//&& CouldHave.can_see;
	Location_Could_Peek.spirit_invisible2 = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=2 && (CouldHave.bomb_bag || Player.has_chus) ;//&& CouldHave.can_see;
	Location_Could_Peek.spirit_leftHand = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=2 && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Peek.spirit_bossKey = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=3 && CouldHave.bow && CouldHave.lullaby && CouldHave.hookshot;
	Location_Could_Peek.spirit_tippyTop = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=3 && CouldHave.mirror_shield;
	Location_Could_Peek.spirit_twinrova = CouldHave.can_enter_adult_spirit && CouldHave.current_spirit_keys >=3 && CouldHave.mirror_shield && (CouldHave.bomb_bag || Player.has_chus) && CouldHave.spirit_boss_key && CouldHave.hookshot;
	Location_Could_Peek.shadow_map = CouldHave.can_enter_shadow;
	Location_Could_Peek.shadow_hovers = CouldHave.can_enter_shadow;
	Location_Could_Peek.shadow_compass = CouldHave.can_cross_shadow_gap;
	Location_Could_Peek.shadow_earlySilvers = CouldHave.can_cross_shadow_gap;
	Location_Could_Peek.shadow_spinning1 = CouldHave.can_bomb_shadow_wall;
	Location_Could_Peek.shadow_spinning2 = CouldHave.can_bomb_shadow_wall;
	Location_Could_Peek.shadow_spikesLower = CouldHave.can_bomb_shadow_wall;
	Location_Could_Peek.shadow_spikesUpper = CouldHave.can_bomb_shadow_wall;
	Location_Could_Peek.shadow_spikesSwitch = CouldHave.can_bomb_shadow_wall;
	Location_Could_Peek.shadow_redeadSilvers = CouldHave.can_bomb_shadow_wall && CouldHave.current_shadow_keys >=2;
	Location_Could_Peek.shadow_pot = CouldHave.can_bomb_shadow_wall && CouldHave.hookshot && CouldHave.current_shadow_keys >=2;
	Location_Could_Peek.shadow_wind = CouldHave.can_pass_shadow_hookshot_door && CouldHave.current_shadow_keys >=3;
	Location_Could_Peek.shadow_bombable = CouldHave.can_pass_shadow_hookshot_door && CouldHave.current_shadow_keys >=3;
	Location_Could_Peek.shadow_gibdos = CouldHave.can_pass_shadow_hookshot_door && CouldHave.current_shadow_keys >=3;
	Location_Could_Peek.shadow_dins1 = CouldHave.can_ride_shadow_boat && CouldHave.can_use_dins && CouldHave.current_shadow_keys >=4;
	Location_Could_Peek.shadow_dins2 = CouldHave.can_ride_shadow_boat && CouldHave.can_use_dins && CouldHave.current_shadow_keys >=4;
	Location_Could_Peek.shadow_floormaster = CouldHave.can_ride_shadow_boat && CouldHave.current_shadow_keys >=4;
	Location_Could_Peek.shadow_bongo = CouldHave.can_beat_shadow_boss && CouldHave.current_shadow_keys >=5;
	Location_Could_Peek.ganons_lightTrial1 = CouldHave.can_enter_ganons && CouldHave.golden_gauntlets;
	Location_Could_Peek.ganons_lightTrial2 = CouldHave.can_enter_ganons && CouldHave.golden_gauntlets;
	Location_Could_Peek.ganons_lightTrial3 = CouldHave.can_enter_ganons && CouldHave.golden_gauntlets;
	Location_Could_Peek.ganons_lightTrial4 = CouldHave.can_enter_ganons && CouldHave.golden_gauntlets;
	Location_Could_Peek.ganons_lightTrial5 = CouldHave.can_enter_ganons && CouldHave.golden_gauntlets;
	Location_Could_Peek.ganons_lightTrial6 = CouldHave.can_enter_ganons && CouldHave.golden_gauntlets;
	Location_Could_Peek.ganons_lightTrial7 = CouldHave.can_enter_ganons && CouldHave.golden_gauntlets ;//&& CouldHave.can_see;
	Location_Could_Peek.ganons_lightTrialLullaby = CouldHave.can_enter_ganons && CouldHave.golden_gauntlets && CouldHave.lullaby && CouldHave.current_ganons_keys >= 1;
	Location_Could_Peek.ganons_spiritTrial1 = CouldHave.can_enter_ganons;
	Location_Could_Peek.ganons_spiritTrial2 = CouldHave.can_enter_ganons && (CouldHave.bomb_bag || Player.has_chus || CouldHave.bow);//&& CouldHave.can_see;
	Location_Could_Peek.ganons_forestTrial = CouldHave.can_enter_ganons;
	Location_Could_Peek.ganons_waterTrial1 = CouldHave.can_enter_ganons;
	Location_Could_Peek.ganons_waterTrial2 = CouldHave.can_enter_ganons;
	Location_Could_Peek.ganons_shadowTrial1 = CouldHave.can_enter_ganons && ((CouldHave.bow && CouldHave.fire_arrows && CouldHave.magic) || CouldHave.hookshot || CouldHave.hover_boots || CouldHave.time);
	Location_Could_Peek.ganons_shadowTrial2 = CouldHave.can_enter_ganons && ((CouldHave.bow && CouldHave.fire_arrows && CouldHave.magic) || (CouldHave.longshot && (CouldHave.hover_boots || CouldHave.can_use_dins)));
	Location_Could_Peek.ganons_bossKey = CouldHave.can_enter_ganons;
	Location_Could_Peek.gtg_lobbyLeft = CouldHave.can_save_carpenters && CouldHave.bow;
	Location_Could_Peek.gtg_lobbyRight = CouldHave.can_save_carpenters && CouldHave.bow;
	Location_Could_Peek.gtg_stalfos = CouldHave.can_save_carpenters;
	Location_Could_Peek.gtg_wolfos= CouldHave.can_save_carpenters;
	Location_Could_Peek.gtg_silvers1 = CouldHave.can_save_carpenters && CouldHave.can_climb_gtg_hole && CouldHave.silver_gauntlets ;//&& CouldHave.can_see ;
	Location_Could_Peek.gtg_silvers2 = CouldHave.can_save_carpenters && CouldHave.can_climb_gtg_hole && CouldHave.silver_gauntlets ;//&& CouldHave.can_see ;
	Location_Could_Peek.gtg_silvers3 = CouldHave.can_save_carpenters && CouldHave.can_climb_gtg_hole && CouldHave.silver_gauntlets ;//&& CouldHave.can_see ;
	Location_Could_Peek.gtg_silvers4 = CouldHave.can_save_carpenters && CouldHave.can_climb_gtg_hole && CouldHave.silver_gauntlets ;//&& CouldHave.can_see ;
	Location_Could_Peek.gtg_eyes = CouldHave.can_save_carpenters && CouldHave.can_climb_gtg_hole && CouldHave.bow;  //((CouldHave.bomb_bag || CouldHave.current_gtg_keys == 9) && CouldHave.hammer));
	Location_Could_Peek.gtg_aboveEyes = CouldHave.can_save_carpenters && CouldHave.can_climb_gtg_hole && CouldHave.bow;//&& CouldHave.can_see;
	Location_Could_Peek.gtg_keese = CouldHave.can_save_carpenters && CouldHave.can_climb_gtg_hole;// && (CouldHave.can_see || (CouldHave.bomb_bag || CouldHave.current_gtg_keys == 9)) ;
	Location_Could_Peek.gtg_flamesChest = CouldHave.can_save_carpenters && CouldHave.can_climb_gtg_hole/*&& CouldHave.can_see*/;
	Location_Could_Peek.gtg_freestanding = CouldHave.can_save_carpenters && (CouldHave.current_gtg_keys >= 2 || ((CouldHave.bomb_bag || Player.has_chus) && CouldHave.time) || (CouldHave.can_climb_gtg_hole /*&& CouldHave.can_see*/ && CouldHave.time));
	Location_Could_Peek.gtg_right2 = CouldHave.can_save_carpenters && (CouldHave.current_gtg_keys >= 2 || ((CouldHave.bomb_bag || Player.has_chus) && CouldHave.time) || (CouldHave.can_climb_gtg_hole /*&& CouldHave.can_see*/ && CouldHave.time));
	Location_Could_Peek.gtg_right3 = CouldHave.can_save_carpenters && (CouldHave.current_gtg_keys >= 2 || ((CouldHave.bomb_bag || Player.has_chus) && CouldHave.time) || (CouldHave.can_climb_gtg_hole /*&& CouldHave.can_see*/ && CouldHave.time));
	Location_Could_Peek.gtg_beamos = CouldHave.can_save_carpenters && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Peek.gtg_left1 = CouldHave.can_save_carpenters && CouldHave.current_gtg_keys >= 1 ;//&& CouldHave.can_see;
	Location_Could_Peek.gtg_left2 = CouldHave.can_save_carpenters && CouldHave.current_gtg_keys >= 2;
	Location_Could_Peek.gtg_left3 = CouldHave.can_save_carpenters && CouldHave.current_gtg_keys >= 4;
	Location_Could_Peek.gtg_left4 = CouldHave.can_save_carpenters && CouldHave.current_gtg_keys >= 5;
	Location_Could_Peek.gtg_final = CouldHave.can_save_carpenters && CouldHave.current_gtg_keys >= 7;
	Location_Could_Peek.gtg_toilet = CouldHave.can_save_carpenters && CouldHave.iron_boots && CouldHave.time && CouldHave.hookshot /*&& CouldHave.can_see*/;
	Location_Could_Peek.well_fakeRight = CouldHave.storms ;//&& CouldHave.can_see;
	Location_Could_Peek.well_backBombable = CouldHave.storms && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Peek.well_waterLeft = CouldHave.storms && CouldHave.lullaby;
	Location_Could_Peek.well_coffin = CouldHave.storms;
	Location_Could_Peek.well_centerSmall = CouldHave.storms ;//&& CouldHave.can_see;
	Location_Could_Peek.well_centerBig = CouldHave.storms ;//&& CouldHave.can_see;
	Location_Could_Peek.well_frontBombable = CouldHave.storms && (CouldHave.bomb_bag || Player.has_chus);
	Location_Could_Peek.well_deadHand = CouldHave.storms && CouldHave.lullaby ;//&& CouldHave.kokiri_sword;
	Location_Could_Peek.well_invisible = CouldHave.storms && CouldHave.lullaby ;//&& CouldHave.can_see ;
	Location_Could_Peek.well_waterFront = CouldHave.storms && CouldHave.lullaby;
	Location_Could_Peek.well_fakeLeft = CouldHave.storms ;//&& CouldHave.can_see;
	Location_Could_Peek.well_locked1 = CouldHave.storms && CouldHave.current_well_keys >= 1;//&& CouldHave.can_see ;
	Location_Could_Peek.well_locked2 = CouldHave.storms && CouldHave.current_well_keys >= 1;//&& CouldHave.can_see ;
	Location_Could_Peek.well_basement = CouldHave.storms && ((CouldHave.bomb_bag || Player.has_chus) || (((/*CouldHave.can_see &&*/ CouldHave.current_well_keys >= 1) || CouldHave.can_use_dins) && CouldHave.goron_bracelet));
	Location_Could_Peek.zeldasSpot = true;
	Location_Could_Peek.eponasSpot = true;
	Location_Could_Peek.sariasSpot = true;
	Location_Could_Peek.stormsSpot = true;
	Location_Could_Peek.sunsSpot = CouldHave.lullaby;
	Location_Could_Peek.boleroSpot = CouldHave.can_enter_fire_temple;
	Location_Could_Peek.minuetSpot = true;
	Location_Could_Peek.requiemSpot = CouldHave.can_enter_colossus;
	Location_Could_Peek.serenadeSpot = CouldHave.ice_access && CouldHave.can_use_bottle;
	Location_Could_Peek.preludeSpot = CouldHave.forest || Player.forest || Location_Access.forest_medallion_location;
	Location_Could_Peek.nocturneSpot = (CouldHave.forest || Player.forest || Location_Access.forest_medallion_location) && (CouldHave.fire || Player.fire || Location_Access.fire_medallion_location) && (CouldHave.water || Player.water || Location_Access.water_medallion_location);
	Location_Could_Peek.oot = (CouldHave.emerald || Player.emerald || Location_Access.emerald_location) && (CouldHave.ruby || Player.ruby || Location_Access.ruby_location) && (CouldHave.sapphire || Player.sapphire || Location_Access.sapphire_location);
	Location_Could_Peek.scrub_dodongos_1 = CouldHave.can_enter_dodongos;
	Location_Could_Peek.scrub_dodongos_2 = CouldHave.can_enter_dodongos;
	Location_Could_Peek.scrub_dodongos_3 = CouldHave.bomb_bag;
	Location_Could_Peek.scrub_dodongos_4 = CouldHave.bomb_bag;
	Location_Could_Peek.scrub_jabu = CouldHave.can_enter_jabu;
	Location_Could_Peek.scrub_ganons_1 = CouldHave.can_enter_ganons;
	Location_Could_Peek.scrub_ganons_2 = CouldHave.can_enter_ganons;
	Location_Could_Peek.scrub_ganons_3 = CouldHave.can_enter_ganons;
	Location_Could_Peek.scrub_ganons_4 = CouldHave.can_enter_ganons;
	Location_Could_Peek.scrub_river_1 = CouldHave.storms;
	Location_Could_Peek.scrub_river_2 = CouldHave.storms;
	Location_Could_Peek.scrub_sfm_1 = CouldHave.storms;
	Location_Could_Peek.scrub_sfm_2 = CouldHave.storms;
	Location_Could_Peek.scrub_lake_1 = true;
	Location_Could_Peek.scrub_lake_2 = true;
	Location_Could_Peek.scrub_lake_3 = true;
	Location_Could_Peek.scrub_lw_1 = true;
	Location_Could_Peek.scrub_lw_2 = true;
	Location_Could_Peek.scrub_lw_3 = CouldHave.can_blast_or_smash;
	Location_Could_Peek.scrub_colossus_1 = CouldHave.silver_gauntlets;
	Location_Could_Peek.scrub_colossus_2 = CouldHave.silver_gauntlets;
	Location_Could_Peek.scrub_crater_1 = CouldHave.hammer;
	Location_Could_Peek.scrub_crater_2 = CouldHave.hammer;
	Location_Could_Peek.scrub_crater_3 = CouldHave.hammer;
	Location_Could_Peek.scrub_goron_1 = CouldHave.time || (CouldHave.can_wear_goron_tunic && CouldHave.hookshot);
	Location_Could_Peek.scrub_goron_2 = CouldHave.time || (CouldHave.can_wear_goron_tunic && CouldHave.hookshot);
	Location_Could_Peek.scrub_goron_3 = CouldHave.time || (CouldHave.can_wear_goron_tunic && CouldHave.hookshot);
	Location_Could_Peek.scrub_ranch_1 = true;
	Location_Could_Peek.scrub_ranch_2 = true;
	Location_Could_Peek.scrub_ranch_3 = true;
	Location_Could_Peek.scrub_gv_1 = CouldHave.fortress_access && CouldHave.storms;
	Location_Could_Peek.scrub_gv_2 = CouldHave.fortress_access && CouldHave.storms;
	Location_Could_Peek.shop_kokiri_TL = true;
	Location_Could_Peek.shop_kokiri_TR = true;
	Location_Could_Peek.shop_kokiri_BR = true;
	Location_Could_Peek.shop_kokiri_BL = true;
	Location_Could_Peek.shop_market_bazaar_TL = true;
	Location_Could_Peek.shop_market_bazaar_TR = true;
	Location_Could_Peek.shop_market_bazaar_BR = true;
	Location_Could_Peek.shop_market_bazaar_BL = true;
	Location_Could_Peek.shop_market_potion_TL = true;
	Location_Could_Peek.shop_market_potion_TR = true;
	Location_Could_Peek.shop_market_potion_BR = true;
	Location_Could_Peek.shop_market_potion_BL = true;
	Location_Could_Peek.shop_market_chu_TL = true;
	Location_Could_Peek.shop_market_chu_TR = true;
	Location_Could_Peek.shop_market_chu_BR = true;
	Location_Could_Peek.shop_market_chu_BL = true;
	Location_Could_Peek.shop_kakariko_bazaar_TL = true;
	Location_Could_Peek.shop_kakariko_bazaar_TR = true;
	Location_Could_Peek.shop_kakariko_bazaar_BR = true;
	Location_Could_Peek.shop_kakariko_bazaar_BL = true;
	Location_Could_Peek.shop_kakariko_potion_TL = true;
	Location_Could_Peek.shop_kakariko_potion_TR = true;
	Location_Could_Peek.shop_kakariko_potion_BR = true;
	Location_Could_Peek.shop_kakariko_potion_BL = true;
	Location_Could_Peek.shop_goron_TL = CouldHave.lullaby || CouldHave.can_stop_link_the_goron || CouldHave.bomb_bag || CouldHave.can_use_dins || Player.has_chus;
	Location_Could_Peek.shop_goron_TR = CouldHave.lullaby || CouldHave.can_stop_link_the_goron || CouldHave.bomb_bag || CouldHave.can_use_dins || Player.has_chus;
	Location_Could_Peek.shop_goron_BR = CouldHave.lullaby || CouldHave.can_stop_link_the_goron || CouldHave.bomb_bag || CouldHave.can_use_dins || Player.has_chus;
	Location_Could_Peek.shop_goron_BL = CouldHave.lullaby || CouldHave.can_stop_link_the_goron || CouldHave.bomb_bag || CouldHave.can_use_dins || Player.has_chus;
	Location_Could_Peek.shop_domain_TL = (CouldHave.bomb_bag && CouldHave.lullaby) || CouldHave.silver_scale || (CouldHave.lullaby && ((CouldHave.can_enter_ganons && CouldHave.can_use_bottle) || CouldHave.can_enter_jabu || (CouldHave.giants_wallet && CouldHave.can_use_bottle)));
	Location_Could_Peek.shop_domain_TR = (CouldHave.bomb_bag && CouldHave.lullaby) || CouldHave.silver_scale || (CouldHave.lullaby && ((CouldHave.can_enter_ganons && CouldHave.can_use_bottle) || CouldHave.can_enter_jabu || (CouldHave.giants_wallet && CouldHave.can_use_bottle)));
	Location_Could_Peek.shop_domain_BR = (CouldHave.bomb_bag && CouldHave.lullaby) || CouldHave.silver_scale || (CouldHave.lullaby && ((CouldHave.can_enter_ganons && CouldHave.can_use_bottle) || CouldHave.can_enter_jabu || (CouldHave.giants_wallet && CouldHave.can_use_bottle)));
	Location_Could_Peek.shop_domain_BL = (CouldHave.bomb_bag && CouldHave.lullaby) || CouldHave.silver_scale || (CouldHave.lullaby && ((CouldHave.can_enter_ganons && CouldHave.can_use_bottle) || CouldHave.can_enter_jabu || (CouldHave.giants_wallet && CouldHave.can_use_bottle)));
	
	if(document.getElementById("csmc").value == "ON") {
		Location_Access.goron_maze_1 = true;
		Location_Access.goron_maze_2 = true;
		Location_Access.goron_maze_3 = true;
		Location_Access.trail_bombable = true;
		Location_Access.gerudo_hammer = Player.fortress_access;
		Location_Access.gerudo_roof = Player.fortress_access;
		Location_Access.dodongos_end_of_bridge = Player.can_enter_dodongos;
		Location_Access.forest_blockRoom = Player.hookshot && Player.current_forest_keys >= 1 && Player.bow;
		Location_Access.fire_hammer2 = Player.can_enter_fire_temple;
		Location_Access.fire_upperMaze = Player.can_climb_fire_temple;
		Location_Access.fire_shortcut = Player.can_climb_fire_temple;
		Location_Access.water_cracked = Player.can_enter_water;
		Location_Access.water_block = Player.can_enter_water && Player.lullaby && (Player.bow || Player.hover_boots);
		Location_Access.water_river = Player.current_water_keys >= 2 && Player.time;
		Location_Access.spirit_adultLeft = Player.can_enter_adult_spirit && Player.lullaby && (Player.bow || Player.hookshot || Player.bomb_bag || Player.has_chus);
		Location_Access.ganons_shadowTrial1 = Player.can_enter_ganons;
		Location_Access.gtg_aboveEyes = Player.can_save_carpenters;//&& Player.can_see;
		Location_Access.gtg_freestanding = Player.can_save_carpenters && (Player.current_gtg_keys >= 2 || (Player.bomb_bag || Player.has_chus) || (Player.can_climb_gtg_hole /*&& Player.can_see*/));
		Location_Access.gtg_right2 = Player.can_save_carpenters;
		Location_Access.gtg_right3 = Player.can_save_carpenters;
		Location_Access.gtg_left2 = Player.can_save_carpenters;
		Location_Access.gtg_left3 = Player.can_save_carpenters;
		Location_Access.gtg_left4 = Player.can_save_carpenters;
		Location_Access.gtg_final = Player.can_save_carpenters;
		Location_Access.well_backBombable = Player.storms;
		Location_Access.well_waterLeft = Player.storms;
		Location_Access.well_frontBombable = Player.storms;
		Location_Access.well_waterFront = Player.storms;
		Location_Access.well_locked2 = Player.storms;//&& Player.can_see ;
		Location_Access.well_basement = Player.storms;
		
		Location_Could_Peek.goron_maze_1 = true;
		Location_Could_Peek.goron_maze_2 = true;
		Location_Could_Peek.goron_maze_3 = true;
		Location_Could_Peek.trail_bombable = true;
		Location_Could_Peek.gerudo_hammer = CouldHave.fortress_access;
		Location_Could_Peek.gerudo_roof = CouldHave.fortress_access;
		Location_Could_Peek.dodongos_end_of_bridge = CouldHave.can_enter_dodongos;
		Location_Could_Peek.forest_blockRoom = CouldHave.hookshot && CouldHave.current_forest_keys >= 1 && CouldHave.bow;
		Location_Could_Peek.fire_hammer2 = CouldHave.can_enter_fire_temple;
		Location_Could_Peek.fire_upperMaze = CouldHave.can_climb_fire_temple;
		Location_Could_Peek.fire_shortcut = CouldHave.can_climb_fire_temple;
		Location_Could_Peek.water_cracked = CouldHave.can_enter_water;
		Location_Could_Peek.water_block = CouldHave.can_enter_water && CouldHave.lullaby && (CouldHave.bow || CouldHave.hover_boots);
		Location_Could_Peek.water_river = CouldHave.current_water_keys >= 2 && CouldHave.time;
		Location_Could_Peek.spirit_adultLeft = CouldHave.can_enter_adult_spirit && CouldHave.lullaby && (CouldHave.bow || CouldHave.hookshot || CouldHave.bomb_bag || Player.has_chus);
		Location_Could_Peek.ganons_shadowTrial1 = CouldHave.can_enter_ganons;
		Location_Could_Peek.gtg_aboveEyes = CouldHave.can_save_carpenters;//&& CouldHave.can_see;
		Location_Could_Peek.gtg_freestanding = CouldHave.can_save_carpenters && (CouldHave.current_gtg_keys >= 2 || (CouldHave.bomb_bag || Player.has_chus) || (CouldHave.can_climb_gtg_hole /*&& CouldHave.can_see*/));
		Location_Could_Peek.gtg_right2 = CouldHave.can_save_carpenters;
		Location_Could_Peek.gtg_right3 = CouldHave.can_save_carpenters;
		Location_Could_Peek.gtg_left2 = CouldHave.can_save_carpenters;
		Location_Could_Peek.gtg_left3 = CouldHave.can_save_carpenters;
		Location_Could_Peek.gtg_left4 = CouldHave.can_save_carpenters;
		Location_Could_Peek.gtg_final = CouldHave.can_save_carpenters;
		Location_Could_Peek.well_backBombable = CouldHave.storms;
		Location_Could_Peek.well_waterLeft = CouldHave.storms;
		Location_Could_Peek.well_frontBombable = CouldHave.storms;
		Location_Could_Peek.well_waterFront = CouldHave.storms;
		Location_Could_Peek.well_locked2 = CouldHave.storms;//&& CouldHave.can_see ;
		Location_Could_Peek.well_basement = CouldHave.storms;
	}
}
