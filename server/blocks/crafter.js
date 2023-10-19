// Import necessary modules and libraries
    import { world, BlockPermutation,system ,ItemStack} from '@minecraft/server';
import { ProcessHandler } from '../../library/classes/Process';
import { RecipeBuilder } from '../util/Recipes/r';

    
    // Define a constant to represent the max raycast distance
    const raycast = {
      maxDistance: 1
    };


const builder = new RecipeBuilder();

builder
  .createRecipe("minecraft:acacia_boat")
  .addIngredients("minecraft:acacia_boat", [{item: "minecraft:planks", count: 5, current: 0}])
  .setResult("minecraft:acacia_boat", 1);

builder
  .createRecipe("minecraft:acacia_chest_boat")
  .addIngredients("minecraft:acacia_chest_boat", [{item: "minecraft:chest", count: 1, current: 0}, {item: "minecraft:boat", count: 1, current: 0}])
  .setResult("minecraft:acacia_chest_boat", 1);

builder
  .createRecipe("minecraft:acacia_door")
  .addIngredients("minecraft:acacia_door", [{item: "minecraft:planks", count: 6, current: 0}])
  .setResult("minecraft:acacia_door", 3);

builder
  .createRecipe("minecraft:acacia_fence")
  .addIngredients("minecraft:acacia_fence", [{item: "minecraft:planks", count: 6, current: 0}, {item: "minecraft:stick", count: 6, current: 0}])
  .setResult("minecraft:acacia_fence", 4);

builder
  .createRecipe("minecraft:acacia_hanging_sign")
  .addIngredients("minecraft:acacia_hanging_sign", [{item: "minecraft:chain", count: 2, current: 0}, {item: "minecraft:stripped_acacia_log", count: 6, current: 0}])
  .setResult("minecraft:acacia_hanging_sign", 6);

builder
  .createRecipe("minecraft:acacia_planks")
  .addIngredients("minecraft:acacia_planks", [{item: "minecraft:log2", count: 1, current: 0}, {item: "minecraft:stripped_acacia_log", count: 1, current: 0}, {item: "minecraft:wood", count: 2, current: 0}])
  .setResult("minecraft:acacia_planks", 16);

builder
  .createRecipe("minecraft:acacia_stairs")
  .addIngredients("minecraft:acacia_stairs", [{item: "minecraft:planks", count: 6, current: 0}])
  .setResult("minecraft:acacia_stairs", 4);

builder
  .createRecipe("minecraft:acacia_wood")
  .addIngredients("minecraft:acacia_wood", [{item: "minecraft:log2", count: 4, current: 0}, {item: "minecraft:planks", count: 3, current: 0}, {item: "minecraft:stripped_acacia_log", count: 4, current: 0}])
  .setResult("minecraft:acacia_wood", 12);

builder
  .createRecipe("minecraft:activator_rail")
  .addIngredients("minecraft:activator_rail", [{item: "minecraft:iron_ingot", count: 6, current: 0}, {item: "minecraft:stick", count: 2, current: 0}, {item: "minecraft:redstone_torch", count: 1, current: 0}])
  .setResult("minecraft:activator_rail", 6);

builder
  .createRecipe("minecraft:amethyst_block")
  .addIngredients("minecraft:amethyst_block", [{item: "minecraft:amethyst_shard", count: 4, current: 0}])
  .setResult("minecraft:amethyst_block", 1);

builder
  .createRecipe("minecraft:andesite")
  .addIngredients("minecraft:andesite", [{item: "minecraft:stone", count: 13, current: 0}, {item: "minecraft:cobblestone", count: 1, current: 0}])
  .setResult("minecraft:andesite", 12);

builder
  .createRecipe("minecraft:anvil")
  .addIngredients("minecraft:anvil", [{item: "minecraft:iron_block", count: 3, current: 0}, {item: "minecraft:iron_ingot", count: 4, current: 0}])
  .setResult("minecraft:anvil", 1);

builder
  .createRecipe("minecraft:armor_stand")
  .addIngredients("minecraft:armor_stand", [{item: "minecraft:stick", count: 6, current: 0}, {item: "minecraft:double_stone_slab", count: 1, current: 0}])
  .setResult("minecraft:armor_stand", 1);

builder
  .createRecipe("minecraft:arrow")
  .addIngredients("minecraft:arrow", [{item: "minecraft:flint", count: 1, current: 0}, {item: "minecraft:stick", count: 1, current: 0}, {item: "minecraft:feather", count: 1, current: 0}])
  .setResult("minecraft:arrow", 4);

builder
  .createRecipe("minecraft:bamboo_block")
  .addIngredients("minecraft:bamboo_block", [{item: "minecraft:bamboo", count: 9, current: 0}])
  .setResult("minecraft:bamboo_block", 1);

builder
  .createRecipe("minecraft:bamboo_button")
  .addIngredients("minecraft:bamboo_button", [{item: "minecraft:bamboo_planks", count: 1, current: 0}])
  .setResult("minecraft:bamboo_button", 1);

builder
  .createRecipe("minecraft:bamboo_chest_raft")
  .addIngredients("minecraft:bamboo_chest_raft", [{item: "minecraft:chest", count: 1, current: 0}, {item: "minecraft:boat", count: 1, current: 0}])
  .setResult("minecraft:bamboo_chest_raft", 1);

builder
  .createRecipe("minecraft:bamboo_door")
  .addIngredients("minecraft:bamboo_door", [{item: "minecraft:bamboo_planks", count: 6, current: 0}])
  .setResult("minecraft:bamboo_door", 3);

builder
  .createRecipe("minecraft:bamboo_fence")
  .addIngredients("minecraft:bamboo_fence", [{item: "minecraft:bamboo_planks", count: 6, current: 0}, {item: "minecraft:stick", count: 6, current: 0}])
  .setResult("minecraft:bamboo_fence", 4);

builder
  .createRecipe("minecraft:bamboo_hanging_sign")
  .addIngredients("minecraft:bamboo_hanging_sign", [{item: "minecraft:chain", count: 2, current: 0}, {item: "minecraft:stripped_bamboo_block", count: 6, current: 0}])
  .setResult("minecraft:bamboo_hanging_sign", 6);

builder
  .createRecipe("minecraft:bamboo_mosaic")
  .addIngredients("minecraft:bamboo_mosaic", [{item: "minecraft:bamboo_slab", count: 2, current: 0}, {item: "minecraft:bamboo_mosaic", count: 9, current: 0}])
  .setResult("minecraft:bamboo_mosaic", 11);

builder
  .createRecipe("minecraft:bamboo_planks")
  .addIngredients("minecraft:bamboo_planks", [{item: "minecraft:bamboo_block", count: 1, current: 0}, {item: "minecraft:stripped_bamboo_block", count: 1, current: 0}])
  .setResult("minecraft:bamboo_planks", 4);

builder
  .createRecipe("minecraft:bamboo_pressure_plate")
  .addIngredients("minecraft:bamboo_pressure_plate", [{item: "minecraft:bamboo_planks", count: 2, current: 0}])
  .setResult("minecraft:bamboo_pressure_plate", 1);

builder
  .createRecipe("minecraft:bamboo_raft")
  .addIngredients("minecraft:bamboo_raft", [{item: "minecraft:bamboo_planks", count: 5, current: 0}])
  .setResult("minecraft:bamboo_raft", 1);

builder
  .createRecipe("minecraft:bamboo_sign")
  .addIngredients("minecraft:bamboo_sign", [{item: "minecraft:bamboo_planks", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:bamboo_sign", 3);

builder
  .createRecipe("minecraft:bamboo_slab")
  .addIngredients("minecraft:bamboo_slab", [{item: "minecraft:bamboo_planks", count: 3, current: 0}])
  .setResult("minecraft:bamboo_slab", 6);

builder
  .createRecipe("minecraft:bamboo_stairs")
  .addIngredients("minecraft:bamboo_stairs", [{item: "minecraft:bamboo_planks", count: 6, current: 0}])
  .setResult("minecraft:bamboo_stairs", 4);

builder
  .createRecipe("minecraft:bamboo_trapdoor")
  .addIngredients("minecraft:bamboo_trapdoor", [{item: "minecraft:bamboo_planks", count: 6, current: 0}])
  .setResult("minecraft:bamboo_trapdoor", 2);

builder
  .createRecipe("minecraft:banner_pattern_bricks")
  .addIngredients("minecraft:banner_pattern_bricks", [{item: "minecraft:paper", count: 1, current: 0}, {item: "minecraft:brick_block", count: 1, current: 0}])
  .setResult("minecraft:banner_pattern_bricks", 1);

builder
  .createRecipe("minecraft:banner_pattern_creeper")
  .addIngredients("minecraft:banner_pattern_creeper", [{item: "minecraft:paper", count: 1, current: 0}, {item: "minecraft:skull", count: 1, current: 0}])
  .setResult("minecraft:banner_pattern_creeper", 1);

builder
  .createRecipe("minecraft:banner_pattern_flower")
  .addIngredients("minecraft:banner_pattern_flower", [{item: "minecraft:paper", count: 1, current: 0}, {item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:banner_pattern_flower", 1);

builder
  .createRecipe("minecraft:banner_pattern_skull")
  .addIngredients("minecraft:banner_pattern_skull", [{item: "minecraft:paper", count: 1, current: 0}, {item: "minecraft:skull", count: 1, current: 0}])
  .setResult("minecraft:banner_pattern_skull", 1);

builder
  .createRecipe("minecraft:banner_pattern_thing")
  .addIngredients("minecraft:banner_pattern_thing", [{item: "minecraft:paper", count: 1, current: 0}, {item: "minecraft:appleenchanted", count: 1, current: 0}])
  .setResult("minecraft:banner_pattern_thing", 1);

builder
  .createRecipe("minecraft:banner_pattern_vines")
  .addIngredients("minecraft:banner_pattern_vines", [{item: "minecraft:paper", count: 1, current: 0}, {item: "minecraft:vine", count: 1, current: 0}])
  .setResult("minecraft:banner_pattern_vines", 1);

builder
  .createRecipe("minecraft:barrel_with_planks")
  .addIngredients("minecraft:barrel_with_planks", [])
  .setResult("minecraft:barrel_with_planks", 1);

builder
  .createRecipe("minecraft:barrel")
  .addIngredients("minecraft:barrel", [{item: "minecraft:stick", count: 18, current: 0}, {item: "crimson_slab", count: 2, current: 0}, {item: "mangrove_slab", count: 2, current: 0}, {item: "warped_slab", count: 2, current: 0}])
  .setResult("minecraft:barrel", 8);

builder
  .createRecipe("minecraft:basic_map_to_enhanced")
  .addIngredients("minecraft:basic_map_to_enhanced", [{item: "minecraft:emptymap", count: 1, current: 0}, {item: "minecraft:compass", count: 1, current: 0}])
  .setResult("minecraft:basic_map_to_enhanced", 1);

builder
  .createRecipe("minecraft:beacon")
  .addIngredients("minecraft:beacon", [{item: "minecraft:glass", count: 5, current: 0}, {item: "minecraft:netherstar", count: 1, current: 0}, {item: "minecraft:obsidian", count: 3, current: 0}])
  .setResult("minecraft:beacon", 1);

builder
  .createRecipe("minecraft:beehive")
  .addIngredients("minecraft:beehive", [{item: "minecraft:honeycomb", count: 3, current: 0}, {item: "crimson_planks", count: 6, current: 0}, {item: "honeycomb", count: 9, current: 0}, {item: "mangrove_planks", count: 6, current: 0}, {item: "warped_planks", count: 6, current: 0}])
  .setResult("minecraft:beehive", 4);

builder
  .createRecipe("minecraft:beetroot_soup")
  .addIngredients("minecraft:beetroot_soup", [{item: "minecraft:bowl", count: 1, current: 0}, {item: "minecraft:beetroot", count: 6, current: 0}])
  .setResult("minecraft:beetroot_soup", 1);

builder
  .createRecipe("minecraft:birch_boat")
  .addIngredients("minecraft:birch_boat", [{item: "minecraft:planks", count: 5, current: 0}])
  .setResult("minecraft:birch_boat", 1);

builder
  .createRecipe("minecraft:birch_chest_boat")
  .addIngredients("minecraft:birch_chest_boat", [{item: "minecraft:chest", count: 1, current: 0}, {item: "minecraft:boat", count: 1, current: 0}])
  .setResult("minecraft:birch_chest_boat", 1);

builder
  .createRecipe("minecraft:birch_door")
  .addIngredients("minecraft:birch_door", [{item: "minecraft:planks", count: 6, current: 0}])
  .setResult("minecraft:birch_door", 3);

builder
  .createRecipe("minecraft:birch_fence")
  .addIngredients("minecraft:birch_fence", [{item: "minecraft:planks", count: 6, current: 0}, {item: "minecraft:stick", count: 6, current: 0}])
  .setResult("minecraft:birch_fence", 4);

builder
  .createRecipe("minecraft:birch_hanging_sign")
  .addIngredients("minecraft:birch_hanging_sign", [{item: "minecraft:chain", count: 2, current: 0}, {item: "minecraft:stripped_birch_log", count: 6, current: 0}])
  .setResult("minecraft:birch_hanging_sign", 6);

builder
  .createRecipe("minecraft:birch_planks")
  .addIngredients("minecraft:birch_planks", [{item: "minecraft:log", count: 1, current: 0}, {item: "minecraft:stripped_birch_log", count: 1, current: 0}, {item: "minecraft:wood", count: 2, current: 0}])
  .setResult("minecraft:birch_planks", 16);

builder
  .createRecipe("minecraft:birch_stairs")
  .addIngredients("minecraft:birch_stairs", [{item: "minecraft:planks", count: 6, current: 0}])
  .setResult("minecraft:birch_stairs", 4);

builder
  .createRecipe("minecraft:birch_wood")
  .addIngredients("minecraft:birch_wood", [{item: "minecraft:log", count: 4, current: 0}, {item: "minecraft:planks", count: 3, current: 0}, {item: "minecraft:stripped_birch_log", count: 4, current: 0}])
  .setResult("minecraft:birch_wood", 12);

builder
  .createRecipe("minecraft:blackstone_slab")
  .addIngredients("minecraft:blackstone_slab", [{item: "minecraft:blackstone", count: 3, current: 0}])
  .setResult("minecraft:blackstone_slab", 6);

builder
  .createRecipe("minecraft:blackstone_stairs")
  .addIngredients("minecraft:blackstone_stairs", [{item: "minecraft:blackstone", count: 6, current: 0}])
  .setResult("minecraft:blackstone_stairs", 4);

builder
  .createRecipe("minecraft:blackstone_wall")
  .addIngredients("minecraft:blackstone_wall", [{item: "minecraft:blackstone", count: 6, current: 0}])
  .setResult("minecraft:blackstone_wall", 6);

builder
  .createRecipe("minecraft:black_banner")
  .addIngredients("minecraft:black_banner", [{item: "minecraft:wool", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:black_banner", 1);

builder
  .createRecipe("minecraft:black_candle")
  .addIngredients("minecraft:black_candle", [{item: "minecraft:candle", count: 2, current: 0}, {item: "minecraft:dye", count: 2, current: 0}])
  .setResult("minecraft:black_candle", 2);

builder
  .createRecipe("minecraft:black_carpet")
  .addIngredients("minecraft:black_carpet", [{item: "minecraft:wool", count: 2, current: 0}, {item: "minecraft:carpet", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:black_carpet", 11);

builder
  .createRecipe("minecraft:black_concrete_powder")
  .addIngredients("minecraft:black_concrete_powder", [{item: "minecraft:dye", count: 2, current: 0}, {item: "minecraft:sand", count: 8, current: 0}, {item: "minecraft:gravel", count: 8, current: 0}])
  .setResult("minecraft:black_concrete_powder", 16);

builder
  .createRecipe("minecraft:black_dye_from_ink_sac")
  .addIngredients("minecraft:black_dye_from_ink_sac", [{item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:black_dye_from_ink_sac", 1);

builder
  .createRecipe("minecraft:black_dye_from_wither_rose")
  .addIngredients("minecraft:black_dye_from_wither_rose", [{item: "minecraft:wither_rose", count: 1, current: 0}])
  .setResult("minecraft:black_dye_from_wither_rose", 1);

builder
  .createRecipe("minecraft:black_stained_glass")
  .addIngredients("minecraft:black_stained_glass", [{item: "minecraft:glass", count: 16, current: 0}, {item: "minecraft:dye", count: 3, current: 0}, {item: "minecraft:black_stained_glass", count: 6, current: 0}, {item: "minecraft:glass_pane", count: 8, current: 0}])
  .setResult("minecraft:black_stained_glass", 40);

builder
  .createRecipe("minecraft:black_stained_hardened_clay")
  .addIngredients("minecraft:black_stained_hardened_clay", [{item: "minecraft:hardened_clay", count: 16, current: 0}, {item: "minecraft:dye", count: 2, current: 0}])
  .setResult("minecraft:black_stained_hardened_clay", 16);

builder
  .createRecipe("minecraft:blast_furnace")
  .addIngredients("minecraft:blast_furnace", [{item: "minecraft:iron_ingot", count: 5, current: 0}, {item: "minecraft:furnace", count: 1, current: 0}, {item: "minecraft:smooth_stone", count: 3, current: 0}])
  .setResult("minecraft:blast_furnace", 1);

builder
  .createRecipe("minecraft:blaze_powder")
  .addIngredients("minecraft:blaze_powder", [{item: "minecraft:blaze_rod", count: 1, current: 0}])
  .setResult("minecraft:blaze_powder", 2);

builder
  .createRecipe("minecraft:blue_banner")
  .addIngredients("minecraft:blue_banner", [{item: "minecraft:wool", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:blue_banner", 1);

builder
  .createRecipe("minecraft:blue_candle")
  .addIngredients("minecraft:blue_candle", [{item: "minecraft:candle", count: 2, current: 0}, {item: "minecraft:dye", count: 2, current: 0}])
  .setResult("minecraft:blue_candle", 2);

builder
  .createRecipe("minecraft:blue_carpet")
  .addIngredients("minecraft:blue_carpet", [{item: "minecraft:wool", count: 2, current: 0}, {item: "minecraft:carpet", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:blue_carpet", 11);

builder
  .createRecipe("minecraft:blue_concrete_powder")
  .addIngredients("minecraft:blue_concrete_powder", [{item: "minecraft:dye", count: 2, current: 0}, {item: "minecraft:sand", count: 8, current: 0}, {item: "minecraft:gravel", count: 8, current: 0}])
  .setResult("minecraft:blue_concrete_powder", 16);

builder
  .createRecipe("minecraft:blue_dye_from_cornflower")
  .addIngredients("minecraft:blue_dye_from_cornflower", [{item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:blue_dye_from_cornflower", 1);

builder
  .createRecipe("minecraft:blue_dye_from_lapis_lazuli")
  .addIngredients("minecraft:blue_dye_from_lapis_lazuli", [{item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:blue_dye_from_lapis_lazuli", 1);

builder
  .createRecipe("minecraft:blue_ice")
  .addIngredients("minecraft:blue_ice", [{item: "minecraft:packed_ice", count: 9, current: 0}])
  .setResult("minecraft:blue_ice", 1);

builder
  .createRecipe("minecraft:blue_stained_glass")
  .addIngredients("minecraft:blue_stained_glass", [{item: "minecraft:glass", count: 16, current: 0}, {item: "minecraft:dye", count: 3, current: 0}, {item: "minecraft:blue_stained_glass", count: 6, current: 0}, {item: "minecraft:glass_pane", count: 8, current: 0}])
  .setResult("minecraft:blue_stained_glass", 40);

builder
  .createRecipe("minecraft:blue_stained_hardened_clay")
  .addIngredients("minecraft:blue_stained_hardened_clay", [{item: "minecraft:hardened_clay", count: 16, current: 0}, {item: "minecraft:dye", count: 2, current: 0}])
  .setResult("minecraft:blue_stained_hardened_clay", 16);

builder
  .createRecipe("minecraft:boat")
  .addIngredients("minecraft:boat", [{item: "minecraft:planks", count: 5, current: 0}])
  .setResult("minecraft:boat", 1);

builder
  .createRecipe("minecraft:bone_block")
  .addIngredients("minecraft:bone_block", [{item: "minecraft:dye", count: 9, current: 0}])
  .setResult("minecraft:bone_block", 1);

builder
  .createRecipe("minecraft:bone_meal_from_block")
  .addIngredients("minecraft:bone_meal_from_block", [{item: "minecraft:bone_block", count: 1, current: 0}])
  .setResult("minecraft:bone_meal_from_block", 9);

builder
  .createRecipe("minecraft:bone_meal_from_bone")
  .addIngredients("minecraft:bone_meal_from_bone", [{item: "minecraft:bone", count: 1, current: 0}])
  .setResult("minecraft:bone_meal_from_bone", 3);

builder
  .createRecipe("minecraft:book")
  .addIngredients("minecraft:book", [{item: "minecraft:paper", count: 3, current: 0}, {item: "minecraft:leather", count: 1, current: 0}, {item: "crimson_planks", count: 6, current: 0}, {item: "book", count: 9, current: 0}, {item: "mangrove_planks", count: 6, current: 0}, {item: "warped_planks", count: 6, current: 0}])
  .setResult("minecraft:book", 4);

builder
  .createRecipe("minecraft:Bookshelf_woodplanks_recipeId")
  .addIngredients("minecraft:Bookshelf_woodplanks_recipeId", [{item: "book", count: 3, current: 0}])
  .setResult("minecraft:Bookshelf_woodplanks_recipeId", 1);

builder
  .createRecipe("minecraft:bow")
  .addIngredients("minecraft:bow", [{item: "minecraft:stick", count: 3, current: 0}, {item: "minecraft:string", count: 3, current: 0}, {item: "crimson_planks", count: 3, current: 0}, {item: "mangrove_planks", count: 3, current: 0}, {item: "warped_planks", count: 3, current: 0}])
  .setResult("minecraft:bow", 13);

builder
  .createRecipe("minecraft:Bowl_recipeId")
  .addIngredients("minecraft:Bowl_recipeId", [])
  .setResult("minecraft:Bowl_recipeId", 4);

builder
  .createRecipe("minecraft:bread")
  .addIngredients("minecraft:bread", [{item: "minecraft:wheat", count: 3, current: 0}])
  .setResult("minecraft:bread", 1);

builder
  .createRecipe("minecraft:brewing_stand")
  .addIngredients("minecraft:brewing_stand", [{item: "minecraft:blaze_rod", count: 3, current: 0}, {item: "minecraft:blackstone", count: 3, current: 0}, {item: "minecraft:cobbled_deepslate", count: 3, current: 0}])
  .setResult("minecraft:brewing_stand", 3);

builder
  .createRecipe("minecraft:brick_block")
  .addIngredients("minecraft:brick_block", [{item: "minecraft:brick", count: 4, current: 0}])
  .setResult("minecraft:brick_block", 1);

builder
  .createRecipe("minecraft:brick_stairs")
  .addIngredients("minecraft:brick_stairs", [{item: "minecraft:brick_block", count: 6, current: 0}])
  .setResult("minecraft:brick_stairs", 4);

builder
  .createRecipe("minecraft:brick_wall")
  .addIngredients("minecraft:brick_wall", [{item: "minecraft:brick_block", count: 6, current: 0}])
  .setResult("minecraft:brick_wall", 6);

builder
  .createRecipe("minecraft:brown_banner")
  .addIngredients("minecraft:brown_banner", [{item: "minecraft:wool", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:brown_banner", 1);

builder
  .createRecipe("minecraft:brown_candle")
  .addIngredients("minecraft:brown_candle", [{item: "minecraft:candle", count: 2, current: 0}, {item: "minecraft:dye", count: 2, current: 0}])
  .setResult("minecraft:brown_candle", 2);

builder
  .createRecipe("minecraft:brown_carpet")
  .addIngredients("minecraft:brown_carpet", [{item: "minecraft:wool", count: 2, current: 0}, {item: "minecraft:carpet", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:brown_carpet", 11);

builder
  .createRecipe("minecraft:brown_concrete_powder")
  .addIngredients("minecraft:brown_concrete_powder", [{item: "minecraft:dye", count: 2, current: 0}, {item: "minecraft:sand", count: 8, current: 0}, {item: "minecraft:gravel", count: 8, current: 0}])
  .setResult("minecraft:brown_concrete_powder", 16);

builder
  .createRecipe("minecraft:brown_dye_from_cocoa_beans")
  .addIngredients("minecraft:brown_dye_from_cocoa_beans", [{item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:brown_dye_from_cocoa_beans", 1);

builder
  .createRecipe("minecraft:brown_stained_glass")
  .addIngredients("minecraft:brown_stained_glass", [{item: "minecraft:glass", count: 16, current: 0}, {item: "minecraft:dye", count: 3, current: 0}, {item: "minecraft:brown_stained_glass", count: 6, current: 0}, {item: "minecraft:glass_pane", count: 8, current: 0}])
  .setResult("minecraft:brown_stained_glass", 40);

builder
  .createRecipe("minecraft:brown_stained_hardened_clay")
  .addIngredients("minecraft:brown_stained_hardened_clay", [{item: "minecraft:hardened_clay", count: 16, current: 0}, {item: "minecraft:dye", count: 2, current: 0}])
  .setResult("minecraft:brown_stained_hardened_clay", 16);

builder
  .createRecipe("minecraft:brush")
  .addIngredients("minecraft:brush", [{item: "minecraft:feather", count: 1, current: 0}, {item: "minecraft:copper_ingot", count: 1, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:brush", 1);

builder
  .createRecipe("minecraft:bucket")
  .addIngredients("minecraft:bucket", [{item: "minecraft:iron_ingot", count: 3, current: 0}])
  .setResult("minecraft:bucket", 1);

builder
  .createRecipe("minecraft:cake")
  .addIngredients("minecraft:cake", [{item: "minecraft:bucket", count: 3, current: 0}, {item: "minecraft:sugar", count: 2, current: 0}, {item: "minecraft:egg", count: 1, current: 0}, {item: "minecraft:wheat", count: 3, current: 0}])
  .setResult("minecraft:cake", 3);

builder
  .createRecipe("minecraft:calibrated_sculk_sensor")
  .addIngredients("minecraft:calibrated_sculk_sensor", [{item: "minecraft:amethyst_shard", count: 3, current: 0}, {item: "minecraft:sculk_sensor", count: 1, current: 0}])
  .setResult("minecraft:calibrated_sculk_sensor", 1);

builder
  .createRecipe("minecraft:campfire")
  .addIngredients("minecraft:campfire", [{item: "minecraft:stick", count: 72, current: 0}, {item: "minecraft:charcoal", count: 13, current: 0}, {item: "minecraft:log", count: 3, current: 0}, {item: "minecraft:log2", count: 6, current: 0}, {item: "minecraft:mangrove_log", count: 3, current: 0}, {item: "minecraft:mangrove_wood", count: 6, current: 0}, {item: "minecraft:stripped_acacia_log", count: 6, current: 0}, {item: "minecraft:stripped_birch_log", count: 6, current: 0}, {item: "minecraft:stripped_dark_oak_log", count: 6, current: 0}, {item: "minecraft:stripped_jungle_log", count: 6, current: 0}, {item: "minecraft:stripped_mangrove_log", count: 6, current: 0}, {item: "minecraft:stripped_mangrove_wood", count: 3, current: 0}, {item: "minecraft:stripped_oak_log", count: 6, current: 0}, {item: "minecraft:stripped_spruce_log", count: 6, current: 0}, {item: "minecraft:wood", count: 6, current: 0}, {item: "stick", count: 18, current: 0}, {item: "coal", count: 6, current: 0}, {item: "crimson_stem", count: 3, current: 0}, {item: "minecraft:coal", count: 10, current: 0}, {item: "mangrove_log", count: 3, current: 0}, {item: "stripped_crimson_stem", count: 3, current: 0}, {item: "stripped_mangrove_wood", count: 3, current: 0}, {item: "stripped_warped_stem", count: 3, current: 0}, {item: "warped_stem", count: 3, current: 0}])
  .setResult("minecraft:campfire", 30);

builder
  .createRecipe("minecraft:candle")
  .addIngredients("minecraft:candle", [{item: "minecraft:string", count: 1, current: 0}, {item: "minecraft:honeycomb", count: 1, current: 0}])
  .setResult("minecraft:candle", 1);

builder
  .createRecipe("minecraft:carrot_on_a_stick")
  .addIngredients("minecraft:carrot_on_a_stick", [{item: "minecraft:fishing_rod", count: 1, current: 0}, {item: "minecraft:carrot", count: 1, current: 0}])
  .setResult("minecraft:carrot_on_a_stick", 1);

builder
  .createRecipe("minecraft:cartography_table")
  .addIngredients("minecraft:cartography_table", [{item: "minecraft:paper", count: 2, current: 0}, {item: "paper", count: 6, current: 0}, {item: "crimson_planks", count: 4, current: 0}, {item: "mangrove_planks", count: 4, current: 0}, {item: "warped_planks", count: 4, current: 0}])
  .setResult("minecraft:cartography_table", 6);

builder
  .createRecipe("minecraft:cauldron")
  .addIngredients("minecraft:cauldron", [{item: "minecraft:iron_ingot", count: 7, current: 0}])
  .setResult("minecraft:cauldron", 1);

builder
  .createRecipe("minecraft:chain")
  .addIngredients("minecraft:chain", [{item: "iron_nugget", count: 2, current: 0}, {item: "iron_ingot", count: 1, current: 0}])
  .setResult("minecraft:chain", 1);

builder
  .createRecipe("minecraft:cherry_boat")
  .addIngredients("minecraft:cherry_boat", [{item: "minecraft:cherry_planks", count: 5, current: 0}])
  .setResult("minecraft:cherry_boat", 1);

builder
  .createRecipe("minecraft:cherry_button")
  .addIngredients("minecraft:cherry_button", [{item: "minecraft:cherry_planks", count: 1, current: 0}])
  .setResult("minecraft:cherry_button", 1);

builder
  .createRecipe("minecraft:cherry_chest_boat")
  .addIngredients("minecraft:cherry_chest_boat", [{item: "minecraft:chest", count: 1, current: 0}, {item: "minecraft:cherry_boat", count: 1, current: 0}])
  .setResult("minecraft:cherry_chest_boat", 1);

builder
  .createRecipe("minecraft:cherry_door")
  .addIngredients("minecraft:cherry_door", [{item: "minecraft:cherry_planks", count: 6, current: 0}])
  .setResult("minecraft:cherry_door", 3);

builder
  .createRecipe("minecraft:cherry_fence")
  .addIngredients("minecraft:cherry_fence", [{item: "minecraft:cherry_planks", count: 6, current: 0}, {item: "minecraft:stick", count: 6, current: 0}])
  .setResult("minecraft:cherry_fence", 4);

builder
  .createRecipe("minecraft:cherry_hanging_sign")
  .addIngredients("minecraft:cherry_hanging_sign", [{item: "minecraft:chain", count: 2, current: 0}, {item: "minecraft:stripped_cherry_log", count: 6, current: 0}])
  .setResult("minecraft:cherry_hanging_sign", 6);

builder
  .createRecipe("minecraft:cherry_planks_from_log")
  .addIngredients("minecraft:cherry_planks_from_log", [{item: "minecraft:cherry_log", count: 1, current: 0}])
  .setResult("minecraft:cherry_planks_from_log", 4);

builder
  .createRecipe("minecraft:cherry_planks_from_stripped_log")
  .addIngredients("minecraft:cherry_planks_from_stripped_log", [{item: "minecraft:stripped_cherry_log", count: 1, current: 0}])
  .setResult("minecraft:cherry_planks_from_stripped_log", 4);

builder
  .createRecipe("minecraft:cherry_planks_from_stripped_wood")
  .addIngredients("minecraft:cherry_planks_from_stripped_wood", [{item: "minecraft:stripped_cherry_wood", count: 1, current: 0}])
  .setResult("minecraft:cherry_planks_from_stripped_wood", 4);

builder
  .createRecipe("minecraft:cherry_planks_from_wood")
  .addIngredients("minecraft:cherry_planks_from_wood", [{item: "minecraft:cherry_wood", count: 1, current: 0}])
  .setResult("minecraft:cherry_planks_from_wood", 4);

builder
  .createRecipe("minecraft:cherry_pressure_plate")
  .addIngredients("minecraft:cherry_pressure_plate", [{item: "minecraft:cherry_planks", count: 2, current: 0}])
  .setResult("minecraft:cherry_pressure_plate", 1);

builder
  .createRecipe("minecraft:cherry_sign")
  .addIngredients("minecraft:cherry_sign", [{item: "minecraft:cherry_planks", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:cherry_sign", 3);

builder
  .createRecipe("minecraft:cherry_slab")
  .addIngredients("minecraft:cherry_slab", [{item: "minecraft:cherry_planks", count: 3, current: 0}])
  .setResult("minecraft:cherry_slab", 6);

builder
  .createRecipe("minecraft:cherry_stairs")
  .addIngredients("minecraft:cherry_stairs", [{item: "minecraft:cherry_planks", count: 6, current: 0}])
  .setResult("minecraft:cherry_stairs", 4);

builder
  .createRecipe("minecraft:cherry_wood_from_stripped_log")
  .addIngredients("minecraft:cherry_wood_from_stripped_log", [{item: "minecraft:stripped_cherry_log", count: 4, current: 0}])
  .setResult("minecraft:cherry_wood_from_stripped_log", 3);

builder
  .createRecipe("minecraft:cherry_trapdoor")
  .addIngredients("minecraft:cherry_trapdoor", [{item: "minecraft:cherry_planks", count: 6, current: 0}])
  .setResult("minecraft:cherry_trapdoor", 2);

builder
  .createRecipe("minecraft:cherry_wood_from_log")
  .addIngredients("minecraft:cherry_wood_from_log", [{item: "minecraft:cherry_log", count: 4, current: 0}])
  .setResult("minecraft:cherry_wood_from_log", 3);

builder
  .createRecipe("minecraft:Chest_recipeId")
  .addIngredients("minecraft:Chest_recipeId", [])
  .setResult("minecraft:Chest_recipeId", 1);

builder
  .createRecipe("minecraft:chest_boat")
  .addIngredients("minecraft:chest_boat", [{item: "minecraft:chest", count: 1, current: 0}, {item: "minecraft:boat", count: 1, current: 0}])
  .setResult("minecraft:chest_boat", 1);

builder
  .createRecipe("minecraft:chest_from_crimson_planks")
  .addIngredients("minecraft:chest_from_crimson_planks", [{item: "crimson_planks", count: 8, current: 0}])
  .setResult("minecraft:chest_from_crimson_planks", 1);

builder
  .createRecipe("minecraft:chest_from_mangrove_planks")
  .addIngredients("minecraft:chest_from_mangrove_planks", [{item: "mangrove_planks", count: 8, current: 0}])
  .setResult("minecraft:chest_from_mangrove_planks", 1);

builder
  .createRecipe("minecraft:chest_from_warped_planks")
  .addIngredients("minecraft:chest_from_warped_planks", [{item: "warped_planks", count: 8, current: 0}])
  .setResult("minecraft:chest_from_warped_planks", 1);

builder
  .createRecipe("minecraft:chest_minecart")
  .addIngredients("minecraft:chest_minecart", [{item: "minecraft:chest", count: 1, current: 0}, {item: "minecraft:minecart", count: 1, current: 0}])
  .setResult("minecraft:chest_minecart", 1);

builder
  .createRecipe("minecraft:chiseled_bookshelf")
  .addIngredients("minecraft:chiseled_bookshelf", [])
  .setResult("minecraft:chiseled_bookshelf", 1);

builder
  .createRecipe("minecraft:chiseled_deepslate")
  .addIngredients("minecraft:chiseled_deepslate", [{item: "minecraft:cobbled_deepslate_slab", count: 2, current: 0}])
  .setResult("minecraft:chiseled_deepslate", 2);

builder
  .createRecipe("minecraft:chiseled_nether_bricks")
  .addIngredients("minecraft:chiseled_nether_bricks", [{item: "minecraft:stone_slab", count: 2, current: 0}])
  .setResult("minecraft:chiseled_nether_bricks", 1);

builder
  .createRecipe("minecraft:chiseled_polished_blackstone")
  .addIngredients("minecraft:chiseled_polished_blackstone", [{item: "minecraft:polished_blackstone_slab", count: 2, current: 0}])
  .setResult("minecraft:chiseled_polished_blackstone", 1);

builder
  .createRecipe("minecraft:clay")
  .addIngredients("minecraft:clay", [{item: "minecraft:clay_ball", count: 4, current: 0}])
  .setResult("minecraft:clay", 1);

builder
  .createRecipe("minecraft:clock")
  .addIngredients("minecraft:clock", [{item: "minecraft:gold_ingot", count: 4, current: 0}, {item: "minecraft:redstone", count: 1, current: 0}])
  .setResult("minecraft:clock", 1);

builder
  .createRecipe("minecraft:coal")
  .addIngredients("minecraft:coal", [{item: "minecraft:coal_block", count: 1, current: 0}, {item: "minecraft:coal", count: 9, current: 0}])
  .setResult("minecraft:coal", 10);

builder
  .createRecipe("minecraft:coarse_dirt")
  .addIngredients("minecraft:coarse_dirt", [{item: "minecraft:dirt", count: 2, current: 0}, {item: "minecraft:gravel", count: 2, current: 0}])
  .setResult("minecraft:coarse_dirt", 4);

builder
  .createRecipe("minecraft:coast_armor_trim_smithing_template_duplicate")
  .addIngredients("minecraft:coast_armor_trim_smithing_template_duplicate", [{item: "minecraft:diamond", count: 7, current: 0}, {item: "minecraft:coast_armor_trim_smithing_template", count: 1, current: 0}, {item: "minecraft:cobblestone", count: 1, current: 0}])
  .setResult("minecraft:coast_armor_trim_smithing_template_duplicate", 2);

builder
  .createRecipe("minecraft:cobbled_deepslate_slab")
  .addIngredients("minecraft:cobbled_deepslate_slab", [{item: "minecraft:cobbled_deepslate", count: 3, current: 0}])
  .setResult("minecraft:cobbled_deepslate_slab", 8);

builder
  .createRecipe("minecraft:cobbled_deepslate_stairs")
  .addIngredients("minecraft:cobbled_deepslate_stairs", [{item: "minecraft:cobbled_deepslate", count: 6, current: 0}])
  .setResult("minecraft:cobbled_deepslate_stairs", 5);

builder
  .createRecipe("minecraft:cobbled_deepslate_wall")
  .addIngredients("minecraft:cobbled_deepslate_wall", [{item: "minecraft:cobbled_deepslate", count: 6, current: 0}])
  .setResult("minecraft:cobbled_deepslate_wall", 7);

builder
  .createRecipe("minecraft:cobblestone_stairs")
  .addIngredients("minecraft:cobblestone_stairs", [{item: "minecraft:cobblestone", count: 6, current: 0}])
  .setResult("minecraft:cobblestone_stairs", 4);

builder
  .createRecipe("minecraft:cobblestone_wall")
  .addIngredients("minecraft:cobblestone_wall", [{item: "minecraft:cobblestone", count: 6, current: 0}])
  .setResult("minecraft:cobblestone_wall", 6);

builder
  .createRecipe("minecraft:cobweb_to_string")
  .addIngredients("minecraft:cobweb_to_string", [{item: "minecraft:web", count: 1, current: 0}])
  .setResult("minecraft:cobweb_to_string", 10);

builder
  .createRecipe("minecraft:comparator")
  .addIngredients("minecraft:comparator", [{item: "minecraft:redstone_torch", count: 3, current: 0}, {item: "minecraft:quartz", count: 1, current: 0}, {item: "minecraft:stone", count: 3, current: 0}])
  .setResult("minecraft:comparator", 1);

builder
  .createRecipe("minecraft:compass")
  .addIngredients("minecraft:compass", [{item: "minecraft:iron_ingot", count: 4, current: 0}, {item: "minecraft:redstone", count: 1, current: 0}])
  .setResult("minecraft:compass", 1);

builder
  .createRecipe("minecraft:composter")
  .addIngredients("minecraft:composter", [{item: "crimson_slab", count: 7, current: 0}, {item: "mangrove_slab", count: 7, current: 0}, {item: "warped_slab", count: 7, current: 0}])
  .setResult("minecraft:composter", 4);

builder
  .createRecipe("minecraft:conduit")
  .addIngredients("minecraft:conduit", [{item: "minecraft:nautilus_shell", count: 8, current: 0}, {item: "minecraft:heart_of_the_sea", count: 1, current: 0}])
  .setResult("minecraft:conduit", 1);

builder
  .createRecipe("minecraft:cookie")
  .addIngredients("minecraft:cookie", [{item: "minecraft:wheat", count: 2, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:cookie", 8);

builder
  .createRecipe("minecraft:copper_block_from_ingots")
  .addIngredients("minecraft:copper_block_from_ingots", [{item: "minecraft:copper_ingot", count: 9, current: 0}])
  .setResult("minecraft:copper_block_from_ingots", 1);

builder
  .createRecipe("minecraft:WorkBench_recipeId")
  .addIngredients("minecraft:WorkBench_recipeId", [])
  .setResult("minecraft:WorkBench_recipeId", 1);

builder
  .createRecipe("minecraft:crafting_table_cut_copper")
  .addIngredients("minecraft:crafting_table_cut_copper", [{item: "minecraft:copper_block", count: 4, current: 0}, {item: "minecraft:cut_copper", count: 9, current: 0}])
  .setResult("minecraft:crafting_table_cut_copper", 14);

builder
  .createRecipe("minecraft:crafting_table_exposed_cut_copper")
  .addIngredients("minecraft:crafting_table_exposed_cut_copper", [{item: "minecraft:exposed_copper", count: 4, current: 0}, {item: "minecraft:exposed_cut_copper", count: 9, current: 0}])
  .setResult("minecraft:crafting_table_exposed_cut_copper", 14);

builder
  .createRecipe("minecraft:crafting_table_from_crimson_planks")
  .addIngredients("minecraft:crafting_table_from_crimson_planks", [{item: "crimson_planks", count: 4, current: 0}])
  .setResult("minecraft:crafting_table_from_crimson_planks", 1);

builder
  .createRecipe("minecraft:crafting_table_from_mangrove_planks")
  .addIngredients("minecraft:crafting_table_from_mangrove_planks", [{item: "mangrove_planks", count: 4, current: 0}])
  .setResult("minecraft:crafting_table_from_mangrove_planks", 1);

builder
  .createRecipe("minecraft:crafting_table_from_warped_planks")
  .addIngredients("minecraft:crafting_table_from_warped_planks", [{item: "warped_planks", count: 4, current: 0}])
  .setResult("minecraft:crafting_table_from_warped_planks", 1);

builder
  .createRecipe("minecraft:crafting_table_oxidized_cut_copper")
  .addIngredients("minecraft:crafting_table_oxidized_cut_copper", [{item: "minecraft:oxidized_copper", count: 4, current: 0}, {item: "minecraft:oxidized_cut_copper", count: 9, current: 0}])
  .setResult("minecraft:crafting_table_oxidized_cut_copper", 14);

builder
  .createRecipe("minecraft:crafting_table_waxed_cut_copper")
  .addIngredients("minecraft:crafting_table_waxed_cut_copper", [{item: "minecraft:waxed_copper", count: 4, current: 0}, {item: "minecraft:waxed_cut_copper", count: 9, current: 0}])
  .setResult("minecraft:crafting_table_waxed_cut_copper", 14);

builder
  .createRecipe("minecraft:crafting_table_waxed_exposed_cut_copper")
  .addIngredients("minecraft:crafting_table_waxed_exposed_cut_copper", [{item: "minecraft:waxed_exposed_copper", count: 4, current: 0}, {item: "minecraft:waxed_exposed_cut_copper", count: 9, current: 0}])
  .setResult("minecraft:crafting_table_waxed_exposed_cut_copper", 14);

builder
  .createRecipe("minecraft:crafting_table_waxed_oxidized_cut_copper")
  .addIngredients("minecraft:crafting_table_waxed_oxidized_cut_copper", [{item: "minecraft:waxed_oxidized_copper", count: 4, current: 0}, {item: "minecraft:waxed_oxidized_cut_copper", count: 9, current: 0}])
  .setResult("minecraft:crafting_table_waxed_oxidized_cut_copper", 14);

builder
  .createRecipe("minecraft:crafting_table_waxed_weathered_cut_copper")
  .addIngredients("minecraft:crafting_table_waxed_weathered_cut_copper", [{item: "minecraft:waxed_weathered_copper", count: 4, current: 0}, {item: "minecraft:waxed_weathered_cut_copper", count: 9, current: 0}])
  .setResult("minecraft:crafting_table_waxed_weathered_cut_copper", 14);

builder
  .createRecipe("minecraft:crafting_table_weathered_cut_copper")
  .addIngredients("minecraft:crafting_table_weathered_cut_copper", [{item: "minecraft:weathered_copper", count: 4, current: 0}, {item: "minecraft:weathered_cut_copper", count: 9, current: 0}])
  .setResult("minecraft:crafting_table_weathered_cut_copper", 14);

builder
  .createRecipe("minecraft:crimson_button")
  .addIngredients("minecraft:crimson_button", [{item: "minecraft:crimson_planks", count: 1, current: 0}])
  .setResult("minecraft:crimson_button", 1);

builder
  .createRecipe("minecraft:crimson_door")
  .addIngredients("minecraft:crimson_door", [{item: "minecraft:crimson_planks", count: 6, current: 0}])
  .setResult("minecraft:crimson_door", 3);

builder
  .createRecipe("minecraft:crimson_fence")
  .addIngredients("minecraft:crimson_fence", [{item: "minecraft:crimson_planks", count: 6, current: 0}, {item: "minecraft:stick", count: 6, current: 0}])
  .setResult("minecraft:crimson_fence", 4);

builder
  .createRecipe("minecraft:crimson_hanging_sign")
  .addIngredients("minecraft:crimson_hanging_sign", [{item: "minecraft:chain", count: 2, current: 0}, {item: "minecraft:stripped_crimson_stem", count: 6, current: 0}])
  .setResult("minecraft:crimson_hanging_sign", 6);

builder
  .createRecipe("minecraft:crimson_hyphae")
  .addIngredients("minecraft:crimson_hyphae", [{item: "minecraft:crimson_stem", count: 4, current: 0}])
  .setResult("minecraft:crimson_hyphae", 3);

builder
  .createRecipe("minecraft:stripped_crimson_hyphae")
  .addIngredients("minecraft:stripped_crimson_hyphae", [{item: "minecraft:stripped_crimson_stem", count: 4, current: 0}])
  .setResult("minecraft:stripped_crimson_hyphae", 3);

builder
  .createRecipe("minecraft:crimson_planks")
  .addIngredients("minecraft:crimson_planks", [{item: "minecraft:crimson_stem", count: 1, current: 0}, {item: "minecraft:crimson_hyphae", count: 1, current: 0}, {item: "minecraft:stripped_crimson_hyphae", count: 1, current: 0}, {item: "minecraft:stripped_crimson_stem", count: 1, current: 0}])
  .setResult("minecraft:crimson_planks", 16);

builder
  .createRecipe("minecraft:crimson_pressure_plate")
  .addIngredients("minecraft:crimson_pressure_plate", [{item: "minecraft:crimson_planks", count: 2, current: 0}])
  .setResult("minecraft:crimson_pressure_plate", 1);

builder
  .createRecipe("minecraft:crimson_sign")
  .addIngredients("minecraft:crimson_sign", [{item: "minecraft:crimson_planks", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:crimson_sign", 3);

builder
  .createRecipe("minecraft:crimson_slab")
  .addIngredients("minecraft:crimson_slab", [{item: "minecraft:crimson_planks", count: 3, current: 0}])
  .setResult("minecraft:crimson_slab", 6);

builder
  .createRecipe("minecraft:crimson_stairs")
  .addIngredients("minecraft:crimson_stairs", [{item: "minecraft:crimson_planks", count: 6, current: 0}])
  .setResult("minecraft:crimson_stairs", 4);

builder
  .createRecipe("minecraft:crimson_trapdoor")
  .addIngredients("minecraft:crimson_trapdoor", [{item: "minecraft:crimson_planks", count: 6, current: 0}])
  .setResult("minecraft:crimson_trapdoor", 2);

builder
  .createRecipe("minecraft:crossbow")
  .addIngredients("minecraft:crossbow", [{item: "minecraft:stick", count: 3, current: 0}, {item: "minecraft:iron_ingot", count: 1, current: 0}, {item: "minecraft:string", count: 2, current: 0}, {item: "minecraft:tripwire_hook", count: 1, current: 0}])
  .setResult("minecraft:crossbow", 1);

builder
  .createRecipe("minecraft:cyan_banner")
  .addIngredients("minecraft:cyan_banner", [{item: "minecraft:wool", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:cyan_banner", 1);

builder
  .createRecipe("minecraft:cyan_candle")
  .addIngredients("minecraft:cyan_candle", [{item: "minecraft:candle", count: 1, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:cyan_candle", 1);

builder
  .createRecipe("minecraft:cyan_carpet")
  .addIngredients("minecraft:cyan_carpet", [{item: "minecraft:wool", count: 2, current: 0}, {item: "minecraft:carpet", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:cyan_carpet", 11);

builder
  .createRecipe("minecraft:cyan_concrete_powder")
  .addIngredients("minecraft:cyan_concrete_powder", [{item: "minecraft:dye", count: 1, current: 0}, {item: "minecraft:sand", count: 4, current: 0}, {item: "minecraft:gravel", count: 4, current: 0}])
  .setResult("minecraft:cyan_concrete_powder", 8);

builder
  .createRecipe("minecraft:cyan_dye")
  .addIngredients("minecraft:cyan_dye", [{item: "minecraft:dye", count: 4, current: 0}, {item: "minecraft:pitcher_plant", count: 1, current: 0}])
  .setResult("minecraft:cyan_dye", 5);

builder
  .createRecipe("minecraft:cyan_stained_glass")
  .addIngredients("minecraft:cyan_stained_glass", [{item: "minecraft:glass", count: 8, current: 0}, {item: "minecraft:dye", count: 2, current: 0}, {item: "minecraft:cyan_stained_glass", count: 6, current: 0}, {item: "minecraft:glass_pane", count: 8, current: 0}])
  .setResult("minecraft:cyan_stained_glass", 32);

builder
  .createRecipe("minecraft:cyan_stained_hardened_clay")
  .addIngredients("minecraft:cyan_stained_hardened_clay", [{item: "minecraft:hardened_clay", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:cyan_stained_hardened_clay", 8);

builder
  .createRecipe("minecraft:dark_oak_boat")
  .addIngredients("minecraft:dark_oak_boat", [{item: "minecraft:planks", count: 5, current: 0}])
  .setResult("minecraft:dark_oak_boat", 1);

builder
  .createRecipe("minecraft:dark_oak_chest_boat")
  .addIngredients("minecraft:dark_oak_chest_boat", [{item: "minecraft:chest", count: 1, current: 0}, {item: "minecraft:boat", count: 1, current: 0}])
  .setResult("minecraft:dark_oak_chest_boat", 1);

builder
  .createRecipe("minecraft:dark_oak_door")
  .addIngredients("minecraft:dark_oak_door", [{item: "minecraft:planks", count: 6, current: 0}])
  .setResult("minecraft:dark_oak_door", 3);

builder
  .createRecipe("minecraft:dark_oak_fence")
  .addIngredients("minecraft:dark_oak_fence", [{item: "minecraft:planks", count: 6, current: 0}, {item: "minecraft:stick", count: 6, current: 0}])
  .setResult("minecraft:dark_oak_fence", 4);

builder
  .createRecipe("minecraft:dark_oak_hanging_sign")
  .addIngredients("minecraft:dark_oak_hanging_sign", [{item: "minecraft:chain", count: 2, current: 0}, {item: "minecraft:stripped_dark_oak_log", count: 6, current: 0}])
  .setResult("minecraft:dark_oak_hanging_sign", 6);

builder
  .createRecipe("minecraft:dark_oak_planks")
  .addIngredients("minecraft:dark_oak_planks", [{item: "minecraft:log2", count: 1, current: 0}, {item: "minecraft:stripped_dark_oak_log", count: 1, current: 0}, {item: "minecraft:wood", count: 2, current: 0}])
  .setResult("minecraft:dark_oak_planks", 16);

builder
  .createRecipe("minecraft:dark_oak_stairs")
  .addIngredients("minecraft:dark_oak_stairs", [{item: "minecraft:planks", count: 6, current: 0}])
  .setResult("minecraft:dark_oak_stairs", 4);

builder
  .createRecipe("minecraft:dark_oak_wood")
  .addIngredients("minecraft:dark_oak_wood", [{item: "minecraft:log2", count: 4, current: 0}, {item: "minecraft:planks", count: 3, current: 0}, {item: "minecraft:stripped_dark_oak_log", count: 4, current: 0}])
  .setResult("minecraft:dark_oak_wood", 12);

builder
  .createRecipe("minecraft:dark_prismarine")
  .addIngredients("minecraft:dark_prismarine", [{item: "minecraft:prismarine_shard", count: 16, current: 0}, {item: "minecraft:dye", count: 2, current: 0}])
  .setResult("minecraft:dark_prismarine", 2);

builder
  .createRecipe("minecraft:DaylightDetector_recipeId")
  .addIngredients("minecraft:DaylightDetector_recipeId", [{item: "glass", count: 3, current: 0}, {item: "quartz", count: 3, current: 0}])
  .setResult("minecraft:DaylightDetector_recipeId", 1);

builder
  .createRecipe("minecraft:daylight_detector_from_crimson_slab")
  .addIngredients("minecraft:daylight_detector_from_crimson_slab", [{item: "glass", count: 3, current: 0}, {item: "quartz", count: 3, current: 0}, {item: "crimson_slab", count: 3, current: 0}])
  .setResult("minecraft:daylight_detector_from_crimson_slab", 1);

builder
  .createRecipe("minecraft:daylight_detector_from_mangrove_slab")
  .addIngredients("minecraft:daylight_detector_from_mangrove_slab", [{item: "glass", count: 3, current: 0}, {item: "quartz", count: 3, current: 0}, {item: "mangrove_slab", count: 3, current: 0}])
  .setResult("minecraft:daylight_detector_from_mangrove_slab", 1);

builder
  .createRecipe("minecraft:daylight_detector_from_warped_slab")
  .addIngredients("minecraft:daylight_detector_from_warped_slab", [{item: "glass", count: 3, current: 0}, {item: "quartz", count: 3, current: 0}, {item: "warped_slab", count: 3, current: 0}])
  .setResult("minecraft:daylight_detector_from_warped_slab", 1);

builder
  .createRecipe("minecraft:deepslate_bricks")
  .addIngredients("minecraft:deepslate_bricks", [{item: "minecraft:polished_deepslate", count: 4, current: 0}])
  .setResult("minecraft:deepslate_bricks", 6);

builder
  .createRecipe("minecraft:deepslate_brick_slab")
  .addIngredients("minecraft:deepslate_brick_slab", [{item: "minecraft:deepslate_bricks", count: 3, current: 0}])
  .setResult("minecraft:deepslate_brick_slab", 12);

builder
  .createRecipe("minecraft:deepslate_brick_stairs")
  .addIngredients("minecraft:deepslate_brick_stairs", [{item: "minecraft:deepslate_bricks", count: 6, current: 0}])
  .setResult("minecraft:deepslate_brick_stairs", 7);

builder
  .createRecipe("minecraft:deepslate_brick_wall")
  .addIngredients("minecraft:deepslate_brick_wall", [{item: "minecraft:deepslate_bricks", count: 6, current: 0}])
  .setResult("minecraft:deepslate_brick_wall", 9);

builder
  .createRecipe("minecraft:deepslate_tiles")
  .addIngredients("minecraft:deepslate_tiles", [{item: "minecraft:deepslate_bricks", count: 4, current: 0}])
  .setResult("minecraft:deepslate_tiles", 7);

builder
  .createRecipe("minecraft:deepslate_tile_slab")
  .addIngredients("minecraft:deepslate_tile_slab", [{item: "minecraft:deepslate_tiles", count: 3, current: 0}])
  .setResult("minecraft:deepslate_tile_slab", 14);

builder
  .createRecipe("minecraft:deepslate_tile_stairs")
  .addIngredients("minecraft:deepslate_tile_stairs", [{item: "minecraft:deepslate_tiles", count: 6, current: 0}])
  .setResult("minecraft:deepslate_tile_stairs", 8);

builder
  .createRecipe("minecraft:deepslate_tile_wall")
  .addIngredients("minecraft:deepslate_tile_wall", [{item: "minecraft:deepslate_tiles", count: 6, current: 0}])
  .setResult("minecraft:deepslate_tile_wall", 10);

builder
  .createRecipe("minecraft:detector_rail")
  .addIngredients("minecraft:detector_rail", [{item: "minecraft:iron_ingot", count: 6, current: 0}, {item: "minecraft:stone_pressure_plate", count: 1, current: 0}, {item: "minecraft:redstone", count: 1, current: 0}])
  .setResult("minecraft:detector_rail", 6);

builder
  .createRecipe("minecraft:diamond")
  .addIngredients("minecraft:diamond", [{item: "minecraft:diamond_block", count: 1, current: 0}, {item: "minecraft:diamond", count: 44, current: 0}, {item: "minecraft:stick", count: 9, current: 0}])
  .setResult("minecraft:diamond", 19);

builder
  .createRecipe("minecraft:diorite")
  .addIngredients("minecraft:diorite", [{item: "minecraft:cobblestone", count: 2, current: 0}, {item: "minecraft:quartz", count: 2, current: 0}, {item: "minecraft:stone", count: 12, current: 0}])
  .setResult("minecraft:diorite", 12);

builder
  .createRecipe("minecraft:dispenser")
  .addIngredients("minecraft:dispenser", [{item: "minecraft:cobblestone", count: 7, current: 0}, {item: "minecraft:bow", count: 1, current: 0}, {item: "minecraft:redstone", count: 1, current: 0}])
  .setResult("minecraft:dispenser", 1);

builder
  .createRecipe("minecraft:dried_kelp")
  .addIngredients("minecraft:dried_kelp", [{item: "minecraft:dried_kelp_block", count: 1, current: 0}, {item: "minecraft:dried_kelp", count: 9, current: 0}])
  .setResult("minecraft:dried_kelp", 10);

builder
  .createRecipe("minecraft:dripstone_block")
  .addIngredients("minecraft:dripstone_block", [{item: "minecraft:pointed_dripstone", count: 8, current: 0}])
  .setResult("minecraft:dripstone_block", 2);

builder
  .createRecipe("minecraft:dropper")
  .addIngredients("minecraft:dropper", [{item: "minecraft:cobblestone", count: 7, current: 0}, {item: "minecraft:redstone", count: 1, current: 0}])
  .setResult("minecraft:dropper", 1);

builder
  .createRecipe("minecraft:dune_armor_trim_smithing_template_duplicate")
  .addIngredients("minecraft:dune_armor_trim_smithing_template_duplicate", [{item: "minecraft:diamond", count: 7, current: 0}, {item: "minecraft:dune_armor_trim_smithing_template", count: 1, current: 0}, {item: "minecraft:sandstone", count: 1, current: 0}])
  .setResult("minecraft:dune_armor_trim_smithing_template_duplicate", 2);

builder
  .createRecipe("minecraft:emerald")
  .addIngredients("minecraft:emerald", [{item: "minecraft:emerald_block", count: 1, current: 0}, {item: "minecraft:emerald", count: 9, current: 0}])
  .setResult("minecraft:emerald", 10);

builder
  .createRecipe("minecraft:empty_map_to_enhanced")
  .addIngredients("minecraft:empty_map_to_enhanced", [{item: "minecraft:emptymap", count: 1, current: 0}, {item: "minecraft:compass", count: 1, current: 0}])
  .setResult("minecraft:empty_map_to_enhanced", 1);

builder
  .createRecipe("minecraft:enchanting_table")
  .addIngredients("minecraft:enchanting_table", [{item: "minecraft:book", count: 1, current: 0}, {item: "minecraft:diamond", count: 2, current: 0}, {item: "minecraft:obsidian", count: 4, current: 0}])
  .setResult("minecraft:enchanting_table", 1);

builder
  .createRecipe("minecraft:ender_chest")
  .addIngredients("minecraft:ender_chest", [{item: "minecraft:obsidian", count: 8, current: 0}, {item: "minecraft:ender_eye", count: 1, current: 0}])
  .setResult("minecraft:ender_chest", 1);

builder
  .createRecipe("minecraft:ender_eye")
  .addIngredients("minecraft:ender_eye", [{item: "minecraft:ender_pearl", count: 1, current: 0}, {item: "minecraft:blaze_powder", count: 1, current: 0}])
  .setResult("minecraft:ender_eye", 1);

builder
  .createRecipe("minecraft:end_bricks")
  .addIngredients("minecraft:end_bricks", [{item: "minecraft:end_stone", count: 4, current: 0}])
  .setResult("minecraft:end_bricks", 4);

builder
  .createRecipe("minecraft:end_brick_stairs")
  .addIngredients("minecraft:end_brick_stairs", [{item: "minecraft:end_bricks", count: 6, current: 0}])
  .setResult("minecraft:end_brick_stairs", 4);

builder
  .createRecipe("minecraft:end_brick_wall")
  .addIngredients("minecraft:end_brick_wall", [{item: "minecraft:end_bricks", count: 6, current: 0}])
  .setResult("minecraft:end_brick_wall", 6);

builder
  .createRecipe("minecraft:end_crystal")
  .addIngredients("minecraft:end_crystal", [{item: "minecraft:glass", count: 7, current: 0}, {item: "minecraft:ender_eye", count: 1, current: 0}, {item: "minecraft:ghast_tear", count: 1, current: 0}])
  .setResult("minecraft:end_crystal", 1);

builder
  .createRecipe("minecraft:end_rod")
  .addIngredients("minecraft:end_rod", [{item: "minecraft:blaze_rod", count: 1, current: 0}, {item: "minecraft:chorus_fruit_popped", count: 1, current: 0}])
  .setResult("minecraft:end_rod", 4);

builder
  .createRecipe("minecraft:eye_armor_trim_smithing_template_duplicate")
  .addIngredients("minecraft:eye_armor_trim_smithing_template_duplicate", [{item: "minecraft:diamond", count: 7, current: 0}, {item: "minecraft:eye_armor_trim_smithing_template", count: 1, current: 0}, {item: "minecraft:end_stone", count: 1, current: 0}])
  .setResult("minecraft:eye_armor_trim_smithing_template_duplicate", 2);

builder
  .createRecipe("minecraft:fence")
  .addIngredients("minecraft:fence", [{item: "minecraft:planks", count: 6, current: 0}, {item: "minecraft:stick", count: 6, current: 0}])
  .setResult("minecraft:fence", 4);

builder
  .createRecipe("minecraft:fermented_spider_eye")
  .addIngredients("minecraft:fermented_spider_eye", [{item: "minecraft:spider_eye", count: 1, current: 0}, {item: "minecraft:brown_mushroom", count: 1, current: 0}, {item: "minecraft:sugar", count: 1, current: 0}])
  .setResult("minecraft:fermented_spider_eye", 1);

builder
  .createRecipe("minecraft:FireCharge_coal_sulphur_recipeId")
  .addIngredients("minecraft:FireCharge_coal_sulphur_recipeId", [{item: "minecraft:blaze_powder", count: 2, current: 0}, {item: "minecraft:gunpowder", count: 2, current: 0}, {item: "minecraft:coal", count: 1, current: 0}])
  .setResult("minecraft:FireCharge_coal_sulphur_recipeId", 6);

builder
  .createRecipe("minecraft:FireCharge_blaze_powder_coal_sulphur_recipeId")
  .addIngredients("minecraft:FireCharge_blaze_powder_coal_sulphur_recipeId", [{item: "minecraft:blaze_powder", count: 1, current: 0}, {item: "minecraft:charcoal", count: 1, current: 0}, {item: "minecraft:gunpowder", count: 1, current: 0}])
  .setResult("minecraft:FireCharge_blaze_powder_coal_sulphur_recipeId", 3);

builder
  .createRecipe("minecraft:fishing_rod")
  .addIngredients("minecraft:fishing_rod", [{item: "minecraft:stick", count: 3, current: 0}, {item: "minecraft:string", count: 2, current: 0}])
  .setResult("minecraft:fishing_rod", 1);

builder
  .createRecipe("minecraft:fletching_table")
  .addIngredients("minecraft:fletching_table", [{item: "minecraft:flint", count: 2, current: 0}, {item: "flint", count: 6, current: 0}, {item: "crimson_planks", count: 4, current: 0}, {item: "mangrove_planks", count: 4, current: 0}, {item: "warped_planks", count: 4, current: 0}])
  .setResult("minecraft:fletching_table", 4);

builder
  .createRecipe("minecraft:flint_and_steel")
  .addIngredients("minecraft:flint_and_steel", [{item: "minecraft:iron_ingot", count: 1, current: 0}, {item: "minecraft:flint", count: 1, current: 0}])
  .setResult("minecraft:flint_and_steel", 1);

builder
  .createRecipe("minecraft:flower_pot")
  .addIngredients("minecraft:flower_pot", [{item: "minecraft:brick", count: 3, current: 0}])
  .setResult("minecraft:flower_pot", 1);

builder
  .createRecipe("minecraft:furnace")
  .addIngredients("minecraft:furnace", [{item: "minecraft:blackstone", count: 8, current: 0}, {item: "minecraft:cobbled_deepslate", count: 8, current: 0}])
  .setResult("minecraft:furnace", 3);

builder
  .createRecipe("minecraft:glass_bottle")
  .addIngredients("minecraft:glass_bottle", [{item: "minecraft:glass", count: 3, current: 0}])
  .setResult("minecraft:glass_bottle", 3);

builder
  .createRecipe("minecraft:glass_pane")
  .addIngredients("minecraft:glass_pane", [{item: "minecraft:glass", count: 6, current: 0}])
  .setResult("minecraft:glass_pane", 16);

builder
  .createRecipe("minecraft:glowstone")
  .addIngredients("minecraft:glowstone", [{item: "minecraft:glowstone_dust", count: 4, current: 0}])
  .setResult("minecraft:glowstone", 1);

builder
  .createRecipe("minecraft:glow_frame")
  .addIngredients("minecraft:glow_frame", [{item: "minecraft:frame", count: 1, current: 0}, {item: "minecraft:glow_ink_sac", count: 1, current: 0}])
  .setResult("minecraft:glow_frame", 1);

builder
  .createRecipe("minecraft:golden_apple")
  .addIngredients("minecraft:golden_apple", [{item: "minecraft:gold_ingot", count: 8, current: 0}, {item: "minecraft:apple", count: 1, current: 0}])
  .setResult("minecraft:golden_apple", 1);

builder
  .createRecipe("minecraft:golden_axe")
  .addIngredients("minecraft:golden_axe", [{item: "minecraft:gold_ingot", count: 3, current: 0}, {item: "minecraft:stick", count: 2, current: 0}])
  .setResult("minecraft:golden_axe", 1);

builder
  .createRecipe("minecraft:golden_boots")
  .addIngredients("minecraft:golden_boots", [{item: "minecraft:gold_ingot", count: 4, current: 0}])
  .setResult("minecraft:golden_boots", 1);

builder
  .createRecipe("minecraft:golden_carrot")
  .addIngredients("minecraft:golden_carrot", [{item: "minecraft:gold_nugget", count: 8, current: 0}, {item: "minecraft:carrot", count: 1, current: 0}])
  .setResult("minecraft:golden_carrot", 1);

builder
  .createRecipe("minecraft:golden_chestplate")
  .addIngredients("minecraft:golden_chestplate", [{item: "minecraft:gold_ingot", count: 8, current: 0}])
  .setResult("minecraft:golden_chestplate", 1);

builder
  .createRecipe("minecraft:golden_helmet")
  .addIngredients("minecraft:golden_helmet", [{item: "minecraft:gold_ingot", count: 5, current: 0}])
  .setResult("minecraft:golden_helmet", 1);

builder
  .createRecipe("minecraft:golden_hoe")
  .addIngredients("minecraft:golden_hoe", [{item: "minecraft:gold_ingot", count: 2, current: 0}, {item: "minecraft:stick", count: 2, current: 0}])
  .setResult("minecraft:golden_hoe", 1);

builder
  .createRecipe("minecraft:golden_leggings")
  .addIngredients("minecraft:golden_leggings", [{item: "minecraft:gold_ingot", count: 7, current: 0}])
  .setResult("minecraft:golden_leggings", 1);

builder
  .createRecipe("minecraft:golden_pickaxe")
  .addIngredients("minecraft:golden_pickaxe", [{item: "minecraft:gold_ingot", count: 3, current: 0}, {item: "minecraft:stick", count: 2, current: 0}])
  .setResult("minecraft:golden_pickaxe", 1);

builder
  .createRecipe("minecraft:golden_rail")
  .addIngredients("minecraft:golden_rail", [{item: "minecraft:gold_ingot", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}, {item: "minecraft:redstone", count: 1, current: 0}])
  .setResult("minecraft:golden_rail", 6);

builder
  .createRecipe("minecraft:golden_shovel")
  .addIngredients("minecraft:golden_shovel", [{item: "minecraft:gold_ingot", count: 1, current: 0}, {item: "minecraft:stick", count: 2, current: 0}])
  .setResult("minecraft:golden_shovel", 1);

builder
  .createRecipe("minecraft:golden_sword")
  .addIngredients("minecraft:golden_sword", [{item: "minecraft:gold_ingot", count: 2, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:golden_sword", 1);

builder
  .createRecipe("minecraft:gold_block")
  .addIngredients("minecraft:gold_block", [{item: "minecraft:gold_ingot", count: 9, current: 0}])
  .setResult("minecraft:gold_block", 1);

builder
  .createRecipe("minecraft:gold_ingot_from_block")
  .addIngredients("minecraft:gold_ingot_from_block", [{item: "minecraft:gold_block", count: 1, current: 0}])
  .setResult("minecraft:gold_ingot_from_block", 9);

builder
  .createRecipe("minecraft:gold_ingot_from_nuggets")
  .addIngredients("minecraft:gold_ingot_from_nuggets", [{item: "minecraft:gold_nugget", count: 9, current: 0}])
  .setResult("minecraft:gold_ingot_from_nuggets", 1);

builder
  .createRecipe("minecraft:gold_nugget")
  .addIngredients("minecraft:gold_nugget", [{item: "minecraft:gold_ingot", count: 1, current: 0}])
  .setResult("minecraft:gold_nugget", 9);

builder
  .createRecipe("minecraft:granite")
  .addIngredients("minecraft:granite", [{item: "minecraft:stone", count: 13, current: 0}, {item: "minecraft:quartz", count: 1, current: 0}])
  .setResult("minecraft:granite", 11);

builder
  .createRecipe("minecraft:gray_banner")
  .addIngredients("minecraft:gray_banner", [{item: "minecraft:wool", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:gray_banner", 1);

builder
  .createRecipe("minecraft:gray_candle")
  .addIngredients("minecraft:gray_candle", [{item: "minecraft:candle", count: 1, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:gray_candle", 1);

builder
  .createRecipe("minecraft:gray_carpet")
  .addIngredients("minecraft:gray_carpet", [{item: "minecraft:wool", count: 2, current: 0}, {item: "minecraft:carpet", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:gray_carpet", 11);

builder
  .createRecipe("minecraft:gray_concrete_powder")
  .addIngredients("minecraft:gray_concrete_powder", [{item: "minecraft:dye", count: 1, current: 0}, {item: "minecraft:sand", count: 4, current: 0}, {item: "minecraft:gravel", count: 4, current: 0}])
  .setResult("minecraft:gray_concrete_powder", 8);

builder
  .createRecipe("minecraft:gray_dye")
  .addIngredients("minecraft:gray_dye", [{item: "minecraft:dye", count: 8, current: 0}])
  .setResult("minecraft:gray_dye", 8);

builder
  .createRecipe("minecraft:gray_stained_glass")
  .addIngredients("minecraft:gray_stained_glass", [{item: "minecraft:glass", count: 8, current: 0}, {item: "minecraft:dye", count: 2, current: 0}, {item: "minecraft:gray_stained_glass", count: 6, current: 0}, {item: "minecraft:glass_pane", count: 8, current: 0}])
  .setResult("minecraft:gray_stained_glass", 32);

builder
  .createRecipe("minecraft:gray_stained_hardened_clay")
  .addIngredients("minecraft:gray_stained_hardened_clay", [{item: "minecraft:hardened_clay", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:gray_stained_hardened_clay", 8);

builder
  .createRecipe("minecraft:green_banner")
  .addIngredients("minecraft:green_banner", [{item: "minecraft:wool", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:green_banner", 1);

builder
  .createRecipe("minecraft:green_candle")
  .addIngredients("minecraft:green_candle", [{item: "minecraft:candle", count: 1, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:green_candle", 1);

builder
  .createRecipe("minecraft:green_carpet")
  .addIngredients("minecraft:green_carpet", [{item: "minecraft:wool", count: 2, current: 0}, {item: "minecraft:carpet", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:green_carpet", 11);

builder
  .createRecipe("minecraft:green_concrete_powder")
  .addIngredients("minecraft:green_concrete_powder", [{item: "minecraft:dye", count: 1, current: 0}, {item: "minecraft:sand", count: 4, current: 0}, {item: "minecraft:gravel", count: 4, current: 0}])
  .setResult("minecraft:green_concrete_powder", 8);

builder
  .createRecipe("minecraft:green_stained_glass")
  .addIngredients("minecraft:green_stained_glass", [{item: "minecraft:glass", count: 8, current: 0}, {item: "minecraft:dye", count: 2, current: 0}, {item: "minecraft:green_stained_glass", count: 6, current: 0}, {item: "minecraft:glass_pane", count: 8, current: 0}])
  .setResult("minecraft:green_stained_glass", 32);

builder
  .createRecipe("minecraft:green_stained_hardened_clay")
  .addIngredients("minecraft:green_stained_hardened_clay", [{item: "minecraft:hardened_clay", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:green_stained_hardened_clay", 8);

builder
  .createRecipe("minecraft:grindstone")
  .addIngredients("minecraft:grindstone", [{item: "minecraft:stick", count: 2, current: 0}, {item: "minecraft:double_stone_slab4", count: 1, current: 0}, {item: "stick", count: 24, current: 0}, {item: "stone_slab", count: 3, current: 0}, {item: "crimson_planks", count: 8, current: 0}, {item: "stone_slab2", count: 3, current: 0}, {item: "stone_slab3", count: 3, current: 0}, {item: "stone_slab4", count: 3, current: 0}, {item: "mangrove_planks", count: 8, current: 0}, {item: "warped_planks", count: 8, current: 0}])
  .setResult("minecraft:grindstone", 13);

builder
  .createRecipe("minecraft:hay_block")
  .addIngredients("minecraft:hay_block", [{item: "minecraft:wheat", count: 9, current: 0}])
  .setResult("minecraft:hay_block", 1);

builder
  .createRecipe("minecraft:heavy_weighted_pressure_plate")
  .addIngredients("minecraft:heavy_weighted_pressure_plate", [{item: "minecraft:iron_ingot", count: 2, current: 0}])
  .setResult("minecraft:heavy_weighted_pressure_plate", 1);

builder
  .createRecipe("minecraft:honeycomb_block")
  .addIngredients("minecraft:honeycomb_block", [{item: "minecraft:honeycomb", count: 4, current: 0}])
  .setResult("minecraft:honeycomb_block", 1);

builder
  .createRecipe("minecraft:honey_block")
  .addIngredients("minecraft:honey_block", [{item: "minecraft:honey_bottle", count: 4, current: 0}])
  .setResult("minecraft:honey_block", 4);

builder
  .createRecipe("minecraft:honey_bottle")
  .addIngredients("minecraft:honey_bottle", [{item: "minecraft:honey_block", count: 1, current: 0}, {item: "minecraft:glass_bottle", count: 4, current: 0}, {item: "minecraft:honey_bottle", count: 1, current: 0}])
  .setResult("minecraft:honey_bottle", 7);

builder
  .createRecipe("minecraft:hopper")
  .addIngredients("minecraft:hopper", [{item: "minecraft:iron_ingot", count: 5, current: 0}, {item: "minecraft:chest", count: 1, current: 0}, {item: "minecraft:hopper", count: 1, current: 0}, {item: "minecraft:minecart", count: 1, current: 0}])
  .setResult("minecraft:hopper", 2);

builder
  .createRecipe("minecraft:host_armor_trim_smithing_template_duplicate")
  .addIngredients("minecraft:host_armor_trim_smithing_template_duplicate", [{item: "minecraft:diamond", count: 7, current: 0}, {item: "minecraft:host_armor_trim_smithing_template", count: 1, current: 0}, {item: "minecraft:hardened_clay", count: 1, current: 0}])
  .setResult("minecraft:host_armor_trim_smithing_template_duplicate", 2);

builder
  .createRecipe("minecraft:ingots_from_copper")
  .addIngredients("minecraft:ingots_from_copper", [{item: "minecraft:copper_block", count: 1, current: 0}])
  .setResult("minecraft:ingots_from_copper", 9);

builder
  .createRecipe("minecraft:ingots_from_waxed_copper")
  .addIngredients("minecraft:ingots_from_waxed_copper", [{item: "minecraft:waxed_copper", count: 1, current: 0}])
  .setResult("minecraft:ingots_from_waxed_copper", 9);

builder
  .createRecipe("minecraft:iron_axe")
  .addIngredients("minecraft:iron_axe", [{item: "minecraft:iron_ingot", count: 3, current: 0}, {item: "minecraft:stick", count: 2, current: 0}])
  .setResult("minecraft:iron_axe", 1);

builder
  .createRecipe("minecraft:iron_bars")
  .addIngredients("minecraft:iron_bars", [{item: "minecraft:iron_ingot", count: 6, current: 0}])
  .setResult("minecraft:iron_bars", 16);

builder
  .createRecipe("minecraft:iron_block")
  .addIngredients("minecraft:iron_block", [{item: "minecraft:iron_ingot", count: 9, current: 0}])
  .setResult("minecraft:iron_block", 1);

builder
  .createRecipe("minecraft:iron_boots")
  .addIngredients("minecraft:iron_boots", [{item: "minecraft:iron_ingot", count: 4, current: 0}])
  .setResult("minecraft:iron_boots", 1);

builder
  .createRecipe("minecraft:iron_chestplate")
  .addIngredients("minecraft:iron_chestplate", [{item: "minecraft:iron_ingot", count: 8, current: 0}])
  .setResult("minecraft:iron_chestplate", 1);

builder
  .createRecipe("minecraft:iron_door")
  .addIngredients("minecraft:iron_door", [{item: "minecraft:iron_ingot", count: 6, current: 0}])
  .setResult("minecraft:iron_door", 3);

builder
  .createRecipe("minecraft:iron_helmet")
  .addIngredients("minecraft:iron_helmet", [{item: "minecraft:iron_ingot", count: 5, current: 0}])
  .setResult("minecraft:iron_helmet", 1);

builder
  .createRecipe("minecraft:iron_hoe")
  .addIngredients("minecraft:iron_hoe", [{item: "minecraft:iron_ingot", count: 2, current: 0}, {item: "minecraft:stick", count: 2, current: 0}])
  .setResult("minecraft:iron_hoe", 1);

builder
  .createRecipe("minecraft:iron_ingot_from_block")
  .addIngredients("minecraft:iron_ingot_from_block", [{item: "minecraft:iron_block", count: 1, current: 0}])
  .setResult("minecraft:iron_ingot_from_block", 9);

builder
  .createRecipe("minecraft:iron_ingot_from_nuggets")
  .addIngredients("minecraft:iron_ingot_from_nuggets", [{item: "minecraft:iron_nugget", count: 9, current: 0}])
  .setResult("minecraft:iron_ingot_from_nuggets", 1);

builder
  .createRecipe("minecraft:iron_leggings")
  .addIngredients("minecraft:iron_leggings", [{item: "minecraft:iron_ingot", count: 7, current: 0}])
  .setResult("minecraft:iron_leggings", 1);

builder
  .createRecipe("minecraft:iron_nugget")
  .addIngredients("minecraft:iron_nugget", [{item: "minecraft:iron_ingot", count: 1, current: 0}])
  .setResult("minecraft:iron_nugget", 9);

builder
  .createRecipe("minecraft:iron_pickaxe")
  .addIngredients("minecraft:iron_pickaxe", [{item: "minecraft:iron_ingot", count: 3, current: 0}, {item: "minecraft:stick", count: 2, current: 0}])
  .setResult("minecraft:iron_pickaxe", 1);

builder
  .createRecipe("minecraft:iron_shovel")
  .addIngredients("minecraft:iron_shovel", [{item: "minecraft:iron_ingot", count: 1, current: 0}, {item: "minecraft:stick", count: 2, current: 0}])
  .setResult("minecraft:iron_shovel", 1);

builder
  .createRecipe("minecraft:iron_sword")
  .addIngredients("minecraft:iron_sword", [{item: "minecraft:iron_ingot", count: 2, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:iron_sword", 1);

builder
  .createRecipe("minecraft:iron_trapdoor")
  .addIngredients("minecraft:iron_trapdoor", [{item: "minecraft:iron_ingot", count: 4, current: 0}])
  .setResult("minecraft:iron_trapdoor", 1);

builder
  .createRecipe("minecraft:item_frame")
  .addIngredients("minecraft:item_frame", [{item: "minecraft:stick", count: 8, current: 0}, {item: "minecraft:leather", count: 1, current: 0}])
  .setResult("minecraft:item_frame", 1);

builder
  .createRecipe("minecraft:Jukebox_recipeId")
  .addIngredients("minecraft:Jukebox_recipeId", [{item: "diamond", count: 1, current: 0}])
  .setResult("minecraft:Jukebox_recipeId", 1);

builder
  .createRecipe("minecraft:jukebox_from_crimson_planks")
  .addIngredients("minecraft:jukebox_from_crimson_planks", [{item: "crimson_planks", count: 8, current: 0}, {item: "diamond", count: 1, current: 0}])
  .setResult("minecraft:jukebox_from_crimson_planks", 1);

builder
  .createRecipe("minecraft:jukebox_from_mangrove_planks")
  .addIngredients("minecraft:jukebox_from_mangrove_planks", [{item: "mangrove_planks", count: 8, current: 0}, {item: "diamond", count: 1, current: 0}])
  .setResult("minecraft:jukebox_from_mangrove_planks", 1);

builder
  .createRecipe("minecraft:jukebox_from_warped_planks")
  .addIngredients("minecraft:jukebox_from_warped_planks", [{item: "warped_planks", count: 8, current: 0}, {item: "diamond", count: 1, current: 0}])
  .setResult("minecraft:jukebox_from_warped_planks", 1);

builder
  .createRecipe("minecraft:jungle_boat")
  .addIngredients("minecraft:jungle_boat", [{item: "minecraft:planks", count: 5, current: 0}])
  .setResult("minecraft:jungle_boat", 1);

builder
  .createRecipe("minecraft:jungle_chest_boat")
  .addIngredients("minecraft:jungle_chest_boat", [{item: "minecraft:chest", count: 1, current: 0}, {item: "minecraft:boat", count: 1, current: 0}])
  .setResult("minecraft:jungle_chest_boat", 1);

builder
  .createRecipe("minecraft:jungle_door")
  .addIngredients("minecraft:jungle_door", [{item: "minecraft:planks", count: 6, current: 0}])
  .setResult("minecraft:jungle_door", 3);

builder
  .createRecipe("minecraft:jungle_fence")
  .addIngredients("minecraft:jungle_fence", [{item: "minecraft:planks", count: 6, current: 0}, {item: "minecraft:stick", count: 6, current: 0}])
  .setResult("minecraft:jungle_fence", 4);

builder
  .createRecipe("minecraft:jungle_hanging_sign")
  .addIngredients("minecraft:jungle_hanging_sign", [{item: "minecraft:chain", count: 2, current: 0}, {item: "minecraft:stripped_jungle_log", count: 6, current: 0}])
  .setResult("minecraft:jungle_hanging_sign", 6);

builder
  .createRecipe("minecraft:jungle_planks")
  .addIngredients("minecraft:jungle_planks", [{item: "minecraft:log", count: 1, current: 0}, {item: "minecraft:stripped_jungle_log", count: 1, current: 0}, {item: "minecraft:wood", count: 2, current: 0}])
  .setResult("minecraft:jungle_planks", 16);

builder
  .createRecipe("minecraft:jungle_stairs")
  .addIngredients("minecraft:jungle_stairs", [{item: "minecraft:planks", count: 6, current: 0}])
  .setResult("minecraft:jungle_stairs", 4);

builder
  .createRecipe("minecraft:jungle_wood")
  .addIngredients("minecraft:jungle_wood", [{item: "minecraft:log", count: 4, current: 0}, {item: "minecraft:planks", count: 3, current: 0}, {item: "minecraft:stripped_jungle_log", count: 4, current: 0}])
  .setResult("minecraft:jungle_wood", 12);

builder
  .createRecipe("minecraft:ladder")
  .addIngredients("minecraft:ladder", [{item: "minecraft:stick", count: 7, current: 0}])
  .setResult("minecraft:ladder", 3);

builder
  .createRecipe("minecraft:lantern")
  .addIngredients("minecraft:lantern", [{item: "minecraft:iron_nugget", count: 8, current: 0}, {item: "minecraft:torch", count: 1, current: 0}])
  .setResult("minecraft:lantern", 1);

builder
  .createRecipe("minecraft:lapis_block")
  .addIngredients("minecraft:lapis_block", [{item: "minecraft:dye", count: 9, current: 0}])
  .setResult("minecraft:lapis_block", 1);

builder
  .createRecipe("minecraft:lapis_lazuli")
  .addIngredients("minecraft:lapis_lazuli", [{item: "minecraft:lapis_block", count: 1, current: 0}])
  .setResult("minecraft:lapis_lazuli", 9);

builder
  .createRecipe("minecraft:lead")
  .addIngredients("minecraft:lead", [{item: "minecraft:string", count: 4, current: 0}, {item: "minecraft:slime_ball", count: 1, current: 0}])
  .setResult("minecraft:lead", 2);

builder
  .createRecipe("minecraft:leather")
  .addIngredients("minecraft:leather", [{item: "minecraft:rabbit_hide", count: 4, current: 0}, {item: "minecraft:leather", count: 31, current: 0}])
  .setResult("minecraft:leather", 6);

builder
  .createRecipe("minecraft:lectern")
  .addIngredients("minecraft:lectern", [{item: "minecraft:bookshelf", count: 1, current: 0}, {item: "crimson_slab", count: 4, current: 0}, {item: "bookshelf", count: 3, current: 0}, {item: "mangrove_slab", count: 4, current: 0}, {item: "warped_slab", count: 4, current: 0}])
  .setResult("minecraft:lectern", 4);

builder
  .createRecipe("minecraft:lever")
  .addIngredients("minecraft:lever", [{item: "minecraft:stick", count: 1, current: 0}, {item: "minecraft:cobblestone", count: 1, current: 0}])
  .setResult("minecraft:lever", 1);

builder
  .createRecipe("minecraft:lightning_rod")
  .addIngredients("minecraft:lightning_rod", [{item: "minecraft:copper_ingot", count: 3, current: 0}])
  .setResult("minecraft:lightning_rod", 1);

builder
  .createRecipe("minecraft:light_blue_banner")
  .addIngredients("minecraft:light_blue_banner", [{item: "minecraft:wool", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:light_blue_banner", 1);

builder
  .createRecipe("minecraft:light_blue_candle")
  .addIngredients("minecraft:light_blue_candle", [{item: "minecraft:candle", count: 1, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:light_blue_candle", 1);

builder
  .createRecipe("minecraft:light_blue_carpet")
  .addIngredients("minecraft:light_blue_carpet", [{item: "minecraft:wool", count: 2, current: 0}, {item: "minecraft:carpet", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:light_blue_carpet", 11);

builder
  .createRecipe("minecraft:light_blue_concrete_powder")
  .addIngredients("minecraft:light_blue_concrete_powder", [{item: "minecraft:dye", count: 1, current: 0}, {item: "minecraft:sand", count: 4, current: 0}, {item: "minecraft:gravel", count: 4, current: 0}])
  .setResult("minecraft:light_blue_concrete_powder", 8);

builder
  .createRecipe("minecraft:light_blue_dye")
  .addIngredients("minecraft:light_blue_dye", [{item: "minecraft:dye", count: 8, current: 0}, {item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:light_blue_dye", 9);

builder
  .createRecipe("minecraft:light_blue_stained_glass")
  .addIngredients("minecraft:light_blue_stained_glass", [{item: "minecraft:glass", count: 8, current: 0}, {item: "minecraft:dye", count: 2, current: 0}, {item: "minecraft:light_blue_stained_glass", count: 6, current: 0}, {item: "minecraft:glass_pane", count: 8, current: 0}])
  .setResult("minecraft:light_blue_stained_glass", 32);

builder
  .createRecipe("minecraft:light_blue_stained_hardened_clay")
  .addIngredients("minecraft:light_blue_stained_hardened_clay", [{item: "minecraft:hardened_clay", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:light_blue_stained_hardened_clay", 8);

builder
  .createRecipe("minecraft:light_gray_banner")
  .addIngredients("minecraft:light_gray_banner", [{item: "minecraft:wool", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:light_gray_banner", 1);

builder
  .createRecipe("minecraft:light_gray_candle")
  .addIngredients("minecraft:light_gray_candle", [{item: "minecraft:candle", count: 1, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:light_gray_candle", 1);

builder
  .createRecipe("minecraft:light_gray_carpet")
  .addIngredients("minecraft:light_gray_carpet", [{item: "minecraft:wool", count: 2, current: 0}])
  .setResult("minecraft:light_gray_carpet", 3);

builder
  .createRecipe("minecraft:light_gray_concrete_powder")
  .addIngredients("minecraft:light_gray_concrete_powder", [{item: "minecraft:dye", count: 1, current: 0}, {item: "minecraft:sand", count: 4, current: 0}, {item: "minecraft:gravel", count: 4, current: 0}])
  .setResult("minecraft:light_gray_concrete_powder", 8);

builder
  .createRecipe("minecraft:light_gray_dye")
  .addIngredients("minecraft:light_gray_dye", [{item: "minecraft:dye", count: 16, current: 0}, {item: "minecraft:red_flower", count: 3, current: 0}])
  .setResult("minecraft:light_gray_dye", 19);

builder
  .createRecipe("minecraft:light_gray_stained_glass")
  .addIngredients("minecraft:light_gray_stained_glass", [{item: "minecraft:glass", count: 8, current: 0}, {item: "minecraft:dye", count: 2, current: 0}, {item: "minecraft:light_gray_stained_glass", count: 6, current: 0}, {item: "minecraft:glass_pane", count: 8, current: 0}])
  .setResult("minecraft:light_gray_stained_glass", 32);

builder
  .createRecipe("minecraft:light_gray_stained_hardened_clay")
  .addIngredients("minecraft:light_gray_stained_hardened_clay", [{item: "minecraft:hardened_clay", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:light_gray_stained_hardened_clay", 8);

builder
  .createRecipe("minecraft:light_gray__carpet_from_white")
  .addIngredients("minecraft:light_gray__carpet_from_white", [{item: "minecraft:carpet", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:light_gray__carpet_from_white", 8);

builder
  .createRecipe("minecraft:light_weighted_pressure_plate")
  .addIngredients("minecraft:light_weighted_pressure_plate", [{item: "minecraft:gold_ingot", count: 2, current: 0}])
  .setResult("minecraft:light_weighted_pressure_plate", 1);

builder
  .createRecipe("minecraft:lime_banner")
  .addIngredients("minecraft:lime_banner", [{item: "minecraft:wool", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:lime_banner", 1);

builder
  .createRecipe("minecraft:lime_candle")
  .addIngredients("minecraft:lime_candle", [{item: "minecraft:candle", count: 1, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:lime_candle", 1);

builder
  .createRecipe("minecraft:lime_carpet")
  .addIngredients("minecraft:lime_carpet", [{item: "minecraft:wool", count: 2, current: 0}])
  .setResult("minecraft:lime_carpet", 3);

builder
  .createRecipe("minecraft:lime_concrete_powder")
  .addIngredients("minecraft:lime_concrete_powder", [{item: "minecraft:dye", count: 1, current: 0}, {item: "minecraft:sand", count: 4, current: 0}, {item: "minecraft:gravel", count: 4, current: 0}])
  .setResult("minecraft:lime_concrete_powder", 8);

builder
  .createRecipe("minecraft:lime_dye")
  .addIngredients("minecraft:lime_dye", [{item: "minecraft:dye", count: 4, current: 0}])
  .setResult("minecraft:lime_dye", 4);

builder
  .createRecipe("minecraft:lime_stained_glass")
  .addIngredients("minecraft:lime_stained_glass", [{item: "minecraft:glass", count: 8, current: 0}, {item: "minecraft:dye", count: 2, current: 0}, {item: "minecraft:lime_stained_glass", count: 6, current: 0}, {item: "minecraft:glass_pane", count: 8, current: 0}])
  .setResult("minecraft:lime_stained_glass", 32);

builder
  .createRecipe("minecraft:lime_stained_hardened_clay")
  .addIngredients("minecraft:lime_stained_hardened_clay", [{item: "minecraft:hardened_clay", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:lime_stained_hardened_clay", 8);

builder
  .createRecipe("minecraft:lime__carpet_from_white")
  .addIngredients("minecraft:lime__carpet_from_white", [{item: "minecraft:carpet", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:lime__carpet_from_white", 8);

builder
  .createRecipe("minecraft:lit_pumpkin")
  .addIngredients("minecraft:lit_pumpkin", [{item: "minecraft:carved_pumpkin", count: 1, current: 0}, {item: "minecraft:torch", count: 1, current: 0}])
  .setResult("minecraft:lit_pumpkin", 1);

builder
  .createRecipe("minecraft:locator_map")
  .addIngredients("minecraft:locator_map", [{item: "minecraft:paper", count: 8, current: 0}, {item: "minecraft:compass", count: 1, current: 0}])
  .setResult("minecraft:locator_map", 1);

builder
  .createRecipe("minecraft:lodestone")
  .addIngredients("minecraft:lodestone", [{item: "minecraft:stonebrick:3", count: 8, current: 0}, {item: "minecraft:netherite_ingot", count: 1, current: 0}])
  .setResult("minecraft:lodestone", 1);

builder
  .createRecipe("minecraft:loom")
  .addIngredients("minecraft:loom", [{item: "minecraft:string", count: 2, current: 0}, {item: "string", count: 6, current: 0}, {item: "crimson_planks", count: 2, current: 0}, {item: "mangrove_planks", count: 2, current: 0}, {item: "warped_planks", count: 2, current: 0}])
  .setResult("minecraft:loom", 4);

builder
  .createRecipe("minecraft:magenta_banner")
  .addIngredients("minecraft:magenta_banner", [{item: "minecraft:wool", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:magenta_banner", 1);

builder
  .createRecipe("minecraft:magenta_candle")
  .addIngredients("minecraft:magenta_candle", [{item: "minecraft:candle", count: 1, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:magenta_candle", 1);

builder
  .createRecipe("minecraft:magenta_carpet")
  .addIngredients("minecraft:magenta_carpet", [{item: "minecraft:wool", count: 2, current: 0}, {item: "minecraft:carpet", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:magenta_carpet", 11);

builder
  .createRecipe("minecraft:magenta_concrete_powder")
  .addIngredients("minecraft:magenta_concrete_powder", [{item: "minecraft:dye", count: 1, current: 0}, {item: "minecraft:sand", count: 4, current: 0}, {item: "minecraft:gravel", count: 4, current: 0}])
  .setResult("minecraft:magenta_concrete_powder", 8);

builder
  .createRecipe("minecraft:magenta_dye")
  .addIngredients("minecraft:magenta_dye", [{item: "minecraft:dye", count: 24, current: 0}, {item: "minecraft:red_flower", count: 1, current: 0}, {item: "minecraft:double_plant", count: 1, current: 0}])
  .setResult("minecraft:magenta_dye", 27);

builder
  .createRecipe("minecraft:magenta_stained_glass")
  .addIngredients("minecraft:magenta_stained_glass", [{item: "minecraft:glass", count: 8, current: 0}, {item: "minecraft:dye", count: 2, current: 0}, {item: "minecraft:magenta_stained_glass", count: 6, current: 0}, {item: "minecraft:glass_pane", count: 8, current: 0}])
  .setResult("minecraft:magenta_stained_glass", 32);

builder
  .createRecipe("minecraft:magenta_stained_hardened_clay")
  .addIngredients("minecraft:magenta_stained_hardened_clay", [{item: "minecraft:hardened_clay", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:magenta_stained_hardened_clay", 8);

builder
  .createRecipe("minecraft:magma")
  .addIngredients("minecraft:magma", [{item: "minecraft:magma_cream", count: 4, current: 0}, {item: "minecraft:blaze_powder", count: 1, current: 0}, {item: "minecraft:slime_ball", count: 1, current: 0}])
  .setResult("minecraft:magma", 2);

builder
  .createRecipe("minecraft:mangrove_boat")
  .addIngredients("minecraft:mangrove_boat", [{item: "minecraft:mangrove_planks", count: 5, current: 0}])
  .setResult("minecraft:mangrove_boat", 1);

builder
  .createRecipe("minecraft:mangrove_button")
  .addIngredients("minecraft:mangrove_button", [{item: "minecraft:mangrove_planks", count: 1, current: 0}])
  .setResult("minecraft:mangrove_button", 1);

builder
  .createRecipe("minecraft:mangrove_chest_boat")
  .addIngredients("minecraft:mangrove_chest_boat", [{item: "minecraft:chest", count: 1, current: 0}, {item: "minecraft:boat", count: 1, current: 0}])
  .setResult("minecraft:mangrove_chest_boat", 1);

builder
  .createRecipe("minecraft:mangrove_door")
  .addIngredients("minecraft:mangrove_door", [{item: "minecraft:mangrove_planks", count: 6, current: 0}])
  .setResult("minecraft:mangrove_door", 3);

builder
  .createRecipe("minecraft:mangrove_fence")
  .addIngredients("minecraft:mangrove_fence", [{item: "minecraft:mangrove_planks", count: 6, current: 0}, {item: "minecraft:stick", count: 6, current: 0}])
  .setResult("minecraft:mangrove_fence", 4);

builder
  .createRecipe("minecraft:mangrove_hanging_sign")
  .addIngredients("minecraft:mangrove_hanging_sign", [{item: "minecraft:chain", count: 2, current: 0}, {item: "minecraft:stripped_mangrove_log", count: 6, current: 0}])
  .setResult("minecraft:mangrove_hanging_sign", 6);

builder
  .createRecipe("minecraft:mangrove_planks")
  .addIngredients("minecraft:mangrove_planks", [{item: "minecraft:mangrove_log", count: 1, current: 0}, {item: "minecraft:stripped_mangrove_log", count: 1, current: 0}, {item: "minecraft:stripped_mangrove_wood", count: 1, current: 0}, {item: "minecraft:mangrove_wood", count: 1, current: 0}])
  .setResult("minecraft:mangrove_planks", 16);

builder
  .createRecipe("minecraft:mangrove_pressure_plate")
  .addIngredients("minecraft:mangrove_pressure_plate", [{item: "minecraft:mangrove_planks", count: 2, current: 0}])
  .setResult("minecraft:mangrove_pressure_plate", 1);

builder
  .createRecipe("minecraft:mangrove_sign")
  .addIngredients("minecraft:mangrove_sign", [{item: "minecraft:mangrove_planks", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:mangrove_sign", 3);

builder
  .createRecipe("minecraft:mangrove_slab")
  .addIngredients("minecraft:mangrove_slab", [{item: "minecraft:mangrove_planks", count: 3, current: 0}])
  .setResult("minecraft:mangrove_slab", 6);

builder
  .createRecipe("minecraft:mangrove_stairs")
  .addIngredients("minecraft:mangrove_stairs", [{item: "minecraft:mangrove_planks", count: 6, current: 0}])
  .setResult("minecraft:mangrove_stairs", 4);

builder
  .createRecipe("minecraft:mangrove_trapdoor")
  .addIngredients("minecraft:mangrove_trapdoor", [{item: "minecraft:mangrove_planks", count: 6, current: 0}])
  .setResult("minecraft:mangrove_trapdoor", 2);

builder
  .createRecipe("minecraft:mangrove_wood")
  .addIngredients("minecraft:mangrove_wood", [{item: "minecraft:mangrove_log", count: 4, current: 0}, {item: "minecraft:stripped_mangrove_log", count: 4, current: 0}])
  .setResult("minecraft:mangrove_wood", 6);

builder
  .createRecipe("minecraft:map")
  .addIngredients("minecraft:map", [{item: "minecraft:paper", count: 9, current: 0}])
  .setResult("minecraft:map", 1);

builder
  .createRecipe("minecraft:melon_block")
  .addIngredients("minecraft:melon_block", [{item: "minecraft:melon", count: 9, current: 0}])
  .setResult("minecraft:melon_block", 1);

builder
  .createRecipe("minecraft:melon_seeds")
  .addIngredients("minecraft:melon_seeds", [{item: "minecraft:melon", count: 1, current: 0}])
  .setResult("minecraft:melon_seeds", 1);

builder
  .createRecipe("minecraft:minecart")
  .addIngredients("minecraft:minecart", [{item: "minecraft:iron_ingot", count: 5, current: 0}])
  .setResult("minecraft:minecart", 1);

builder
  .createRecipe("minecraft:mossy_cobblestone")
  .addIngredients("minecraft:mossy_cobblestone", [{item: "minecraft:cobblestone", count: 2, current: 0}, {item: "minecraft:vine", count: 1, current: 0}, {item: "minecraft:moss_block", count: 1, current: 0}, {item: "minecraft:mossy_cobblestone", count: 12, current: 0}])
  .setResult("minecraft:mossy_cobblestone", 12);

builder
  .createRecipe("minecraft:mossy_stonebrick")
  .addIngredients("minecraft:mossy_stonebrick", [{item: "minecraft:stonebrick", count: 2, current: 0}, {item: "minecraft:vine", count: 1, current: 0}, {item: "minecraft:moss_block", count: 1, current: 0}])
  .setResult("minecraft:mossy_stonebrick", 2);

builder
  .createRecipe("minecraft:mossy_stone_brick_stairs")
  .addIngredients("minecraft:mossy_stone_brick_stairs", [{item: "minecraft:stonebrick", count: 6, current: 0}])
  .setResult("minecraft:mossy_stone_brick_stairs", 4);

builder
  .createRecipe("minecraft:mossy_stone_brick_wall")
  .addIngredients("minecraft:mossy_stone_brick_wall", [{item: "minecraft:stonebrick", count: 6, current: 0}])
  .setResult("minecraft:mossy_stone_brick_wall", 6);

builder
  .createRecipe("minecraft:moss_carpet")
  .addIngredients("minecraft:moss_carpet", [{item: "minecraft:moss_block", count: 2, current: 0}])
  .setResult("minecraft:moss_carpet", 3);

builder
  .createRecipe("minecraft:muddy_mangrove_roots")
  .addIngredients("minecraft:muddy_mangrove_roots", [{item: "minecraft:mangrove_roots", count: 1, current: 0}, {item: "minecraft:mud", count: 1, current: 0}])
  .setResult("minecraft:muddy_mangrove_roots", 1);

builder
  .createRecipe("minecraft:mud_bricks")
  .addIngredients("minecraft:mud_bricks", [{item: "minecraft:packed_mud", count: 4, current: 0}])
  .setResult("minecraft:mud_bricks", 4);

builder
  .createRecipe("minecraft:mud_brick_slab")
  .addIngredients("minecraft:mud_brick_slab", [{item: "minecraft:mud_bricks", count: 3, current: 0}])
  .setResult("minecraft:mud_brick_slab", 6);

builder
  .createRecipe("minecraft:mud_brick_stairs")
  .addIngredients("minecraft:mud_brick_stairs", [{item: "minecraft:mud_bricks", count: 6, current: 0}])
  .setResult("minecraft:mud_brick_stairs", 4);

builder
  .createRecipe("minecraft:mud_brick_wall")
  .addIngredients("minecraft:mud_brick_wall", [{item: "minecraft:mud_bricks", count: 6, current: 0}])
  .setResult("minecraft:mud_brick_wall", 6);

builder
  .createRecipe("minecraft:mushroom_stew")
  .addIngredients("minecraft:mushroom_stew", [{item: "minecraft:brown_mushroom", count: 1, current: 0}, {item: "minecraft:red_mushroom", count: 1, current: 0}, {item: "minecraft:bowl", count: 1, current: 0}])
  .setResult("minecraft:mushroom_stew", 1);

builder
  .createRecipe("minecraft:netherite_block")
  .addIngredients("minecraft:netherite_block", [{item: "minecraft:netherite_ingot", count: 9, current: 0}])
  .setResult("minecraft:netherite_block", 1);

builder
  .createRecipe("minecraft:netherite_ingot")
  .addIngredients("minecraft:netherite_ingot", [{item: "minecraft:netherite_scrap", count: 4, current: 0}, {item: "minecraft:gold_ingot", count: 4, current: 0}, {item: "minecraft:netherite_block", count: 1, current: 0}])
  .setResult("minecraft:netherite_ingot", 10);

builder
  .createRecipe("minecraft:netherite_upgrade_smithing_template_duplicate")
  .addIngredients("minecraft:netherite_upgrade_smithing_template_duplicate", [{item: "minecraft:diamond", count: 7, current: 0}, {item: "minecraft:netherite_upgrade_smithing_template", count: 1, current: 0}, {item: "minecraft:netherrack", count: 1, current: 0}])
  .setResult("minecraft:netherite_upgrade_smithing_template_duplicate", 2);

builder
  .createRecipe("minecraft:nether_brick")
  .addIngredients("minecraft:nether_brick", [{item: "minecraft:netherbrick", count: 6, current: 0}, {item: "minecraft:nether_brick", count: 16, current: 0}])
  .setResult("minecraft:nether_brick", 17);

builder
  .createRecipe("minecraft:nether_wart_block")
  .addIngredients("minecraft:nether_wart_block", [{item: "minecraft:nether_wart", count: 9, current: 0}])
  .setResult("minecraft:nether_wart_block", 1);

builder
  .createRecipe("minecraft:noteblock")
  .addIngredients("minecraft:noteblock", [{item: "redstone", count: 4, current: 0}, {item: "crimson_planks", count: 8, current: 0}, {item: "mangrove_planks", count: 8, current: 0}, {item: "warped_planks", count: 8, current: 0}])
  .setResult("minecraft:noteblock", 4);

builder
  .createRecipe("minecraft:oak_fence")
  .addIngredients("minecraft:oak_fence", [{item: "minecraft:planks", count: 4, current: 0}, {item: "minecraft:stick", count: 2, current: 0}])
  .setResult("minecraft:oak_fence", 3);

builder
  .createRecipe("minecraft:oak_hanging_sign")
  .addIngredients("minecraft:oak_hanging_sign", [{item: "minecraft:chain", count: 2, current: 0}, {item: "minecraft:stripped_oak_log", count: 6, current: 0}])
  .setResult("minecraft:oak_hanging_sign", 6);

builder
  .createRecipe("minecraft:oak_planks")
  .addIngredients("minecraft:oak_planks", [{item: "minecraft:log", count: 1, current: 0}, {item: "minecraft:stripped_oak_log", count: 1, current: 0}, {item: "minecraft:wood", count: 2, current: 0}])
  .setResult("minecraft:oak_planks", 16);

builder
  .createRecipe("minecraft:oak_stairs")
  .addIngredients("minecraft:oak_stairs", [{item: "minecraft:planks", count: 6, current: 0}])
  .setResult("minecraft:oak_stairs", 4);

builder
  .createRecipe("minecraft:oak_wood")
  .addIngredients("minecraft:oak_wood", [{item: "minecraft:log", count: 4, current: 0}, {item: "minecraft:planks", count: 3, current: 0}, {item: "minecraft:stripped_oak_log", count: 4, current: 0}])
  .setResult("minecraft:oak_wood", 12);

builder
  .createRecipe("minecraft:observer")
  .addIngredients("minecraft:observer", [{item: "minecraft:cobblestone", count: 6, current: 0}, {item: "minecraft:redstone", count: 2, current: 0}, {item: "minecraft:quartz", count: 1, current: 0}])
  .setResult("minecraft:observer", 1);

builder
  .createRecipe("minecraft:orange_banner")
  .addIngredients("minecraft:orange_banner", [{item: "minecraft:wool", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:orange_banner", 1);

builder
  .createRecipe("minecraft:orange_candle")
  .addIngredients("minecraft:orange_candle", [{item: "minecraft:candle", count: 1, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:orange_candle", 1);

builder
  .createRecipe("minecraft:orange_carpet")
  .addIngredients("minecraft:orange_carpet", [{item: "minecraft:wool", count: 2, current: 0}, {item: "minecraft:carpet", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:orange_carpet", 11);

builder
  .createRecipe("minecraft:orange_concrete_powder")
  .addIngredients("minecraft:orange_concrete_powder", [{item: "minecraft:dye", count: 1, current: 0}, {item: "minecraft:sand", count: 4, current: 0}, {item: "minecraft:gravel", count: 4, current: 0}])
  .setResult("minecraft:orange_concrete_powder", 8);

builder
  .createRecipe("minecraft:orange_dye_from_orange_tulip")
  .addIngredients("minecraft:orange_dye_from_orange_tulip", [{item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:orange_dye_from_orange_tulip", 1);

builder
  .createRecipe("minecraft:orange_dye_from_red_yellow")
  .addIngredients("minecraft:orange_dye_from_red_yellow", [{item: "minecraft:dye", count: 2, current: 0}])
  .setResult("minecraft:orange_dye_from_red_yellow", 2);

builder
  .createRecipe("minecraft:orange_dye_from_torchflower")
  .addIngredients("minecraft:orange_dye_from_torchflower", [{item: "minecraft:torchflower", count: 1, current: 0}])
  .setResult("minecraft:orange_dye_from_torchflower", 1);

builder
  .createRecipe("minecraft:orange_stained_glass")
  .addIngredients("minecraft:orange_stained_glass", [{item: "minecraft:glass", count: 8, current: 0}, {item: "minecraft:dye", count: 2, current: 0}, {item: "minecraft:orange_stained_glass", count: 6, current: 0}, {item: "minecraft:glass_pane", count: 8, current: 0}])
  .setResult("minecraft:orange_stained_glass", 32);

builder
  .createRecipe("minecraft:orange_stained_hardened_clay")
  .addIngredients("minecraft:orange_stained_hardened_clay", [{item: "minecraft:hardened_clay", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:orange_stained_hardened_clay", 8);

builder
  .createRecipe("minecraft:packed_ice")
  .addIngredients("minecraft:packed_ice", [{item: "minecraft:ice", count: 9, current: 0}])
  .setResult("minecraft:packed_ice", 1);

builder
  .createRecipe("minecraft:packed_mud")
  .addIngredients("minecraft:packed_mud", [{item: "minecraft:mud", count: 1, current: 0}, {item: "minecraft:wheat", count: 1, current: 0}])
  .setResult("minecraft:packed_mud", 1);

builder
  .createRecipe("minecraft:painting")
  .addIngredients("minecraft:painting", [{item: "minecraft:stick", count: 8, current: 0}, {item: "minecraft:wool", count: 1, current: 0}])
  .setResult("minecraft:painting", 1);

builder
  .createRecipe("minecraft:paper")
  .addIngredients("minecraft:paper", [{item: "minecraft:reeds", count: 3, current: 0}])
  .setResult("minecraft:paper", 3);

builder
  .createRecipe("minecraft:pillar_quartz_block")
  .addIngredients("minecraft:pillar_quartz_block", [{item: "minecraft:quartz_block", count: 2, current: 0}])
  .setResult("minecraft:pillar_quartz_block", 2);

builder
  .createRecipe("minecraft:pink_banner")
  .addIngredients("minecraft:pink_banner", [{item: "minecraft:wool", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:pink_banner", 1);

builder
  .createRecipe("minecraft:pink_candle")
  .addIngredients("minecraft:pink_candle", [{item: "minecraft:candle", count: 1, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:pink_candle", 1);

builder
  .createRecipe("minecraft:pink_carpet")
  .addIngredients("minecraft:pink_carpet", [{item: "minecraft:wool", count: 2, current: 0}, {item: "minecraft:carpet", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:pink_carpet", 11);

builder
  .createRecipe("minecraft:pink_concrete_powder")
  .addIngredients("minecraft:pink_concrete_powder", [{item: "minecraft:dye", count: 1, current: 0}, {item: "minecraft:sand", count: 4, current: 0}, {item: "minecraft:gravel", count: 4, current: 0}])
  .setResult("minecraft:pink_concrete_powder", 8);

builder
  .createRecipe("minecraft:pink_dye")
  .addIngredients("minecraft:pink_dye", [{item: "minecraft:dye", count: 4, current: 0}, {item: "minecraft:double_plant", count: 1, current: 0}, {item: "minecraft:pink_petals", count: 1, current: 0}, {item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:pink_dye", 8);

builder
  .createRecipe("minecraft:pink_stained_glass")
  .addIngredients("minecraft:pink_stained_glass", [{item: "minecraft:glass", count: 8, current: 0}, {item: "minecraft:dye", count: 2, current: 0}, {item: "minecraft:pink_stained_glass", count: 6, current: 0}, {item: "minecraft:glass_pane", count: 8, current: 0}])
  .setResult("minecraft:pink_stained_glass", 32);

builder
  .createRecipe("minecraft:pink_stained_hardened_clay")
  .addIngredients("minecraft:pink_stained_hardened_clay", [{item: "minecraft:hardened_clay", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:pink_stained_hardened_clay", 8);

builder
  .createRecipe("minecraft:piston")
  .addIngredients("minecraft:piston", [{item: "cobblestone", count: 16, current: 0}, {item: "iron_ingot", count: 4, current: 0}, {item: "redstone", count: 4, current: 0}, {item: "crimson_planks", count: 3, current: 0}, {item: "mangrove_planks", count: 3, current: 0}, {item: "warped_planks", count: 3, current: 0}])
  .setResult("minecraft:piston", 4);

builder
  .createRecipe("minecraft:polished_andesite")
  .addIngredients("minecraft:polished_andesite", [{item: "minecraft:stone", count: 10, current: 0}])
  .setResult("minecraft:polished_andesite", 8);

builder
  .createRecipe("minecraft:polished_basalt")
  .addIngredients("minecraft:polished_basalt", [{item: "minecraft:basalt", count: 4, current: 0}])
  .setResult("minecraft:polished_basalt", 4);

builder
  .createRecipe("minecraft:polished_blackstone")
  .addIngredients("minecraft:polished_blackstone", [{item: "minecraft:blackstone", count: 4, current: 0}, {item: "minecraft:polished_blackstone", count: 22, current: 0}, {item: "minecraft:polished_blackstone_bricks", count: 15, current: 0}])
  .setResult("minecraft:polished_blackstone", 42);

builder
  .createRecipe("minecraft:polished_deepslate")
  .addIngredients("minecraft:polished_deepslate", [{item: "minecraft:cobbled_deepslate", count: 4, current: 0}, {item: "minecraft:polished_deepslate", count: 15, current: 0}])
  .setResult("minecraft:polished_deepslate", 29);

builder
  .createRecipe("minecraft:polished_diorite")
  .addIngredients("minecraft:polished_diorite", [{item: "minecraft:stone", count: 10, current: 0}])
  .setResult("minecraft:polished_diorite", 8);

builder
  .createRecipe("minecraft:polished_granite")
  .addIngredients("minecraft:polished_granite", [{item: "minecraft:stone", count: 10, current: 0}])
  .setResult("minecraft:polished_granite", 8);

builder
  .createRecipe("minecraft:prismarine")
  .addIngredients("minecraft:prismarine", [{item: "minecraft:prismarine_shard", count: 13, current: 0}, {item: "minecraft:prismarine", count: 24, current: 0}])
  .setResult("minecraft:prismarine", 20);

builder
  .createRecipe("minecraft:pumpkin_pie")
  .addIngredients("minecraft:pumpkin_pie", [{item: "minecraft:pumpkin", count: 1, current: 0}, {item: "minecraft:sugar", count: 1, current: 0}, {item: "minecraft:egg", count: 1, current: 0}])
  .setResult("minecraft:pumpkin_pie", 1);

builder
  .createRecipe("minecraft:pumpkin_seeds")
  .addIngredients("minecraft:pumpkin_seeds", [{item: "minecraft:pumpkin", count: 1, current: 0}])
  .setResult("minecraft:pumpkin_seeds", 4);

builder
  .createRecipe("minecraft:purple_banner")
  .addIngredients("minecraft:purple_banner", [{item: "minecraft:wool", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:purple_banner", 1);

builder
  .createRecipe("minecraft:purple_candle")
  .addIngredients("minecraft:purple_candle", [{item: "minecraft:candle", count: 1, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:purple_candle", 1);

builder
  .createRecipe("minecraft:purple_carpet")
  .addIngredients("minecraft:purple_carpet", [{item: "minecraft:wool", count: 2, current: 0}, {item: "minecraft:carpet", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:purple_carpet", 11);

builder
  .createRecipe("minecraft:purple_concrete_powder")
  .addIngredients("minecraft:purple_concrete_powder", [{item: "minecraft:dye", count: 1, current: 0}, {item: "minecraft:sand", count: 4, current: 0}, {item: "minecraft:gravel", count: 4, current: 0}])
  .setResult("minecraft:purple_concrete_powder", 8);

builder
  .createRecipe("minecraft:purple_dye")
  .addIngredients("minecraft:purple_dye", [{item: "minecraft:dye", count: 4, current: 0}])
  .setResult("minecraft:purple_dye", 4);

builder
  .createRecipe("minecraft:purple_stained_glass")
  .addIngredients("minecraft:purple_stained_glass", [{item: "minecraft:glass", count: 8, current: 0}, {item: "minecraft:dye", count: 2, current: 0}, {item: "minecraft:purple_stained_glass", count: 6, current: 0}, {item: "minecraft:glass_pane", count: 8, current: 0}])
  .setResult("minecraft:purple_stained_glass", 32);

builder
  .createRecipe("minecraft:purple_stained_hardened_clay")
  .addIngredients("minecraft:purple_stained_hardened_clay", [{item: "minecraft:hardened_clay", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:purple_stained_hardened_clay", 8);

builder
  .createRecipe("minecraft:purpur_block")
  .addIngredients("minecraft:purpur_block", [{item: "minecraft:chorus_fruit_popped", count: 4, current: 0}])
  .setResult("minecraft:purpur_block", 4);

builder
  .createRecipe("minecraft:purpur_stairs")
  .addIngredients("minecraft:purpur_stairs", [{item: "minecraft:purpur_block", count: 6, current: 0}])
  .setResult("minecraft:purpur_stairs", 4);

builder
  .createRecipe("minecraft:quartz_block")
  .addIngredients("minecraft:quartz_block", [{item: "minecraft:quartz", count: 4, current: 0}])
  .setResult("minecraft:quartz_block", 1);

builder
  .createRecipe("minecraft:quartz_bricks")
  .addIngredients("minecraft:quartz_bricks", [{item: "minecraft:quartz_block", count: 4, current: 0}])
  .setResult("minecraft:quartz_bricks", 1);

builder
  .createRecipe("minecraft:quartz_stairs")
  .addIngredients("minecraft:quartz_stairs", [{item: "minecraft:quartz_block", count: 6, current: 0}])
  .setResult("minecraft:quartz_stairs", 4);

builder
  .createRecipe("minecraft:rabbit_stew_from_brown_mushroom")
  .addIngredients("minecraft:rabbit_stew_from_brown_mushroom", [{item: "minecraft:bowl", count: 1, current: 0}, {item: "minecraft:baked_potato", count: 1, current: 0}, {item: "minecraft:carrot", count: 1, current: 0}, {item: "minecraft:brown_mushroom", count: 1, current: 0}, {item: "minecraft:cooked_rabbit", count: 1, current: 0}])
  .setResult("minecraft:rabbit_stew_from_brown_mushroom", 1);

builder
  .createRecipe("minecraft:rabbit_stew_from_red_mushroom")
  .addIngredients("minecraft:rabbit_stew_from_red_mushroom", [{item: "minecraft:bowl", count: 1, current: 0}, {item: "minecraft:baked_potato", count: 1, current: 0}, {item: "minecraft:carrot", count: 1, current: 0}, {item: "minecraft:red_mushroom", count: 1, current: 0}, {item: "minecraft:cooked_rabbit", count: 1, current: 0}])
  .setResult("minecraft:rabbit_stew_from_red_mushroom", 1);

builder
  .createRecipe("minecraft:rail")
  .addIngredients("minecraft:rail", [{item: "minecraft:iron_ingot", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:rail", 16);

builder
  .createRecipe("minecraft:raiser_armor_trim_smithing_template_duplicate")
  .addIngredients("minecraft:raiser_armor_trim_smithing_template_duplicate", [{item: "minecraft:diamond", count: 7, current: 0}, {item: "minecraft:raiser_armor_trim_smithing_template", count: 1, current: 0}, {item: "minecraft:hardened_clay", count: 1, current: 0}])
  .setResult("minecraft:raiser_armor_trim_smithing_template_duplicate", 2);

builder
  .createRecipe("minecraft:raw_copper")
  .addIngredients("minecraft:raw_copper", [{item: "minecraft:raw_copper_block", count: 1, current: 0}, {item: "minecraft:raw_copper", count: 9, current: 0}])
  .setResult("minecraft:raw_copper", 10);

builder
  .createRecipe("minecraft:raw_gold")
  .addIngredients("minecraft:raw_gold", [{item: "minecraft:raw_gold_block", count: 1, current: 0}, {item: "minecraft:raw_gold", count: 9, current: 0}])
  .setResult("minecraft:raw_gold", 10);

builder
  .createRecipe("minecraft:raw_iron")
  .addIngredients("minecraft:raw_iron", [{item: "minecraft:raw_iron_block", count: 1, current: 0}, {item: "minecraft:raw_iron", count: 9, current: 0}])
  .setResult("minecraft:raw_iron", 10);

builder
  .createRecipe("minecraft:record_5")
  .addIngredients("minecraft:record_5", [{item: "minecraft:disc_fragment_5", count: 9, current: 0}])
  .setResult("minecraft:record_5", 1);

builder
  .createRecipe("minecraft:recovery_compass")
  .addIngredients("minecraft:recovery_compass", [{item: "minecraft:echo_shard", count: 16, current: 0}, {item: "minecraft:compass", count: 1, current: 0}, {item: "minecraft:lodestone_compass", count: 1, current: 0}])
  .setResult("minecraft:recovery_compass", 2);

builder
  .createRecipe("minecraft:redstone")
  .addIngredients("minecraft:redstone", [{item: "minecraft:redstone_block", count: 1, current: 0}, {item: "minecraft:redstone", count: 14, current: 0}, {item: "minecraft:glowstone", count: 1, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:redstone", 12);

builder
  .createRecipe("minecraft:red_banner")
  .addIngredients("minecraft:red_banner", [{item: "minecraft:wool", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:red_banner", 1);

builder
  .createRecipe("minecraft:red_candle")
  .addIngredients("minecraft:red_candle", [{item: "minecraft:candle", count: 1, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:red_candle", 1);

builder
  .createRecipe("minecraft:red_carpet")
  .addIngredients("minecraft:red_carpet", [{item: "minecraft:wool", count: 2, current: 0}, {item: "minecraft:carpet", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:red_carpet", 11);

builder
  .createRecipe("minecraft:red_concrete_powder")
  .addIngredients("minecraft:red_concrete_powder", [{item: "minecraft:dye", count: 1, current: 0}, {item: "minecraft:sand", count: 4, current: 0}, {item: "minecraft:gravel", count: 4, current: 0}])
  .setResult("minecraft:red_concrete_powder", 8);

builder
  .createRecipe("minecraft:red_dye_from_beetroot")
  .addIngredients("minecraft:red_dye_from_beetroot", [{item: "minecraft:beetroot", count: 1, current: 0}])
  .setResult("minecraft:red_dye_from_beetroot", 1);

builder
  .createRecipe("minecraft:red_dye_from_poppy")
  .addIngredients("minecraft:red_dye_from_poppy", [{item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:red_dye_from_poppy", 1);

builder
  .createRecipe("minecraft:red_dye_from_rose_bush")
  .addIngredients("minecraft:red_dye_from_rose_bush", [{item: "minecraft:double_plant", count: 1, current: 0}])
  .setResult("minecraft:red_dye_from_rose_bush", 2);

builder
  .createRecipe("minecraft:red_dye_from_tulip")
  .addIngredients("minecraft:red_dye_from_tulip", [{item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:red_dye_from_tulip", 1);

builder
  .createRecipe("minecraft:red_nether_brick")
  .addIngredients("minecraft:red_nether_brick", [{item: "minecraft:netherbrick", count: 2, current: 0}, {item: "minecraft:nether_wart", count: 2, current: 0}, {item: "minecraft:red_nether_brick", count: 12, current: 0}])
  .setResult("minecraft:red_nether_brick", 11);

builder
  .createRecipe("minecraft:red_sandstone")
  .addIngredients("minecraft:red_sandstone", [{item: "minecraft:sand", count: 4, current: 0}, {item: "minecraft:red_sandstone", count: 12, current: 0}])
  .setResult("minecraft:red_sandstone", 11);

builder
  .createRecipe("minecraft:red_stained_glass")
  .addIngredients("minecraft:red_stained_glass", [{item: "minecraft:glass", count: 8, current: 0}, {item: "minecraft:dye", count: 2, current: 0}, {item: "minecraft:red_stained_glass", count: 6, current: 0}, {item: "minecraft:glass_pane", count: 8, current: 0}])
  .setResult("minecraft:red_stained_glass", 32);

builder
  .createRecipe("minecraft:red_stained_hardened_clay")
  .addIngredients("minecraft:red_stained_hardened_clay", [{item: "minecraft:hardened_clay", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:red_stained_hardened_clay", 8);

builder
  .createRecipe("minecraft:repeater")
  .addIngredients("minecraft:repeater", [{item: "minecraft:redstone_torch", count: 2, current: 0}, {item: "minecraft:redstone", count: 1, current: 0}, {item: "minecraft:stone", count: 3, current: 0}])
  .setResult("minecraft:repeater", 1);

builder
  .createRecipe("minecraft:respawn_anchor")
  .addIngredients("minecraft:respawn_anchor", [{item: "minecraft:crying_obsidian", count: 6, current: 0}, {item: "minecraft:glowstone", count: 3, current: 0}])
  .setResult("minecraft:respawn_anchor", 1);

builder
  .createRecipe("minecraft:rib_armor_trim_smithing_template_duplicate")
  .addIngredients("minecraft:rib_armor_trim_smithing_template_duplicate", [{item: "minecraft:diamond", count: 7, current: 0}, {item: "minecraft:rib_armor_trim_smithing_template", count: 1, current: 0}, {item: "minecraft:netherrack", count: 1, current: 0}])
  .setResult("minecraft:rib_armor_trim_smithing_template_duplicate", 2);

builder
  .createRecipe("minecraft:sandstone")
  .addIngredients("minecraft:sandstone", [{item: "minecraft:sand", count: 4, current: 0}, {item: "minecraft:sandstone", count: 12, current: 0}])
  .setResult("minecraft:sandstone", 11);

builder
  .createRecipe("minecraft:scaffolding")
  .addIngredients("minecraft:scaffolding", [{item: "minecraft:bamboo", count: 6, current: 0}, {item: "minecraft:string", count: 1, current: 0}])
  .setResult("minecraft:scaffolding", 6);

builder
  .createRecipe("minecraft:sealantern")
  .addIngredients("minecraft:sealantern", [{item: "minecraft:prismarine_shard", count: 4, current: 0}, {item: "minecraft:prismarine_crystals", count: 5, current: 0}])
  .setResult("minecraft:sealantern", 1);

builder
  .createRecipe("minecraft:sentry_armor_trim_smithing_template_duplicate")
  .addIngredients("minecraft:sentry_armor_trim_smithing_template_duplicate", [{item: "minecraft:diamond", count: 7, current: 0}, {item: "minecraft:sentry_armor_trim_smithing_template", count: 1, current: 0}, {item: "minecraft:cobblestone", count: 1, current: 0}])
  .setResult("minecraft:sentry_armor_trim_smithing_template_duplicate", 2);

builder
  .createRecipe("minecraft:shaper_armor_trim_smithing_template_duplicate")
  .addIngredients("minecraft:shaper_armor_trim_smithing_template_duplicate", [{item: "minecraft:diamond", count: 7, current: 0}, {item: "minecraft:shaper_armor_trim_smithing_template", count: 1, current: 0}, {item: "minecraft:hardened_clay", count: 1, current: 0}])
  .setResult("minecraft:shaper_armor_trim_smithing_template_duplicate", 2);

builder
  .createRecipe("minecraft:shears")
  .addIngredients("minecraft:shears", [{item: "minecraft:iron_ingot", count: 2, current: 0}])
  .setResult("minecraft:shears", 1);

builder
  .createRecipe("minecraft:shield")
  .addIngredients("minecraft:shield", [{item: "minecraft:iron_ingot", count: 1, current: 0}, {item: "crimson_planks", count: 6, current: 0}, {item: "iron_ingot", count: 3, current: 0}, {item: "mangrove_planks", count: 6, current: 0}, {item: "warped_planks", count: 6, current: 0}])
  .setResult("minecraft:shield", 4);

builder
  .createRecipe("minecraft:shulker_box")
  .addIngredients("minecraft:shulker_box", [{item: "minecraft:shulker_shell", count: 2, current: 0}, {item: "minecraft:chest", count: 1, current: 0}])
  .setResult("minecraft:shulker_box", 1);

builder
  .createRecipe("minecraft:sign_acacia")
  .addIngredients("minecraft:sign_acacia", [{item: "minecraft:planks", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:sign_acacia", 3);

builder
  .createRecipe("minecraft:sign_birch")
  .addIngredients("minecraft:sign_birch", [{item: "minecraft:planks", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:sign_birch", 3);

builder
  .createRecipe("minecraft:sign_darkoak")
  .addIngredients("minecraft:sign_darkoak", [{item: "minecraft:planks", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:sign_darkoak", 3);

builder
  .createRecipe("minecraft:sign_jungle")
  .addIngredients("minecraft:sign_jungle", [{item: "minecraft:planks", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:sign_jungle", 3);

builder
  .createRecipe("minecraft:sign_oak")
  .addIngredients("minecraft:sign_oak", [{item: "minecraft:planks", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:sign_oak", 3);

builder
  .createRecipe("minecraft:sign_spruce")
  .addIngredients("minecraft:sign_spruce", [{item: "minecraft:planks", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:sign_spruce", 3);

builder
  .createRecipe("minecraft:silence_armor_trim_smithing_template_duplicate")
  .addIngredients("minecraft:silence_armor_trim_smithing_template_duplicate", [{item: "minecraft:diamond", count: 7, current: 0}, {item: "minecraft:silence_armor_trim_smithing_template", count: 1, current: 0}, {item: "minecraft:cobbled_deepslate", count: 1, current: 0}])
  .setResult("minecraft:silence_armor_trim_smithing_template_duplicate", 2);

builder
  .createRecipe("minecraft:slime")
  .addIngredients("minecraft:slime", [{item: "minecraft:slime_ball", count: 9, current: 0}, {item: "minecraft:slime", count: 1, current: 0}])
  .setResult("minecraft:slime", 10);

builder
  .createRecipe("minecraft:smithing_table")
  .addIngredients("minecraft:smithing_table", [{item: "minecraft:iron_ingot", count: 2, current: 0}, {item: "iron_ingot", count: 6, current: 0}, {item: "crimson_planks", count: 4, current: 0}, {item: "mangrove_planks", count: 4, current: 0}, {item: "warped_planks", count: 4, current: 0}])
  .setResult("minecraft:smithing_table", 4);

builder
  .createRecipe("minecraft:smoker")
  .addIngredients("minecraft:smoker", [{item: "minecraft:furnace", count: 9, current: 0}, {item: "crimson_stem", count: 4, current: 0}, {item: "furnace", count: 7, current: 0}, {item: "minecraft:log2", count: 4, current: 0}, {item: "mangrove_log", count: 4, current: 0}, {item: "mangrove_wood", count: 4, current: 0}, {item: "minecraft:stripped_acacia_log", count: 4, current: 0}, {item: "minecraft:stripped_birch_log", count: 4, current: 0}, {item: "stripped_crimson_stem", count: 4, current: 0}, {item: "minecraft:stripped_dark_oak_log", count: 4, current: 0}, {item: "minecraft:stripped_jungle_log", count: 4, current: 0}, {item: "minecraft:stripped_mangrove_log", count: 4, current: 0}, {item: "stripped_mangrove_wood", count: 4, current: 0}, {item: "minecraft:stripped_oak_log", count: 4, current: 0}, {item: "minecraft:stripped_spruce_log", count: 4, current: 0}, {item: "stripped_warped_stem", count: 4, current: 0}, {item: "warped_stem", count: 4, current: 0}])
  .setResult("minecraft:smoker", 16);

builder
  .createRecipe("minecraft:smooth_quartz_stairs")
  .addIngredients("minecraft:smooth_quartz_stairs", [{item: "minecraft:quartz_block", count: 6, current: 0}])
  .setResult("minecraft:smooth_quartz_stairs", 4);

builder
  .createRecipe("minecraft:smooth_red_sandstone")
  .addIngredients("minecraft:smooth_red_sandstone", [{item: "minecraft:red_sandstone", count: 10, current: 0}])
  .setResult("minecraft:smooth_red_sandstone", 8);

builder
  .createRecipe("minecraft:smooth_sandstone")
  .addIngredients("minecraft:smooth_sandstone", [{item: "minecraft:sandstone", count: 10, current: 0}])
  .setResult("minecraft:smooth_sandstone", 8);

builder
  .createRecipe("minecraft:snout_armor_trim_smithing_template_duplicate")
  .addIngredients("minecraft:snout_armor_trim_smithing_template_duplicate", [{item: "minecraft:diamond", count: 7, current: 0}, {item: "minecraft:snout_armor_trim_smithing_template", count: 1, current: 0}, {item: "minecraft:blackstone", count: 1, current: 0}])
  .setResult("minecraft:snout_armor_trim_smithing_template_duplicate", 2);

builder
  .createRecipe("minecraft:snow")
  .addIngredients("minecraft:snow", [{item: "minecraft:snowball", count: 4, current: 0}, {item: "minecraft:snow", count: 3, current: 0}])
  .setResult("minecraft:snow", 7);

builder
  .createRecipe("minecraft:soul_campfire")
  .addIngredients("minecraft:soul_campfire", [{item: "stick", count: 105, current: 0}, {item: "soul_soil", count: 17, current: 0}, {item: "crimson_stem", count: 6, current: 0}, {item: "soul_sand", count: 17, current: 0}, {item: "mangrove_log", count: 6, current: 0}, {item: "mangrove_wood", count: 6, current: 0}, {item: "log", count: 6, current: 0}, {item: "log2", count: 6, current: 0}, {item: "stripped_acacia_log", count: 6, current: 0}, {item: "stripped_birch_log", count: 6, current: 0}, {item: "stripped_dark_oak_log", count: 6, current: 0}, {item: "stripped_jungle_log", count: 6, current: 0}, {item: "stripped_oak_log", count: 6, current: 0}, {item: "stripped_spruce_log", count: 6, current: 0}, {item: "wood", count: 6, current: 0}, {item: "stripped_crimson_stem", count: 6, current: 0}, {item: "stripped_mangrove_log", count: 6, current: 0}, {item: "stripped_mangrove_wood", count: 6, current: 0}, {item: "stripped_warped_stem", count: 6, current: 0}, {item: "warped_stem", count: 6, current: 0}])
  .setResult("minecraft:soul_campfire", 35);

builder
  .createRecipe("minecraft:soul_lantern")
  .addIngredients("minecraft:soul_lantern", [{item: "minecraft:iron_nugget", count: 8, current: 0}, {item: "minecraft:soul_torch", count: 1, current: 0}])
  .setResult("minecraft:soul_lantern", 1);

builder
  .createRecipe("minecraft:soul_torch")
  .addIngredients("minecraft:soul_torch", [{item: "minecraft:stick", count: 3, current: 0}, {item: "minecraft:coal", count: 2, current: 0}, {item: "minecraft:soul_sand", count: 1, current: 0}, {item: "minecraft:soul_soil", count: 1, current: 0}])
  .setResult("minecraft:soul_torch", 12);

builder
  .createRecipe("minecraft:speckled_melon")
  .addIngredients("minecraft:speckled_melon", [{item: "minecraft:gold_nugget", count: 8, current: 0}, {item: "minecraft:melon", count: 1, current: 0}])
  .setResult("minecraft:speckled_melon", 1);

builder
  .createRecipe("minecraft:spire_armor_trim_smithing_template_duplicate")
  .addIngredients("minecraft:spire_armor_trim_smithing_template_duplicate", [{item: "minecraft:diamond", count: 7, current: 0}, {item: "minecraft:spire_armor_trim_smithing_template", count: 1, current: 0}, {item: "minecraft:purpur_block", count: 1, current: 0}])
  .setResult("minecraft:spire_armor_trim_smithing_template_duplicate", 2);

builder
  .createRecipe("minecraft:spruce_boat")
  .addIngredients("minecraft:spruce_boat", [{item: "minecraft:planks", count: 5, current: 0}])
  .setResult("minecraft:spruce_boat", 1);

builder
  .createRecipe("minecraft:spruce_chest_boat")
  .addIngredients("minecraft:spruce_chest_boat", [{item: "minecraft:chest", count: 1, current: 0}, {item: "minecraft:boat", count: 1, current: 0}])
  .setResult("minecraft:spruce_chest_boat", 1);

builder
  .createRecipe("minecraft:spruce_door")
  .addIngredients("minecraft:spruce_door", [{item: "minecraft:planks", count: 6, current: 0}])
  .setResult("minecraft:spruce_door", 3);

builder
  .createRecipe("minecraft:spruce_fence")
  .addIngredients("minecraft:spruce_fence", [{item: "minecraft:planks", count: 6, current: 0}, {item: "minecraft:stick", count: 6, current: 0}])
  .setResult("minecraft:spruce_fence", 4);

builder
  .createRecipe("minecraft:spruce_hanging_sign")
  .addIngredients("minecraft:spruce_hanging_sign", [{item: "minecraft:chain", count: 2, current: 0}, {item: "minecraft:stripped_spruce_log", count: 6, current: 0}])
  .setResult("minecraft:spruce_hanging_sign", 6);

builder
  .createRecipe("minecraft:spruce_planks")
  .addIngredients("minecraft:spruce_planks", [{item: "minecraft:log", count: 1, current: 0}, {item: "minecraft:stripped_spruce_log", count: 1, current: 0}, {item: "minecraft:wood", count: 2, current: 0}])
  .setResult("minecraft:spruce_planks", 16);

builder
  .createRecipe("minecraft:spruce_stairs")
  .addIngredients("minecraft:spruce_stairs", [{item: "minecraft:planks", count: 6, current: 0}])
  .setResult("minecraft:spruce_stairs", 4);

builder
  .createRecipe("minecraft:spruce_wood")
  .addIngredients("minecraft:spruce_wood", [{item: "minecraft:log", count: 4, current: 0}, {item: "minecraft:planks", count: 3, current: 0}, {item: "minecraft:stripped_spruce_log", count: 4, current: 0}])
  .setResult("minecraft:spruce_wood", 12);

builder
  .createRecipe("minecraft:spyglass")
  .addIngredients("minecraft:spyglass", [{item: "minecraft:amethyst_shard", count: 1, current: 0}, {item: "minecraft:copper_ingot", count: 2, current: 0}])
  .setResult("minecraft:spyglass", 1);

builder
  .createRecipe("minecraft:stick")
  .addIngredients("minecraft:stick", [{item: "minecraft:slime_ball", count: 1, current: 0}, {item: "minecraft:piston", count: 1, current: 0}, {item: "crimson_planks", count: 2, current: 0}, {item: "mangrove_planks", count: 2, current: 0}, {item: "warped_planks", count: 2, current: 0}])
  .setResult("minecraft:stick", 17);

builder
  .createRecipe("minecraft:stonebrick")
  .addIngredients("minecraft:stonebrick", [{item: "minecraft:stone", count: 4, current: 0}])
  .setResult("minecraft:stonebrick", 4);

builder
  .createRecipe("minecraft:stonecutter")
  .addIngredients("minecraft:stonecutter", [{item: "minecraft:iron_ingot", count: 1, current: 0}, {item: "minecraft:stone", count: 3, current: 0}])
  .setResult("minecraft:stonecutter", 308);

builder
  .createRecipe("stonecutter_stairs_from_polished_blackstone_bricks")
  .addIngredients("stonecutter_stairs_from_polished_blackstone_bricks", [])
  .setResult("stonecutter_stairs_from_polished_blackstone_bricks", 1);

builder
  .createRecipe("minecraft:stone_axe")
  .addIngredients("minecraft:stone_axe", [{item: "minecraft:stick", count: 6, current: 0}, {item: "minecraft:blackstone", count: 3, current: 0}, {item: "minecraft:cobbled_deepslate", count: 3, current: 0}])
  .setResult("minecraft:stone_axe", 3);

builder
  .createRecipe("minecraft:stone_brick_stairs")
  .addIngredients("minecraft:stone_brick_stairs", [{item: "minecraft:stonebrick", count: 6, current: 0}])
  .setResult("minecraft:stone_brick_stairs", 4);

builder
  .createRecipe("minecraft:stone_brick_wall")
  .addIngredients("minecraft:stone_brick_wall", [{item: "minecraft:stonebrick", count: 6, current: 0}])
  .setResult("minecraft:stone_brick_wall", 6);

builder
  .createRecipe("minecraft:stone_button")
  .addIngredients("minecraft:stone_button", [{item: "minecraft:stone", count: 1, current: 0}])
  .setResult("minecraft:stone_button", 1);

builder
  .createRecipe("minecraft:stone_hoe")
  .addIngredients("minecraft:stone_hoe", [{item: "minecraft:stick", count: 6, current: 0}, {item: "minecraft:blackstone", count: 2, current: 0}, {item: "minecraft:cobbled_deepslate", count: 2, current: 0}])
  .setResult("minecraft:stone_hoe", 3);

builder
  .createRecipe("minecraft:stone_pickaxe")
  .addIngredients("minecraft:stone_pickaxe", [{item: "minecraft:stick", count: 6, current: 0}, {item: "minecraft:blackstone", count: 3, current: 0}, {item: "minecraft:cobbled_deepslate", count: 3, current: 0}])
  .setResult("minecraft:stone_pickaxe", 3);

builder
  .createRecipe("minecraft:stone_pressure_plate")
  .addIngredients("minecraft:stone_pressure_plate", [{item: "minecraft:stone", count: 2, current: 0}])
  .setResult("minecraft:stone_pressure_plate", 1);

builder
  .createRecipe("minecraft:stone_shovel")
  .addIngredients("minecraft:stone_shovel", [{item: "minecraft:stick", count: 6, current: 0}, {item: "minecraft:blackstone", count: 1, current: 0}, {item: "minecraft:cobbled_deepslate", count: 1, current: 0}])
  .setResult("minecraft:stone_shovel", 3);

builder
  .createRecipe("minecraft:stone_stairs")
  .addIngredients("minecraft:stone_stairs", [{item: "minecraft:stone", count: 6, current: 0}])
  .setResult("minecraft:stone_stairs", 4);

builder
  .createRecipe("minecraft:stone_sword")
  .addIngredients("minecraft:stone_sword", [{item: "minecraft:stick", count: 3, current: 0}, {item: "minecraft:blackstone", count: 2, current: 0}, {item: "minecraft:cobbled_deepslate", count: 2, current: 0}])
  .setResult("minecraft:stone_sword", 3);

builder
  .createRecipe("minecraft:string_to_wool")
  .addIngredients("minecraft:string_to_wool", [{item: "minecraft:string", count: 4, current: 0}])
  .setResult("minecraft:string_to_wool", 1);

builder
  .createRecipe("minecraft:stripped_mangrove_wood")
  .addIngredients("minecraft:stripped_mangrove_wood", [])
  .setResult("minecraft:stripped_mangrove_wood", 3);

builder
  .createRecipe("minecraft:sugar")
  .addIngredients("minecraft:sugar", [{item: "minecraft:reeds", count: 1, current: 0}])
  .setResult("minecraft:sugar", 1);

builder
  .createRecipe("minecraft:suspicious_stew_from_allium")
  .addIngredients("minecraft:suspicious_stew_from_allium", [{item: "minecraft:brown_mushroom", count: 1, current: 0}, {item: "minecraft:red_mushroom", count: 1, current: 0}, {item: "minecraft:bowl", count: 1, current: 0}, {item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:suspicious_stew_from_allium", 1);

builder
  .createRecipe("minecraft:suspicious_stew_from_azure_bluet")
  .addIngredients("minecraft:suspicious_stew_from_azure_bluet", [{item: "minecraft:brown_mushroom", count: 1, current: 0}, {item: "minecraft:red_mushroom", count: 1, current: 0}, {item: "minecraft:bowl", count: 1, current: 0}, {item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:suspicious_stew_from_azure_bluet", 1);

builder
  .createRecipe("minecraft:suspicious_stew_from_blue_orchid")
  .addIngredients("minecraft:suspicious_stew_from_blue_orchid", [{item: "minecraft:brown_mushroom", count: 1, current: 0}, {item: "minecraft:red_mushroom", count: 1, current: 0}, {item: "minecraft:bowl", count: 1, current: 0}, {item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:suspicious_stew_from_blue_orchid", 1);

builder
  .createRecipe("minecraft:suspicious_stew_from_cornflower")
  .addIngredients("minecraft:suspicious_stew_from_cornflower", [{item: "minecraft:brown_mushroom", count: 1, current: 0}, {item: "minecraft:red_mushroom", count: 1, current: 0}, {item: "minecraft:bowl", count: 1, current: 0}, {item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:suspicious_stew_from_cornflower", 1);

builder
  .createRecipe("minecraft:suspicious_stew_from_dandelion")
  .addIngredients("minecraft:suspicious_stew_from_dandelion", [{item: "minecraft:brown_mushroom", count: 1, current: 0}, {item: "minecraft:red_mushroom", count: 1, current: 0}, {item: "minecraft:bowl", count: 1, current: 0}, {item: "minecraft:yellow_flower", count: 1, current: 0}])
  .setResult("minecraft:suspicious_stew_from_dandelion", 1);

builder
  .createRecipe("minecraft:suspicious_stew_from_lily_of_the_valley")
  .addIngredients("minecraft:suspicious_stew_from_lily_of_the_valley", [{item: "minecraft:brown_mushroom", count: 1, current: 0}, {item: "minecraft:red_mushroom", count: 1, current: 0}, {item: "minecraft:bowl", count: 1, current: 0}, {item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:suspicious_stew_from_lily_of_the_valley", 1);

builder
  .createRecipe("minecraft:suspicious_stew_from_oxeye_daisy")
  .addIngredients("minecraft:suspicious_stew_from_oxeye_daisy", [{item: "minecraft:brown_mushroom", count: 1, current: 0}, {item: "minecraft:red_mushroom", count: 1, current: 0}, {item: "minecraft:bowl", count: 1, current: 0}, {item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:suspicious_stew_from_oxeye_daisy", 1);

builder
  .createRecipe("minecraft:suspicious_stew_from_poppy")
  .addIngredients("minecraft:suspicious_stew_from_poppy", [{item: "minecraft:brown_mushroom", count: 1, current: 0}, {item: "minecraft:red_mushroom", count: 1, current: 0}, {item: "minecraft:bowl", count: 1, current: 0}, {item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:suspicious_stew_from_poppy", 1);

builder
  .createRecipe("minecraft:suspicious_stew_from_torchflower")
  .addIngredients("minecraft:suspicious_stew_from_torchflower", [{item: "minecraft:brown_mushroom", count: 1, current: 0}, {item: "minecraft:red_mushroom", count: 1, current: 0}, {item: "minecraft:bowl", count: 1, current: 0}, {item: "minecraft:torchflower", count: 1, current: 0}])
  .setResult("minecraft:suspicious_stew_from_torchflower", 1);

builder
  .createRecipe("minecraft:suspicious_stew_from_tulip_orange")
  .addIngredients("minecraft:suspicious_stew_from_tulip_orange", [{item: "minecraft:brown_mushroom", count: 1, current: 0}, {item: "minecraft:red_mushroom", count: 1, current: 0}, {item: "minecraft:bowl", count: 1, current: 0}, {item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:suspicious_stew_from_tulip_orange", 1);

builder
  .createRecipe("minecraft:suspicious_stew_from_tulip_pink")
  .addIngredients("minecraft:suspicious_stew_from_tulip_pink", [{item: "minecraft:brown_mushroom", count: 1, current: 0}, {item: "minecraft:red_mushroom", count: 1, current: 0}, {item: "minecraft:bowl", count: 1, current: 0}, {item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:suspicious_stew_from_tulip_pink", 1);

builder
  .createRecipe("minecraft:suspicious_stew_from_tulip_red")
  .addIngredients("minecraft:suspicious_stew_from_tulip_red", [{item: "minecraft:brown_mushroom", count: 1, current: 0}, {item: "minecraft:red_mushroom", count: 1, current: 0}, {item: "minecraft:bowl", count: 1, current: 0}, {item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:suspicious_stew_from_tulip_red", 1);

builder
  .createRecipe("minecraft:suspicious_stew_from_tulip_white")
  .addIngredients("minecraft:suspicious_stew_from_tulip_white", [{item: "minecraft:brown_mushroom", count: 1, current: 0}, {item: "minecraft:red_mushroom", count: 1, current: 0}, {item: "minecraft:bowl", count: 1, current: 0}, {item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:suspicious_stew_from_tulip_white", 1);

builder
  .createRecipe("minecraft:suspicious_stew_from_wither_rose")
  .addIngredients("minecraft:suspicious_stew_from_wither_rose", [{item: "minecraft:brown_mushroom", count: 1, current: 0}, {item: "minecraft:red_mushroom", count: 1, current: 0}, {item: "minecraft:bowl", count: 1, current: 0}, {item: "minecraft:wither_rose", count: 1, current: 0}])
  .setResult("minecraft:suspicious_stew_from_wither_rose", 1);

builder
  .createRecipe("minecraft:target")
  .addIngredients("minecraft:target", [{item: "minecraft:redstone", count: 4, current: 0}, {item: "minecraft:hay_block", count: 1, current: 0}])
  .setResult("minecraft:target", 1);

builder
  .createRecipe("minecraft:tide_armor_trim_smithing_template_duplicate")
  .addIngredients("minecraft:tide_armor_trim_smithing_template_duplicate", [{item: "minecraft:diamond", count: 7, current: 0}, {item: "minecraft:tide_armor_trim_smithing_template", count: 1, current: 0}, {item: "minecraft:prismarine", count: 1, current: 0}])
  .setResult("minecraft:tide_armor_trim_smithing_template_duplicate", 2);

builder
  .createRecipe("minecraft:tinted_glass")
  .addIngredients("minecraft:tinted_glass", [{item: "minecraft:amethyst_shard", count: 4, current: 0}, {item: "minecraft:glass", count: 1, current: 0}])
  .setResult("minecraft:tinted_glass", 2);

builder
  .createRecipe("minecraft:tnt")
  .addIngredients("minecraft:tnt", [{item: "minecraft:gunpowder", count: 5, current: 0}, {item: "minecraft:sand", count: 4, current: 0}, {item: "minecraft:tnt", count: 1, current: 0}, {item: "minecraft:minecart", count: 1, current: 0}])
  .setResult("minecraft:tnt", 2);

builder
  .createRecipe("minecraft:torch")
  .addIngredients("minecraft:torch", [{item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:torch", 4);

builder
  .createRecipe("minecraft:Torch_charcoal_recipeId")
  .addIngredients("minecraft:Torch_charcoal_recipeId", [{item: "minecraft:charcoal", count: 1, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:Torch_charcoal_recipeId", 4);

builder
  .createRecipe("minecraft:Torch_recipeId")
  .addIngredients("minecraft:Torch_recipeId", [{item: "minecraft:coal", count: 1, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:Torch_recipeId", 4);

builder
  .createRecipe("minecraft:trapped_chest")
  .addIngredients("minecraft:trapped_chest", [{item: "minecraft:chest", count: 1, current: 0}, {item: "minecraft:tripwire_hook", count: 1, current: 0}])
  .setResult("minecraft:trapped_chest", 1);

builder
  .createRecipe("minecraft:tripwire_hook")
  .addIngredients("minecraft:tripwire_hook", [{item: "iron_ingot", count: 4, current: 0}, {item: "stick", count: 4, current: 0}, {item: "crimson_planks", count: 1, current: 0}, {item: "mangrove_planks", count: 1, current: 0}, {item: "warped_planks", count: 1, current: 0}])
  .setResult("minecraft:tripwire_hook", 5);

builder
  .createRecipe("minecraft:turtle_helmet")
  .addIngredients("minecraft:turtle_helmet", [{item: "minecraft:turtle_shell_piece", count: 5, current: 0}])
  .setResult("minecraft:turtle_helmet", 1);

builder
  .createRecipe("minecraft:vex_armor_trim_smithing_template_duplicate")
  .addIngredients("minecraft:vex_armor_trim_smithing_template_duplicate", [{item: "minecraft:diamond", count: 7, current: 0}, {item: "minecraft:vex_armor_trim_smithing_template", count: 1, current: 0}, {item: "minecraft:cobblestone", count: 1, current: 0}])
  .setResult("minecraft:vex_armor_trim_smithing_template_duplicate", 2);

builder
  .createRecipe("minecraft:ward_armor_trim_smithing_template_duplicate")
  .addIngredients("minecraft:ward_armor_trim_smithing_template_duplicate", [{item: "minecraft:diamond", count: 7, current: 0}, {item: "minecraft:ward_armor_trim_smithing_template", count: 1, current: 0}, {item: "minecraft:cobbled_deepslate", count: 1, current: 0}])
  .setResult("minecraft:ward_armor_trim_smithing_template_duplicate", 2);

builder
  .createRecipe("minecraft:warped_button")
  .addIngredients("minecraft:warped_button", [{item: "minecraft:warped_planks", count: 1, current: 0}])
  .setResult("minecraft:warped_button", 1);

builder
  .createRecipe("minecraft:warped_door")
  .addIngredients("minecraft:warped_door", [{item: "minecraft:warped_planks", count: 6, current: 0}])
  .setResult("minecraft:warped_door", 3);

builder
  .createRecipe("minecraft:warped_fence")
  .addIngredients("minecraft:warped_fence", [{item: "minecraft:warped_planks", count: 6, current: 0}, {item: "minecraft:stick", count: 6, current: 0}])
  .setResult("minecraft:warped_fence", 4);

builder
  .createRecipe("minecraft:warped_fungus_on_a_stick")
  .addIngredients("minecraft:warped_fungus_on_a_stick", [{item: "minecraft:fishing_rod", count: 1, current: 0}, {item: "minecraft:warped_fungus", count: 1, current: 0}])
  .setResult("minecraft:warped_fungus_on_a_stick", 1);

builder
  .createRecipe("minecraft:warped_hanging_sign")
  .addIngredients("minecraft:warped_hanging_sign", [{item: "minecraft:chain", count: 2, current: 0}, {item: "minecraft:stripped_warped_stem", count: 6, current: 0}])
  .setResult("minecraft:warped_hanging_sign", 6);

builder
  .createRecipe("minecraft:warped_hyphae")
  .addIngredients("minecraft:warped_hyphae", [{item: "minecraft:warped_stem", count: 4, current: 0}])
  .setResult("minecraft:warped_hyphae", 3);

builder
  .createRecipe("minecraft:stripped_warped_hyphae")
  .addIngredients("minecraft:stripped_warped_hyphae", [{item: "minecraft:stripped_warped_stem", count: 4, current: 0}])
  .setResult("minecraft:stripped_warped_hyphae", 3);

builder
  .createRecipe("minecraft:warped_planks")
  .addIngredients("minecraft:warped_planks", [{item: "minecraft:warped_stem", count: 1, current: 0}, {item: "minecraft:stripped_warped_stem", count: 1, current: 0}, {item: "minecraft:stripped_warped_hyphae", count: 1, current: 0}, {item: "minecraft:warped_hyphae", count: 1, current: 0}])
  .setResult("minecraft:warped_planks", 16);

builder
  .createRecipe("minecraft:warped_pressure_plate")
  .addIngredients("minecraft:warped_pressure_plate", [{item: "minecraft:warped_planks", count: 2, current: 0}])
  .setResult("minecraft:warped_pressure_plate", 1);

builder
  .createRecipe("minecraft:warped_sign")
  .addIngredients("minecraft:warped_sign", [{item: "minecraft:warped_planks", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:warped_sign", 3);

builder
  .createRecipe("minecraft:warped_slab")
  .addIngredients("minecraft:warped_slab", [{item: "minecraft:warped_planks", count: 3, current: 0}])
  .setResult("minecraft:warped_slab", 6);

builder
  .createRecipe("minecraft:warped_stairs")
  .addIngredients("minecraft:warped_stairs", [{item: "minecraft:warped_planks", count: 6, current: 0}])
  .setResult("minecraft:warped_stairs", 4);

builder
  .createRecipe("minecraft:warped_trapdoor")
  .addIngredients("minecraft:warped_trapdoor", [{item: "minecraft:warped_planks", count: 6, current: 0}])
  .setResult("minecraft:warped_trapdoor", 2);

builder
  .createRecipe("minecraft:waxing_copper_block")
  .addIngredients("minecraft:waxing_copper_block", [{item: "minecraft:copper_block", count: 1, current: 0}, {item: "minecraft:honeycomb", count: 1, current: 0}])
  .setResult("minecraft:waxing_copper_block", 1);

builder
  .createRecipe("minecraft:waxing_cut_copper")
  .addIngredients("minecraft:waxing_cut_copper", [{item: "minecraft:cut_copper", count: 1, current: 0}, {item: "minecraft:honeycomb", count: 3, current: 0}, {item: "minecraft:cut_copper_slab", count: 1, current: 0}, {item: "minecraft:cut_copper_stairs", count: 1, current: 0}])
  .setResult("minecraft:waxing_cut_copper", 3);

builder
  .createRecipe("minecraft:waxing_exposed_copper")
  .addIngredients("minecraft:waxing_exposed_copper", [{item: "minecraft:exposed_copper", count: 1, current: 0}, {item: "minecraft:honeycomb", count: 1, current: 0}])
  .setResult("minecraft:waxing_exposed_copper", 1);

builder
  .createRecipe("minecraft:waxing_exposed_cut_copper")
  .addIngredients("minecraft:waxing_exposed_cut_copper", [{item: "minecraft:exposed_cut_copper", count: 1, current: 0}, {item: "minecraft:honeycomb", count: 3, current: 0}, {item: "minecraft:exposed_cut_copper_slab", count: 1, current: 0}, {item: "minecraft:exposed_cut_copper_stairs", count: 1, current: 0}])
  .setResult("minecraft:waxing_exposed_cut_copper", 3);

builder
  .createRecipe("minecraft:waxing_oxidized_copper")
  .addIngredients("minecraft:waxing_oxidized_copper", [{item: "minecraft:oxidized_copper", count: 1, current: 0}, {item: "minecraft:honeycomb", count: 1, current: 0}])
  .setResult("minecraft:waxing_oxidized_copper", 1);

builder
  .createRecipe("minecraft:waxing_oxidized_cut_copper")
  .addIngredients("minecraft:waxing_oxidized_cut_copper", [{item: "minecraft:oxidized_cut_copper", count: 1, current: 0}, {item: "minecraft:honeycomb", count: 3, current: 0}, {item: "minecraft:oxidized_cut_copper_slab", count: 1, current: 0}, {item: "minecraft:oxidized_cut_copper_stairs", count: 1, current: 0}])
  .setResult("minecraft:waxing_oxidized_cut_copper", 3);

builder
  .createRecipe("minecraft:waxing_weathered_copper")
  .addIngredients("minecraft:waxing_weathered_copper", [{item: "minecraft:weathered_copper", count: 1, current: 0}, {item: "minecraft:honeycomb", count: 1, current: 0}])
  .setResult("minecraft:waxing_weathered_copper", 1);

builder
  .createRecipe("minecraft:waxing_weathered_cut_copper")
  .addIngredients("minecraft:waxing_weathered_cut_copper", [{item: "minecraft:weathered_cut_copper", count: 1, current: 0}, {item: "minecraft:honeycomb", count: 3, current: 0}, {item: "minecraft:weathered_cut_copper_slab", count: 1, current: 0}, {item: "minecraft:weathered_cut_copper_stairs", count: 1, current: 0}])
  .setResult("minecraft:waxing_weathered_cut_copper", 3);

builder
  .createRecipe("minecraft:wayfinder_armor_trim_smithing_template_duplicate")
  .addIngredients("minecraft:wayfinder_armor_trim_smithing_template_duplicate", [{item: "minecraft:diamond", count: 7, current: 0}, {item: "minecraft:wayfinder_armor_trim_smithing_template", count: 1, current: 0}, {item: "minecraft:hardened_clay", count: 1, current: 0}])
  .setResult("minecraft:wayfinder_armor_trim_smithing_template_duplicate", 2);

builder
  .createRecipe("minecraft:wheat")
  .addIngredients("minecraft:wheat", [{item: "minecraft:hay_block", count: 1, current: 0}])
  .setResult("minecraft:wheat", 9);

builder
  .createRecipe("minecraft:white_banner")
  .addIngredients("minecraft:white_banner", [{item: "minecraft:wool", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:white_banner", 1);

builder
  .createRecipe("minecraft:white_candle")
  .addIngredients("minecraft:white_candle", [{item: "minecraft:candle", count: 3, current: 0}, {item: "minecraft:dye", count: 3, current: 0}])
  .setResult("minecraft:white_candle", 3);

builder
  .createRecipe("minecraft:white_carpet")
  .addIngredients("minecraft:white_carpet", [{item: "minecraft:wool", count: 2, current: 0}])
  .setResult("minecraft:white_carpet", 3);

builder
  .createRecipe("minecraft:white_concrete_powder")
  .addIngredients("minecraft:white_concrete_powder", [{item: "minecraft:dye", count: 2, current: 0}, {item: "minecraft:sand", count: 8, current: 0}, {item: "minecraft:gravel", count: 8, current: 0}])
  .setResult("minecraft:white_concrete_powder", 16);

builder
  .createRecipe("minecraft:white_dye_from_bone_meal")
  .addIngredients("minecraft:white_dye_from_bone_meal", [{item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:white_dye_from_bone_meal", 1);

builder
  .createRecipe("minecraft:white_dye_from_lily_of_the_valley")
  .addIngredients("minecraft:white_dye_from_lily_of_the_valley", [{item: "minecraft:red_flower", count: 1, current: 0}])
  .setResult("minecraft:white_dye_from_lily_of_the_valley", 1);

builder
  .createRecipe("minecraft:white_stained_glass")
  .addIngredients("minecraft:white_stained_glass", [{item: "minecraft:glass", count: 16, current: 0}, {item: "minecraft:dye", count: 3, current: 0}, {item: "minecraft:white_stained_glass", count: 6, current: 0}, {item: "minecraft:glass_pane", count: 8, current: 0}])
  .setResult("minecraft:white_stained_glass", 40);

builder
  .createRecipe("minecraft:white_stained_hardened_clay")
  .addIngredients("minecraft:white_stained_hardened_clay", [{item: "minecraft:hardened_clay", count: 16, current: 0}, {item: "minecraft:dye", count: 2, current: 0}])
  .setResult("minecraft:white_stained_hardened_clay", 16);

builder
  .createRecipe("minecraft:wild_armor_trim_smithing_template_duplicate")
  .addIngredients("minecraft:wild_armor_trim_smithing_template_duplicate", [{item: "minecraft:diamond", count: 7, current: 0}, {item: "minecraft:wild_armor_trim_smithing_template", count: 1, current: 0}, {item: "minecraft:mossy_cobblestone", count: 1, current: 0}])
  .setResult("minecraft:wild_armor_trim_smithing_template_duplicate", 2);

builder
  .createRecipe("minecraft:wooden_axe")
  .addIngredients("minecraft:wooden_axe", [{item: "minecraft:stick", count: 2, current: 0}, {item: "crimson_planks", count: 3, current: 0}, {item: "stick", count: 6, current: 0}, {item: "mangrove_planks", count: 3, current: 0}, {item: "warped_planks", count: 3, current: 0}])
  .setResult("minecraft:wooden_axe", 4);

builder
  .createRecipe("minecraft:wooden_door")
  .addIngredients("minecraft:wooden_door", [{item: "minecraft:planks", count: 6, current: 0}])
  .setResult("minecraft:wooden_door", 3);

builder
  .createRecipe("minecraft:wooden_hoe")
  .addIngredients("minecraft:wooden_hoe", [{item: "minecraft:stick", count: 2, current: 0}, {item: "crimson_planks", count: 2, current: 0}, {item: "stick", count: 6, current: 0}, {item: "mangrove_planks", count: 2, current: 0}, {item: "warped_planks", count: 2, current: 0}])
  .setResult("minecraft:wooden_hoe", 4);

builder
  .createRecipe("minecraft:wooden_pickaxe")
  .addIngredients("minecraft:wooden_pickaxe", [{item: "minecraft:stick", count: 2, current: 0}, {item: "crimson_planks", count: 3, current: 0}, {item: "stick", count: 6, current: 0}, {item: "mangrove_planks", count: 3, current: 0}, {item: "warped_planks", count: 3, current: 0}])
  .setResult("minecraft:wooden_pickaxe", 4);

builder
  .createRecipe("minecraft:wooden_shovel")
  .addIngredients("minecraft:wooden_shovel", [{item: "minecraft:stick", count: 2, current: 0}, {item: "crimson_planks", count: 1, current: 0}, {item: "stick", count: 6, current: 0}, {item: "mangrove_planks", count: 1, current: 0}, {item: "warped_planks", count: 1, current: 0}])
  .setResult("minecraft:wooden_shovel", 4);

builder
  .createRecipe("minecraft:wooden_sword")
  .addIngredients("minecraft:wooden_sword", [{item: "minecraft:stick", count: 1, current: 0}, {item: "crimson_planks", count: 2, current: 0}, {item: "stick", count: 3, current: 0}, {item: "mangrove_planks", count: 2, current: 0}, {item: "warped_planks", count: 2, current: 0}])
  .setResult("minecraft:wooden_sword", 4);

builder
  .createRecipe("minecraft:writable_book")
  .addIngredients("minecraft:writable_book", [{item: "minecraft:book", count: 1, current: 0}, {item: "minecraft:dye", count: 1, current: 0}, {item: "minecraft:feather", count: 1, current: 0}])
  .setResult("minecraft:writable_book", 1);

builder
  .createRecipe("minecraft:yellow_banner")
  .addIngredients("minecraft:yellow_banner", [{item: "minecraft:wool", count: 6, current: 0}, {item: "minecraft:stick", count: 1, current: 0}])
  .setResult("minecraft:yellow_banner", 1);

builder
  .createRecipe("minecraft:yellow_candle")
  .addIngredients("minecraft:yellow_candle", [{item: "minecraft:candle", count: 1, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:yellow_candle", 1);

builder
  .createRecipe("minecraft:yellow_carpet")
  .addIngredients("minecraft:yellow_carpet", [{item: "minecraft:wool", count: 2, current: 0}, {item: "minecraft:carpet", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:yellow_carpet", 11);

builder
  .createRecipe("minecraft:yellow_concrete_powder")
  .addIngredients("minecraft:yellow_concrete_powder", [{item: "minecraft:dye", count: 1, current: 0}, {item: "minecraft:sand", count: 4, current: 0}, {item: "minecraft:gravel", count: 4, current: 0}])
  .setResult("minecraft:yellow_concrete_powder", 8);

builder
  .createRecipe("minecraft:yellow_dye_from_dandelion")
  .addIngredients("minecraft:yellow_dye_from_dandelion", [{item: "minecraft:yellow_flower", count: 1, current: 0}])
  .setResult("minecraft:yellow_dye_from_dandelion", 1);

builder
  .createRecipe("minecraft:yellow_dye_from_sunflower")
  .addIngredients("minecraft:yellow_dye_from_sunflower", [{item: "minecraft:double_plant", count: 1, current: 0}])
  .setResult("minecraft:yellow_dye_from_sunflower", 2);

builder
  .createRecipe("minecraft:yellow_stained_glass")
  .addIngredients("minecraft:yellow_stained_glass", [{item: "minecraft:glass", count: 8, current: 0}, {item: "minecraft:dye", count: 2, current: 0}, {item: "minecraft:yellow_stained_glass", count: 6, current: 0}, {item: "minecraft:glass_pane", count: 8, current: 0}])
  .setResult("minecraft:yellow_stained_glass", 32);

builder
  .createRecipe("minecraft:yellow_stained_hardened_clay")
  .addIngredients("minecraft:yellow_stained_hardened_clay", [{item: "minecraft:hardened_clay", count: 8, current: 0}, {item: "minecraft:dye", count: 1, current: 0}])
  .setResult("minecraft:yellow_stained_hardened_clay", 8);


// Your existing code for processing recipes
system.afterEvents.scriptEventRecieve.subscribe(ev=>{
  const {} = ev
})
// Get the overworld dimension and store it in a constant variable
const overworld = world.getDimension('minecraft:overworld');

for (const query of overworld.getEntities({ type: 'create:physics' })) {
  // Use the query to get the correct block position
  const blockAtQuery = query.dimension.getBlock(query.location || query.getBlockFromViewDirection(raycast));

  // Check if the block at the query position is a mechanical crafter
  if (blockAtQuery.typeId === 'create:mechanical_crafter') {
    // Get all entities at the block location
    const targetEntities = overworld.getEntitiesAtBlockLocation(blockAtQuery);

    // Loop through each entity and collect the items found
    const collectedIngredients = [];
    for (const entity of targetEntities) {
      const inventory = entity.getComponent('inventory').container;
      for (let slotIndex = 0; slotIndex < inventory.size; slotIndex++) {
        const slot = inventory.getSlot(slotIndex);
        const item = slot.getItem();
        if (slot && item) {
          // Push the ItemStack to the array
          collectedIngredients.push(item);
        }
      }
    }

    // Convert collectedIngredients to an array of typeId strings
    const collected= collectedIngredients.map(item => item.typeId);

    // Find recipes that match the collected ingredients
    const matchingRecipes = builder.findMatching(collected);

    // Process the matching recipes
    for (const recipeName of matchingRecipes) {
      const recipe = builder.getRecipe(recipeName);
      if (recipe) {
        /** 
         * @type {{ingredients: { item: string; count: number; current: number }[]; extraItems: Map<string, number>;}} 
         **/
        // Create a deep copy of the recipe
        const recipeCopy = JSON.parse(JSON.stringify(recipe));

for (const item of collectedIngredients){
  const {amount,typeId} = item
  recipeCopy.ingredients[typeId].current += amount
}
        // Check if all ingredient counts are met
        const canCraft = recipeCopy.ingredients.every(ingredient => ingredient.current === ingredient.count);

        if (canCraft) {
          // Function to produce items based on the recipe
          function produce() {
            for (const typeId of collected) {
              // Find the matching ingredient in the recipe
              const matchingIngredient = recipeCopy.ingredients.find(ingredient => ingredient.item === typeId);

              if (matchingIngredient) {
                // Update the current count
                matchingIngredient.current -= 1;
              }
            }

            // Check if it's crafting2
            const isCrafting2 = Object.keys(recipeCopy.ingredients).indexOf(typeId) <= 16;

            // Resolve the permutation based on the crafting type
            const perm = BlockPermutation.resolve(blockAtQuery.typeId).withProperty(isCrafting2 ? 'craft2' : 'craft', typeId);

            // Set the permutation
            blockAtQuery.setPermutation(perm);
          }

          produce();
        }
      }
    }
  }
}
