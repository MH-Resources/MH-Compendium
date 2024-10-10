import CustomDrawerContent from "@/components/customDrawerContent";
import { Drawer } from "expo-router/drawer"

const DrawerLayout = () => {
  return (
    <Drawer screenOptions={{
      headerShown: false,
      drawerStyle:{backgroundColor:'black', width:260},
      drawerActiveTintColor:'gold',
      drawerInactiveTintColor:'white'
    }} 
      drawerContent={CustomDrawerContent}
      >

      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "First Screen",
          title: "First Screen",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="menu_burger/historique"
        options={{
          drawerLabel: "Historique",
          title: "Historique",
        }}
      />

      <Drawer.Screen
        name="menu_burger/questions"
        options={{
          drawerLabel: "Questions",
          title: "Questions",
        }}
      />

      <Drawer.Screen
        name="menu_burger/ressources_et_connaissances"
        options={{
          drawerLabel: "Ressources et connaissances",
          title: "Ressources et connaissances",
        }}
      />

      <Drawer.Screen
        name="menu_burger/options"
        options={{
          drawerLabel: "Options",
          title: "Options",
        }}
      />

      <Drawer.Screen
        name="login"
        options={{
          drawerLabel: "Login",
          title: "Login",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="menu_burger/github"
        options={{
          drawerLabel: "Github",
          title: "Github",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="acceuil"
        options={{
          drawerLabel: "Acceuil",
          title: "Acceuil",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_world"
        options={{
          drawerLabel: "MH World",
          title: "MH World",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise"
        options={{
          drawerLabel: "MH Rise",
          title: "MH Rise",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier" 
        options={{
          drawerLabel: "MH Frontier",
          title: "MH Frontier",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri"
        options={{
          drawerLabel: "MH Tri",
          title: "MH Tri",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="+not-found"
        options={{
          drawerLabel: "Error",
          title: "Error",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/meca/acceuil_meca"
        options={{
          drawerLabel: "Meca",
          title: "Meca",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/armes/choix_type"
        options={{
          drawerLabel: "Choix Type",
          title: "Choix Type",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/armes/arbre_des_armes"
        options={{
          drawerLabel: "Arbre des Armes",
          title: "Arbre des Armes",
          drawerItemStyle: { display: 'none' }
        }}
      />

    <Drawer.Screen
        name="monster_hunter_World/armes/fiche_arme"
        options={{
          drawerLabel: "Fiche Arme",
          title: "Fiche Arme",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/armure/choix_rank"
        options={{
          drawerLabel: "Choix Rank",
          title: "Choix Rank",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/armure/choix_armure"
        options={{
          drawerLabel: "Choix Armure",
          title: "Choix Armure",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/armure/fiche_armure"
        options={{
          drawerLabel: "Fiche Armure",
          title: "Fiche Armure",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/items/choix_item"
        options={{
          drawerLabel: "Choix Item",
          title: "Choix Item",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/items/fiche_item"
        options={{
          drawerLabel: "Fiche Item",
          title: "Fiche Item",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/monstres/choix_monstre"
        options={{
          drawerLabel: "Choix Monstre",
          title: "Choix Monstre",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/monstres/fiche_monstre"
        options={{
          drawerLabel: "Fiche Monstre",
          title: "Fiche Monstre",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/npc/choix_npc"
        options={{
          drawerLabel: "Choix NPC",
          title: "Choix NPC",
          drawerItemStyle: { display: 'none' }
        }}
      />

    <Drawer.Screen
        name="monster_hunter_World/npc/fiche_npc"
        options={{
          drawerLabel: "Fiche NPC",
          title: "Fiche NPC",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/meca/meca_basique/choix_difficulte"
        options={{
          drawerLabel: "Choix Difficulté",
          title: "Choix Difficulté",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/meca/meca_basique/nom_strat"
        options={{
          drawerLabel: "Nom de la Strat",
          title: "Nom de la Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/meca/meca_basique/fiche_strat"
        options={{
          drawerLabel: "Fiche Strat",
          title: "Fiche Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

<Drawer.Screen
        name="monster_hunter_World/meca/meca_monstres/choix_difficulte"
        options={{
          drawerLabel: "Choix Difficulté",
          title: "Choix Difficulté",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/meca/meca_monstres/nom_strat"
        options={{
          drawerLabel: "Nom de la Strat",
          title: "Nom de la Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/meca/meca_monstres/fiche_strat"
        options={{
          drawerLabel: "Fiche Strat",
          title: "Fiche Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/meca/mods_utiles/choix_mod"
        options={{
          drawerLabel: "Choix Mod",
          title: "Choix Mod",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/meca/mods_utiles/fiche_mod"
        options={{
          drawerLabel: "Fiche Mod",
          title: "Fiche Mod",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/meca/quest/choix_quest"
        options={{
          drawerLabel: "Choix Quest",
          title: "Choix Quest",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/meca/quest/fiche_quest"
        options={{
          drawerLabel: "Fiche Quest",
          title: "Fiche Quest",
          drawerItemStyle: { display: 'none' }
        }}
      />

<Drawer.Screen
        name="monster_hunter_World/meca/strats/choix_difficulte"
        options={{
          drawerLabel: "Choix Difficulté",
          title: "Choix Difficulté",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/meca/strats/nom_strat"
        options={{
          drawerLabel: "Nom de la Strat",
          title: "Nom de la Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/meca/strats/fiche_strat"
        options={{
          drawerLabel: "Fiche Strat",
          title: "Fiche Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/meca/maps/choix_map"
        options={{
          drawerLabel: "Choix Maps",
          title: "Choix Map",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_World/meca/maps/fiche_map"
        options={{
          drawerLabel: "Fiche Maps",
          title: "Fiche Map",
          drawerItemStyle: { display: 'none' }
        }}
      />

<Drawer.Screen
        name="monster_hunter_tri/meca/acceuil_meca"
        options={{
          drawerLabel: "Meca",
          title: "Meca",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/armes/choix_type"
        options={{
          drawerLabel: "Choix Type",
          title: "Choix Type",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/armes/arbre_des_armes"
        options={{
          drawerLabel: "Arbre des Armes",
          title: "Arbre des Armes",
          drawerItemStyle: { display: 'none' }
        }}
      />

    <Drawer.Screen
        name="monster_hunter_tri/armes/fiche_arme"
        options={{
          drawerLabel: "Fiche Arme",
          title: "Fiche Arme",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/armure/choix_rank"
        options={{
          drawerLabel: "Choix Rank",
          title: "Choix Rank",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/armure/choix_armure"
        options={{
          drawerLabel: "Choix Armure",
          title: "Choix Armure",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/armure/fiche_armure"
        options={{
          drawerLabel: "Fiche Armure",
          title: "Fiche Armure",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/items/choix_item"
        options={{
          drawerLabel: "Choix Item",
          title: "Choix Item",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/items/fiche_item"
        options={{
          drawerLabel: "Fiche Item",
          title: "Fiche Item",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/monstres/choix_monstre"
        options={{
          drawerLabel: "Choix Monstre",
          title: "Choix Monstre",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/monstres/fiche_monstre"
        options={{
          drawerLabel: "Fiche Monstre",
          title: "Fiche Monstre",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/npc/choix_npc"
        options={{
          drawerLabel: "Choix NPC",
          title: "Choix NPC",
          drawerItemStyle: { display: 'none' }
        }}
      />

    <Drawer.Screen
        name="monster_hunter_tri/npc/fiche_npc"
        options={{
          drawerLabel: "Fiche NPC",
          title: "Fiche NPC",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/meca/meca_basique/choix_difficulte"
        options={{
          drawerLabel: "Choix Difficulté",
          title: "Choix Difficulté",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/meca/meca_basique/nom_strat"
        options={{
          drawerLabel: "Nom de la Strat",
          title: "Nom de la Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/meca/meca_basique/fiche_strat"
        options={{
          drawerLabel: "Fiche Strat",
          title: "Fiche Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

<Drawer.Screen
        name="monster_hunter_tri/meca/meca_monstres/choix_difficulte"
        options={{
          drawerLabel: "Choix Difficulté",
          title: "Choix Difficulté",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/meca/meca_monstres/nom_strat"
        options={{
          drawerLabel: "Nom de la Strat",
          title: "Nom de la Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/meca/meca_monstres/fiche_strat"
        options={{
          drawerLabel: "Fiche Strat",
          title: "Fiche Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/meca/mods_utiles/choix_mod"
        options={{
          drawerLabel: "Choix Mod",
          title: "Choix Mod",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/meca/mods_utiles/fiche_mod"
        options={{
          drawerLabel: "Fiche Mod",
          title: "Fiche Mod",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/meca/quest/choix_quest"
        options={{
          drawerLabel: "Choix Quest",
          title: "Choix Quest",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/meca/quest/fiche_quest"
        options={{
          drawerLabel: "Fiche Quest",
          title: "Fiche Quest",
          drawerItemStyle: { display: 'none' }
        }}
      />

<Drawer.Screen
        name="monster_hunter_tri/meca/strats/choix_difficulte"
        options={{
          drawerLabel: "Choix Difficulté",
          title: "Choix Difficulté",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/meca/strats/nom_strat"
        options={{
          drawerLabel: "Nom de la Strat",
          title: "Nom de la Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/meca/strats/fiche_strat"
        options={{
          drawerLabel: "Fiche Strat",
          title: "Fiche Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/meca/maps/choix_map"
        options={{
          drawerLabel: "Choix Maps",
          title: "Choix Map",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_tri/meca/maps/fiche_map"
        options={{
          drawerLabel: "Fiche Maps",
          title: "Fiche Map",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/meca/acceuil_meca"
        options={{
          drawerLabel: "Meca",
          title: "Meca",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/armes/choix_type"
        options={{
          drawerLabel: "Choix Type",
          title: "Choix Type",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/armes/arbre_des_armes"
        options={{
          drawerLabel: "Arbre des Armes",
          title: "Arbre des Armes",
          drawerItemStyle: { display: 'none' }
        }}
      />

    <Drawer.Screen
        name="monster_hunter_rise/armes/fiche_arme"
        options={{
          drawerLabel: "Fiche Arme",
          title: "Fiche Arme",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/armure/choix_rank"
        options={{
          drawerLabel: "Choix Rank",
          title: "Choix Rank",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/armure/choix_armure"
        options={{
          drawerLabel: "Choix Armure",
          title: "Choix Armure",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/armure/fiche_armure"
        options={{
          drawerLabel: "Fiche Armure",
          title: "Fiche Armure",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/items/choix_item"
        options={{
          drawerLabel: "Choix Item",
          title: "Choix Item",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/items/fiche_item"
        options={{
          drawerLabel: "Fiche Item",
          title: "Fiche Item",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/monstres/choix_monstre"
        options={{
          drawerLabel: "Choix Monstre",
          title: "Choix Monstre",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/monstres/fiche_monstre"
        options={{
          drawerLabel: "Fiche Monstre",
          title: "Fiche Monstre",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/npc/choix_npc"
        options={{
          drawerLabel: "Choix NPC",
          title: "Choix NPC",
          drawerItemStyle: { display: 'none' }
        }}
      />

    <Drawer.Screen
        name="monster_hunter_rise/npc/fiche_npc"
        options={{
          drawerLabel: "Fiche NPC",
          title: "Fiche NPC",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/meca/meca_basique/choix_difficulte"
        options={{
          drawerLabel: "Choix Difficulté",
          title: "Choix Difficulté",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/meca/meca_basique/nom_strat"
        options={{
          drawerLabel: "Nom de la Strat",
          title: "Nom de la Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/meca/meca_basique/fiche_strat"
        options={{
          drawerLabel: "Fiche Strat",
          title: "Fiche Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

<Drawer.Screen
        name="monster_hunter_rise/meca/meca_monstres/choix_difficulte"
        options={{
          drawerLabel: "Choix Difficulté",
          title: "Choix Difficulté",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/meca/meca_monstres/nom_strat"
        options={{
          drawerLabel: "Nom de la Strat",
          title: "Nom de la Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/meca/meca_monstres/fiche_strat"
        options={{
          drawerLabel: "Fiche Strat",
          title: "Fiche Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/meca/mods_utiles/choix_mod"
        options={{
          drawerLabel: "Choix Mod",
          title: "Choix Mod",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/meca/mods_utiles/fiche_mod"
        options={{
          drawerLabel: "Fiche Mod",
          title: "Fiche Mod",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/meca/quest/choix_quest"
        options={{
          drawerLabel: "Choix Quest",
          title: "Choix Quest",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/meca/quest/fiche_quest"
        options={{
          drawerLabel: "Fiche Quest",
          title: "Fiche Quest",
          drawerItemStyle: { display: 'none' }
        }}
      />

<Drawer.Screen
        name="monster_hunter_rise/meca/strats/choix_difficulte"
        options={{
          drawerLabel: "Choix Difficulté",
          title: "Choix Difficulté",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/meca/strats/nom_strat"
        options={{
          drawerLabel: "Nom de la Strat",
          title: "Nom de la Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/meca/strats/fiche_strat"
        options={{
          drawerLabel: "Fiche Strat",
          title: "Fiche Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/meca/maps/choix_map"
        options={{
          drawerLabel: "Choix Maps",
          title: "Choix Map",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_rise/meca/maps/fiche_map"
        options={{
          drawerLabel: "Fiche Maps",
          title: "Fiche Map",
          drawerItemStyle: { display: 'none' }
        }}
      />

<Drawer.Screen
        name="monster_hunter_frontier/meca/acceuil_meca"
        options={{
          drawerLabel: "Meca",
          title: "Meca",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/armes/choix_type"
        options={{
          drawerLabel: "Choix Type",
          title: "Choix Type",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/armes/arbre_des_armes"
        options={{
          drawerLabel: "Arbre des Armes",
          title: "Arbre des Armes",
          drawerItemStyle: { display: 'none' }
        }}
      />

    <Drawer.Screen
        name="monster_hunter_frontier/armes/fiche_arme"
        options={{
          drawerLabel: "Fiche Arme",
          title: "Fiche Arme",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/armure/choix_rank"
        options={{
          drawerLabel: "Choix Rank",
          title: "Choix Rank",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/armure/choix_armure"
        options={{
          drawerLabel: "Choix Armure",
          title: "Choix Armure",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/armure/fiche_armure"
        options={{
          drawerLabel: "Fiche Armure",
          title: "Fiche Armure",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/items/choix_item"
        options={{
          drawerLabel: "Choix Item",
          title: "Choix Item",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/items/fiche_item"
        options={{
          drawerLabel: "Fiche Item",
          title: "Fiche Item",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/monstres/choix_monstre"
        options={{
          drawerLabel: "Choix Monstre",
          title: "Choix Monstre",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/monstres/fiche_monstre"
        options={{
          drawerLabel: "Fiche Monstre",
          title: "Fiche Monstre",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/npc/choix_npc"
        options={{
          drawerLabel: "Choix NPC",
          title: "Choix NPC",
          drawerItemStyle: { display: 'none' }
        }}
      />

    <Drawer.Screen
        name="monster_hunter_frontier/npc/fiche_npc"
        options={{
          drawerLabel: "Fiche NPC",
          title: "Fiche NPC",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/meca/meca_basique/choix_difficulte"
        options={{
          drawerLabel: "Choix Difficulté",
          title: "Choix Difficulté",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/meca/meca_basique/nom_strat"
        options={{
          drawerLabel: "Nom de la Strat",
          title: "Nom de la Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/meca/meca_basique/fiche_strat"
        options={{
          drawerLabel: "Fiche Strat",
          title: "Fiche Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

<Drawer.Screen
        name="monster_hunter_frontier/meca/meca_monstres/choix_difficulte"
        options={{
          drawerLabel: "Choix Difficulté",
          title: "Choix Difficulté",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/meca/meca_monstres/nom_strat"
        options={{
          drawerLabel: "Nom de la Strat",
          title: "Nom de la Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/meca/meca_monstres/fiche_strat"
        options={{
          drawerLabel: "Fiche Strat",
          title: "Fiche Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/meca/mods_utiles/choix_mod"
        options={{
          drawerLabel: "Choix Mod",
          title: "Choix Mod",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/meca/mods_utiles/fiche_mod"
        options={{
          drawerLabel: "Fiche Mod",
          title: "Fiche Mod",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/meca/quest/choix_quest"
        options={{
          drawerLabel: "Choix Quest",
          title: "Choix Quest",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/meca/quest/fiche_quest"
        options={{
          drawerLabel: "Fiche Quest",
          title: "Fiche Quest",
          drawerItemStyle: { display: 'none' }
        }}
      />

<Drawer.Screen
        name="monster_hunter_frontier/meca/strats/choix_difficulte"
        options={{
          drawerLabel: "Choix Difficulté",
          title: "Choix Difficulté",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/meca/strats/nom_strat"
        options={{
          drawerLabel: "Nom de la Strat",
          title: "Nom de la Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/meca/strats/fiche_strat"
        options={{
          drawerLabel: "Fiche Strat",
          title: "Fiche Strat",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/meca/maps/choix_map"
        options={{
          drawerLabel: "Choix Maps",
          title: "Choix Map",
          drawerItemStyle: { display: 'none' }
        }}
      />

      <Drawer.Screen
        name="monster_hunter_frontier/meca/maps/fiche_map"
        options={{
          drawerLabel: "Fiche Maps",
          title: "Fiche Map",
          drawerItemStyle: { display: 'none' }
        }}
      />

    </Drawer>
  );
}

export default DrawerLayout;
